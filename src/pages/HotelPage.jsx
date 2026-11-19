import { Link } from "react-router-dom";

const HotelPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Hotel Castillo de Piedra</h1>
        <p>
          Un hotel boutique de montaña en Tafí del Valle, para desconectarse y
          disfrutar de los Valles Calchaquíes con vistas abiertas, aire puro y
          una arquitectura de castillo muy marcada.
        </p>
      </header>

      <div className="page-two-columns">
        <section className="card" aria-labelledby="hotel-about">
          <h2 id="hotel-about">Sobre el hotel</h2>
          <p>
            Está en <strong>Tafí del Valle, Tucumán</strong>, sobre avenida Los
            Jesuitas, a pocos minutos del centro y del Museo Jesuítico La Banda.
            Es un edificio de valor patrimonial, construido en piedra, que
            combina estética de castillo europeo con detalles cálidos de casa de
            campo.
          </p>
          <p>
            Las habitaciones son amplias, con pisos de madera, detalles en
            piedra, calefacción, baño privado y vistas al valle o al jardín. Hay
            opciones para parejas, familias y pequeños grupos.
          </p>

          <h3>Servicios destacados</h3>
          <ul>
            <li>Piscina al aire libre con solárium.</li>
            <li>Sauna e hidromasaje para relajarse después de recorrer el valle.</li>
            <li>Desayuno con productos regionales y opciones saludables.</li>
            <li>Restaurant y bar dentro del hotel.</li>
            <li>Wi-Fi y estacionamiento en el predio.</li>
            <li>Recepción 24 hs e información turística.</li>
          </ul>
        </section>

        <section className="card" aria-labelledby="hotel-combo">
          <h2 id="hotel-combo">Combo Auto + Hotel</h2>
          <p>
            Reservando tu vehículo con Sinergia y tu alojamiento en Castillo de
            Piedra, coordinás todo en un solo contacto: horario de check-in,
            entrega del auto en el hotel y devolución al terminar tu estadía.
          </p>

          <h3>Beneficios del combo</h3>
          <ul>
            <li>10% OFF en estadías de 3 noches o más.</li>
            <li>Late check-out sujeto a disponibilidad.</li>
            <li>Upgrade de categoría en reservas seleccionadas.</li>
            <li>Entrega y devolución de la unidad directamente en el hotel.</li>
            <li>Horarios coordinados según tu vuelo o viaje por ruta.</li>
          </ul>
          <p className="muted">Beneficios sujetos a confirmación al reservar.</p>

          <p>
            Ideal si llegás desde otra provincia o del exterior y querés tener
            resueltos al mismo tiempo alojamiento y movilidad.
          </p>

          <div className="actions">
            <Link to="/reservas?combo=hotel" className="btn btn-signal btn-lg">
              Pedir el combo
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelPage;
