import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/flota", label: "Flota" },
  { to: "/reservas", label: "Reservar" },
  { to: "/clima-novedades", label: "Clima & Novedades" },
  { to: "/hotel-castillo-de-piedra", label: "Castillo de Piedra" },
  { to: "/empresa", label: "Sobre Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="brand" onClick={() => setIsMobileOpen(false)}>
          <span className="brand-logo">S</span>
          <div className="brand-text">
            <span className="brand-name">SINERGIA</span>
            <span className="brand-subtitle">RENT A CAR</span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              currentPath={location.pathname}
            />
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="https://wa.me/5493814571012"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          WhatsApp
        </a>

        {/* BOTÓN CAR-MENÚ (MÓVIL) */}
        <button
          type="button"
          className={`nav-toggle ${isMobileOpen ? "nav-toggle-open" : ""}`}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMobileOpen}
          onClick={toggleMobile}
        >
          <span className="nav-toggle-road">
            <span className="road-line" />
            <span className="road-line road-line-middle" />
            <span className="road-line" />
          </span>
          <span className="nav-toggle-car" />
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`mobile-menu ${isMobileOpen ? "mobile-menu-open" : ""}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`mobile-nav-link ${
              location.pathname === item.to ? "mobile-nav-link-active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}

        <a
          href="https://wa.me/5493814571012"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mobile-nav-cta"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
