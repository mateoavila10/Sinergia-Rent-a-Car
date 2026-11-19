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
  const closeMobile = () => setIsMobileOpen(false);

  // Cerrar el menú con Escape y devolver el foco al botón
  useEffect(() => {
    if (!isMobileOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="brand" onClick={closeMobile}>
          <span className="brand-logo">S</span>
          <div className="brand-text">
            <span className="brand-name">SINERGIA</span>
            <span className="brand-subtitle">RENT A CAR</span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="nav-links" aria-label="Navegación principal">
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
          id="nav-toggle"
          aria-label={isMobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-controls="mobile-menu"
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
      <nav
        id="mobile-menu"
        aria-label="Menú móvil"
        className={`mobile-menu ${isMobileOpen ? "mobile-menu-open" : ""}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={closeMobile}
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
          onClick={closeMobile}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
};

export default Header;
