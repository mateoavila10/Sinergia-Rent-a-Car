import React, { useState, useEffect } from "react";

function WeatherWidget({ city, countryCode }) {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | offline
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

    if (!API_KEY) {
      console.warn("No hay VITE_OPENWEATHER_KEY configurada en el .env");
      setStatus("error");
      setErrorMessage(
        "Clima no disponible en este entorno. Falta configurar la API de clima."
      );
      return;
    }

    async function fetchWeather() {
      // Sin conexión a internet
      if (!navigator.onLine) {
        setStatus("offline");
        setErrorMessage(
          "No pudimos conectar para traer el clima. Verificá tu conexión a internet."
        );
        return;
      }

      try {
        setStatus("loading");

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )},${countryCode}&units=metric&lang=es&appid=${API_KEY}`;

        const res = await fetch(url);

        if (!res.ok) {
          const errorText = await res.text();
          console.error("OpenWeather no OK:", res.status, res.statusText, errorText);
          setStatus("error");
          setErrorMessage(
            "No pudimos mostrar el clima ahora. Intentá nuevamente en unos minutos."
          );
          return;
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

        if (!navigator.onLine) {
          setStatus("offline");
          setErrorMessage(
            "No pudimos conectar para traer el clima. Verificá tu conexión a internet."
          );
        } else {
          setStatus("error");
          setErrorMessage(
            "No pudimos mostrar el clima ahora. Verificá tu conexión o la API de clima."
          );
        }
      }
    }

    fetchWeather();
  }, [city, countryCode]);

  return (
    <div className="card widget">
      <h4>Clima ahora</h4>
      <p className="widget-city">{city}</p>

      {status === "loading" && <p>Cargando clima…</p>}

      {(status === "error" || status === "offline") && (
        <p className="widget-error">{errorMessage}</p>
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

export default WeatherWidget;
