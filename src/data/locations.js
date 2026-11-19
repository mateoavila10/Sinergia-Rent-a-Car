// Puntos de entrega y devolución. `board` es el texto corto del tablero.
export const pickupPoints = [
  {
    id: "aeropuerto",
    name: "Aeropuerto Teniente Benjamín Matienzo",
    board: "AEROPUERTO TUC",
    status: "LISTO AL ATERRIZAR",
    detail: "Te esperamos en arribos",
  },
  {
    id: "centro",
    name: "San Miguel de Tucumán Centro",
    board: "SAN MIGUEL CENTRO",
    status: "LISTO",
    detail: "Sede Av. Soldati 380",
  },
  {
    id: "yerba-buena",
    name: "Yerba Buena",
    board: "YERBA BUENA",
    status: "LISTO",
    detail: "Entrega a domicilio u hotel",
  },
  {
    id: "tafi",
    name: "Tafí del Valle",
    board: "TAFÍ DEL VALLE",
    status: "A COORDINAR",
    detail: "Por Ruta 307",
  },
  {
    id: "castillo",
    name: "Hotel Castillo de Piedra",
    board: "CASTILLO DE PIEDRA",
    status: "EN EL HOTEL",
    detail: "Combo Auto + Hotel",
  },
];

// Compatibilidad con los formularios: lista de nombres.
export const locations = pickupPoints.map((p) => p.name);
