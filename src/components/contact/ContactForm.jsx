import { useId, useState } from "react";
import { whatsappUrl } from "../../data/site";

const ContactForm = () => {
  const uid = useId();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function buildWhatsAppText(data) {
    return `
Hola, soy ${data.name}.

Te escribo desde el formulario de contacto de la web de Sinergia Rent a Car.

Datos de contacto:
- Email: ${data.email}

Mensaje:
${data.message}

¡Muchas gracias!
    `.trim();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(false);
    setError("");
    setLoading(true);

    try {
      const text = buildWhatsAppText(form);
      const waUrl = whatsappUrl(text);

      window.open(waUrl, "_blank");
      setSent(true);
      // Si querés limpiar el form al enviar:
      // setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error abriendo WhatsApp:", err);
      setError("No se pudo abrir WhatsApp. Verificá tu conexión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`${uid}-name`}>Nombre</label>
        <input
          id={`${uid}-name`}
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${uid}-email`}>Email</label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="tu@correo.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${uid}-message`}>Mensaje</label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Contanos qué necesitás…"
        />
      </div>
      <button
        type="submit"
        className="btn btn-signal btn-block btn-lg"
        disabled={loading}
      >
        {loading ? "Abriendo WhatsApp..." : "Enviar mensaje por WhatsApp"}
      </button>

      {sent && (
        <p className="form-success" role="status">
          Te abrimos WhatsApp con tu mensaje. Solo tenés que enviarlo.
        </p>
      )}
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};

export default ContactForm;
