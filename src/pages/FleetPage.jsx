import FleetGrid from "../components/widgets/FleetGrid";

export default function FleetPage() {
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
