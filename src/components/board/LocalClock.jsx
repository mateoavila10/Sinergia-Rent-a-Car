import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("es-AR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/Argentina/Tucuman",
});

// Hora real de Tucumán, actualizada cada 20 segundos.
export default function LocalClock({ className = "" }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`clock ${className}`}>
      <span className="clock-place">TUC</span>{" "}
      <time dateTime={now.toISOString()}>{fmt.format(now)}</time>
      <span className="clock-sep" aria-hidden="true">·</span>
      <span className="clock-open">Abierto 24 h</span>
    </span>
  );
}
