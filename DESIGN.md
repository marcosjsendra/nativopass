---
name: NativoPass Baseline
description: Faithful coded reference for the current NativoPass mobile homepage.
colors:
  brand-aqua: "#00ffdb"
  brand-purple: "#8000ff"
  location-purple: "#8d37f6"
  surface: "#ffffff"
  ink: "#010101"
  game-black: "#000000"
  gastronomy-start: "#ffe600"
  gastronomy-end: "#ff7300"
  wellness-start: "#00d4ff"
  wellness-end: "#0045b2"
  tourism-start: "#cfd621"
  tourism-end: "#008845"
  convenience-start: "#ff5474"
  convenience-end: "#c00044"
  home-start: "#892785"
  home-end: "#3000a2"
  beauty-start: "#ff85d2"
  beauty-end: "#d6008d"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  game:
    fontFamily: "Press Start 2P, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  category: "9px"
  control: "13px"
  navigation: "27px"
  game: "37px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  location-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "50px"
    padding: "0 19px"
  category-card:
    textColor: "{colors.surface}"
    rounded: "{rounded.category}"
    padding: "10px"
  rewards-banner:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "8px 13px"
  bottom-navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.navigation}"
    height: "96px"
---

# Design System: NativoPass Baseline

## Overview

**Creative North Star: "The Rewarded Everyday"**

This document records the existing Figma homepage as an archival baseline, not as a redesign proposal. The experience is a bright mobile stack: photographic and rendered hero slides, a location control, a full-spectrum category grid, an animated rewards game, and a persistent bottom navigation.

The current design uses heavy brand saturation, direct uppercase copy, and familiar app controls. Visual fidelity wins during baseline work; future variants may challenge the abstract gift imagery or value-proposition hierarchy only after the baseline is preserved.

**Key Characteristics:**

- Full-width mobile sections with no page gutters around the hero.
- White Montserrat typography over high-saturation imagery.
- Aqua and purple as the persistent brand accents.
- Six category gradients with white line icons and outlined labels.
- Press Start 2P reserved exclusively for the Nativo Rewards game.
- A fixed-feeling white bottom navigation with three large icon targets.

## Colors

The palette is intentionally loud and categorical: aqua and purple establish the brand while each category owns a two-stop gradient.

### Primary

- **Nativo Aqua:** The progress line, rewards identity, selection feedback, and focus treatment.
- **Nativo Purple:** The rewards banner and the strongest product accent.

### Secondary

- **Location Purple:** The expanded location control.
- **Category Spectrum:** Gastronomy, wellness, tourism, convenience, home, and beauty retain their supplied start/end color pairs without reinterpretation.

### Neutral

- **App White:** The base surface, navigation, controls, icons on saturated fields, and prominent copy.
- **Navigation Ink:** Navigation icons, dividers, and primary dark details.
- **Game Black:** The Nativo Rewards background and high-contrast pixel-art field.

**The Supplied Palette Rule.** Baseline work must use the documented color endpoints exactly; color correction belongs to a named redesign variant.

## Typography

**Display Font:** Montserrat (with Arial and sans-serif fallback)  
**Body Font:** Montserrat (with Arial and sans-serif fallback)  
**Label/Mono Font:** Press Start 2P (with monospace fallback)

**Character:** Montserrat keeps the app approachable and geometric; large weight shifts distinguish thin supporting phrases from emphatic benefit copy. Press Start 2P creates a self-contained arcade voice for the Snake promotion.

### Hierarchy

- **Display** (300/800, 24px, 1.04): Hero headlines, centered over imagery; emphasis changes weight rather than family.
- **Title** (800, 22px, 1.1): Nativo Rewards banner copy.
- **Body** (400–700, 16px, 1.4): Location values and standard interface copy.
- **Label** (400, 12px, 0.04em): Uppercase category pills.
- **Game** (400, 13–18px, 1.4): Snake headings, supporting copy, and its CTA only.

**The Arcade Boundary Rule.** Press Start 2P never appears in navigation, forms, category labels, or general interface copy.

## Elevation

The in-app baseline is mostly flat. Depth comes from imagery, overlapping navigation, and saturated gradients; shadows are limited to the dropdown and the desktop presentation frame.

### Shadow Vocabulary

- **Dropdown lift** (`0 8px 8px rgba(0, 0, 0, 0.18)`): Separates the expanded location list from the category grid.
- **Navigation separation** (`0 -3px 10px rgba(0, 0, 0, 0.08)`): Keeps the persistent bottom navigation readable over scrolling content.
- **Device presentation** (`0 28px 65px rgba(0, 0, 0, 0.52)`): Used only outside the app on desktop review screens.

**The App-First Rule.** Device-frame depth must never compete with the app artwork.

## Components

### Buttons

- **Shape:** Controls use gently rounded rectangles; the Snake CTA uses a 13px radius and category labels use pills.
- **Primary:** The Snake CTA is transparent black with a 2px white outline and pixel typography.
- **Hover / Focus:** State changes complete in roughly 180ms; keyboard focus uses a visible aqua outline.

### Chips

- **Style:** Category names are white, thin-outlined pills placed inside their category gradient.
- **State:** The selected category receives an inset white outline without changing its assigned color.

### Cards / Containers

- **Corner Style:** Category tiles use 9px corners; the Snake feature uses 37px corners.
- **Background:** Category cards use their supplied gradients; the Snake surface is black with the local looping video.
- **Shadow Strategy:** Cards are flat; they do not use decorative card shadows.
- **Internal Padding:** Category tiles use 10px with centered icon and label stacks.

### Inputs / Fields

- **Style:** The location trigger is a 50px white control set into a dark translucent band.
- **Focus:** Keyboard focus is aqua; the expanded state changes the control to location purple.
- **Error / Disabled:** Not present in this visual-only baseline.

### Navigation

The 96px white bottom navigation contains three equally weighted targets separated by thin black dividers. The active item receives a low-opacity aqua circle while preserving the supplied black icons.

### Hero Carousel

Each slide is a local full-bleed image with the white NativoPass logo in a translucent top band, centered uppercase copy near the bottom, and a thin aqua timed progress line. A dark location band closes the section.

## Do's and Don'ts

### Do:

- **Do** preserve the supplied images, copy, category order, gradients, and typography in the baseline route.
- **Do** use Montserrat for interface typography and Press Start 2P only inside Nativo Rewards.
- **Do** present the app in a neutral phone frame above 768px and full-screen at or below 768px.
- **Do** keep interactions portable, semantic, and understandable without application backend logic.
- **Do** preserve this baseline before introducing redesigned variants.

### Don't:

- **Don't** silently convert the baseline into the future lifestyle redesign.
- **Don't** make future variants feel like a generic coupon website, a fintech product, or a QR scanner presented as the whole product.
- **Don't** make future NativoPass identity depend on abstract gift boxes with no human identity; the current gift slide remains only because this document records the supplied baseline.
- **Don't** introduce Tailwind-only structure, proprietary component libraries, production authentication, databases, or backend state.
- **Don't** replace the category gradients or supplied line icons with a generic design system.
