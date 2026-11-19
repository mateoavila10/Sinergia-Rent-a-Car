// Cifras confirmadas por el cliente (ver PRODUCT.md), impresas como filas del tablero.
const stats = [
  { label: "Unidades activas", note: "Autos, SUVs, pick-ups y vans", value: "60+" },
  { label: "Puntualidad", note: "En entregas y devoluciones", value: "98%" },
  { label: "Atención", note: "Todos los días, por WhatsApp y teléfono", value: "24 h" },
  { label: "Puntos de entrega", note: "Aeropuerto, ciudad, Yerba Buena, Tafí y hotel", value: "5" },
];

export default function BoardStats() {
  return (
    <section className="stats" aria-label="Sinergia en números">
      <dl className="stats-list">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <dt className="stat-label">
              {s.label}
              <span className="stat-note">{s.note}</span>
            </dt>
            <dd className="stat-value">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
