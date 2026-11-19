import { useEffect, useState } from "react";

// En Vercel la key se llama OPENWEATHER_KEY; en local puede ser VITE_OPENWEATHER_KEY.
const API_KEY = import.meta.env.OPENWEATHER_KEY || import.meta.env.VITE_OPENWEATHER_KEY;

const MSG_ERROR = "No pudimos mostrar el clima ahora. Probá de nuevo en unos minutos.";
const MSG_OFFLINE = "Sin conexión: no pudimos traer el clima.";

function WeatherWidget({ city, countryCode, label }) {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState(API_KEY ? "loading" : "error");

  useEffect(() => {
    if (!API_KEY) return;
    let cancelled = false;

    async function fetchWeather() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )},${countryCode}&units=metric&lang=es&appid=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`OpenWeather ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
        setWeather({
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          desc: data.weather[0]?.description ?? "",
        });
        setStatus("success");
      } catch (err) {
        console.error("Clima:", err);
        if (!cancelled) setStatus(navigator.onLine ? "error" : "offline");
      }
    }

    fetchWeather();
    return () => {
      cancelled = true;
    };
  }, [city, countryCode]);

  return (
    <section className="card widget" aria-live="polite">
      <h2 className="widget-title">Clima ahora</h2>
      <p className="widget-city">{label || city}</p>

      {status === "loading" && <p className="widget-error">Cargando clima…</p>}
      {status === "error" && <p className="widget-error">{MSG_ERROR}</p>}
      {status === "offline" && <p className="widget-error">{MSG_OFFLINE}</p>}

      {status === "success" && weather && (
        <div className="widget-weather-main">
          <span className="widget-temp">{weather.temp}°C</span>
          <p className="widget-desc">{weather.desc}</p>
          <p className="widget-feels">Sensación térmica: {weather.feelsLike}°C</p>
        </div>
      )}
    </section>
  );
}

export default WeatherWidget;
