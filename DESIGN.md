# Bold Grid Studio / CREATIVE. — Design System Specification

This document serves as the single source of truth for all visual tokens, grid metrics, typography, and section layouts for the **CREATIVE.** studio web application.

---

## 1. Brand Identity & Theme

- **Brand Wordmark**: `bit3labs.`
  - Typography: Condensed uppercase sans-serif (`Oswald` / `Syne` / `Bebas Neue` style), bold/black weight.
  - Period/Dot: Solid studio red accent (`#E51919`).
- **Core Aesthetic**: High-end brutalist-editorial design studio. Clean Swiss-style typography, modular architectural grid lines, high-contrast black/linen/red palette, and structured card bento boxes.
- **Key Philosophy (Ponytail Rule)**: Standard CSS variables, crisp modular grid, native browser typography and interaction, no redundant dependencies or bloated runtime scripts.

---

## 2. Color Palette

| Token Name | Hex Code | HSL / RGB | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Light (Paper/Linen)** | `#E8E6E0` | `hsl(43, 14%, 89%)` | Primary page background for Hero, About, Work, and Services |
| **Canvas Light Alt (Subtle Tint)**| `#DFDDD7` | `hsl(43, 10%, 86%)` | Alternate section background, cards, and subtle contrast zones |
| **Grid Lines (Subtle Neutral)** | `#D3D0C8` | `rgba(20, 20, 18, 0.08)` | Modular background grid lines and horizontal dividers |
| **Surface Dark (Charcoal/Pitch)** | `#0D0D0D` | `hsl(0, 0%, 5%)` | Contact section, active service cards, and dark accents |
| **Text Primary (Pitch Black)** | `#111111` | `hsl(0, 0%, 7%)` | Primary headlines, titles, and body text on light backgrounds |
| **Text Secondary (Muted Ash)** | `#66645F` | `hsl(40, 4%, 38%)` | Captions, descriptions, metadata, and service bullets |
| **Text Inverted (Soft White)** | `#F3F2EE` | `hsl(45, 15%, 94%)` | Text on dark backgrounds (Contact section, active cards) |
| **Text Inverted Muted** | `#9E9C96` | `hsl(45, 4%, 60%)` | Secondary copy and form labels on dark backgrounds |
| **Studio Red (Accent)** | `#E51919` | `hsl(0, 80%, 50%)` | Key highlighted headline words, primary buttons, kickers, icons |
| **Studio Red Hover** | `#C71414` | `hsl(0, 82%, 43%)` | Button hover and active state |

---

## 3. Typography Scale & Fonts

- **Display Font**: `'Oswald', sans-serif` (fallback: `'Impact', 'Arial Black', sans-serif`)
  - Headline styles: Uppercase, condensed tracking (`-0.03em` to `-0.05em`), tight line height (`0.82` - `0.92`).
  - Hero Display: `clamp(64px, 11vw, 168px)`
  - Section Display: `clamp(44px, 6.5vw, 92px)`
  - Card Display: `clamp(22px, 2.5vw, 32px)`
- **Body Font**: `'Manrope', sans-serif` (fallback: `'Inter', sans-serif`)
  - Clean, legible humanist sans-serif for body paragraphs, explanations, and form inputs.
  - Body Regular: `14px` / `1.65` line height.
  - Body Small: `12px` / `1.5` line height.
- **Eyebrow / Technical Mono**: `'DM Mono', monospace`
  - Small uppercase metadata tags: `10px` - `11px`, `letter-spacing: 0.12em`.
  - Used for kicker labels (`//01`, `AWARD-WINNING STUDIO`, `GET IN TOUCH`, stats counters).

---

## 4. Spacing, Container & Modular Grid

- **Global Container Width**:
  - `width: min(100% - 80px, 1440px); margin-inline: auto;`
  - Tablet (`<= 900px`): `width: min(100% - 48px, 100%)`
  - Mobile (`<= 640px`): `width: min(100% - 32px, 100%)`
- **Section Spacing**:
  - Standard Section Padding: `padding-block: 100px;` (Desktop), `padding-block: 64px;` (Mobile).
  - Clean horizontal dividers: `1px solid var(--color-border)` separating each major region.
- **Background Architectural Grid**:
  - `background-size: 60px 60px;` with subtle intersecting grid lines `rgba(20, 20, 18, 0.065)`.
  - Perfectly aligns with content margins so elements "snap" into the grid aesthetic.

---

## 5. Component & UI Element Specifications

### Buttons & Interactive Links
1. **Primary Button (`.btn-red`)**:
   - Solid bright red background (`#E51919`), crisp square edges (`border-radius: 0`).
   - White uppercase mono/display text, `padding: 12px 20px`, `font-size: 11px`, `letter-spacing: 0.08em`.
