---
name: Sinergia Rent a Car
description: El tablero de arribos de Tucumán. Cada punto de entrega es una fila con tu auto listo.
colors:
  board: "#161b45"
  board-deep: "#0d1131"
  board-line: "#2a3170"
  flap: "#0b0f2b"
  on-board: "#eef1f6"
  on-board-dim: "#a9b3d6"
  signal: "#ff7a2e"
  signal-hover: "#ff9152"
  navy: "#303673"
  orange: "#c75726"
  orange-text: "#a3401a"
  paper: "#f3f4f8"
  sheet: "#ffffff"
  ink: "#161b45"
  ink-soft: "#4a5182"
  line: "#d6dae8"
typography:
  display:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 5vw, 64px)"
    fontWeight: 800
    lineHeight: 1
  headline:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "46px"
    fontWeight: 800
    lineHeight: 1
  title:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "30px"
    fontWeight: 750
    lineHeight: 1.05
  figure:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "52px"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 750
    letterSpacing: "0.1em"
  column-head:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  flap: "0.07em"
  button: "6px"
  field: "8px"
  card: "12px"
  ticket: "14px"
  panel: "16px"
  step: "50%"
spacing:
  gutter: "24px"
  gutter-mobile: "16px"
  max: "1240px"
  section: "88px"
  section-mobile: "64px"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.board-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
    height: "44px"
  button-signal-hover:
    backgroundColor: "{colors.signal-hover}"
  button-signal-lg:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.button}"
    padding: "8px 26px"
    height: "56px"
  button-ink:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-board}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
    height: "44px"
  button-ink-hover:
    backgroundColor: "{colors.board}"
  button-ghost:
    textColor: "{colors.on-board}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
    height: "44px"
  button-ghost-ink:
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
    height: "44px"
  button-ghost-ink-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-board}"
  input:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
    height: "48px"
  flap-tile:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.on-board}"
    rounded: "{rounded.flap}"
    width: "0.74em"
    height: "1.14em"
  board-row:
    textColor: "{colors.on-board}"
    padding: "10px 12px"
    height: "68px"
  board-row-selected:
    backgroundColor: "{colors.board-deep}"
  ticket:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
  step-number:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-board}"
    rounded: "{rounded.step}"
    size: "32px"
  card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  combo:
    backgroundColor: "{colors.board}"
    textColor: "{colors.on-board}"
    rounded: "{rounded.panel}"
    padding: "40px"
  nav-bar:
    backgroundColor: "{colors.board-deep}"
    textColor: "{colors.on-board-dim}"
    padding: "10px 24px"
---

# Design System: Sinergia Rent a Car

## Overview

**Creative North Star: "El tablero de arribos"**

Sinergia se lee como el tablero de arribos de una terminal tucumana. Las superficies dominantes son el azul marino del logo, oscurecido hasta volverse tablero; sobre él, lo que es "estado" (destinos, horarios, cifras, precios, acciones) aparece en tipografía condensada de tablero, en blanco frío o en el naranja del logo encendido. Todo lo que se lee con calma (descripciones, reseñas, condiciones) vuelve a una sans pública y legible, sobre papel claro.

La densidad es la de una terminal: filas separadas por líneas finas, columnas con encabezados chicos y espaciados, cifras con números tabulares. No hay tarjetas iguales en grilla ni foto de ruta con buscador encima; la información se presenta como filas que se pueden recorrer con la vista. El formulario de cotización es la única pieza "de papel" sobre el tablero: un talón de embarque claro, con troquel y numeración al margen.

El sistema trabaja con dos tintas (azul marino y naranja) más el fondo. El movimiento existe en un solo lugar con sentido: las paletas split-flap giran cuando cambia el texto que muestran, y se quedan quietas si el usuario pidió menos movimiento.

**Key Characteristics:**
- Tablero azul marino como superficie dominante; papel claro para leer.
- Tipografía condensada de tablero para estados, títulos, etiquetas y botones; sans legible para lectura.
- Filas impresas con líneas finas en vez de tarjetas.
- Naranja reservado a estados, cifras y la acción principal.
- Talón de cotización claro con troquel, perforado y pasos numerados al margen.
- Paletas split-flap con bisagra como firma tipográfica.

## Colors

Dos tintas del logo, azul marino y naranja, desdobladas en una versión "tablero" (oscura, encendida) y una versión "impresa" (sobre claro), más los neutros de papel.

