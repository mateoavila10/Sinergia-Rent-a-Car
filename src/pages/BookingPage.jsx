import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/booking/BookingForm";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const includeHotelByDefault = searchParams.get("combo") === "hotel";

  return (
    <div className="page">
      <header className="page-header">
        <h1>Reservar vehículo</h1>
        <p>
          Completá los datos y recibí la confirmación con todos los detalles de
          tu reserva.
        </p>
      </header>
      <div className="page-two-columns">
        <BookingForm defaultIncludeHotel={includeHotelByDefault} />
        <div className="page-column">
          <div className="card booking-info-card">
            <h3>Requisitos para alquilar</h3>
            <ul className="booking-req-list">
              <li>
                <span className="booking-req-icon">🪪</span>
                <span>Documento de identidad vigente (DNI o pasaporte)</span>
              </li>
              <li>
                <span className="booking-req-icon">🚗</span>
                <span>Licencia de conducir vigente (mínimo 1 año de antigüedad)</span>
              </li>
              <li>
                <span className="booking-req-icon">💳</span>
                <span>Tarjeta de crédito a nombre del conductor para garantía</span>
              </li>
              <li>
                <span className="booking-req-icon">🎂</span>
                <span>Edad mínima: 18 años (hasta 25 años puede aplicar cargo adicional)</span>
              </li>
            </ul>
          </div>

          <div className="card booking-info-card">
            <h3>¿Qué incluye el alquiler?</h3>
            <ul className="booking-req-list">
              <li>
                <span className="booking-req-icon">✅</span>
                <span>Seguro básico contra terceros incluido</span>
              </li>
              <li>
                <span className="booking-req-icon">✅</span>
                <span>Asistencia en ruta 24/7 por WhatsApp y teléfono</span>
              </li>
              <li>
                <span className="booking-req-icon">✅</span>
                <span>Kilometraje libre en todos los vehículos</span>
              </li>
              <li>
                <span className="booking-req-icon">✅</span>
                <span>Entrega y devolución en el punto acordado</span>
              </li>
            </ul>
            <p className="muted" style={{ marginTop: 10 }}>
              El combustible no está incluido. El vehículo se entrega con el tanque lleno y debe devolverse en las mismas condiciones.
            </p>
          </div>

          <div className="card booking-info-card">
            <h3>¿Tenés dudas?</h3>
            <p>Escribinos y te respondemos en minutos.</p>
            <a
              href="https://wa.me/5493814571012"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-full"
              style={{ marginTop: 10 }}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
