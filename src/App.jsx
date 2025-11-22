import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useSearchParams  } from "react-router-dom";

const fleetData = [
  
  {
    id: 1,
    name: "Económico Ciudad",
    category: "Económico",
    passengers: 4,
    luggage: 2,
    transmission: "Manual",
    ac: true,
    priceFrom: 24500,
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Compacto Automático",
    category: "Compacto",
    passengers: 5,
    luggage: 3,
    transmission: "Automática",
    ac: true,
    priceFrom: 29800,
    image:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "SUV Norte Argentino",
    category: "SUV",
    passengers: 5,
    luggage: 4,
    transmission: "Automática",
    ac: true,
    priceFrom: 38500,
    image:
      "https://images.pexels.com/photos/2100193/pexels-photo-2100193.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Pick-Up 4x4",
    category: "Pick-Up",
    passengers: 5,
    luggage: 4,
    transmission: "Manual",
    ac: true,
    priceFrom: 45200,
    image:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Van 7 Pax Familiar",
    category: "Van",
    passengers: 7,
    luggage: 5,
    transmission: "Automática",
    ac: true,
    priceFrom: 51500,
    image:
      "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
const hotelImages = [
  {
    id: 1,
    src: "https://castillodepiedra.com.ar/wp-content/uploads/2024/02/castillo-de-piedra-exterior5.jpg",
    alt: "Patio interno de Castillo de Piedra con galerías y hamacas paraguayas",
  },
  {
    id: 2,
    src: "https://castillodepiedra.com.ar/wp-content/uploads/2024/02/castillo-de-piedra-piscina4.jpg",
    alt: "Vista del castillo de piedra y la piscina con reposeras",
  },
  {
    id: 3,
    src: "https://castillodepiedra.com.ar/wp-content/uploads/2024/02/castillo-de-piedra-interior4.jpg",
    alt: "Espacio interior cálido con muros de piedra y muebles de madera",
  },
  {
    id: 4,
    src: "https://castillodepiedra.com.ar/wp-content/uploads/2024/02/castillo-de-piedra-exterior3.jpg",
    alt: "Sector de asador y hornos de piedra en los jardines del hotel",
  },
];


const locations = [
  "Aeropuerto Teniente Benjamín Matienzo",
  "San Miguel de Tucumán Centro",
  "Yerba Buena",
  "Tafí del Valle",
  "Hotel Castillo de Piedra",
];

const newsData = [
  {
    id: 1,
    title: "Temporada alta en Tafí del Valle",
    summary:
      "Recomendamos reservar con al menos 10 días de anticipación para asegurar categoría y horario de retiro.",
    tag: "Temporada",
  },
  {
    id: 2,
    title: "Promoción Norte Argentino",
    summary:
      "10% OFF en alquileres de más de 5 días combinados con estadía en Hotel Castillo de Piedra.",
    tag: "Promo",
  },
  {
    id: 3,
    title: "Consejo de ruta",
    summary:
      "Para viajes a Cafayate o Salta se recomienda salir temprano y revisar el estado de rutas por posibles neblinas.",
    tag: "Tips de ruta",
  },
];

// ---------- COMPONENTES DE LAYOUT ----------

function Header() {
  const location = useLocation();

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="brand">
          <span className="brand-logo">S</span>
          <div className="brand-text">
            <span className="brand-name">SINERGIA</span>
            <span className="brand-subtitle">RENT A CAR</span>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" label="Inicio" currentPath={location.pathname} />
          <NavLink to="/flota" label="Flota" currentPath={location.pathname} />
          <NavLink
            to="/reservas"
            label="Reservar"
            currentPath={location.pathname}
          />
          <NavLink
            to="/clima-novedades"
            label="Clima & Novedades"
            currentPath={location.pathname}
          />
          <NavLink
            to="/hotel-castillo-de-piedra"
            label="Castillo de Piedra"
            currentPath={location.pathname}
          />
          <NavLink
            to="/empresa"
            label="Sobre Nosotros"
            currentPath={location.pathname}
          />
          <NavLink
            to="/contacto"
            label="Contacto"
            currentPath={location.pathname}
          />
        </nav>

        <a
          href="https://wa.me/5493814571012"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function NavLink({ to, label, currentPath }) {
  const active = currentPath === to;
  return (
    <Link
      to={to}
      className={`nav-link ${active ? "nav-link-active" : ""}`}
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h4>SINERGIA RENT A CAR</h4>
          <p>
            Movilidad profesional en Tucumán y el Norte Argentino. Autos, vans y
            camionetas para tus viajes de trabajo o descanso.
          </p>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>Tel: +54 9 381 457 1012</p>
          <p>Email: info@sinergiarentacar.com.ar</p>
          <p>Central: San Miguel de Tucumán, Argentina</p>
        </div>
        <div>
          <h5>Horarios</h5>
          <p>Lunes a Domingo: 07:30 a 23:30 hs</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sinergia Rent a Car</span>
        <div className="footer-bottom-right">
          <span>Hecho con React • Diseño orientado a conversión</span>
        </div>
      </div>
    </footer>
  );
}


// ---------- COMPONENTES ESPECÍFICOS ----------

function HeroHome() {
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
        <span className="metric-sub">En entregas y devoluciones</span>
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
      <WeatherWidget city="San Miguel de Tucumán" countryCode="AR" />
    </div>

    <div className="hero-card hero-card-castillo">
      <p className="hero-card-title">Combo Auto + Castillo de Piedra</p>
      <p className="hero-card-text">
        Coordinamos entrega y devolución del vehículo directamente en el
        hotel <strong>Castillo de Piedra</strong> en Tafí del Valle.
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

      {/* De acá para abajo podés dejar tu home como ya la tenías:
          secciones de flota destacada, beneficios, etc. */}
    </div>
  );
}



function BookingForm({ compact = false, defaultIncludeHotel = false }) {
  const BUSINESS_WHATSAPP =
    import.meta.env.VITE_BUSINESS_WHATSAPP || "5493814571012";
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  function getInitialForm() {
    return {
      fullName: "",
      email: "",
      phone: "",
      vehicleCategory: "Cualquiera",
      pickupLocation: locations[0],
      returnLocation: locations[0],
      pickupDate: "",
      returnDate: "",
      driverAge: "",
      notes: "",
      includeHotel: defaultIncludeHotel, // 👈 combo auto + hotel
    };
  }

  const [form, setForm] = useState(getInitialForm);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function buildWhatsAppText(data) {
    return `
Hola, soy ${data.fullName}.

Quiero una cotización en SINERGIA RENT A CAR:

- Retiro: ${data.pickupLocation} (${data.pickupDate || "-"})
- Devolución: ${data.returnLocation} (${data.returnDate || "-"})
- Edad del conductor: ${data.driverAge || "-"}
- Categoría de vehículo: ${data.vehicleCategory}
- Teléfono de contacto: ${data.phone}
- Email: ${data.email}
- Combo Auto + Hotel Castillo de Piedra: ${
      data.includeHotel ? "SÍ, incluir alojamiento" : "No, solo vehículo"
    }
- Comentarios: ${data.notes || "-"}

¡Gracias!
`.trim();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // 1) Guardar / notificar en backend (si está disponible)
      try {
        await fetch(`${API_URL}/api/reservations`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch (err) {
        console.warn(
          "No se pudo contactar al backend, pero seguimos con WhatsApp:",
          err
        );
      }

      // 2) Abrir WhatsApp del negocio con el detalle
      const text = buildWhatsAppText(form);
      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        text
      )}`;

      window.open(waUrl, "_blank");

      setMessage(
        "Te abrimos WhatsApp con tu solicitud de cotización. Un asesor de Sinergia te va a responder a la brevedad."
      );
      setForm(getInitialForm());
    } catch (err) {
      console.error(err);
      setMessage("Hubo un error al enviar la solicitud. Probá nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`card booking-card ${compact ? "booking-card-compact" : ""}`}>
      <h3>Reserva rápida</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre y apellido</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Ej: Juan Pérez"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@correo.com"
            />
          </div>
          <div className="form-group">
            <label>Teléfono / WhatsApp</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Ej: +54 9 381 ..."
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Categoría de vehículo</label>
            <select
              name="vehicleCategory"
              value={form.vehicleCategory}
              onChange={handleChange}
            >
              <option value="Cualquiera">Cualquiera</option>
              <option value="Económico">Económico</option>
              <option value="Compacto">Compacto</option>
              <option value="SUV">SUV</option>
              <option value="Pick-Up">Pick-Up</option>
              <option value="Van">Van</option>
            </select>
          </div>
          <div className="form-group">
            <label>Edad del conductor</label>
            <input
              type="number"
              min="18"
              name="driverAge"
              value={form.driverAge}
              onChange={handleChange}
              placeholder="Ej: 30"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Retiro</label>
            <select
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={handleChange}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Devolución</label>
            <select
              name="returnLocation"
              value={form.returnLocation}
              onChange={handleChange}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Fecha y hora de retiro</label>
            <input
              type="datetime-local"
              name="pickupDate"
              value={form.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha y hora de devolución</label>
            <input
              type="datetime-local"
              name="returnDate"
              value={form.returnDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Checkbox combo Auto + Hotel */}
        <div className="form-row">
          <div className="form-group form-group-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="includeHotel"
                checked={form.includeHotel}
                onChange={handleChange}
              />
              <span>
                Quiero incluir alojamiento en <strong>Castillo de Piedra</strong>
              </span>
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Comentarios adicionales</label>
            <textarea
              name="notes"
              rows="3"
              value={form.notes}
              onChange={handleChange}
              placeholder="Ej: Sillita para bebé, viaje en familia, etc."
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Solicitar cotización por WhatsApp"}
        </button>

        {message && <p className="form-success">{message}</p>}
      </form>
    </div>
  );
}



function WeatherWidget({ city, countryCode }) {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    console.log("DEBUG KEY:", API_KEY, "len:", API_KEY?.length);

    if (!API_KEY) {
      console.warn("No hay VITE_OPENWEATHER_KEY configurada en el .env");
      setStatus("error");
      return;
    }

    async function fetchWeather() {
      try {
        setStatus("loading");

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )},${countryCode}&units=metric&lang=es&appid=${API_KEY}`;

        console.log("DEBUG OpenWeather URL:", url);

        const res = await fetch(url);

        if (!res.ok) {
          const errorText = await res.text();
          console.error(
            "OpenWeather no OK:",
            res.status,
            res.statusText,
            errorText
          );
          throw new Error("Error al obtener el clima");
        }

        const data = await res.json();

        setWeather({
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          desc: data.weather[0]?.description ?? "",
        });
        setStatus("success");
      } catch (err) {
        console.error("Error en fetchWeather:", err);
        setStatus("error");
      }
    }

    fetchWeather();
  }, [city, countryCode]);

  return (
    <div className="card widget">
      <h4>Clima ahora</h4>
      <p className="widget-city">{city}</p>
      {status === "loading" && <p>Cargando clima…</p>}
      {status === "error" && (
        <p className="widget-error">
          No pudimos mostrar el clima ahora. Verificá tu API key.
        </p>
      )}
      {status === "success" && weather && (
        <div className="widget-weather-main">
          <span className="widget-temp">{weather.temp}°C</span>
          <p className="widget-desc">{weather.desc}</p>
          <p className="widget-feels">
            Sensación térmica: {weather.feelsLike}°C
          </p>
        </div>
      )}
    </div>
  );
}


