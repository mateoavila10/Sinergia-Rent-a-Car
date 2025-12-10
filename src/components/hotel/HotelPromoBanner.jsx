import React from "react";
import { Link } from "react-router-dom";

const HotelPromoBanner = () => {
  return (
    <section className="section hotel-banner">
      <div className="hotel-banner-content">
        <h2>Auto + Hotel Castillo de Piedra</h2>
        <p>
          Aprovechá la sinergia perfecta: reservando tu auto con SINERGIA RENT
          A CAR obtenés beneficios exclusivos en Hotel Castillo de Piedra.
        </p>
        <ul>
          <li>10% OFF en estadías de 3 noches o más.</li>
          <li>Late check-out sujeto a disponibilidad.</li>
          <li>Upgrade de categoría en reservas seleccionadas.</li>
        </ul>
        <div className="hotel-banner-actions">
          <Link to="/hotel-castillo-de-piedra" className="btn btn-primary">
            Ver beneficios
          </Link>
          <a href="#contacto" className="btn btn-outline">
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotelPromoBanner;
