import { Link } from "react-router-dom";

const HotelPromoBanner = () => {
  return (
    <section className="section combo" aria-labelledby="combo-title">
      <div className="combo-row">
        <p className="combo-code" aria-hidden="true">05</p>
        <div className="combo-copy">
          <h2 id="combo-title" className="section-title">Auto + Hotel Castillo de Piedra</h2>
          <p>
            Retirás y devolvés el auto en el hotel, en Tafí del Valle. Coordinamos
            los horarios con tu check-in y tu vuelo, en un solo contacto.
          </p>
          <ul className="combo-list">
            <li>10% OFF en estadías de 3 noches o más</li>
            <li>Late check-out sujeto a disponibilidad</li>
            <li>Upgrade de categoría en reservas seleccionadas</li>
          </ul>
          <p className="combo-note">Beneficios sujetos a confirmación al reservar.</p>
        </div>
        <div className="combo-actions">
          <Link to="/reservas?combo=hotel" className="btn btn-signal btn-lg">
            Pedir el combo
          </Link>
          <Link to="/hotel-castillo-de-piedra" className="btn btn-ghost">
            Ver el hotel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotelPromoBanner;
