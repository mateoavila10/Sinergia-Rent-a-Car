import WeatherWidget from "../components/widgets/WeatherWidget";
import NewsSection from "../components/widgets/NewsSection";

export default function NewsWeatherPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Clima y ruta</h1>
        <p>
          Antes de salir, revisá el clima en la ciudad y en los valles, y las
          novedades de la región.
        </p>
      </header>

      <div className="page-two-columns">
        <NewsSection />
        <div className="page-column">
          <WeatherWidget city="San Miguel de Tucumán" countryCode="AR" />
          <WeatherWidget city="Tafí del Valle" countryCode="AR" />
        </div>
      </div>
    </div>
  );
}
