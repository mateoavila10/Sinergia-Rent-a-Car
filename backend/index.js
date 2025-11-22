import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { pool } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ---------- UTILIDAD: enviar WhatsApp interno ----------

async function sendWhatsAppNotification(reservationId, reservation) {
  const waToken = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const businessPhone = process.env.WHATSAPP_BUSINESS_PHONE;

  if (!waToken || !phoneNumberId || !businessPhone) {
    console.warn("WhatsApp no configurado, solo se guarda la reserva.");
    return;
  }

  const text = `
Nueva solicitud de reserva SINERGIA:

ID reserva: ${reservationId}

Nombre: ${reservation.fullName}
Email: ${reservation.email}
Teléfono: ${reservation.phone}

Retiro: ${reservation.pickupLocation} (${reservation.pickupDate || "-"})
Devolución: ${reservation.returnLocation} (${reservation.returnDate || "-"})
Edad del conductor: ${reservation.driverAge || "-"}

Categoría de vehículo: ${reservation.vehicleCategory}
Combo Auto + Hotel Castillo de Piedra: ${
    reservation.includeHotel ? "SÍ" : "NO"
  }
Comentarios: ${reservation.notes || "-"}

-- Mensaje automático desde la web --
`.trim();

  // ⚠️ Cambiá vXX.X por la versión que te indica Meta (ej: v18.0)
  const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;

  await axios.post(
    url,
    {
      messaging_product: "whatsapp",
      to: businessPhone,
      type: "text",
      text: { body: text },
    },
    {
      headers: {
        Authorization: `Bearer ${waToken}`,
        "Content-Type": "application/json",
      },
    }
  );
}

// ---------- RUTAS ----------

app.get("/", (req, res) => {
  res.json({ ok: true, message: "SINERGIA API funcionando" });
});

// Crear reserva desde la web
app.post("/api/reservations", async (req, res) => {
  const reservation = req.body;

  const {
    fullName,
    email,
    phone,
    vehicleCategory,
    pickupLocation,
    returnLocation,
    pickupDate,
    returnDate,
    driverAge,
    includeHotel,
    notes,
  } = reservation;

  try {
    // Guardar en MySQL
    const [result] = await pool.query(
      `INSERT INTO reservations 
      (full_name, email, phone, vehicle_category, pickup_location, return_location,
       pickup_datetime, return_datetime, driver_age, include_hotel, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fullName,
        email,
        phone,
        vehicleCategory,
        pickupLocation,
        returnLocation,
        pickupDate ? new Date(pickupDate) : null,
        returnDate ? new Date(returnDate) : null,
        driverAge || null,
        includeHotel ? 1 : 0,
        notes || null,
      ]
    );

    const reservationId = result.insertId;

    // Notificar por WhatsApp (no rompe si falla)
    try {
      await sendWhatsAppNotification(reservationId, reservation);
    } catch (waError) {
      console.error("Error enviando WhatsApp:", waError?.response?.data || waError);
    }

    return res.json({ ok: true, id: reservationId });
  } catch (error) {
    console.error("Error guardando reserva:", error);
    return res
      .status(500)
      .json({ ok: false, error: "Error guardando reserva en la base de datos" });
  }
});

// Listar reservas para el admin
app.get("/api/reservations", async (req, res) => {
  const { status } = req.query;

  try {
    let sql = "SELECT * FROM reservations";
    const params = [];

    if (status) {
      sql += " WHERE status = ?";
      params.push(status);
    }

    sql += " ORDER BY created_at DESC";

    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (error) {
    console.error("Error obteniendo reservas:", error);
    res
      .status(500)
      .json({ ok: false, error: "Error obteniendo reservas desde la base" });
  }
});

// Actualizar estado de una reserva (admin)
app.patch("/api/reservations/:id/status", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowed = ["nuevo", "contactado", "cotizado", "confirmado", "cancelado"];

  if (!allowed.includes(status)) {
    return res.status(400).json({ ok: false, error: "Estado inválido" });
  }

  try {
    const [result] = await pool.query(
      "UPDATE reservations SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ ok: false, error: "Reserva no encontrada" });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error("Error actualizando estado:", error);
    res
      .status(500)
      .json({ ok: false, error: "Error actualizando estado de la reserva" });
  }
});

app.listen(PORT, () => {
  console.log(`SINERGIA API escuchando en puerto ${PORT}`);
});