function FleetGrid({ showFilter = false }) {
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
}

function NewsSection() {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Clima & novedades del camino</h2>
          <p>
            Información útil para planificar tu viaje por Tucumán y el Norte.
          </p>
        </div>
      </div>
      <div className="news-grid">
        {newsData.map((item) => (
          <article key={item.id} className="card news-card">
            <span className="badge badge-soft">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HotelPromoBanner() {
  return (
    <section className="section hotel-banner">
      <div className="hotel-banner-content">
        <h2>Auto + Hotel Castillo de Piedra</h2>
        <p>
          Aprovechá la sinergia perfecta: reservando tu auto con SINERGIA RENT
          A CAR obtenés beneficios exclusivos en Hotel Castillo de Piedra.
        </p>
        <ul>
          <li>10% OFF en estadías de 3 noches o más.</li>
          <li>Late check-out sujeto a disponibilidad.</li>
          <li>Upgrade de categoría en reservas seleccionadas.</li>
        </ul>
        <div className="hotel-banner-actions">
          <Link to="/hotel-castillo-de-piedra" className="btn btn-primary">
            Ver beneficios
          </Link>
          <a href="#contacto" className="btn btn-outline">
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- PÁGINAS ----------

function HomePage() {
  return (
    <>
      <HeroHome />
      <FleetGrid />
      <HotelPromoBanner />
    </>
  );
}

function FleetPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Nuestra flota</h1>
        <p>
          Elegí el vehículo que mejor se adapte a tu tipo de viaje: trabajo,
          escapada de fin de semana o vacaciones en familia.
        </p>
      </header>
      <FleetGrid showFilter />
    </div>
  );
}

function BookingPage() {
  const [searchParams] = useSearchParams();
  const includeHotelByDefault = searchParams.get("combo") === "hotel";

  return (
    <div className="page">
      <header className="page-header">
        <h1>Reservar vehículo</h1>
        <p>
          Completá los datos y recibí la confirmación con todos los detalles de
          tu reserva.
        </p>
      </header>
      <div className="page-two-columns">
        <BookingForm defaultIncludeHotel={includeHotelByDefault} />
        <div className="card booking-info-card">
          <h3>Requisitos básicos</h3>
          <ul>
            <li>Ser mayor de 21 años (consultar cargos de 18 a 21).</li>
            <li>Licencia de conducir vigente.</li>
            <li>Tarjeta de crédito para depósito de garantía.</li>
            <li>Documento de identidad.</li>
          </ul>
          <p className="muted">
            Las condiciones definitivas se confirman en el contrato de alquiler.
          </p>
        </div>
      </div>
    </div>
  );
}


function NewsWeatherPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Clima & Novedades</h1>
        <p>
          Antes de salir a la ruta, revisá el clima y las últimas novedades de
          la región.
        </p>
      </header>

      <div className="page-two-columns">
        <div className="page-column">
          <WeatherWidget city="San Miguel de Tucumán" countryCode="AR" />
          <WeatherWidget city="Tafí del Valle" countryCode="AR" />
        </div>
        <div className="page-column">
          <NewsSection />
        </div>
      </div>
    </div>
  );
}

function HotelPage() {
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
            piedra, calefacción, baño privado y vistas al valle o al jardín.
            Hay opciones para parejas, familias y pequeños grupos.
          </p>

          <h4 style={{ marginTop: 16 }}>Servicios destacados</h4>
          <ul>
            <li>Piscina al aire libre con solárium.</li>
            <li>Sauna e hidromasaje para relajarse después de recorrer el valle.</li>
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
            <li>Descuento especial en estadías combinadas con alquiler de auto.</li>
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
}



function AboutPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Sobre Sinergia Rent a Car</h1>
        <p>
          Un concepto profesional de alquiler de vehículos pensado para el Norte
          Argentino, con base en Tucumán.
        </p>
      </header>

      {/* Bloque principal: historia + cómo trabajamos */}
      <div className="page-two-columns" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Quiénes somos</h3>
          <p>
            Sinergia Rent a Car nace en San Miguel de Tucumán como un{" "}
            <strong>nuevo concepto profesional</strong> en el rubro de alquiler
            de vehículos. El foco siempre fue el mismo: hacer que alquilar un
            auto, SUV o camioneta sea{" "}
            <strong>simple, claro y sin letra chica</strong>, especialmente para
            quienes recorren Tucumán y todo el Norte Argentino.
          </p>
          <p>
            Desde nuestros inicios fuimos incorporando flota y puntos de
            entrega, acompañando el crecimiento turístico de la región y las
            necesidades de las empresas locales. Hoy somos una de las{" "}
            <strong>opciones de referencia en Tucumán y el NOA</strong> para
            quienes buscan movilidad confiable, tanto en viajes de ocio como de
            trabajo.
          </p>
          <p>
            Operamos todos los días en una franja horaria amplia, de{" "}
            <strong>07:30 a 23:30</strong>, para adaptarnos a horarios de
            vuelos, micros y traslados internos. Nuestro equipo combina
            experiencia en turismo, logística y atención al cliente para ofrecer
            un servicio ágil, cercano y resolutivo.
          </p>

          <h3 style={{ marginTop: 20 }}>Cómo trabajamos</h3>
          <ul>
            <li>
              <strong>Transparencia total:</strong> condiciones claras desde el
              primer contacto, sin sorpresas al retirar o devolver la unidad.
            </li>
            <li>
              <strong>Flexibilidad de retiro y devolución:</strong> podés
              coordinar en aeropuerto, ciudad, Yerba Buena, Tafí del Valle,
              Hotel Castillo de Piedra y otros puntos de la región.
            </li>
            <li>
              <strong>Asistencia 24/7:</strong> acompañamiento permanente por
              WhatsApp y teléfono durante todo el alquiler.
            </li>
            <li>
              <strong>Flota pensada para la región:</strong> autos compactos
              para ciudad, SUVs para rutas de montaña y pick-ups/camionetas para
              caminos más exigentes.
            </li>
            <li>
              <strong>Experiencia digital:</strong> reservas y seguimiento por
              web y WhatsApp, con confirmaciones ágiles y atención
              personalizada.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Servicios que ofrecemos</h3>
          <ul>
            <li>
              <strong>Alquiler diario y por tramo:</strong> ideal para escapadas
              de fin de semana, viajes cortos o visitas de trabajo.
            </li>
            <li>
              <strong>Turismo en el NOA:</strong> vehículos preparados para
              recorrer Tafí del Valle, Amaicha, Cafayate, Salta, Jujuy y otras
              rutas clásicas del Norte Argentino.
            </li>
            <li>
              <strong>Viajes corporativos:</strong> soluciones para empresas,
              eventos, equipos comerciales y traslados ejecutivos.
            </li>
            <li>
              <strong>Alquiler mensual / largo plazo:</strong> alternativas para
              quienes necesitan una unidad fija sin inmovilizar capital en un
              vehículo propio.
            </li>
            <li>
              <strong>Entrega donde estés:</strong> llevamos el auto a tu hotel,
              oficina o punto de encuentro acordado, para que ganes tiempo y
              comodidad.
            </li>
            <li>
              <strong>Combos Auto + Hotel:</strong> beneficios especiales al
              combinar tu alquiler de vehículo con estadías en{" "}
              <strong>Hotel Castillo de Piedra</strong> en Tafí del Valle.
            </li>
          </ul>

          <h3 style={{ marginTop: 20 }}>Nuestra filosofía</h3>
          <p>
            Sabemos que cuando alquilás un auto, nos confiás algo más que un
            vehículo: nos confiás tu viaje, tus horarios y a tu familia o tu
            equipo de trabajo. Por eso trabajamos con un enfoque muy concreto:
            <strong> resolver la movilidad sin complicaciones</strong>, con
            trato humano, respuestas rápidas y soporte real cuando más se
            necesita.
          </p>
          <p>
            Queremos que quienes nos eligen sientan que con Sinergia ganan{" "}
            <strong>tiempo, comodidad y libertad</strong>: el auto listo, en el
            lugar y momento acordados, para que solo quede disfrutar el camino.
          </p>
        </div>
      </div>

      {/* Bloque extra: cobertura y enfoque regional */}
      <section className="section">
        <div className="card">
          <h3>Cobertura en Tucumán y el Norte Argentino</h3>
          <p>
            Nuestra base operativa está en{" "}
            <strong>San Miguel de Tucumán</strong>, con operación habitual en el{" "}
            <strong>Aeropuerto Teniente Benjamín Matienzo</strong> y puntos
            estratégicos como Yerba Buena y Tafí del Valle. Desde allí
            coordinamos entregas y devoluciones en distintos puntos de la
            provincia y otras ciudades del NOA, según disponibilidad.
          </p>
          <p>
            Si estás planificando un viaje por el Norte, un evento corporativo o
            una estadía en <strong>Castillo de Piedra</strong>, nuestro equipo
            puede ayudarte a diseñar la mejor combinación de vehículo, rutas y
            tiempos de retiro/devolución para que tu experiencia sea lo más
            fluida posible.
          </p>
        </div>
      </section>
    </div>
  );
}



