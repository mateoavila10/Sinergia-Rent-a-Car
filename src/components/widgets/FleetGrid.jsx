import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { fleetData } from "../../data/fleetData";
import Photo from "../common/Photo";
import { CarIcon } from "../common/Icons";

// Miniatura mientras no esté la foto real del vehículo en public/fotos/flota/
function PhotoPending({ name }) {
  return (
    <span className="fleet-thumb fleet-thumb-pending" role="img" aria-label={`${name}: foto próximamente`}>
      <CarIcon className="fleet-thumb-icon" />
      <span>Foto próximamente</span>
    </span>
  );
}

// La flota como tablero de salidas: una fila por categoría.
const FleetGrid = ({ showFilter = false, headingLevel = 2, title = "Flota" }) => {
  const uid = useId();
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...new Set(fleetData.map((c) => c.category))];
  const filtered = category === "Todas" ? fleetData : fleetData.filter((c) => c.category === category);
  const H = `h${headingLevel}`;
  const RowH = `h${headingLevel + 1}`;

  return (
    <section className="band fleet" aria-labelledby={`${uid}-title`}>
      <div className="band-inner">
        <div className="band-head">
          <div>
            <H id={`${uid}-title`} className="band-title">{title}</H>
            <p className="band-sub">
              Para ciudad, rutas de montaña y caminos exigentes. Precios de referencia por día.
            </p>
          </div>
          {showFilter && (
            <div className="fleet-filter">
              <label htmlFor={`${uid}-cat`}>Categoría</label>
              <select id={`${uid}-cat`} value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="fleet-cols" aria-hidden="true">
          <span>Vehículo</span>
          <span>Capacidad</span>
          <span>Desde / día</span>
          <span />
        </div>
        <ul className="fleet-rows">
          {filtered.map((car) => (
            <li key={car.id} className="fleet-row">
              <Photo
                src={car.image}
                alt={car.name}
                className="fleet-thumb"
                fallback={<PhotoPending name={car.name} />}
              />
              <div className="fleet-id">
                <RowH className="fleet-name">{car.name}</RowH>
                <p className="fleet-meta">
                  {car.transmission} · {car.ac ? "Aire acondicionado" : "Sin aire"}
                </p>
              </div>
              <p className="fleet-cap">
                {car.passengers} pasajeros<span aria-hidden="true"> · </span>
                <br className="fleet-br" />
                {car.luggage} valijas
              </p>
              <p className="fleet-price">
                <span className="sr-only">Desde </span>${car.priceFrom.toLocaleString("es-AR")}
                <span className="sr-only"> por día</span>
              </p>
              <Link
                to={`/reservas?categoria=${encodeURIComponent(car.category)}`}
                className="btn btn-signal fleet-cta"
                aria-label={`Cotizar ${car.name}`}
              >
                Cotizar
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FleetGrid;
