import React, { useState } from "react";
import { locations } from "../../data/locations";

const BookingForm = ({ compact = false, defaultIncludeHotel = false }) => {
  const BUSINESS_WHATSAPP =
    import.meta.env.VITE_BUSINESS_WHATSAPP || "5493814571012";
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  function getInitialForm() {
    return {
      fullName: "",
      email: "",
      phone: "",
      vehicleCategory: "Cualquiera",
      pickupLocation: locations[0],
      returnLocation: locations[0],
      pickupDate: "",
      returnDate: "",
      driverAge: "",
      notes: "",
      includeHotel: defaultIncludeHotel, // combo auto + hotel
    };
  }

  const [form, setForm] = useState(getInitialForm);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function buildWhatsAppText(data) {
    return `
Hola, soy ${data.fullName}.

Quiero una cotización en SINERGIA RENT A CAR:

- Retiro: ${data.pickupLocation} (${data.pickupDate || "-"})
- Devolución: ${data.returnLocation} (${data.returnDate || "-"})
- Edad del conductor: ${data.driverAge || "-"}
- Categoría de vehículo: ${data.vehicleCategory}
- Teléfono de contacto: ${data.phone}
- Email: ${data.email}
- Combo Auto + Hotel Castillo de Piedra: ${
      data.includeHotel ? "SÍ, incluir alojamiento" : "No, solo vehículo"
    }
- Comentarios: ${data.notes || "-"}

¡Gracias!
`.trim();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // 1) Guardar / notificar en backend (si está disponible)
      try {
        await fetch(`${API_URL}/api/reservations`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch (err) {
        console.warn(
          "No se pudo contactar al backend, pero seguimos con WhatsApp:",
          err
        );
      }

      // 2) Abrir WhatsApp del negocio con el detalle
      const text = buildWhatsAppText(form);
      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        text
      )}`;

      window.open(waUrl, "_blank");

      setMessage(
        "Te abrimos WhatsApp con tu solicitud de cotización. Un asesor de Sinergia te va a responder a la brevedad."
      );
      setForm(getInitialForm());
    } catch (err) {
      console.error(err);
      setMessage("Hubo un error al enviar la solicitud. Probá nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`card booking-card ${compact ? "booking-card-compact" : ""}`}
    >
      <h3>Reserva rápida</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre y apellido</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Ej: Juan Pérez"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@correo.com"
            />
          </div>
          <div className="form-group">
            <label>Teléfono / WhatsApp</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Ej: +54 9 381 ..."
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Categoría de vehículo</label>
            <select
              name="vehicleCategory"
              value={form.vehicleCategory}
              onChange={handleChange}
            >
              <option value="Cualquiera">Cualquiera</option>
              <option value="Económico">Económico</option>
              <option value="Compacto">Compacto</option>
              <option value="SUV">SUV</option>
              <option value="Pick-Up">Pick-Up</option>
              <option value="Van">Van</option>
            </select>
          </div>
          <div className="form-group">
            <label>Edad del conductor</label>
            <input
              type="number"
              min="18"
              name="driverAge"
              value={form.driverAge}
              onChange={handleChange}
              placeholder="Ej: 30"
              required
            />
          </div>
        </div>

        {/* Retiro y Devolución en columna para evitar que se salga de la card */}
<div className="form-row form-row-locations">
  <div className="form-group">
    <label>Retiro</label>
    <select
      name="pickupLocation"
      value={form.pickupLocation}
      onChange={handleChange}
    >
      {locations.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Devolución</label>
    <select
      name="returnLocation"
      value={form.returnLocation}
      onChange={handleChange}
    >
      {locations.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  </div>
</div>


        <div className="form-row">
          <div className="form-group">
            <label>Fecha y hora de retiro</label>
            <input
              type="datetime-local"
              name="pickupDate"
              value={form.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha y hora de devolución</label>
            <input
              type="datetime-local"
              name="returnDate"
              value={form.returnDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Checkbox combo Auto + Hotel */}
        <div className="form-row">
          <div className="form-group form-group-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="includeHotel"
                checked={form.includeHotel}
                onChange={handleChange}
              />
              <span>
                Quiero incluir alojamiento en{" "}
                <strong>Castillo de Piedra</strong>
              </span>
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Comentarios adicionales</label>
            <textarea
              name="notes"
              rows="3"
              value={form.notes}
              onChange={handleChange}
              placeholder="Ej: Sillita para bebé, viaje en familia, etc."
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Solicitar cotización por WhatsApp"}
        </button>

        {message && <p className="form-success">{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
