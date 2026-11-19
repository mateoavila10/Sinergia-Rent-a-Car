import { Link } from "react-router-dom";
import SplitFlap from "../components/board/SplitFlap";

export default function NotFoundPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>
          <SplitFlap text="Destino no encontrado" className="page-flap" />
        </h1>
        <p>Esta página no existe o cambió de lugar.</p>
      </header>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-signal btn-lg">Volver al inicio</Link>
        <Link to="/reservas" className="btn btn-ghost-ink btn-lg">Pedir una cotización</Link>
      </div>
    </div>
  );
}
