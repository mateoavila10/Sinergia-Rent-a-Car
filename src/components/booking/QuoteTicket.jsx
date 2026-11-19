import { useId, useState } from "react";
import { pickupPoints } from "../../data/locations";
import { whatsappUrl } from "../../data/site";

const categories = ["Cualquiera", "Económico", "Compacto", "SUV", "Pick-Up", "Van"];

function fmtDate(value) {
  if (!value) return "-";
  const d = new Date(value);
  return d.toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" });
}

/**
 * Talón de cotización rápida. El punto de retiro lo controla el tablero.
 */
export default function QuoteTicket({ pickupId, onPickupChange }) {
  const uid = useId();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [category, setCategory] = useState("Cualquiera");
  const point = pickupPoints.find((p) => p.id === pickupId) ?? pickupPoints[0];

  function handleSubmit(e) {
    e.preventDefault();
    const text = [
      "Hola, quiero una cotización en Sinergia Rent a Car:",
      `- Retiro: ${point.name} (${fmtDate(pickupDate)})`,
      `- Devolución: ${fmtDate(returnDate)}`,
      `- Vehículo: ${category}`,
    ].join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener");
  }

  return (
    <form className="ticket" onSubmit={handleSubmit} aria-labelledby={`${uid}-title`}>
      <div className="ticket-head">
        <h2 id={`${uid}-title`} className="ticket-title">Pedí tu cotización</h2>
        <p className="ticket-sub">Te respondemos por WhatsApp. Sin letra chica.</p>
      </div>

      <ol className="ticket-steps">
        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">1</span>
          <label htmlFor={`${uid}-pickup`}>Retiro</label>
          <select
            id={`${uid}-pickup`}
            value={point.id}
            onChange={(e) => onPickupChange(e.target.value)}
          >
            {pickupPoints.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </li>
        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">2</span>
          <span className="step-label" id={`${uid}-dates`}>Fechas</span>
          <div className="ticket-dates" role="group" aria-labelledby={`${uid}-dates`}>
            <label className="sub-label" htmlFor={`${uid}-from`}>Retiro</label>
            <input
              id={`${uid}-from`}
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />
            <label className="sub-label" htmlFor={`${uid}-to`}>Devolución</label>
            <input
              id={`${uid}-to`}
              type="datetime-local"
              value={returnDate}
              min={pickupDate || undefined}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        </li>
        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">3</span>
          <label htmlFor={`${uid}-cat`}>Vehículo</label>
          <select id={`${uid}-cat`} value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </li>
      </ol>

      <div className="ticket-stub">
        <button type="submit" className="btn btn-signal btn-block btn-lg">
          Cotizar por WhatsApp
        </button>
        <p className="ticket-note">Se abre WhatsApp con tu pedido listo para enviar.</p>
      </div>
    </form>
  );
}