2. **Arrow Square Icon Button (`.btn-icon-square`)**:
   - Square red button (`34px × 34px` or `40px × 40px`) containing a centered white right arrow `→`.
   - Used for `EXPLORE WORK [→]`, `EXPLORE MORE [→]`, `CONTACT US [→]`.
3. **Discipline Lines (`//01 UI/UX Design`)**:
   - Mono index (`//01`), followed by an extending horizontal border line `flex: 1; border-bottom: 1px solid #C0BEB7;`, ending with category name right-aligned.

### Forms & Input Fields
- Underlined minimal input style (`border: none; border-bottom: 1px solid #444;`).
- Clear required indicator (`*` in studio red).
- Focused state: `border-bottom: 2px solid #E51919; outline: none;`.

---

## 6. Section Blueprints

### A. Navigation
- Sticky topbar, height `64px`, backdrop-filter blur.
- Left: `bit3labs.` | Center/Right: `ABOUT`, `WORK`, `SERVICES`, `CONTACT` | Far Right: `START PROJECT` red button.

### B. Hero Section
- Background: Warm linen with architectural grid.
- Top-Left: `AWARD-WINNING STUDIO` (red).
- Main Block:
  - Row 1: `WE CREATE`
  - Row 2: `EXCEPTIONAL`
  - Row 3: `[Black Info Box]` + `EXPERIENCES` (red condensed text).
- Top-Right:
  - Disciplines list (`//01 UI/UX Design`, `//02 Web Development`, `//03 Brand Identity`, `//04 Digital Marketing`).
  - `EXPLORE WORK [→]` button below it.

### C. Stats Metric Bar
- 4 Columns: `250+ PROJECTS DELIVERED` | `98% CLIENT SATISFACTION` | `15 YEARS EXPERIENCE` | `50+ INDUSTRY AWARDS`.
- Large condensed numbers, uppercase muted labels.

### D. About Us
- Top-Left: `ABOUT US` (red).
- Headline: `WE ARE A CREATIVE POWERHOUSE` (`CREATIVE` in red).
- Clean lead paragraph + wide collaborative team photograph.

### E. Selected Work
- Top: `WORKS` (red) | `SELECTED WORK FROM RECENT PROJECTS` (`WORK` in red) | `EXPLORE MORE [→]`.
- Bento grid:
  - Card 1: `MINIMAL AESTHETICS` (Phone mockup on black)
  - Card 2: `MODERN ARCHITECTURE` (Concrete facade)
  - Card 3: `EDITORIAL FASHION` (B&W fashion portrait)
  - Card 4: `WORKSPACE INNOVATION` (Studio team)
  - Card 5: `GEOMETRIC PATTERNS` (Concentric optical pattern)
  - Card 6: `INTERIOR ELEGANCE` (Minimalist living space)

### F. Services ("WHAT WE DO")
- Top: `WHAT WE DO` (red) | `SERVICES THAT MAKE A LASTING IMPACT` (`IMPACT` in red).
- Interactive 4-item accordion:
  - `01 BRAND IDENTITY`
  - `02 DIGITAL DESIGN` (active/expanded showcase card with dark background and framed visual art)
  - `03 CREATIVE DIRECTION`
  - `04 DEVELOPMENT & PRODUCTION`

### G. Passionate Experts (Team & Scale)
- Headline: `BUILT BY PASSIONATE EXPERTS` (`EXPERTS` in bold red).
- Team photo + 4 stats: `45+ TEAM MEMBERS` | `12 COUNTRIES` | `8 SPECIALIZATIONS` | `100% REMOTE FIRST`.

### H. FAQ Section ("QUESTION")
- Top: `QUESTION` (red) | `FREQUENTLY ASKED QUESTIONS` (`QUESTIONS` in red) | `CONTACT US [→]`.
- Accordion list with expandable answers and plus/minus icons.

### I. Contact & Footer ("GET IN TOUCH")
- Dark surface `#0D0D0D`.
- Headline: `LET'S CREATE TOGETHER` (`TOGETHER` in bold red).
- Left: Email (`hello@bit3labs.com`), Phone (`+1 (555) 123-4567`), Location (`New York, NY`) with red square icons.
- Right: Contact inquiry form with `YOUR NAME *`, `PROJECT TYPE *`, `MESSAGE *`, and red `SEND MESSAGE` button.
- Giant subtle watermark: `bit3labs`.
- Footer: `bit3labs.` wordmark, navigation links, copyright 2026.
