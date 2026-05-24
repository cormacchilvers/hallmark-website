---
name: Hallmark Studio
description: Premium web design agency — sharp, ambitious, refined
colors:
  editorial-indigo: "#4F46E5"
  editorial-indigo-deep: "#3525CD"
  editorial-indigo-container: "#E2DFFF"
  editorial-indigo-surface: "#F0F3FF"
  ink: "#151C27"
  ink-muted: "#464555"
  ink-subtle: "#777587"
  parchment: "#FAFAF9"
  border-medium: "#C7C4D8"
  border-light: "#E2E8F8"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "78px"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  lg: "8px"
  full: "9999px"
spacing:
  gutter: "40px"
  section: "120px"
  nav-height: "72px"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.editorial-indigo}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 32px"
  button-primary-hover:
    backgroundColor: "{colors.editorial-indigo-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "15px 32px"
  button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "15px 32px"
---

# Design System: Hallmark Studio

## 1. Overview

**Creative North Star: "The Quiet Challenger"**

Hallmark Studio is a new studio with complete conviction. The design system reflects that: restrained on the surface, sharp underneath. There are no gratuitous animations, no borrowed aesthetic frameworks, no signals borrowed from established agencies. This is a system that communicates authority through what it removes, not what it adds. Every surface that does not earn its presence is cut. The result is a visual language that feels inevitable rather than designed.

The system is built on a strict typographic hierarchy. Playfair Display carries the brand identity at every headline scale. Inter handles everything functional. The contrast between the two typefaces IS the personality of the studio — an editorial serif that signals culture and taste, paired with a technical sans-serif that signals precision and efficiency. These two fonts in tension define the Hallmark Studio voice better than any brand statement.

Color is restrained by doctrine. The palette is Parchment and Ink with one accent: Editorial Indigo. That accent is rationed, never decorative. Its rarity is its power. The system explicitly rejects over-animation, SaaS template aesthetics, dark neon tooling aesthetics, and stock photography. If the design could appear on a competitor's site without modification, it has failed.

**Key Characteristics:**
- Typographic-first: the serif headline IS the identity, not decoration
- Restrained color: near-monochromatic with one rationed indigo accent
- Space as a design decision: generous vertical rhythm, no decorative fills
- Flat elevation: no shadows, depth through tonal surface shifts only
- Motion serves communication: GSAP scroll fades only, no choreography for its own sake

## 2. Colors: The Parchment and Ink Palette

One accent, rationed by doctrine. Everything else is neutral.

