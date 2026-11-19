import { useId, useState } from "react";
import { locations } from "../../data/locations";
import { whatsappUrl } from "../../data/site";

const categories = ["Cualquiera", "Económico", "Compacto", "SUV", "Pick-Up", "Van"];

function getInitialForm(defaultIncludeHotel, defaultCategory) {
  return {
    fullName: "",
    email: "",
    phone: "",
    vehicleCategory: categories.includes(defaultCategory) ? defaultCategory : "Cualquiera",
    pickupLocation: locations[0],
    returnLocation: locations[0],
    pickupDate: "",
    returnDate: "",
    driverAge: "",
    notes: "",
    includeHotel: defaultIncludeHotel,
  };
}

function buildWhatsAppText(d) {
  return `
Hola, soy ${d.fullName}.

Quiero una cotización en Sinergia Rent a Car:

- Retiro: ${d.pickupLocation} (${d.pickupDate || "-"})
- Devolución: ${d.returnLocation} (${d.returnDate || "-"})
- Edad del conductor: ${d.driverAge || "-"}
- Categoría de vehículo: ${d.vehicleCategory}
- Teléfono: ${d.phone}
- Email: ${d.email}
- Combo Auto + Hotel Castillo de Piedra: ${d.includeHotel ? "Sí" : "No"}
- Comentarios: ${d.notes || "-"}

¡Gracias!
`.trim();
}

// El pedido completo como talón de embarque: cuatro pasos numerados y troquel antes del botón.
const BookingForm = ({ defaultIncludeHotel = false, defaultCategory = "" }) => {
  const uid = useId();
  const [form, setForm] = useState(() => getInitialForm(defaultIncludeHotel, defaultCategory));
  const [sent, setSent] = useState(false);
  const id = (name) => `${uid}-${name}`;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.open(whatsappUrl(buildWhatsAppText(form)), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="ticket ticket-page" onSubmit={handleSubmit} aria-labelledby={id("title")}>
      <div className="ticket-head">
        <h2 id={id("title")} className="ticket-title">Tu pedido</h2>
        <p className="ticket-sub">Cuatro pasos y te respondemos por WhatsApp.</p>
      </div>

      <ol className="ticket-steps">
        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">1</span>
          <h3 className="step-label">Retiro y devolución</h3>
          <div className="step-fields">
            <div className="form-group">
              <label htmlFor={id("pickupLocation")}>Retiro</label>
              <select id={id("pickupLocation")} name="pickupLocation" value={form.pickupLocation} onChange={handleChange}>
                {locations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor={id("returnLocation")}>Devolución</label>
              <select id={id("returnLocation")} name="returnLocation" value={form.returnLocation} onChange={handleChange}>
                {locations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </li>

        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">2</span>
          <h3 className="step-label">Fechas</h3>
          <div className="step-fields step-fields-2">
            <div className="form-group">
              <label htmlFor={id("pickupDate")}>Retiro</label>
              <input id={id("pickupDate")} type="datetime-local" name="pickupDate" value={form.pickupDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor={id("returnDate")}>Devolución</label>
              <input id={id("returnDate")} type="datetime-local" name="returnDate" value={form.returnDate} min={form.pickupDate || undefined} onChange={handleChange} required />
            </div>
          </div>
        </li>

        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">3</span>
          <h3 className="step-label">Vehículo</h3>
          <div className="step-fields step-fields-2">
            <div className="form-group">
              <label htmlFor={id("vehicleCategory")}>Categoría</label>
              <select id={id("vehicleCategory")} name="vehicleCategory" value={form.vehicleCategory} onChange={handleChange}>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor={id("driverAge")}>Edad del conductor</label>
              <input id={id("driverAge")} type="number" min="18" name="driverAge" value={form.driverAge} onChange={handleChange} required placeholder="Ej: 30" />
            </div>
            <label className="checkbox-label step-wide">
              <input type="checkbox" name="includeHotel" checked={form.includeHotel} onChange={handleChange} />
              <span>
                Sumar alojamiento en <strong>Castillo de Piedra</strong> (combo Auto + Hotel)
              </span>
            </label>
          </div>
        </li>

        <li className="ticket-step">
          <span className="step-n" aria-hidden="true">4</span>
          <h3 className="step-label">Tus datos</h3>
          <div className="step-fields step-fields-2">
            <div className="form-group step-wide">
              <label htmlFor={id("fullName")}>Nombre y apellido</label>
              <input id={id("fullName")} name="fullName" value={form.fullName} onChange={handleChange} required autoComplete="name" placeholder="Ej: Juan Pérez" />
            </div>
            <div className="form-group">
              <label htmlFor={id("email")}>Email</label>
              <input id={id("email")} name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="tu@correo.com" />
            </div>
            <div className="form-group">
              <label htmlFor={id("phone")}>Teléfono / WhatsApp</label>
              <input id={id("phone")} name="phone" type="tel" value={form.phone} onChange={handleChange} required autoComplete="tel" placeholder="Ej: +54 9 381 ..." />
            </div>
            <div className="form-group step-wide">
              <label htmlFor={id("notes")}>Comentarios</label>
              <textarea id={id("notes")} name="notes" rows="3" value={form.notes} onChange={handleChange} placeholder="Ej: sillita para bebé, número de vuelo, etc." />
            </div>
          </div>
        </li>
      </ol>

      <div className="ticket-stub">
        <button type="submit" className="btn btn-signal btn-block btn-lg">
          Pedir cotización por WhatsApp
        </button>
        {sent ? (
          <p className="form-success" role="status">
            Te abrimos WhatsApp con tu pedido. Solo tenés que enviarlo y te respondemos.
          </p>
        ) : (
          <p className="ticket-note">Se abre WhatsApp con tu pedido listo para enviar.</p>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
