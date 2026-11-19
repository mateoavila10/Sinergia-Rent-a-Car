import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fleetData } from "../../data/fleetData";
import Photo from "../common/Photo";

// Se muestra mientras no esté la foto real del vehículo en public/fotos/flota/
function FleetPhotoPending({ category }) {
  return (
    <div className="fleet-image fleet-image-pending" role="img" aria-label={`${category}: foto próximamente`}>
      <svg viewBox="0 0 64 28" aria-hidden="true">
        <path d="M4 20v-5l6-1 7-6h20l9 6 10 1.5c2 .3 4 2 4 4V20" />
        <path d="M2 20h60" />
        <circle cx="16" cy="21" r="4" />
        <circle cx="48" cy="21" r="4" />
        <path d="M19 9.5 17 14h29l-7-4.5" />
      </svg>
      <span>Foto próximamente</span>
    </div>
  );
}

const FleetGrid = ({ showFilter = false }) => {
  const [category, setCategory] = useState("Todas");

  const categories = ["Todas", ...new Set(fleetData.map((c) => c.category))];

  const filteredFleet =
    category === "Todas"
      ? fleetData
      : fleetData.filter((c) => c.category === category);

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Flota disponible</h2>
          <p>
            Autos pensados para ciudad, rutas y montaña. Elegí el grupo según
            tu tipo de viaje.
          </p>
        </div>
        {showFilter && (
          <div className="fleet-filter">
            <label htmlFor="fleet-category">Categoría</label>
            <select
              id="fleet-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="fleet-grid">
        {filteredFleet.map((car) => (
          <article key={car.id} className="card fleet-card">
            <Photo
              src={car.image}
              alt={car.name}
              className="fleet-image"
              fallback={<FleetPhotoPending category={car.category} />}
            />
            <div className="fleet-body">
              <div className="fleet-head">
                <span className="badge">{car.category}</span>
                <h3>{car.name}</h3>
              </div>
              <ul className="fleet-specs">
                <li>{car.passengers} pasajeros</li>
                <li>{car.luggage} valijas</li>
                <li>{car.transmission}</li>
                <li>{car.ac ? "A/C" : "Sin A/C"}</li>
              </ul>
              <div className="fleet-footer">
                <div>
                  <span className="fleet-price-label">Desde</span>
                  <span className="fleet-price">
                    ${car.priceFrom.toLocaleString("es-AR")}/día
                  </span>
                </div>
                <Link to="/reservas" className="btn btn-primary btn-sm">
                  Reservar
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FleetGrid;
