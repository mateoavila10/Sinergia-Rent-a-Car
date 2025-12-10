import React, { useState } from "react";

const ContactForm = () => {
  const BUSINESS_WHATSAPP =
    import.meta.env.VITE_BUSINESS_WHATSAPP || "5493814571012";

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

Te escribo desde el formulario de contacto de la web de SINERGIA RENT A CAR.

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
      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        text
      )}`;

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
        <label>Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
        />
      </div>
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
        <label>Mensaje</label>
        <textarea
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
        className="btn btn-primary btn-full"
        disabled={loading}
      >
        {loading ? "Abriendo WhatsApp..." : "Enviar mensaje por WhatsApp"}
      </button>

      {sent && (
        <p className="form-success">
          Te abrimos WhatsApp con tu mensaje. Solo tenés que enviarlo.
        </p>
      )}
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};

export default ContactForm;
