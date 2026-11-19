// Íconos dibujados a mano: un solo trazo, mismo grosor.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function StarIcon({ className = "icon" }) {
  return (
    <svg {...base} className={className} fill="currentColor" strokeWidth={1.5}>
      <path d="M12 3.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L3.3 9.5l6.1-.7z" />
    </svg>
  );
}

export function ArrowIcon({ className = "icon" }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CarIcon({ className = "icon" }) {
  return (
    <svg {...base} className={className} viewBox="0 0 64 28" strokeWidth={1.5}>
      <path d="M4 20v-5l6-1 7-6h20l9 6 10 1.5c2 .3 4 2 4 4V20" />
      <path d="M2 20h60" />
      <circle cx="16" cy="21" r="4" />
      <circle cx="48" cy="21" r="4" />
      <path d="M19 9.5 17 14h29l-7-4.5" />
    </svg>
  );
}
