# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

En orden de importancia (confirmado por el cliente):

1. **Turistas de otras provincias** que llegan a Tucumán (mayormente en avión) y necesitan auto para recorrer el NOA: Tafí del Valle, Amaicha, Cafayate, Salta, Jujuy.
2. **Empresas y viajes de trabajo**: ejecutivos, equipos comerciales, eventos, alquileres mensuales o de largo plazo.
3. **Locales de Tucumán** que necesitan un vehículo por unos días.
4. **Turistas extranjeros**.

El trabajo del visitante: elegir una categoría de vehículo, saber dónde y cuándo retirarlo, y pedir una cotización sin fricción. Muchos llegan desde el celular, a menudo planificando el viaje o ya en camino.

## Product Purpose

Sitio de Sinergia Rent a Car, rentadora de vehículos con base en San Miguel de Tucumán. Convierte visitas en pedidos de cotización por WhatsApp. Éxito = más consultas por WhatsApp con los datos completos (fechas, lugares, categoría).

## Positioning

- Rentadora local del NOA, no una cadena internacional: trato directo, respuesta por WhatsApp y una persona del equipo del otro lado.
- "Sin letra chica": condiciones claras desde el primer contacto.
- Entrega y devolución donde el cliente lo necesita: Aeropuerto Teniente Benjamín Matienzo, centro de San Miguel de Tucumán, Yerba Buena, Tafí del Valle y Hotel Castillo de Piedra.
- Flota pensada para la región: ciudad, rutas de montaña y caminos exigentes.

## Operating Context

- Reserva = formulario que arma un mensaje de WhatsApp al número del negocio (+54 9 381 457 1012). No hay pago online ni backend.
- Sede: **Av. Soldati 380, T4000 San Miguel de Tucumán** (Google Maps: "Sinergia Rent a Car", plus code 5RF4+2H).
- Horario: **abierto las 24 horas, todos los días** (confirmado por el cliente).
- Email: **info@sinergiarentacar.com** (confirmado por el cliente).
- Sitio oficial existente: rentacarsinergia.com.ar (WordPress, tema "sinergia2026", por IDE Comunicación Digital). Menciona seguro incluido, kilometraje libre, asistencia en ruta 24/7, unidades con inspección completa, tours "Sinergia Travel" (City Tour San Miguel de Tucumán, Circuito Las Yungas, Tafí del Valle) y avales de Tucumán Bureau, CAMTUC y FET.- Requisitos para alquilar: mayor de 18 años, licencia vigente, tarjeta de crédito para depósito en garantía, documento de identidad.
- Combo Auto + Hotel Castillo de Piedra (Tafí del Valle): entrega del auto en el hotel y beneficios en la estadía. El sitio del hotel está caído (nov 2026); no enlazar ni copiar material de allí.

## Capabilities and Constraints

- Stack: React 19 + Vite + React Router, publicado en Vercel desde la rama `main`.
- Rutas: Inicio, Flota, Reservar, Clima & Novedades, Castillo de Piedra, Sobre Nosotros, Contacto.
- Categorías de flota: Económico, Compacto (automático), SUV, Pick-Up 4x4, Van 7 pasajeros, con precio "desde" por día en ARS.
- Clima en vivo por OpenWeather (key `OPENWEATHER_KEY` en Vercel).
- Abierto: si el combo con el hotel sigue vigente mientras su sitio está caído.

## Brand Commitments

- Nombre: **Sinergia Rent a Car** (SINERGIA®, RENT A CAR).
- Logo oficial: isotipo "S" en naranja y azul marino + wordmark "SINERGIA" naranja y "RENT A CAR" azul marino. Archivo: `public/logo-sinergia.jpeg` (1259×735, fondo blanco).
- Colores del logo: naranja (#FE6905 aprox.) y azul marino. Son binding.
- Voz: español rioplatense, cercano y directo ("Retirá", "Cotizá"), sin letra chica.

## Evidence on Hand

- Cifras confirmadas como reales por el cliente: **60+ unidades activas**, **98% de puntualidad** en entregas y devoluciones, **asistencia 24/7**.
- Google Maps (consultado 2026-11-18): **4,8 ★ con 237 opiniones**. Temas que se repiten: atención personalizada (el equipo se nombra: Karim, Andrés), autos impecables, puntualidad, todo claro, buenos precios. Reseñas públicas citables con nombre y fuente:
  - Nicolas Juncos (hace 6 meses): atención de Karim, auto impecable, "cumplieron en todo lo pactado".
  - Hernan Fabrizio, Local Guide (hace 3 meses): "Todo super claro y muy buenos precios".
  - Julio Ocampo (hace un año): vehículo impecable, Karim siempre en contacto.
  Las cifras de Google cambian: mostrarlas con fecha o enlazar a la ficha.
- Fotos en la ficha de Google (55): pertenecen a sus autores; no copiarlas sin permiso. El cliente puede aportar fotos propias del local y del equipo.
- Disponible para conseguir (todavía no en el proyecto): fotos del local y del equipo, reseñas reales de Google.
- **No hay** fotos propias de la flota: no usar fotos de autos que no se alquilan; la flota muestra "Foto próximamente" hasta tenerlas (`public/fotos/flota/`).
- No inventar testimonios, reseñas, clientes corporativos, premios ni cifras adicionales.

## Product Principles

1. Llegar a WhatsApp en el menor número de pasos, desde cualquier página.
2. Mostrar solo lo verdadero: fotos, cifras y beneficios que existen.
3. Lo local es la ventaja: lugares reales del NOA, rutas y horarios concretos.
4. Pensado primero para el celular de alguien que está viajando.

## Accessibility & Inclusion

WCAG 2.2 AA (contraste, foco visible, labels, objetivos táctiles de 44px, movimiento reducido) — ya trabajado en la auditoría de noviembre 2026; no retroceder.
