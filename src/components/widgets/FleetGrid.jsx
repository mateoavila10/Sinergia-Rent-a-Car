import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fleetData } from "../../data/fleetData";

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
            <label>Categoría</label>
            <select
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
            <img src={car.image} alt={car.name} className="fleet-image" />
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
