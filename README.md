#  Solar-folio  
**Interactive 3D Portfolio Website**

> *A cinematic, scientifically-inspired portfolio presented as an explorable solar system.*

---

## 🚀 Overview

**Solar-folio** is not a traditional portfolio website. It is a **narrative-driven, interactive 3D experience** where professional information is presented as a **solar system**.  
Instead of scrolling through sections, users **navigate space**, zooming into planets that represent different facets of professional growth.

This project is intentionally designed as a **time capsule**, capturing a snapshot of skills, experience, and learning **as of December 31, 2025**.

Once completed, the content is **not continuously updated**—new growth belongs to future orbits.

---

## 🧠 Core Concept

- 🌌 Portfolio as a **solar system**

- 🕰️ Frozen snapshot of professional state on **Dec 31, 2025**

- 🪐 Outer planets remain **unexplored**, symbolizing lifelong learning

- 🎨 Scientific realism blended with artistic expression

- 📖 Experience-first storytelling over static presentation


> *“This region of Solar-folio is intentionally left unexplored — a reminder that learning and creativity never truly end.”*

---

## 🪐 Planet-to-Section Mapping

| Celestial Body | Portfolio Section |
|--------------|------------------|
| ☀️ Sun | Home / About Me |
| ☿ Mercury | Education |
| ♀ Venus | Projects |
| 🌍 Earth | Internships |
| ♂ Mars | Certificates |
| ♃ Jupiter | Contact |
| ♄ Saturn | Unexplored |
| ♅ Uranus | Unexplored |
| ♆ Neptune | Unexplored |

Unexplored planets feature **philosophical messaging** paired with cosmic metaphors.

---

## ✨ Key Features

### 🌍 Interactive 3D Solar System
- Fully navigable 3D space (zoom, pan, rotate)
- Real-time orbital motion with scientifically-inspired speeds
- Camera constraints to prevent clipping through planets

### ⏸️ Pause / Resume Orbits
- Freeze planetary orbits for precise interaction
- Axial rotation continues while paused
- Minimal UI toggle (bottom-left)

### 🎨 Realistic Planet Rendering
- 2K resolution planetary textures
- NASA / Solar System Scope imagery
- Saturn rings with transparency
- Dynamic lighting and emissive materials

### 🧭 Accessibility & UX
- Hover labels for planets and sections
- Interactive control legend
- Visual hover feedback (glow, scale)
- Smooth transitions and animations
- Responsive layout considerations

### 🎬 Entry Experience
- Disclaimer modal explaining time-capsule concept
- Cinematic intro: darkness → sun ignition → planets emerge
- Smooth 3–5 second onboarding animation

### 📄 Section Pages
- Split-screen layout:
  - Left: Rotating 3D planet
  - Right: Section content
- Scrollable content area
- “Return to Orbit” navigation

### ⚡ Performance Optimization
- Efficient Three.js rendering pipeline
- Lazy texture loading with fallbacks
- Fog for depth perception
- Configurable draw distance

---

## 🛠️ Technology Stack

- **Frontend:** React 18  
- **3D Engine:** Three.js  
- **React 3D Integration:** @react-three/fiber  
- **3D Utilities:** @react-three/drei  
- **Animations:** GSAP  
- **State Management:** Zustand  
- **Routing:** React Router v6  
- **Styling:** Vanilla CSS (custom design system)  
- **Build Tool:** Vite  
- **Language:** JavaScript (ES6+)  

---

## 📁 Project Structure

```
solar-folio/
├── public/
│   ├── textures/          # 2K planet textures (served at runtime)
│   └── 404.html           # GitHub Pages SPA routing fallback
├── src/
│   ├── components/
│   │   ├── canvas/        # 3D components (Sun, Planets, Orbits)
│   │   ├── ui/            # UI overlays (Modals, Legends, Controls)
│   │   ├── sections/      # Section layouts
│   │   └── content/       # Content blocks per section
│   ├── pages/             # Route-based pages
│   │   └── unexplored/    # Saturn, Uranus, Neptune pages
│   ├── data/              # Planet & orbit configuration
│   ├── utils/             # Shared utilities (e.g. texturePath.js)
│   └── styles/            # Global CSS design system
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🧪 Setup & Installation

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/omhujband/Solar-folio.git
cd solar-folio
npm install
```

### Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build & Preview

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

The project is configured to deploy to `https://omhujband.github.io/Solar-folio/`.

```bash
npm run deploy
```

This runs `npm run build` automatically (via the `predeploy` script), then pushes the `dist/` folder to the `gh-pages` branch using the `gh-pages` package.

> **Note:** Make sure `gh-pages` is installed — `npm install --save-dev gh-pages`.

---

## 🎯 Why This Project?

Solar-folio was created to challenge the idea that portfolios must be static, predictable, and forgettable.

This project:
- Prioritizes **experience over enumeration**
- Treats learning as an **ongoing orbit**, not a finished destination
- Blends **scientific accuracy** with **creative expression**
- Demonstrates advanced frontend, 3D, and interaction design skills

It is designed not just to be viewed—but to be **explored**.

---

## 🌱 Future Enhancements (Optional)

- 📱 Mobile & tablet optimizations

- 🎧 Optional cosmic sound design

- 🕹️ Performance mode for low-end devices

- 🥚 Hidden easter eggs & interactions

---

## 🙏 Credits & Acknowledgments

- **Planetary Textures:** NASA / Solar System Scope  

- **Inspiration:** Scientific visualization, creative developer portfolios  

- **Built With:** Modern React & WebGL ecosystem


---

✨ *Solar-folio is not just where I’ve been — it’s a reflection of how I explore what’s next.*
