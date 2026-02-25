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
          <p style={{ marginTop: 8 }}>
            <a
              href="https://wa.me/5493814571012"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4ade80", textDecoration: "none" }}
            >
              WhatsApp: +54 9 381 457‑1012
            </a>
          </p>
        </div>
        <div>
          <h5>Navegación</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            <li><Link to="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Inicio</Link></li>
            <li><Link to="/flota" style={{ color: "#9ca3af", textDecoration: "none" }}>Flota</Link></li>
            <li><Link to="/reservas" style={{ color: "#9ca3af", textDecoration: "none" }}>Reservar</Link></li>
            <li><Link to="/hotel-castillo-de-piedra" style={{ color: "#9ca3af", textDecoration: "none" }}>Hotel Castillo de Piedra</Link></li>
            <li><Link to="/empresa" style={{ color: "#9ca3af", textDecoration: "none" }}>Sobre Nosotros</Link></li>
            <li><Link to="/contacto" style={{ color: "#9ca3af", textDecoration: "none" }}>Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>Tel: +54 9 381 457‑1012</p>
          <p>Email: info@sinergiarentacar.com.ar</p>
          <p>San Miguel de Tucumán, Argentina</p>
          <p style={{ marginTop: 8 }}>
            <a
              href="https://www.instagram.com/sinergiarentacar"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              Instagram: @sinergiarentacar
            </a>
          </p>
        </div>
        <div>
          <h5>Horarios</h5>
          <p>Lunes a Domingo</p>
          <p>07:30 a 23:30 hs</p>
          <p style={{ marginTop: 8, fontSize: "0.8rem", color: "#6b7280" }}>
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
