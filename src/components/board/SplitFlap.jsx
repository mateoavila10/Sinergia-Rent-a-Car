import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ0123456789";

// Las palabras se mantienen enteras al cortar línea.
function splitWords(s) {
  return s.split(" ").filter(Boolean);
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Texto en paletas de tablero. Cuando `text` cambia, cada paleta gira por
 * algunas letras antes de asentarse (de izquierda a derecha).
 * El texto real siempre está disponible para lectores de pantalla.
 */
export default function SplitFlap({ text, className = "", tiles = true }) {
  const target = text.toUpperCase();
  const [shown, setShown] = useState(target);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const start = Date.now();
    const perChar = 28; // ms de demora entre paletas
    const spin = 260; // ms que gira cada paleta
    const total = target.length * perChar + spin;
    // Intervalo (no requestAnimationFrame): si el navegador pausa la pestaña,
    // el cierre de abajo igual deja el texto final.
    const id = setInterval(() => {
      const t = Date.now() - start;
      const next = [...target]
        .map((ch, i) => {
          if (ch === " " || t >= i * perChar + spin) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setShown(next);
    }, 45);
    const end = setTimeout(() => {
      clearInterval(id);
      setShown(target);
    }, total + 20);
    return () => {
      clearInterval(id);
      clearTimeout(end);
      setShown(target);
    };
  }, [target]);

  const display = prefersReducedMotion() ? target : shown;

  return (
    <span className={`flap ${tiles ? "flap-tiles" : ""} ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flap-chars">
        {tiles
          ? splitWords(display).map((word, w) => (
              <span key={w} className="flap-word">
                {[...word].map((ch, i) => (
                  <span key={i} className="flap-tile">{ch}</span>
                ))}
              </span>
            ))
          : display}
      </span>
    </span>
  );
}
