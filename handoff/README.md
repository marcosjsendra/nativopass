# NativoPass — Frontend Vanilla Handoff Package

Este paquete contiene la entrega completa del desarrollo frontend de **NativoPass** en código **HTML5, CSS3 y JavaScript Vanilla puro**, sin dependencias de frameworks (sin React, sin Vite, sin Node.js requerido).

Está diseñado específicamente para que el equipo de desarrollo de la plataforma pueda:
1. Inspeccionar la estructura semántica limpia del DOM.
2. Reutilizar directamente las clases CSS y variables de diseño (Tokens).
3. Obtener todos los visual assets (logotipos, íconos, imágenes, videos) con sus nombres y rutas originales.
4. Integrar el diseño en cualquier stack de backend o framework nativo.

---

## 📁 Estructura del Paquete

```text
handoff/
├── README.md                      # Esta guía técnica de handoff
├── index.html                     # Prototipo interactivo (Device frame, selector de iteraciones y pantallas)
│
├── pages/                         # Páginas independientes limpias (sin marco de teléfono externo)
│   ├── home-redesign.html         # Página de Inicio con el rediseño aprobado (Iteraciones 1 y 2)
│   ├── home-original.html         # Página de Inicio con el diseño base de Figma (Baseline Original)
│   ├── membership-payment.html    # Pantalla de Checkout / Pago de Membresía Miembro+
│   └── assets-download.html       # HUB DE ASSETS: Vista previa y descarga de todos los recursos en ZIP
│
├── css/                           # Hojas de estilo CSS modulares y no minificadas
│   ├── tokens.css                 # Variables de diseño (colores de marca, tipografías, radios, sombras)
│   ├── globals.css                # Estilos base, app-shell, hero, grilla de categorías, barra inferior
│   ├── iterations.css             # Variaciones aprobadas del rediseño (CTA Miembros+, NEÓN Snake)
│   ├── membership-payment-redesign.css # Estilos de la nueva pantalla de pago
│   ├── membership-payment.css     # Estilos de la pantalla de pago baseline
│   ├── animations.css             # Keyframes y animaciones fluidas
│   ├── responsive.css             # Media queries para visualización móvil y responsive
│   └── asset-hub.css              # Estilos del portal de descarga de assets
│
├── js/                            # JavaScript Vanilla puro (~85 líneas, sin dependencias)
│   ├── app.js                     # Control de carrusel, selector de ubicación, estados y simulación de pago
│   └── prototype-shell.js         # Controlador del banco de pruebas (workbench) en index.html
│
├── assets/                        # Todos los archivos visuales sin hashes y en sus nombres originales
│   ├── icons/                     # Íconos SVG (categorías, barra de navegación, rewards)
│   ├── images/                    # Banners de hero, fondos de pago, tokens de interfaz
│   ├── logos/                     # Logotipos oficiales NativoPass en SVG (blanco, morado, isotipos)
│   ├── screenshots/               # Capturas de referencia de Figma
│   └── video/                     # Videos MP4 promocionales del juego Snake
│
└── downloads/                     # Archivos comprimidos listos para descarga
    ├── nativopass-handoff-complete.zip # Paquete INTEGRAL con código fuente completo + assets + README (~68 MB)
    └── nativopass-assets.zip      # Paquete de visual assets exclusivamente (~68 MB)
```

---

## 🚀 Cómo Visualizar

No se requiere ninguna instalación de software (`npm`, `yarn`, etc.).

1. **Directamente en el navegador:**
   - Hacé doble clic en `index.html` para abrir el banco de pruebas interactivo.
   - O hacé doble clic en cualquiera de los archivos dentro de `pages/` (ej. `pages/home-redesign.html`).
2. **Con un servidor estático local (opcional):**
   - Si utilizás VS Code, podés hacer clic derecho en `index.html` y seleccionar **"Open with Live Server"**.
   - O mediante Python: `python -m http.server 8080`.

---

## 🎨 Variables de Diseño (`css/tokens.css`)

El proyecto utiliza variables CSS estándar para facilitar la personalización y consistencia:

| Variable | Valor | Uso |
|---|---|---|
| `--color-purple` | `#8000ff` | Color primario de marca |
| `--color-membership-purple` | `#7101f7` | Color del botón y detalles de Miembros+ |
| `--color-aqua` | `#00ffdb` | Acento brillante / Focus state |
| `--color-location` | `#8d37f6` | Píldora de selección de ubicación |
| `--font-ui` | `'Montserrat', Arial, sans-serif` | Tipografía principal de interfaz |
| `--font-game` | `'Press Start 2P', monospace` | Tipografía arcade para Nativo Rewards |
| `--radius-control` | `13px` | Bordes redondeados de botones |
| `--radius-card` | `9px` | Bordes redondeados de tarjetas |

---

## ⚡ Comportamientos Interactivos en `js/app.js`

El archivo `js/app.js` implementa todas las interacciones de manera ligera y modular:

* **Carrusel Hero:** Avance automático cada 6.5 segundos, reinicio al hacer clic manual, barra de progreso animada. Respeta automáticamente `prefers-reduced-motion`.
* **Selector de Ubicación:** Menú desplegable con toggle de accesibilidad (`aria-expanded`), selección de ciudad y cierre al hacer clic fuera.
* **Tarjetas de Categorías:** Toggle de selección activa con soporte de accesibilidad (`aria-pressed`).
* **Snake Rewards & Video:** Autoplay en bucle (`muted`, `playsinline`) y revelación progresiva con `IntersectionObserver`.
* **Formulario de Pago:** Validación nativa HTML5 y simulación de procesamiento de 650ms con cambio de estado visual del botón.

---

## 📦 Descarga de Assets

Se incluye la página `pages/assets-download.html` donde el desarrollador puede:
* Descargar el archivo ZIP completo `downloads/nativopass-assets.zip` con un solo clic.
* Descargar el paquete ligero `downloads/nativopass-assets-light.zip`.
* Explorar visualmente cada logo, ícono SVG, imagen y video con su ruta exacta para copiar o descargar individualmente.
