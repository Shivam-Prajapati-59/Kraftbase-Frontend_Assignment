# Collectedge — Frontend Engineer Assignment

Pixel-accurate, fully responsive clone of the [Collectedge Figma design](https://www.figma.com/design/PKmVF5J9Wk17YsYrLyeIm9/Collectedge?node-id=0-1&t=SSrr8jmZBclZYnic-1)
(landing page: hero + lenders grid + agencies + testimonials + contact footer).
All data is hardcoded — no backend.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens (Figma colors/gradients) bound via `@theme inline` in `app/globals.css`
- **motion/react** — entrance animations and micro-interactions
- **lucide-react** — icons
- **Inter** via `next/font`

## Setup

Requires **Node.js 20 LTS+** and **pnpm** (repo pins `pnpm@11.20.0`).

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Scripts

| Command      | What it does                        |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Start the dev server (Turbopack)    |
| `pnpm build` | Production build + type-check       |
| `pnpm start` | Serve the production build          |
| `pnpm lint`  | Run ESLint                          |

## Project structure

```
app/
  page.tsx            # Home: Navbar → Hero → Features → Agencies → Testimonials → Footer
  layout.tsx          # Root layout + Inter font
  globals.css         # Single source of truth: Figma colors/gradients → Tailwind theme
components/
  landing/            # Navbar, HeroSection, HeroBackground, HeroCollage,
                      # HeroHeadline, LogoMarquee, FeaturesSection,
                      # AgenciesSection, TestimonialsSection, Footer
  landing/features/   # LendersGrid + the four feature cards
  ui/                 # Button, icons, badges, dials (dumb building blocks)
public/assets/        # Exported Figma imagery (hero cards, logos, scribble)
Home.png              # Full-page design reference
```

## Design fidelity notes

- Spacing, type scale, colors, and gradients taken from Figma's Inspect panel;
  reusable gradients live as `bg-*` utilities (e.g. `bg-hero-headline`,
  `bg-btn-primary`) so JSX stays free of magic values.
- Hero backdrop: full-bleed blurred-ellipse wash that melts into page white.
- Footer: concentric-arch dome (Figma `1929px / 10px #D9D9D966` spec) with
  blur + feathered masks, carried down the whole footer with no cut lines.

## Responsiveness

Mobile → tablet → desktop → ultrawide/4K from a single codebase:
fluid `clamp()` type, `max-w-*` content rails, the desktop-only hero collage
(`min-[1500px]`), a wrapping logo marquee, and a hero whose height caps at
content size on very tall viewports so no void opens up on 4K.

## Animations

- Direction-based hero collage entrance (left cards from the left, right
  cards from the right, badges pop with stagger) — `motion/react`.
- Headline on-load choreography synced to the collage: gradient line sweep,
  permanent caret at "DPD", scribble underline draw.
- Infinite logo marquee, button hover/active states, mobile nav toggle.
- All motion respects `prefers-reduced-motion`.

## Deploy

```bash
pnpm build   # then deploy, e.g. Vercel:
vercel --prod
```

Live link: _(add your Vercel/Netlify URL here)_
