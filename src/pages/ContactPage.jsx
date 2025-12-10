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
        <div className="card">
          <h3>Datos de contacto</h3>
          <p>Tel: +54 9 381 457 1012</p>
          <p>Email: info@sinergiarentacar.com.ar</p>
          <p>Central: San Miguel de Tucumán, Argentina</p>
          <a
            href="https://wa.me/5493814571012"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-full"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