### Primary
- **Editorial Indigo** (#4F46E5): The brand accent. Used on primary CTA buttons, active nav states, italic headline spans, and section index labels. Never used as a background. Never used decoratively. Its presence on ≤15% of any given screen is non-negotiable.
- **Editorial Indigo Deep** (#3525CD): Hover state for Editorial Indigo elements only. Not used independently.
- **Editorial Indigo Container** (#E2DFFF): Background tint for the work CTA section. The softest echo of the primary.
- **Editorial Indigo Surface** (#F0F3FF): Surface tint used as a page background contrast band. Barely perceptible.

### Neutral
- **Parchment** (#FAFAF9): The base canvas. Off-white with the faintest warm undertone, never pure white. All page backgrounds.
- **Ink** (#151C27): Primary text. Headlines, body copy, active states. Near-black with a blue-grey undertone that harmonizes with Editorial Indigo.
- **Ink Muted** (#464555): Secondary text. Nav links at rest, body descriptors, subheadlines.
- **Ink Subtle** (#777587): Tertiary text. Section labels, form field labels, footer copy, metadata.
- **Border Medium** (#C7C4D8): Pill borders, pill label borders, form focus rings.
- **Border Light** (#E2E8F8): Section dividers, card borders, nav bottom border on scroll. 1px only.
- **White** (#FFFFFF): Explicit white for button text on primary backgrounds.

### Named Rules
**The One Accent Rule.** Editorial Indigo appears on ≤15% of any given screen. Its rarity is the point. Using it as a background, as a gradient, or as a decorative fill violates the entire color doctrine.

**The No-Pure-White Rule.** Page backgrounds use Parchment (#FAFAF9), never #FFFFFF. The warmth is subtle but perceptible in comparison. Pure white is reserved for reversed text on indigo buttons only.

## 3. Typography

**Display Font:** Playfair Display (Georgia, serif fallback)
**Body Font:** Inter (system-ui, sans-serif fallback)

**Character:** A high-contrast pairing that embodies the studio's personality. Playfair Display is used exclusively at headline scale, often with specific words in italic to create editorial emphasis. Inter handles every functional element. The contrast between these two typefaces — a 19th-century-influenced serif against a 21st-century geometric sans — creates the "sharp, ambitious, refined" tension that is the Hallmark Studio voice.

### Hierarchy
- **Display** (700, 78px, lh 1.07, ls -0.025em): Hero headlines only. Split across two lines: line one in Ink, line two in Editorial Indigo and italic. The most important typographic moment on the site.
- **Headline** (600, 60px, lh 1.2, ls -0.02em): Page-level headlines (Work, Services, Contact intro). Playfair Display. May use italic for a single key word.
- **Title** (500, 40px, lh 1.3): Project names, work CTA headline, section anchor statements. Playfair Display without italic.
- **Body Large** (Inter 400, 18-20px, lh 1.7): Hero subheadlines, service card descriptions, about statement body. Max line length 65ch.
- **Body** (Inter 400, 16px, lh 1.6): Standard paragraph text, project descriptors. Max line length 72ch.
- **Label** (Inter 600, 11px, ls 0.12em, uppercase): Section labels, button text, form field labels, nav links. All caps. The only place uppercase is used.

### Named Rules
**The Italic Moment Rule.** Italic Playfair Display is used once per page, in the primary headline, for the phrase that carries the most semantic weight. Never use italic for emphasis within body copy. Never use italic on more than one headline on a given page.

**The Caps Boundary Rule.** Uppercase text is strictly limited to the Label role: nav links, section labels, button text, form labels. Headlines, body copy, and subheadlines are sentence case. Uppercase elsewhere signals a component is using the wrong typographic role.

## 4. Elevation

This system is flat by doctrine. There are no box shadows on any element at any state. Depth is communicated exclusively through tonal surface shifts: a section changes from Parchment (#FAFAF9) to Editorial Indigo Surface (#F0F3FF) to signal a change in content zone. Border Light (#E2E8F8) at 1px creates structural separation between page sections and the top of the nav on scroll.

Cards use gently curved edges (8px radius) and 1px Border Light outlines at rest. They never lift on hover via shadow. Image scale at 1.025 on hover provides the only depth cue.

**The No-Shadow Rule.** Box shadows are prohibited site-wide. If depth is needed, use a tonal background shift or a 1px border. A shadow here would undermine the flat-paper editorial aesthetic that defines the visual language.

## 5. Components

### Buttons
Buttons use the Label typographic role: Inter 600, 11px, 0.12em letter-spacing, all caps. Sharp corners (4px radius). Two variants only.

- **Shape:** Gently squared (4px radius)
- **Primary:** Editorial Indigo background (#4F46E5), White text, 15px 32px padding. On hover: Editorial Indigo Deep (#3525CD), 0.3s ease transition.
- **Outline:** Transparent background, Ink text, 1.5px Border Medium border. On hover: border shifts to Ink. No fill.
- **Focus:** Native focus ring (browser default) preserved. Never suppressed.

### Pill / Chip
Used exclusively in the hero section as the page-level identity label.
- **Style:** 1px Border Medium (#C7C4D8) border, full radius (9999px), Ink Subtle text, 5px indigo dot prefix.
- **Purpose:** Single use. Not a repeated pattern across the site.

### Section Labels
- **Style:** Inter 600, 11px, 0.14em letter-spacing, all caps, Ink Subtle (#777587). No surrounding border or background. Positioned directly above the page headline as the only typographic level below Label in the hierarchy.

### Cards: Project Cards
Large cinematic containers for the Work page. Not repeated in a grid — stacked individually at full container width.
- **Corner Style:** Gently curved (8px radius) on the image container
- **Background:** Parchment; no card background fill
- **Border:** 1px Border Light (#E2E8F8) top divider, bottom divider on last card
- **Image hover:** transform: scale(1.025), 0.7s ease transition
- **Internal spacing:** 64px above/below per card

### Cards: Service Cards
Paired side-by-side. Image above, body below.
- **Corner Style:** 8px radius per card; 2px gap between cards with Border Light background
- **Body padding:** 52px 48px (desktop), scales down on mobile
- **Tag:** Inter 600, 11px, 0.12em ls, uppercase, Editorial Indigo (#4F46E5)

### Inputs / Form Fields
Contact form only. Bottom-border treatment, no enclosing box.
- **Style:** Transparent background, 1px Border Medium (#C7C4D8) bottom border only. No radius, no left/right/top border.
- **Focus:** Border bottom shifts to Ink (#151C27). No glow, no fill.
- **Placeholder:** Ink Subtle (#777587)
- **Labels:** Label role (Inter 600, 11px, uppercase, Ink Muted)

### Navigation
Fixed, glass-backdrop header. Stays consistent across all five pages.
- **Background:** rgba(250,250,249,0.88) with backdrop-filter: blur(16px). On scroll, 1px Border Light bottom border appears.
- **Logo:** Playfair Display 600, 19px. Ink. Left-aligned.
- **Links:** Inter 500, 12px, 0.06em ls, uppercase, centered absolute. Ink Muted at rest, Ink on hover/active. Active state: 1px Ink underline 3px below.
- **CTA:** Primary button, right-aligned.
- **Height:** 72px fixed.

### Footer
- **Style:** 1px Border Light top border, 44px vertical padding. Two-column: copyright left, links right.
- **Typography:** Inter 13px, Ink Subtle. Hover: Ink.

## 6. Do's and Don'ts

### Do:
- **Do** use Playfair Display italic for exactly one key phrase per page headline — the most semantically weighted clause.
- **Do** keep Editorial Indigo (#4F46E5) to primary CTAs, the italic headline span, section index numbers, and service card tags. Nowhere else.
- **Do** use 1px Border Light (#E2E8F8) as the only structural separator. Thicker borders are never appropriate.
- **Do** let white space carry weight. Section gap is 120px. Reducing it below 80px collapses the editorial rhythm.
- **Do** scale images on hover via transform: scale(1.025) only. Never use box-shadow or lift effects.
- **Do** keep button text in the Label role: Inter 600, 11px, 0.12em letter-spacing, all caps.
- **Do** use Parchment (#FAFAF9) as the default page background. Never pure white.
- **Do** respect `@media (prefers-reduced-motion: reduce)` — all GSAP animations must check this.

### Don't:
- **Don't** use cursor blobs, excessive parallax, 3D WebGL effects, or any animation that performs effort rather than communicating. Motion serves communication or it is cut.
- **Don't** use generic SaaS template structures: hero plus three-feature grid plus pricing table. The Webflow marketplace aesthetic is an explicit anti-reference.
- **Don't** use dark neon or developer-tool aesthetics: dark backgrounds, glowing purple or green accents, terminal-style type. This is a design studio, not a build tool.
- **Don't** use stock photography: smiling team photos, iStock office imagery, generic laptop-on-desk filler. Every image earns its presence or it is removed.
- **Don't** use gradient text (`background-clip: text`). Single solid color only. Emphasis via weight or size.
- **Don't** use side-stripe borders (`border-left` as a colored accent greater than 1px) on cards, callouts, or list items.
- **Don't** use box shadows. The system is flat. Depth is tonal.
- **Don't** use Editorial Indigo as a background fill, a gradient, or a decorative element. Its rarity is its power.
- **Don't** use uppercase outside the Label role. Headlines are sentence case. Body copy is sentence case.
- **Don't** add more font variants. Playfair Display and Inter are the entire typographic vocabulary. A third typeface is never justified.
