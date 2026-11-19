import { Link } from "react-router-dom";
import { site, whatsappUrl } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="/marca/logo-sinergia-oscuro.png"
            alt="Sinergia Rent a Car"
            width="168"
            height="98"
          />
          <p>
            Alquiler de autos, SUVs, pick-ups y vans en Tucumán y el Norte
            Argentino.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Contacto</h2>
          <ul className="footer-list">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Horario</h2>
          <p className="footer-hours">{site.hours}</p>
        </div>

        <div>
          <h2 className="footer-title">Sitio</h2>
          <ul className="footer-list">
            <li><Link to="/flota">Flota</Link></li>
            <li><Link to="/reservas">Reservar</Link></li>
            <li><Link to="/hotel-castillo-de-piedra">Castillo de Piedra</Link></li>
            <li><Link to="/empresa">Empresa</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>San Miguel de Tucumán · Argentina</span>
      </div>
    </footer>
  );
}
