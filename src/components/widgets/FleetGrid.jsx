import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fleetData } from "../../data/fleetData";

const categoryBadgeClass = {
  Económico: "badge-economico",
  Compacto: "badge-compacto",
  SUV: "badge-suv",
  "Pick-Up": "badge-pickup",
  Van: "badge-van",
};

const CarCarousel = ({ images, name }) => {
  const [idx, setIdx] = useState(0);

  if (!images || images.length <= 1) {
    return <img src={images?.[0]} alt={name} className="fleet-image" />;
  }

  const prev = (e) => {
    e.preventDefault();
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e) => {
    e.preventDefault();
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="fleet-carousel">
      <img
        src={images[idx]}
        alt={`${name} - foto ${idx + 1}`}
        className="fleet-carousel-img"
      />
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={prev}
        aria-label="Foto anterior"
      >
        &#8249;
      </button>
      <button
        className="carousel-btn carousel-btn-next"
        onClick={next}
        aria-label="Foto siguiente"
      >
        &#8250;
      </button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === idx ? " active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setIdx(i);
            }}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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
          <div className="fleet-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`fleet-filter-tab${category === cat ? " active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="fleet-grid">
        {filteredFleet.map((car) => (
          <article key={car.id} className="card fleet-card">
            <CarCarousel images={car.images} name={car.name} />
            <div className="fleet-body">
              <div className="fleet-head">
                <span
                  className={`badge ${
                    categoryBadgeClass[car.category] ?? ""
                  }`}
                >
                  {car.category}
                </span>
                <h3>{car.name}</h3>
              </div>
              <ul className="fleet-specs">
                <li>
                  <span>👤</span>
                  {car.passengers} pas.
                </li>
                <li>
                  <span>🧳</span>
                  {car.luggage} val.
                </li>
                <li>
                  <span>⚙️</span>
                  {car.transmission}
                </li>
                {car.ac && (
                  <li>
                    <span>❄️</span>
                    A/C
                  </li>
                )}
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
