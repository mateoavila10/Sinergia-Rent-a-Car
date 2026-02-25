import React from "react";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="page" id="contacto">
      <header className="page-header">
        <h1>Contacto</h1>
        <p>Estamos listos para ayudarte a planificar tu próximo viaje.</p>
      </header>

      <div className="page-two-columns">
        <div className="card">
          <h3>Escribinos</h3>
          <ContactForm />
        </div>

        <div className="page-column">
          <div className="card">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Tel / WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/5493814571012"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--color-primary)" }}
              >
                +54 9 381 457‑1012
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@sinergiarentacar.com.ar"
                style={{ color: "var(--color-secondary)" }}
              >
                info@sinergiarentacar.com.ar
              </a>
            </p>
            <p>
              <strong>Sede central:</strong> San Miguel de Tucumán, Argentina
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/sinergiarentacar"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--color-secondary)" }}
              >
                @sinergiarentacar
              </a>
            </p>
            <a
              href="https://wa.me/5493814571012"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-full"
              style={{ marginTop: 12 }}
            >
              Chatear por WhatsApp
            </a>
          </div>

          <div className="card">
            <h3>Horarios de atención</h3>
            <p>
              <strong>Lunes a Domingo</strong>
              <br />
              07:30 a 23:30 hs
            </p>
            <p className="muted" style={{ marginTop: 8 }}>
              Coordinamos entregas en aeropuerto, ciudad, Yerba Buena y
              Hotel Castillo de Piedra (Tafí del Valle).
            </p>
            <a
              href="https://maps.google.com/?q=San+Miguel+de+Tucuman+Argentina"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
              style={{ marginTop: 12, alignSelf: "flex-start" }}
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
