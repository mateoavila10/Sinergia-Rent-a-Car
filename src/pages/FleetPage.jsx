import FleetGrid from "../components/widgets/FleetGrid";

export default function FleetPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Nuestra flota</h1>
        <p>
          Elegí el vehículo según tu viaje: trabajo, escapada de fin de semana
          o vacaciones en familia por el Norte.
        </p>
      </header>
      <FleetGrid showFilter title="Categorías y precios" />
    </div>
  );
}
