// Datos del negocio en un solo lugar.
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_BUSINESS_WHATSAPP || "5493814571012";

export const site = {
  name: "Sinergia Rent a Car",
  phoneDisplay: "+54 9 381 457-1012",
  phoneHref: "tel:+5493814571012",
  email: "info@sinergiarentacar.com",
  address: "Av. Soldati 380, San Miguel de Tucumán",
  hours: "Abierto las 24 horas, todos los días",
  mapsUrl:
    "https://www.google.com/maps/place/Sinergia+Rent+a+Car/@-26.8274018,-65.1935595,17z/data=!4m6!3m5!1s0x94225d69e7409a43:0x9e6818a7c87decee!8m2!3d-26.8274018!4d-65.1935595",
  // Ficha de Google Maps, consultada el 18/11/2026
  rating: { value: "4,8", count: 237, checked: "noviembre 2026" },
};

export function whatsappUrl(text = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
