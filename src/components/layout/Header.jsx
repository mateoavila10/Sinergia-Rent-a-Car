import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalClock from "../board/LocalClock";
import { whatsappUrl } from "../../data/site";

const navItems = [
  { to: "/flota", label: "Flota" },
  { to: "/reservas", label: "Reservar" },
  { to: "/clima-novedades", label: "Clima y ruta" },
  { to: "/hotel-castillo-de-piedra", label: "Castillo de Piedra" },
  { to: "/empresa", label: "Empresa" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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

  const linkClass = ({ isActive }) => `nav-link${isActive ? " is-active" : ""}`;
  const mobileClass = ({ isActive }) => `mobile-link${isActive ? " is-active" : ""}`;

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="brand" onClick={closeMobile} aria-label="Sinergia Rent a Car, inicio">
          <img
            src="/marca/logo-horizontal-oscuro.png"
            alt=""
            width="193"
            height="50"
            className="brand-logo"
          />
          <img
            src="/marca/isotipo-sinergia-oscuro.png"
            alt=""
            width="40"
            height="34"
            className="brand-mark"
          />
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <LocalClock className="nav-clock" />

        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-signal nav-cta">
          WhatsApp
        </a>

        <button
          type="button"
          className={`nav-toggle${isMobileOpen ? " is-open" : ""}`}
          id="nav-toggle"
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="mobile-menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menú móvil"
        className={`mobile-menu${isMobileOpen ? " is-open" : ""}`}
      >
        <NavLink to="/" end className={mobileClass} onClick={closeMobile}>
          <span className="mobile-link-n" aria-hidden="true">00</span>
          Inicio
        </NavLink>
        {navItems.map((item, i) => (
          <NavLink key={item.to} to={item.to} onClick={closeMobile} className={mobileClass}>
            <span className="mobile-link-n" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
          </NavLink>
        ))}
        <LocalClock className="mobile-clock" />
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="btn btn-signal btn-block"
          onClick={closeMobile}
        >
          Escribinos por WhatsApp
        </a>
      </nav>
    </header>
  );
};

export default Header;
