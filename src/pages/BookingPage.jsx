import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/booking/BookingForm";
import { site, whatsappUrl } from "../data/site";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const includeHotel = searchParams.get("combo") === "hotel";
  const category = searchParams.get("categoria") || "";

  return (
    <div className="page">
      <header className="page-header">
        <h1>Reservar</h1>
        <p>
          Completá el pedido y te respondemos por WhatsApp con la cotización y
          todos los detalles. Atendemos las 24 horas.
        </p>
      </header>
      <div className="page-two-columns">
        <BookingForm defaultIncludeHotel={includeHotel} defaultCategory={category} />
        <div className="page-column">
          <section className="card" aria-labelledby="req-title">
            <h2 id="req-title">Requisitos</h2>
            <ul>
              <li>Ser mayor de 18 años.</li>
              <li>Licencia de conducir vigente.</li>
              <li>Tarjeta de crédito para el depósito de garantía.</li>
              <li>Documento de identidad.</li>
            </ul>
            <p className="muted">
              Las condiciones definitivas se confirman en el contrato de alquiler.
            </p>
          </section>
          <section className="card" aria-labelledby="direct-title">
            <h2 id="direct-title">¿Preferís hablar?</h2>
            <p>{site.hours}.</p>
            <div className="actions">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-ink">
                WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-ghost-ink">
                Llamar
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