### Primary
- **Azul Tablero** (`board`): superficie de la portada, las bandas de flota, el encabezado de cada página interna y el panel del combo. Es el fondo del sitio en sentido narrativo.
- **Azul Noche Profundo** (`board-deep`): barra de navegación, fila de cifras, pie y la fila seleccionada del tablero. Un escalón más abajo que el tablero para separar franjas sin sombras.
- **Línea de Tablero** (`board-line`): divisores entre filas, bordes de franjas, punteado de las cifras.
- **Paleta** (`flap`): el fondo de cada ficha split-flap; el tono más oscuro del sistema.
- **Azul Logo** (`navy`): el azul del logo tal cual. Títulos sobre papel, botón tinta, círculos de paso, foco sobre claro, casilla marcada.

### Secondary
- **Naranja Encendido** (`signal`): el naranja del logo llevado a luz de tablero. Estados ("LISTO", "24 H"), cifras, precios, la palabra destino de los titulares, el subrayado del link activo y el botón principal. Sobre `board` y `board-deep` contrasta 6.3:1. Su hover es `signal-hover`.
- **Naranja Logo** (`orange`): el naranja del logo tal cual. Solo en piezas gráficas sobre claro (estrella de puntaje, viñetas de lista); nunca en texto chico.
- **Naranja Texto** (`orange-text`): el naranja oscurecido para texto chico sobre claro (claves de contacto, etiquetas de categoría), 5.6:1 sobre papel.

### Neutral
- **Blanco Frío** (`on-board`): texto principal sobre tablero.
- **Blanco Atenuado** (`on-board-dim`): texto secundario, encabezados de columna y links de navegación en reposo sobre tablero.
- **Papel** (`paper`): fondo general de las páginas claras.
- **Hoja** (`sheet`): talón, tarjetas y campos de formulario.
- **Tinta** (`ink`): texto sobre claro; el mismo valor que el tablero, para que tinta y tablero sean una sola tinta.
- **Tinta Suave** (`ink-soft`): texto secundario, etiquetas de campo y subtítulos sobre claro.
- **Línea** (`line`): bordes de campos y tarjetas, perforado del talón, divisores de reseñas.

### Named Rules
**La Regla de las Dos Tintas.** Azul marino y naranja más el fondo, nada más. No se agrega un tercer color de marca ni acentos decorativos; los únicos colores fuera de la paleta son los funcionales de éxito y error del formulario.

**La Regla de la Luz Encendida.** Sobre tablero, el naranja es `signal`; sobre papel, el naranja es `orange-text` (texto) u `orange` (gráfico). El naranja del logo crudo nunca se usa como texto chico.

## Typography

**Display Font:** Big Shoulders Display Variable (con Arial Narrow, sans-serif)
**Body Font:** Public Sans Variable (con system-ui, sans-serif)

**Character:** Una condensada de tablero de terminal, en mayúsculas y pesos altos (650 a 800), para todo lo que es estado o señal; una sans pública, sobria y muy legible, para todo lo que se lee. La condensada nunca carga párrafos.

### Hierarchy
- **Display** (800, clamp(40px, 5vw, 64px), 1): títulos de página en el encabezado de tablero. En portada, el titular en paletas va de clamp(21px, 3vw, 42px) a clamp(34px, 4.6vw, 66px) para la línea destino en naranja.
- **Headline** (800, 46px, 1; 36px bajo 640px): títulos de sección y de banda, en mayúsculas.
- **Title** (750-800, 30px, 1.05): nombre de vehículo en la fila de flota, títulos de tarjeta, ciudad del clima. Talón: 34px.
- **Figure** (800, 52px, 1, números tabulares): cifras, precios (34px), puntaje (88px), código de combo (104px). Siempre en `signal` sobre tablero o `navy` sobre papel.
- **Body** (400, 17px; 16px bajo 640px, 1.55): lectura. Líneas de 52 a 62ch.
- **Label** (750, 16px, 0.1em, mayúsculas): etiquetas de paso del talón, títulos del pie, botones (19px, 0.06em), links de navegación (650, 18px, 0.06em).
- **Column Head** (Public Sans 700, 12px, 0.16em, mayúsculas): encabezados de columna de las tablas de tablero y flota.

### Named Rules
**La Regla del Estado Condensado.** Si es un estado, una cifra, un destino, una acción o una etiqueta, va en Big Shoulders en mayúsculas. Si es una oración, va en Public Sans en caja normal. Las filas mezclan ambas: nombre condensado arriba, detalle en sans abajo.

**La Regla del Número Tabular.** Toda cifra que pueda cambiar o alinearse (horas, precios, cifras, numeración de filas, paletas) lleva números tabulares.

## Layout

Contenedor de 1240px (`max`) con calle de 24px (16px bajo 640px). Las páginas alternan franjas de tablero a todo el ancho (portada, encabezado de página, bandas de flota, cifras, pie) con contenido sobre papel dentro del contenedor. Las franjas oscuras salen del contenedor con `margin-inline: calc(50% - 50vw)` y vuelven a alinear su contenido al mismo contenedor.

