import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h4>SINERGIA RENT A CAR</h4>
          <p>
            Movilidad profesional en Tucumán y el Norte Argentino. Autos, SUVs,
            pick-ups y vans para trabajo, turismo y familia.
          </p>
          <p className="footer-contact-row">
            <a href="https://wa.me/5493814571012" target="_blank" rel="noreferrer" className="footer-link-accent">
              WhatsApp: +54 9 381 457‑1012
            </a>
          </p>
        </div>

        <div>
          <h5>Navegación</h5>
          <ul className="footer-nav-list">
            <li><Link to="/" className="footer-link">Inicio</Link></li>
            <li><Link to="/flota" className="footer-link">Flota</Link></li>
            <li><Link to="/reservas" className="footer-link">Reservar</Link></li>
            <li><Link to="/hotel-castillo-de-piedra" className="footer-link">Hotel Castillo de Piedra</Link></li>
            <li><Link to="/empresa" className="footer-link">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h5>Contacto</h5>
          <p className="footer-contact-row">Tel: +54 9 381 457‑1012</p>
          <p className="footer-contact-row">
            <a href="mailto:info@sinergiarentacar.com.ar" className="footer-link-secondary">
              info@sinergiarentacar.com.ar
            </a>
          </p>
          <p className="footer-contact-row">San Miguel de Tucumán, Argentina</p>
          <p className="footer-contact-row">
            <a href="https://www.instagram.com/sinergiarentacar" target="_blank" rel="noreferrer" className="footer-link-secondary">
              @sinergiarentacar
            </a>
          </p>
        </div>

        <div>
          <h5>Horarios</h5>
          <p className="footer-contact-row">Lunes a Domingo</p>
          <p className="footer-contact-row">07:30 a 23:30 hs</p>
          <p className="footer-contact-row footer-muted-note">
            Entregas en aeropuerto, ciudad y Hotel Castillo de Piedra (Tafí del Valle).
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sinergia Rent a Car — Todos los derechos reservados.</span>
        <div className="footer-bottom-right">
          <a href="/admin" className="footer-admin-link">Admin</a>
        </div>
      </div>
    </footer>
  );
}
