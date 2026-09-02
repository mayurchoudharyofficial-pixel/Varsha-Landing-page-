# Varsha Diet Clinic — design system

Source of truth for the live site. Values below match `src/app/globals.css`, `src/app/layout.tsx`, and the Figma file `Visual-design-Practice-2026`.

Desktop frame: **1440px**. Page padding: **30px**. Section vertical padding: **100px** on desktop, **64px** on small screens. Review layouts at **375px** after desktop.

## Brand

- Clinic: Varsha Diet Clinic
- Practitioner: Dt. Varsha Ladkat
- Tagline: Healthy Eating, Happy Living
- Voice: clinical, direct, Indian-food-first. No crash-diet language.

## Colour

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| Ink | `#143d00` | `text-ink`, `border-ink` | Headings, body on light, outlines, FAQ rules |
| Paper | `#ffffff` | `bg-paper`, `bg-white` | Page, diet plans, recipes, location |
| CTA | `#ee7c24` | `bg-cta` | Book Consultation |
| Cream | `#fff8ee` | `bg-cream` | Legacy cream surfaces |
| Results | `#fcf7c4` | `bg-results` | Results section |
| Reviews yellow | `#fcf9b9` | — | Reviews band |
| Cream soft | `#f5fef1` | — | FAQ, How it works |
| Forest bar | `#2c4836` | — | Stories left pane, footer bar |
| Video grey | `#e1e1e1` | — | Video pane, map placeholder |
| Muted grey | `#686868` | — | How-it-works body |
| Recipe meta | `#b2b1b1` | — | Overlay protein line |
| Ink muted | `#3d5c2e` | `text-ink-muted` | Secondary copy (older sections) |

Do not introduce extra greens or oranges.

## Type

| Role | Family | Weight | Size | Line height | Tracking |
|---|---|---|---|---|---|
| Display | Editorial Today | Regular | 80px (desktop), 40px mobile | 1 | 0 |
| Body M | Roboto Mono | Regular 400 | 20px | 1.3 | 0 |
| Body L Bold | Roboto Mono | Bold 700 | 24px | 1.3 | -0.48px |
| Body M Bold | Roboto Mono | Bold 700 | 20px | 1.3 | -0.6px |
| Title | Roboto | SemiBold 600 | 32px | 1.1 | 0 |
| Heading | Roboto | SemiBold 600 | 24px | 1.1 | 0 |
| Subtitle | Roboto | Regular 400 | 20px | 1.4 | -0.2px |
| CTA | Roboto | SemiBold 600 | 20px | 1.3 | 0 |
| UI / nav | Roboto Mono | Regular 400 | 20px | 1.3 | 0 |

Load via `next/font`:

- `--font-display` → `fonts/EditorialToday-Regular.ttf`
- `--font-sans` → Roboto 400/500/600/700
- `--font-mono` → Roboto Mono 400/500/700

Do **not** use Inter, Test Söhne, or system serif for display.

## Layout

- Sticky homepage nav: **86px** desktop, **72px** mobile, `bg-white/50` + `backdrop-blur-[14px]`
- Section gutters: `px-5` → `sm:px-[30px]`
- Section padding: `py-16` → `sm:py-[100px]`
- Content max for display + subtext: heading ~873px, subtext ~653px
- Two-column splits: 50/50 (hero, stories), or copy + list (FAQ, location)

## Radius and controls

| Element | Radius | Size |
|---|---|---|
| Book Consultation | 2px | 248 × 58, 24px side padding |
| Outline button (View all / See all) | 2px | height 58, 2px ink border |
| Recipe card | 12px | 404 × 404 |
| Review card | 12px | 317 × 411 |
| Plan card | 8px (results images) / plan 366 × 500 | |
| Map embed | 12px | 606 × 591 desktop |
| FAQ plus | 24 × 24 | rotates 45° when open |

Primary CTA always opens WhatsApp (`wa.me/919699145567`). Never use dummy phone numbers from Figma.

## Motion

- Button hover: scale 1.03 / tap 0.97, spring stiffness 400, damping 30 (`MotionPill`)
- Respect `prefers-reduced-motion` (globals.css)

## Homepage order

1. Hero
2. Sticky nav
3. Results
4. Specialized Diet Plans
5. Real Stories + Reviews
6. How it works
7. Eat what you love
8. FAQs
9. Clinic & location
10. Footer (talk band + dark bar)

Hidden (`visible: false`): trust bar, Meet Varsha, specialities grid.

## Content rules

All copy, paths, phones, and URLs live in `content/content.ts` (re-exported as `@/data/content`). Components must not hardcode them. Facts come only from `content/` and `public/`. Missing facts stay `"MISSING"`.
