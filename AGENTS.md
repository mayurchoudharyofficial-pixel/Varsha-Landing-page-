<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules

These apply to every change on this site.

## 1. Never invent content

Do not invent facts, statistics, testimonials, client names, results, reviews, or claims.

Use only:

- files already in `public/` (`/images`, `/reviews`, `/results`, `/recipes`)
- copy and facts from files in `content/`

If a fact, quote, number, name, or image is not in those sources, put it in `src/data/content.ts` as the string `MISSING`. Never fill the gap with dummy or plausible data.

```ts
// ❌ BAD
stat: "4000+ clients"

// ✅ GOOD — only if content/landing-page.md actually states it
stat: "4000-5000 clients"

// ✅ GOOD — source does not have this
firstConsultation: "MISSING"
```

## 2. One content file

All page text and image paths live in `src/data/content.ts`.

No component may hardcode a heading, sentence, label, phone number, address, URL, or `src`. Components only read from that file.

```tsx
// ❌ BAD
<h1>Varsha's Diet Clinic</h1>
<img src="/images/varsha.jpeg" alt="Varsha" />

// ✅ GOOD
<h1>{content.hero.heading}</h1>
<img src={content.hero.portrait.src} alt={content.hero.portrait.alt} />
```

## 3. Section visibility

Every section in `src/data/content.ts` has a `visible` boolean. Components must hide the section when `visible` is `false`. Do not render an empty placeholder.

```ts
hero: { visible: true, heading: "…" }
faq: { visible: false, items: [] }
```

```tsx
{content.faq.visible ? <Faq items={content.faq.items} /> : null}
```

## 4. Mobile-first

Build and review every section at **375px width** before calling it done. Desktop can come after. A section that only works at desktop width is not finished.