Ritmo vertical: 88px entre secciones (64px en celular); encabezado de sección con regla inferior de 2px en tinta. Un encabezado de página seguido de una banda forma un único tablero continuo, y una página que termina en banda la lleva hasta el pie, sin franja de papel intermedia.

Portada: grilla de dos columnas, tablero a la izquierda y talón de 320 a 420px a la derecha, separados 56px.

Puntos de quiebre:
- **1240px:** se oculta el reloj de la barra.
- **1080px:** los links pasan a menú desplegable con filas numeradas de 52px; el reloj se muestra dentro del menú.
- **960px:** portada, cifras, reseñas, combo y columnas internas pasan a una columna; el talón se limita a 560px; la fila de flota se compacta.
- **640px:** calle de 16px, logo horizontal reemplazado por el isotipo, filas del tablero y de flota se reorganizan en áreas apiladas, el combo pierde el radio y llega a los bordes.

## Elevation & Depth

El sistema es plano y se ordena por tono: tablero, tablero profundo y paleta son tres escalones del mismo azul, y las franjas se separan con líneas de 1px en `board-line`, no con sombras. La única pieza que flota es el talón, porque es papel apoyado sobre el tablero.

### Shadow Vocabulary
- **Talón sobre tablero** (`box-shadow: 0 24px 48px rgba(5, 8, 30, 0.45)`): solo para el talón de cotización en portada.
- **Talón sobre papel** (`box-shadow: 0 1px 0 #d6dae8, 0 18px 40px rgba(22, 27, 69, 0.12)`): el talón completo en la página Reservar, con borde de 1px en `line`.
- **Bisagra** (`box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06)` bajo una línea de 1px `rgba(0,0,0,0.7)`): el corte horizontal de cada paleta split-flap.

### Named Rules
**La Regla del Único Papel.** Solo el talón proyecta sombra. Tarjetas, filas, combo y franjas son planos.

## Shapes

Geometría de terminal: rectángulos con esquinas apenas suavizadas. Los radios crecen con el tamaño de la pieza: paleta (0.07em), botón (6px), campo (8px), tarjeta (12px), talón (14px), panel de combo (16px). El único círculo es el número de paso del talón (50%) y los troqueles semicirculares de 24px a cada lado de la línea perforada (2px discontinua), recortados con el color de la superficie de abajo. Las filas no tienen radio: son franjas entre líneas.

## Components

### Buttons
Rótulos de terminal: condensados, en mayúsculas, sólidos.
- **Shape:** esquinas apenas suavizadas (6px), borde de 2px, alto mínimo de 44px (56px en la variante grande, 21px de texto).
- **Signal (principal):** fondo `signal`, texto `board-deep`, Big Shoulders 750 a 19px con 0.06em. Es la acción de cotizar, en cualquier superficie.
- **Hover / Focus:** hover a `signal-hover` en 0.15s; al presionar baja 1px; foco con anillo de 3px a 3px de distancia.
- **Ink:** fondo `navy`, texto `on-board`; hover a `board`. Acción secundaria sobre papel.
- **Ghost:** borde `on-board-dim`, texto `on-board`, sin fondo; hover endurece el borde. Acción secundaria sobre tablero.
- **Ghost Ink:** borde y texto `navy`; hover se llena de `navy`. Acción secundaria sobre papel.

### Chips
- **Etiqueta de categoría:** texto Big Shoulders 750 a 15px, 0.14em, mayúsculas, en `orange-text`, sin fondo ni borde. Marca la categoría de cada novedad.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** `sheet` sobre `paper`.
- **Shadow Strategy:** planas (ver Elevation & Depth).
- **Border:** 1px en `line`.
- **Internal Padding:** 28px (22px 18px en celular). Títulos en Big Shoulders 800 a 30px en `navy`; viñetas en `orange`.

### Inputs / Fields
- **Style:** fondo `sheet`, borde de 2px en `line`, radio de 8px, alto mínimo de 48px, texto de 16px para que el celular no haga zoom.
- **Focus:** anillo de 3px en el color de foco a 1px y borde en `navy`.
- **Error / Disabled:** error como texto de 15px en rojo funcional; botón deshabilitado al 60% con cursor de progreso. Éxito en una franja verde clara con texto verde oscuro.

