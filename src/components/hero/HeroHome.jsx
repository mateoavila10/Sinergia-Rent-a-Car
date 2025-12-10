import React from "react";
import { Link } from "react-router-dom";
import WeatherWidget from "../widgets/WeatherWidget";

const HeroHome = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        {/* Orbes de fondo */}
        <div className="hero-bg-orb hero-bg-orb-1" />
        <div className="hero-bg-orb hero-bg-orb-2" />

        <div className="hero-grid">
          {/* Columna izquierda: texto principal */}
          <div className="hero-main">
            <p className="hero-eyebrow">TUCUMÁN & NORTE ARGENTINO</p>
            <h1 className="hero-title">
              Alquiler de vehículos{" "}
              <span className="hero-highlight">sin letra chica.</span>
              <br />
              <span className="hero-highlight-alt">
                Solo libertad y confianza.
              </span>
            </h1>
            <p className="hero-subtitle">
              Retirá tu auto en el aeropuerto, en la ciudad o en el hotel
              Castillo de Piedra. Tarifas claras, asistencia 24/7 y flota
              pensada para rutas de montaña.
            </p>

            <div className="hero-actions">
              <Link to="/reservas" className="btn btn-primary btn-lg">
                Reservar ahora
              </Link>
              <Link to="/flota" className="btn btn-outline btn-lg">
                Ver flota completa
              </Link>
            </div>

            <div className="hero-badges-row">
              <span className="hero-badge">Entrega en aeropuerto y hotel</span>
              <span className="hero-badge">
                Autos, SUVs, pick-ups y vans
              </span>
              <span className="hero-badge">
                Opciones corporativas y turismo
              </span>
            </div>
          </div>

          {/* Columna derecha: métricas + clima + combo hotel */}
          <div className="hero-side">
            {/* Métricas */}
            <div className="hero-card hero-card-metrics">
              <p className="hero-card-title">Hoy en SINERGIA</p>
              <div className="hero-metrics">
                <div className="metric">
                  <span className="metric-value">60+</span>
                  <span className="metric-label">Unidades activas</span>
                  <span className="metric-sub">
                    Autos, SUVs y pick-ups listas
                  </span>
                </div>
                <div className="metric">
                  <span className="metric-value">98%</span>
                  <span className="metric-label">Puntualidad</span>
                  <span className="metric-sub">
                    En entregas y devoluciones
                  </span>
                </div>
                <div className="metric">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Asistencia</span>
                  <span className="metric-sub">WhatsApp y teléfono</span>
                </div>
              </div>
            </div>

            {/* Fila horizontal: clima + combo */}
            <div className="hero-side-row">
              <div className="hero-card hero-card-weather">
                <WeatherWidget
                  city="San Miguel de Tucumán"
                  countryCode="AR"
                />
              </div>

              <div className="hero-card hero-card-castillo">
                <p className="hero-card-title">
                  Combo Auto + Castillo de Piedra
                </p>
                <p className="hero-card-text">
                  Coordinamos entrega y devolución del vehículo directamente en
                  el hotel <strong>Castillo de Piedra</strong> en Tafí del
                  Valle.
                </p>
                <Link
                  to="/hotel-castillo-de-piedra"
                  className="btn btn-secondary btn-sm"
                >
                  Ver beneficios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De acá para abajo podés sumar más secciones de la home si querés */}
    </div>
  );
};

export default HeroHome;
