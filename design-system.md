# Design System — Shriniwasa Developers: The Aurelia Residences

**Locked Philosophy:** *10-Site Luxury Real Estate Editorial System*  
**Synthesized From:** Lodha, Panchshil, Oberoi Realty, Total Environment, Sobha, Prestige, Kalpataru, Aman Residences, Sotheby's International Realty, and One&Only Resorts.  
**Brand:** Shriniwasa Developers  
**Flagship Project:** The Aurelia Residences — Narendra Nagar, Nagpur, Maharashtra  
**Configurations:** Luxury 2, 3 & 4 BHK Residences

---

## 1. Design Tokens

| Token | Role | Value | Usage Notes |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | Primary Canvas | `#FAF8F5` | Warm Ivory — primary editorial background |
| `--bg-surface` | Secondary Surface | `#EFECE6` | Limestone — tonal section alternation & blueprint sheet |
| `--bg-elevated` | Elevated Surface | `#FFFFFF` | Clean architectural forms, drawers, and spec tables |
| `--bg-obsidian` | Deep Contrast Band | `#161412` | Footer & high-contrast hero scrim base |
| `--ink-primary` | Text Primary | `#1A1A1A` | Charcoal — headlines & primary body copy |
| `--ink-muted` | Text Muted | `#5C5852` | Warm Slate — captions, supporting copy & labels |
| `--accent-gold` | Primary Accent | `#B89758` | Champagne Gold — active indicators, rules, icons & RERA accents |
| `--accent-gold-dark` | Accessible Gold Text | `#8C6F39` | High-contrast champagne bronze for text links on ivory |
| `--border-hairline` | Structural Border | `1px solid #E2DDD5` | Crisp architectural borders; zero heavy drop shadows |
| `--radius-arch` | Corner Radius | `2px` | Sharp `2px` architectural corners across buttons, cards & modals |

---

## 2. Typography System

- **Editorial Headings:** `Cormorant Garamond` (`400`, `500`, `600`, `italic`) via `next/font/google`
  - Hero `<h1>`: `clamp(2.75rem, 5.4vw, 4.75rem)`, line-height `1.06`, tracking `-0.02em`.
  - Section `<h2>`: `clamp(2rem, 3.6vw, 3.25rem)`, line-height `1.12`, tracking `-0.015em`.
- **Body, Micro-Labels & Specs:** `Plus Jakarta Sans` (`300`, `400`, `500`, `600`) via `next/font/google`
  - Body: `15px–16px`, line-height `1.68`.
  - Uppercase Micro-Labels: `11px`, uppercase, `letter-spacing: 0.15em`, weight `500`.
  - Technical Numerals: `font-variant-numeric: tabular-nums` for carpet area (`Sq. Ft.` / `Sq. Mt.`), room dimensions, and MahaRERA codes.

---

## 3. Spatial Rhythm & Framer Motion Pacing

- **Layout:** `max-w-[1320px]` centered container, `1px` architectural borders (`#E2DDD5`), zero heavy drop shadows, `2px` corners.
- **Motion Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (`EASE_EDITORIAL`) for calm hospitality reveals, subtle continuous hero slow-zoom (`1.0 → 1.07`), shared `layoutId` Champagne Gold tab underlines, and smooth slide-over drawers & blueprint zoom modals.
