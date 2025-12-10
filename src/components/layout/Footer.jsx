export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h4>SINERGIA RENT A CAR</h4>
          <p>
            Movilidad profesional en Tucumán y el Norte Argentino. Autos, vans y
            camionetas para tus viajes de trabajo o descanso.
          </p>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>Tel: +54 9 381 457 1012</p>
          <p>Email: info@sinergiarentacar.com.ar</p>
          <p>Central: San Miguel de Tucumán, Argentina</p>
        </div>
        <div>
          <h5>Horarios</h5>
          <p>Lunes a Domingo: 07:30 a 23:30 hs</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sinergia Rent a Car</span>
        <div className="footer-bottom-right">
          <span>Hecho con React • Diseño orientado a conversión</span>
        </div>
      </div>
    </footer>
  );
}
