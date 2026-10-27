<div align="center">

# `bit3labs.`
### Creative Technology Studio · Engineering Digital Experiences at the Edge

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-E51919?style=flat-square)](LICENSE)

<br />

**bit3labs** is an engineering-first creative technology studio. We eliminate corporate fluff in favor of architectural grids, stark typography, fluid WebGL 3D runtimes, headless commerce engines, and resilient enterprise systems.

[Explore Live Website](http://localhost:5173) · [Report Bug](https://github.com/Rehansajid2130/bit3labs/issues) · [Request Architecture Consultation](http://localhost:5173/contact)

</div>

---

## 🏛️ Studio Disciplines & Capabilities

Our engineering practice is anchored around 4 core disciplines:

| Discipline | Tech Stack | Production Focus |
| :--- | :--- | :--- |
| **3D & Creative Frontend** | `React 19`, `Three.js`, `R3F`, `GLSL Shaders`, `Canvas` | High-impact brutalist web experiences, custom shaders, and 60 FPS mobile graphics with zero frame drops. |
| **Headless E-Commerce** | `Next.js 15`, `Shopify Hydrogen`, `Storefront API`, `Redis` | Bespoke storefronts loading under 0.5s globally, edge-cached carts, and custom checkout funnels for high-volume retail. |
| **Mobile Applications** | `React Native`, `Expo`, `SQLite (WAL)`, `Native Bridges` | Offline-first enterprise mobile apps, real-time telemetry, and logistics scanner software operating in concrete warehouses. |
| **Systems & ERP Infrastructure** | `Node.js`, `PostgreSQL`, `Prisma ORM`, `Redis Streams` | Real-time multi-warehouse inventory ledgers, sub-5ms sync, role-based access control, and transaction integrity. |

---

## ✨ Features & Architecture Highlights

- **Brutalist Editorial Design Language**: Built following [`DESIGN.md`](./DESIGN.md) featuring architectural 60px grid lines, `#E51919` vivid red focal points, dark `#0D0D0D` surfaces, and strict monospace metadata hierarchy.
- **Deep Case Study System (`/work/:id`)**: Rich project overviews with live client metrics, technical deliverable checklists, tech stack badges, and similar case study suggestions.
- **Live Lead Capture API (`/api/contact`)**:
  - Secure backend endpoint powered by Express/Vite server middleware.
  - JSON schema validation, input sanitization, and honeypot anti-spam protection.
  - Generates verifiable inquiry receipt hashes (`BIT3-xxxxxx`).
- **Engineering Dispatches & Journal (`/blog` & `/blog/:slug`)**:
  - In-depth architectural teardowns on WebGL mobile shaders, Redis edge caching, and offline-first mobile sync.
  - Dynamic category domain filtering and monospace code inspection boxes with `VERIFIED ARCHITECTURE` pills.
- **Careers Page & Spec Modal (`/careers`)**:
  - Studio perks grid (Remote & async, gear allowance, learning stipends).
  - 4 active technical job roles with interactive detail modal and pre-filled application mailto links.
- **Production SEO & Structured Data**:
  - Semantic HTML5 headings with Schema.org `Organization` and `WebSite` JSON-LD metadata.
  - Auto-generated canonical `public/sitemap.xml` and crawler-configured `public/robots.txt`.
- **System 404 Recovery Hub (`/404`)**:
  - Monolithic `404.` brutalist typography, technical diagnostic status console, and 4 verified route recovery cards.
- **Comprehensive Legal Compliance**: Transparent Data Privacy (`/privacy`) and Commercial Terms of Service (`/terms`).

---

## 🎨 Design System Tokens

```css
:root {
  /* Canvas & Surfaces */
  --color-bg-light:      #E8E6E0;  /* Architectural Warm Concrete */
  --color-bg-light-alt:  #DFDDD7;  /* Muted Neutral Contrast */
  --color-bg-dark:       #0D0D0D;  /* Deep Monolithic Obsidian */
  --color-surface-dark:  #141412;  /* Elevated Technical Dark */
  
  /* Brand Accent */
  --color-red:           #E51919;  /* International Signal Red */
  --color-red-hover:     #C71414;  /* Deep Industrial Crimson */
  
  /* Typography */
  --font-display:        'Oswald', sans-serif;    /* Monumental Headlines */
  --font-body:           'Manrope', sans-serif;   /* Editorial Prose */
  --font-mono:           'DM Mono', monospace;    /* Technical Metadata */
}
```

---

## 📂 Project Architecture

```
bit3labs/
├── artifacts/
│   └── creative-agency/                # Core Web Application Workspace
│       ├── public/
│       │   ├── favicon.svg             # Minimalist Studio Favicon
│       │   ├── robots.txt              # Search Engine Crawler Directives
│       │   └── sitemap.xml             # Canonical Search Index
│       ├── src/
│       │   ├── components/             # Modular Studio Components
│       │   │   ├── site-header.tsx     # Navigation & Mobile Drawer
│       │   │   ├── site-footer.tsx     # Brand Footer & Corporate Directory
│       │   │   ├── hero-section.tsx    # Architectural Hero Lockup
│       │   │   ├── work-section.tsx    # Case Studies Grid
│       │   │   ├── services-section.tsx# 4 Core Disciplines Cards
│       │   │   ├── contact-section.tsx # Interactive Form & API Connector
│       │   │   └── ...
│       │   ├── pages/                  # Route Views
│       │   │   ├── home.tsx            # Main Studio Landing
│       │   │   ├── about.tsx           # Agency Origins & Philosophy
│       │   │   ├── work.tsx            # Full Work Catalog
│       │   │   ├── project-detail.tsx  # Deep Case Studies
│       │   │   ├── services.tsx        # Capabilities Breakdown
│       │   │   ├── blog.tsx            # Engineering Journal Index
│       │   │   ├── blog-detail.tsx     # Article Teardown Reader
│       │   │   ├── careers.tsx         # Open Roles & Culture Perks
│       │   │   ├── privacy.tsx         # Data Privacy Policy
│       │   │   ├── terms.tsx           # Terms of Service
│       │   │   └── not-found.tsx       # System 404 Recovery Hub
│       │   ├── lib/
│       │   │   ├── blog-data.ts        # Engineering Articles Repository
│       │   │   └── utils.ts            # UI Utilities & Helpers
│       │   ├── App.tsx                 # Wouter Routing & Title Controller
│       │   ├── main.tsx                # Client Entrypoint
│       │   └── index.css               # Design System & Brutalist Rules
│       ├── index.html                  # HTML5 Shell & Structured Data
│       ├── vite.config.ts              # Vite Config & Mock API Routes
│       └── package.json
├── attached_assets/                    # Visual Assets & Reference Photography
├── DESIGN.md                           # Strict Design System Guidelines
├── .gitignore                          # Production Git Exclusion Filters
├── pnpm-workspace.yaml                 # Monorepo Workspace Configuration
└── README.md                           # Project Documentation
```

---

## 🚀 Quickstart & Development

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/Rehansajid2130/bit3labs.git
cd bit3labs
```

### 2. Install Dependencies
```bash
# From repository root
pnpm install

# Or navigate directly to the application
cd artifacts/creative-agency
pnpm install
```

### 3. Start Development Server
```bash
cd artifacts/creative-agency
pnpm run dev
```
Open your browser at **`http://localhost:5173`** to explore the studio experience.

### 4. Build for Production
```bash
cd artifacts/creative-agency
pnpm run build
```
Generates an optimized static bundle in `artifacts/creative-agency/dist/`.

---

## 🧪 Testing the API Endpoint

The lead capture API runs on `/api/contact` and can be validated directly:

```bash
curl -X POST http://localhost:5173/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@enterprise.com",
    "discipline": "3D & Creative Web",
    "budget": "$25k - $50k",
    "timeline": "1-2 months",
    "message": "Looking to architect a custom 3D web experience for our new brand launch."
  }'
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Inquiry successfully logged in bit3labs systems.",
  "receiptId": "BIT3-xxxxxx",
  "receivedAt": "2026-10-27T..."
}
```

---

## 📄 License & Attribution

Distributed under the **MIT License**. Created by [Rehan Sajid](https://github.com/Rehansajid2130) and the **bit3labs** engineering core.

<div align="center">
  <sub>INDEPENDENT BY DESIGN · WORKING GLOBALLY · © 2026 bit3labs.</sub>
</div>