### Navigation
Barra pegajosa en `board-deep` con borde inferior en `board-line`. Logo oficial horizontal (50px de alto) en escritorio, isotipo de 34px en celular. Links en Big Shoulders 650 a 18px, mayúsculas, `on-board-dim` en reposo y `on-board` en hover; el activo lleva una barra de 2px en `signal` debajo. A la derecha, el reloj local "TUC hh:mm · ABIERTO 24 H" en números tabulares, con "ABIERTO" en `signal`, y el botón de cotizar. Bajo 1080px, botón de menú de 48×44 que se convierte en cruz y despliega filas numeradas de 52px con el activo en `signal`.

### Paletas split-flap (firma)
Cada letra es una ficha de 0.74em × 1.14em en `flap`, radio 0.07em, Big Shoulders 800, números tabulares, con la bisagra horizontal a media altura. Las palabras no se cortan. Cuando el texto cambia, cada ficha gira letras al azar durante 260ms con 28ms de demora entre fichas, de izquierda a derecha, y siempre termina en el texto final. Con movimiento reducido el texto aparece directo. El texto real va en un nodo solo para lectores de pantalla; las fichas son decorativas.

### Fila de tablero
Botón de fila con tres columnas: número (52px), lugar y estado. Alto mínimo de 68px, Big Shoulders 700 a 26px; el detalle del lugar baja a Public Sans 15px en `on-board-dim`; el estado va en `signal` alineado a la derecha. Hover con un velo blanco del 4%; la fila elegida pasa a `board-deep` y su número a `signal`. Encabezado de columnas en Column Head. Bajo 640px el estado baja debajo del lugar.

### Talón de cotización
Hoja `sheet` con radio de 14px y sombra de talón. Título en Big Shoulders 800 a 34px en `navy`. Pasos numerados en una columna de margen de 32px (círculo `navy` con número en `on-board`), etiqueta de paso en Label `ink-soft`, campos en la segunda columna. El pie del talón se separa con una línea perforada y dos troqueles; ahí vive el botón principal a ancho completo y una nota centrada de 14px.

### Fila de flota (salidas)
Banda de tablero con columnas: miniatura de 132px (16:10, radio 6px), nombre en Title, capacidad, precio en Figure 34px `signal`, botón. Sin foto, la miniatura es un panel `board-deep` con borde discontinuo y la leyenda "Foto próximamente". Bajo 640px se apila en áreas con el botón a todo el ancho.

### Cifras impresas
Franja `board-deep` con dos columnas de filas: etiqueta en Big Shoulders 750 a 22px con nota en sans debajo, cifra en Figure `signal` a la derecha; filas separadas con línea punteada `board-line`.

### Tira de reseñas
Sobre papel, entre una regla de 2px en tinta arriba y 1px en `line` abajo: a la izquierda el puntaje (88px `navy` con estrella `orange` de 52px), a la derecha tres reseñas separadas por líneas verticales finas, con autor en 700 y fuente en `ink-soft`.

### Combo
Panel `board` de radio 16px y 40px de relleno: código grande en Figure 104px `signal`, copia en `on-board-dim` con lista de guiones naranjas, y acciones apiladas (signal + ghost).

### Encabezado de página
Franja de tablero a todo el ancho con título Display y una línea en paletas (clamp(30px, 4.4vw, 56px), `signal`), bajada de 19px en `on-board-dim`.

## Do's and Don'ts

### Do:
- **Do** usar `board` o `board-deep` para toda franja que muestre estados, cifras o destinos, y `paper` para lo que se lee.
- **Do** escribir estados, cifras, etiquetas, botones y títulos en Big Shoulders mayúscula, y párrafos en Public Sans.
- **Do** presentar listas comparables (puntos de entrega, flota, cifras) como filas separadas por líneas de 1px, con encabezado de columna de 12px.
- **Do** cambiar el color de foco a `signal` dentro de toda superficie oscura (barra, tablero, cifras, combo, encabezado, banda, pie) y dejarlo en `navy` sobre claro y dentro del talón.
- **Do** mantener 44px de alto mínimo en todo objetivo táctil (48px en campos, 52px en el menú móvil).
- **Do** respetar movimiento reducido: paletas sin giro, sin transiciones en botones, filas y menú, y sin el desplazamiento al presionar.
- **Do** usar `orange-text` para cualquier texto naranja sobre papel.

### Don't:
- **Don't** agregar un tercer color de marca, degradados o acentos decorativos fuera de las dos tintas.
- **Don't** usar la foto de ruta con buscador encima como portada, ni grillas de tarjetas iguales para flota o puntos de entrega.
- **Don't** poner sombra a nada que no sea el talón.
- **Don't** usar el naranja del logo crudo (`orange`) como texto chico ni `signal` sobre papel.
- **Don't** componer párrafos en Big Shoulders ni estados en Public Sans.
- **Don't** usar las paletas split-flap para texto largo: solo titulares y líneas destino cortas.
