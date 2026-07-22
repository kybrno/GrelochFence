# Greloch Fence Company — Design Brainstorm

## Three Stylistic Approaches

### 1. Rugged Craftsman
**Theme:** Earthy, timber-and-iron aesthetic inspired by traditional craftsmanship
**Probability:** 0.07

### 2. Bold Industrial Contractor
**Theme:** High-contrast, heavy typography, steel-and-concrete palette evoking professional strength
**Probability:** 0.06

### 3. Modern Residential Trust
**Theme:** Clean, warm-neutral tones with confident typography — approachable yet authoritative
**Probability:** 0.09

---

## ✅ Chosen Approach: Bold Industrial Contractor

### Design Movement
American Industrial / Heavy Craft — bold, no-nonsense, built to last. Inspired by the aesthetic of structural steel, raw timber, and honest workmanship.

### Core Principles
1. **Strength through contrast** — near-black backgrounds against warm amber/gold accents
2. **Typographic authority** — oversized, condensed display type that commands attention
3. **Texture over flatness** — subtle grain, metal-like gradients, and shadow depth
4. **Asymmetric structure** — offset layouts, diagonal cuts, and edge-to-edge imagery

### Color Philosophy
- **Primary Background:** Deep charcoal `oklch(0.14 0.01 60)` — evokes raw steel and night work
- **Signature Accent:** Warm amber/gold `oklch(0.72 0.15 65)` — the glow of a work lamp, warmth and trust
- **Surface:** Dark slate `oklch(0.20 0.01 60)` — card and section backgrounds
- **Text:** Off-white `oklch(0.95 0.005 80)` — readable without harsh pure-white
- **Muted:** `oklch(0.55 0.01 60)` — secondary text and labels

### Layout Paradigm
Asymmetric, edge-breaking layouts. Hero section uses a full-bleed image with diagonal text overlay. Service cards use an offset grid. Reviews use a staggered horizontal scroll. Sections are separated by diagonal SVG cuts rather than flat borders.

### Signature Elements
1. **Diagonal section dividers** — angled cuts between sections reinforce the "cutting edge" motif
2. **Amber accent bars** — thin horizontal lines and left-border accents used as visual anchors
3. **Oversized section numerals** — faint large numbers (01, 02, 03) behind section headings

### Interaction Philosophy
Confident and purposeful. Hover states use amber glow effects. CTAs scale slightly on hover. Scroll-triggered entrance animations are subtle but present — fading up, not bouncing.

### Animation
- Entrance: `opacity: 0 → 1` + `translateY(20px → 0)` over 400ms ease-out
- Hover on cards: subtle `translateY(-4px)` + box-shadow deepening
- CTA buttons: `scale(1.02)` on hover, `scale(0.97)` on active
- Nav: background transitions from transparent to dark on scroll

### Typography System
- **Display / Headlines:** `Barlow Condensed` — Bold/ExtraBold, uppercase, wide tracking for impact
- **Body:** `Inter` — Regular/Medium for readability in paragraphs and UI
- **Accent Labels:** `Barlow Condensed` SemiBold in amber, small caps for category labels

### Brand Essence
*Greloch Fence — built tough, installed right, trusted by homeowners and contractors alike.*
Personality: **Dependable · Rugged · Professional**

### Brand Voice
Headlines sound direct and confident. CTAs are action-first. No filler.
- Example headline: *"Your Property. Properly Protected."*
- Example CTA: *"Get Your Free Quote"*

### Wordmark & Logo
A bold stylized "G" mark — angular, constructed from fence-post geometry. No decorative serifs. Paired with "GRELOCH" in Barlow Condensed ExtraBold.

### Signature Brand Color
Warm amber gold — `oklch(0.72 0.15 65)` — unmistakably Greloch.

---

## Style Decisions
- Use diagonal clip-path cuts between major sections with negative margin compensation
- Amber left-border accent on all blockquotes and feature callouts
- Section labels use uppercase Barlow Condensed in amber before each heading
- Every major section must include at least one visible industrial construction motif — diagonal cut, amber structural bar, oversized numeral, edge-broken image, or offset layout
- The Greloch angular "G" fence-post mark must appear as a recurring brand device (background watermark in sections)
- Photography should use a consistent dark steel / warm work-lamp grade and prioritize real installations over stock imagery
- Trust banner in amber between hero and services for immediate social proof
