# NativoPass Homepage Redesign

A mobile-first, high-fidelity React prototype of the current NativoPass app homepage. This first version intentionally recreates the supplied Figma baseline before any redesign work begins.

## Stack

- Vite 8
- React 19
- Plain, portable CSS
- Local image, icon, logo, and video assets
- ESLint
- Netlify-ready SPA configuration

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
npm run preview
```

## Presentation behavior

- Desktop and laptop viewports display the app inside a centered, restrained phone frame.
- Viewports at or below 768px remove the frame and use the full screen.
- The app content scrolls independently while the bottom navigation remains visible.

## Baseline interactions

- The hero carousel advances automatically and can be advanced by tapping the hero.
- The location picker opens, lists the six supplied locations, and stores the chosen label locally.
- Category tiles support a selected state.
- The Nativo Rewards video loops inline and the game button simulates a ready state.
- Bottom navigation items support an active state.

## Project context

- [Product context](./PRODUCT.md)
- [Design system](./DESIGN.md)
- [Development handoff](./docs/nativopass-homepage-redesign-handoff.md)
- [Initial copy and visual tokens](./docs/initial-copy-and-content.md)

## Deployment

Connect this repository to Netlify. The included `netlify.toml` uses `npm run build` and publishes `dist`.
