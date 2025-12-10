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
        <div className="card booking-info-card">
          <h3>Requisitos básicos</h3>
          <ul>
            <li>Ser mayor de 18 años.</li>
            <li>Licencia de conducir vigente.</li>
            <li>Tarjeta de crédito para depósito de garantía.</li>
            <li>Documento de identidad.</li>
          </ul>
          <p className="muted">
            Las condiciones definitivas se confirman en el contrato de alquiler.
          </p>
        </div>
      </div>
    </div>
  );
}
