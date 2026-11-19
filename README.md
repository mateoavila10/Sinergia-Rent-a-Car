# SINERGIA RENT A CAR – Plataforma Web

Sitio web completo para **SINERGIA RENT A CAR**, orientado a conversión de ventas y a la gestión interna de reservas.  
Incluye:

- Landing comercial con foco en **alquiler de vehículos sin letra chica**.
- Módulo de **reservas vía WhatsApp** (auto y combo Auto + Hotel Castillo de Piedra).
- Información de **clima en tiempo real** (OpenWeather).
- Secciones de **flota**, **clima & novedades**, **Castillo de Piedra**, **sobre la empresa** y **contacto**.
- **Panel de administración de reservas** conectado a **MySQL**.

---

## 1. Tecnologías principales

**Frontend**

- React + Vite
- React Router
- CSS puro (diseño custom, sin framework)  
- OpenWeather API (clima)

**Backend**

- Node.js + Express
- MySQL2 (conexión a base de datos MySQL)
- CORS habilitado para consumir desde el front

**Base de datos**

- MySQL (o compatible: MariaDB, etc.)

---


## Fotos

Las fotos se guardan en el proyecto (no se enlazan desde otros sitios). Mientras falte una, la flota muestra "Foto próximamente".

| Archivo | Qué va |
|---|---|
| `public/fotos/flota/economico.jpg` | Auto económico real de la flota |
| `public/fotos/flota/compacto.jpg` | Compacto automático |
| `public/fotos/flota/suv.jpg` | SUV |
| `public/fotos/flota/pickup.jpg` | Pick-up 4x4 |
| `public/fotos/flota/van.jpg` | Van 7 pasajeros |

Formato recomendado: JPG horizontal, unos 1200px de ancho y menos de 300 KB.
