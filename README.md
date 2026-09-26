# 🎮 Minecraft Configurator & Systems | Retro Portfolio

Portafolio web con estética retro arcade de 8-bit/16-bit enfocado **100% en configuración técnica de servidores de Minecraft**:
- 👾 **MythicMobs**: Configuración de Mobs (IA táctica, fases, mecánicas puras sin ModelEngine) y Cinemáticas con integración nativa.
- ⚡ **ConditionalEvents**: Eventos mundiales dinámicos (caída de meteoritos con dinosaurios, emboscadas), detección de regiones WorldGuard y estados inmersivos.
- ⚙️ **CoreTools**: Economía dinámica y bolsa de mercado (oferta y demanda algorítmica) y 11+ estaciones de forja RPG (Reforge, Gemstones, Transmog, etc.).

---

## 🚀 Características Principales

1. **Estética Retro Minecraft**:
   - Paleta de colores inspirada en obsidiana, redstone, diamante y esmeralda.
   - Tipografía pixel arcade (`Press Start 2P`) y fuentes monospace.
   - Efecto CRT con líneas de escaneo (Scanlines) con botón para activar/desactivar.
   - Partículas de fondo estilo Minecraft (chispas flotantes de portal/redstone).
   - Efectos de sonido 8-bit sintetizados en tiempo real mediante Web Audio API (con botón SFX Mute/Unmute).

2. **Reproductor de Video Arcade**:
   - Soporte para videos de **YouTube**, **Streamable** o archivos locales **MP4/WebM** en la carpeta `videos/`.
   - Ventana modal tipo CRT con controles completos y autoplay.
   - **Ficha Técnica & Highlights**: Muestra el desglose de mecánicas y características avanzadas sin exponer el código YAML interno (protegido contra robos).

---

## 📁 Estructura del Proyecto

```text
├── index.html                  # Página principal retro
├── .nojekyll                   # Compatibilidad con GitHub Pages
├── README.md                   # Esta guía
├── css/
│   ├── retro-theme.css         # Paleta de colores, fuentes, scanlines y animaciones
│   ├── layout.css              # Cabecera HUD, hero, rejilla y responsive
│   └── components.css          # Tarjetas de proyecto y modal arcade
├── js/
│   ├── projects.js             # Base de datos de proyectos, videos y ficha técnica
│   ├── app.js                  # Lógica de filtros, búsqueda, videos y modales
│   ├── audio.js                # Sintetizador de sonidos retro 8-bit (Web Audio API)
│   └── particles.js            # Sistema de partículas pixeladas en Canvas
├── assets/
│   ├── icons/                  # Favicon e iconos pixel-art
│   └── images/                 # Miniaturas de proyectos estilo pixel
└── videos/                     # Carpeta para colocar videos locales .mp4 / .webm
```

---

## 🎬 Cómo Cambiar o Añadir tus Videos

Abre el archivo `js/projects.js`. Cada proyecto tiene la siguiente estructura:

```javascript
{
  id: "mi-nuevo-mob",
  title: "Configuración de Boss: Dragón Ancestral",
  category: "mythicmobs", // 'mythicmobs' | 'conditionalevents' | 'coretools'
  categoryLabel: "MYTHICMOBS",
  videoType: "mp4",       // 'mp4' | 'youtube' | 'streamable'
  videoSrc: "videos/mi_boss.mp4", // o enlace de YouTube / Streamable
  thumbnail: "assets/images/thumb-mob-config.svg",
  tags: ["MythicMobs", "Boss AI", "Skills"],
  description: "Descripción de las mecánicas que creaste...",
  highlights: [
    "Fase 1 y Fase 2 condicionadas por vida.",
    "Sin uso de ModelEngine, optimizado para alto rendimiento."
  ]
}
```

---

## 🌐 Cómo Subirlo Gratis a GitHub Pages

### Opción A: Con Git (Línea de Comandos)
1. Instala Git si aún no lo tienes (ejecuta en PowerShell: `winget install --id Git.Git -e --source winget`).
2. Abre PowerShell en esta carpeta y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Mi portafolio retro de Minecraft"
   git branch -M main
   git remote add origin https://github.com/SebastianMC25/TU_REPOSITORIO.git
   git push -u origin main
   ```
3. En tu repositorio de GitHub:
   - Ve a **Settings** (Configuración) > **Pages**.
   - En **Build and deployment** > **Source**, selecciona: **Deploy from a branch**.
   - Branch: Selecciona **`main`** y carpeta **`/(root)`**.
   - Pulsa **Save**.
4. ¡Listo! En 1 minuto tu portafolio estará online en:
   `https://SebastianMC25.github.io/TU_REPOSITORIO/`

### Opción B: Con GitHub Desktop (Sin comandos)
1. Descarga e instala [GitHub Desktop](https://desktop.github.com/).
2. Ve a **File** > **Add Local Repository...** y selecciona esta carpeta.
3. Si te dice que no es un repositorio, pulsa **create a repository here**.
4. Pulsa **Publish repository** para subirlo a tu cuenta de GitHub.
5. Ve a tu repositorio en github.com > **Settings** > **Pages** > Selecciona rama **main** > **Save**.

### Opción C: Desde la Web de GitHub (Directo)
1. Entra a [github.com/new](https://github.com/new) y crea un nuevo repositorio público (ej: `minecraft-portfolio`).
2. Haz clic en **uploading an existing file** (subir archivos existentes).
3. Arrastra todos los archivos y carpetas de este proyecto a la ventana.
4. Pulsa **Commit changes**.
5. Ve a **Settings** > **Pages** > Rama **main** > **Save**.

---

## 🧪 Cómo Probarlo Localmente

Puedes hacer doble clic en `index.html` para abrirlo en cualquier navegador web, o si tienes Python instalado:
```bash
python -m http.server 8080
```
Luego abre en tu navegador: `http://localhost:8080`
