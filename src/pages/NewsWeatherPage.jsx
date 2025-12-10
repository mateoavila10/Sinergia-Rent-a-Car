import WeatherWidget from "../components/widgets/WeatherWidget";
import NewsSection from "../components/widgets/NewsSection";

export default function NewsWeatherPage() {
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
