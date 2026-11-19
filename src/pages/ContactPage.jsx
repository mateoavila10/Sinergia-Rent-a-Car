import ContactForm from "../components/contact/ContactForm";
import { site, whatsappUrl } from "../data/site";

const ContactPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Contacto</h1>
        <p>Estamos para ayudarte a planificar tu viaje. {site.hours}.</p>
      </header>

      <div className="page-two-columns">
        <section className="card" aria-labelledby="write-title">
          <h2 id="write-title">Escribinos</h2>
          <ContactForm />
        </section>
        <section className="card" aria-labelledby="data-title">
          <h2 id="data-title">Datos de contacto</h2>
          <ul className="contact-list">
            <li>
              <span className="k">WhatsApp y teléfono</span>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </li>
            <li>
              <span className="k">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="k">Sede</span>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.address}</a>
            </li>
            <li>
              <span className="k">Horario</span>
              <span>{site.hours}</span>
            </li>
          </ul>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-signal btn-block btn-lg">
            Chatear por WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
