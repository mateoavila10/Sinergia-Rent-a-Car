import React from "react";
import { Link } from "react-router-dom";
import { hotelImages } from "../data/hotelImages";

const HotelPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Hotel Castillo de Piedra</h1>
        <p>
          Un hotel boutique de montaña en Tafí del Valle, pensado para
          desconectarse y disfrutar de los Valles Calchaquíes con vistas
          abiertas, aire puro y una arquitectura de castillo muy marcada.
        </p>
      </header>

      {/* Galería de imágenes */}
      <section className="section">
        <div className="section-header">
          <div>
            <h2>Un castillo entre montañas</h2>
            <p>
              El edificio de piedra y sus galerías se integran con el paisaje:
              jardines amplios, patio interno y una piscina con vista a los
              cerros.
            </p>
          </div>
        </div>

        <div className="hotel-gallery">
          {hotelImages.map((img) => (
            <figure key={img.id} className="hotel-gallery-item">
              <img src={img.src} alt={img.alt} />
            </figure>
          ))}
        </div>
      </section>

      {/* Info + beneficios combo */}
      <div className="page-two-columns" style={{ marginTop: 28 }}>
        <div className="card">
          <h3>Sobre Castillo de Piedra</h3>
          <p>
            El hotel está ubicado en <strong>Tafí del Valle, Tucumán</strong>,
            sobre avenida Los Jesuitas, a pocos minutos del centro y del Museo
            Jesuítico La Banda. Es un edificio de valor patrimonial, construido
            en piedra, que combina estética de castillo europeo con detalles
            cálidos de casa de campo.
          </p>
          <p>
            Las habitaciones son amplias, con pisos de madera, detalles en
            piedra, calefacción, baño privado y vistas al valle o al jardín. Hay
            opciones para parejas, familias y pequeños grupos.
          </p>

          <h4 style={{ marginTop: 16 }}>Servicios destacados</h4>
          <ul>
            <li>Piscina al aire libre con solárium.</li>
            <li>
              Sauna e hidromasaje para relajarse después de recorrer el valle.
            </li>
            <li>Desayuno con productos regionales y opciones saludables.</li>
            <li>Restaurant y bar dentro del hotel.</li>
            <li>Wi-Fi y estacionamiento en el predio.</li>
            <li>Recepción 24 hs e información turística.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Combo Auto + Hotel</h3>
          <p>
            Reservando tu vehículo con <strong>SINERGIA RENT A CAR</strong> y
            alojamiento en Castillo de Piedra, podés coordinar todo en un solo
            contacto: horarios de check-in, entrega del auto en el hotel y
            devolución al finalizar tu estadía.
          </p>

          <h4 style={{ marginTop: 16 }}>Beneficios del combo</h4>
          <ul>
            <li>
              Descuento especial en estadías combinadas con alquiler de auto.
            </li>
            <li>Entrega y devolución de la unidad directamente en el hotel.</li>
            <li>Coordinación de horarios según tu vuelo o viaje por ruta.</li>
            <li>Atención personalizada para armar tu itinerario por el Norte.</li>
          </ul>

          <p style={{ marginTop: 12 }}>
            Es ideal para quienes llegan desde otras provincias o el exterior y
            quieren tener resueltos al mismo tiempo alojamiento y movilidad.
          </p>

          <div className="hotel-banner-actions">
            <Link to="/reservas?combo=hotel" className="btn btn-primary">
              Pedir combo Auto + Hotel
            </Link>
            <a
              href="https://castillodepiedra.com.ar/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Ver sitio del hotel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
