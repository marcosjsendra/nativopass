# NativoPass Homepage Iterations

## Original

The approved coded baseline that recreates the supplied Figma homepage. This version remains unchanged and is available with `?iteration=original`.

## Iteration 1

The first client-directed variation, available with `?iteration=iteration-1`.

Current scope:

- Uses a single, static hero slide with `nativo-pass-hero-slide1-new.png`.
- Extends the hero by 200px over the Original, with the membership CTA inset inside the hero.
- Places the enlarged, shadow-free tagline in one centered line with a responsive 480px maximum aligned to the logo, and rounds the hero's lower corners over a white surface that blends into the category section.
- Preserves “Tu estilo de vida, premiado.” and the NativoPass logo placement.
- Removes the translucent black band behind the logo.
- Replaces the location picker with a two-state membership CTA.
- Signed-out state: open-top blue gradient panel using `#0094EA`, membership unlock message, and white `UNIRME` action.
- Member state: softened purple gradient panel using `#360A62`, randomized points, inline remaining-day counter, and `VER RANKING` action aligned to the signed-out layout.
- Adds a first-entry animation sequence for the hero hierarchy and a short stagger across the category cards, with a static reduced-motion alternative.
- Uses its own isolated page layout and component styles, including the approved NEÓN Snake treatment.
- Reveals the Snake card once on scroll with a clipped arcade entrance, neon scan, and staggered game UI; reduced-motion users see the settled card immediately.

## Iteration 2

Iteration 2 is a hidden, reserved canvas for possible future exploration.

Current scope:

- It is not listed in the prototype controls or included in the active homepage routing.
- Requests for `?iteration=iteration-2` fall back safely to Original.
- Its placeholder file remains dormant and is not included in the production bundle.