function ContactPage() {
  return (
    <div className="page" id="contacto">
      <header className="page-header">
        <h1>Contacto</h1>
        <p>Estamos listos para ayudarte a planificar tu próximo viaje.</p>
      </header>

      <div className="page-two-columns">
        <div className="card">
          <h3>Escribinos</h3>
          <ContactForm />
        </div>
        <div className="card">
          <h3>Datos de contacto</h3>
          <p>Tel: +54 9 381 457 1012</p>
          <p>Email: info@sinergiarentacar.com.ar</p>
          <p>Central: San Miguel de Tucumán, Argentina</p>
          <a
            href="https://wa.me/5493814571012"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-full"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const BUSINESS_WHATSAPP =
    import.meta.env.VITE_BUSINESS_WHATSAPP || "5493814571012";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function buildWhatsAppText(data) {
    return `
Hola, soy ${data.name}.

Te escribo desde el formulario de contacto de la web de SINERGIA RENT A CAR.

Datos de contacto:
- Email: ${data.email}

Mensaje:
${data.message}

¡Muchas gracias!
    `.trim();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(false);
    setError("");
    setLoading(true);

    try {
      const text = buildWhatsAppText(form);
      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        text
      )}`;

      window.open(waUrl, "_blank");
      setSent(true);
      // si querés limpiar el form al enviar:
      // setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error abriendo WhatsApp:", err);
      setError("No se pudo abrir WhatsApp. Verificá tu conexión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="tu@correo.com"
        />
      </div>
      <div className="form-group">
        <label>Mensaje</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Contanos qué necesitás…"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={loading}
      >
        {loading ? "Abriendo WhatsApp..." : "Enviar mensaje por WhatsApp"}
      </button>

      {sent && (
        <p className="form-success">
          Te abrimos WhatsApp con tu mensaje. Solo tenés que enviarlo 😊
        </p>
      )}
      {error && <p className="form-error">{error}</p>}
    </form>
  );
}




// ---------- APP ROOT ----------

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flota" element={<FleetPage />} />
          <Route path="/reservas" element={<BookingPage />} />
          <Route path="/clima-novedades" element={<NewsWeatherPage />} />
          <Route path="/hotel-castillo-de-piedra" element={<HotelPage />} />
          <Route path="/empresa" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
