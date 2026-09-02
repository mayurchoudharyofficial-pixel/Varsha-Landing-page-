# Varsha Diet Clinic — entire sourceConcatenated project source (configs, content, and `src/`). Binary assets live in `public/`.
---

## `package.json`

```json
{
  "name": "varsh",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^13.1.1",
    "next": "16.3.3",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

---

## `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

## `postcss.config.mjs`

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

## `eslint.config.mjs`

```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

---

## `AGENTS.md`

```md
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
```

---

## `CLAUDE.md`

```md
@AGENTS.md
```

---

## `content/content.ts`

```ts
export const MISSING = "MISSING" as const;

export const content = {
  site: {
    clinicName: "Varsha Diet Clinic",
    practitionerName: "Dt. Varsha Ladkat",
    practitionerTitle: "Dietician and Nutritionist",
    tagline: "Healthy Eating, Happy Living",
    pages: [
      { label: "Home", href: "/" },
      { label: "High-Protein Recipes", href: "/recipes" },
      { label: "Packages", href: "/packages" },
    ],
    nav: [
      { label: "Home", href: "/" },
      { label: "Results", href: "#results" },
      { label: "DietPlans", href: "#diet-plans" },
      { label: "Recipes", href: "#recipes" },
      { label: "FAQ", href: "#faq" },
    ],
  },

  whatsapp: {
    visible: true,
    countryCode: "91",
    number: "9699145567",
    defaultMessage: "Hi Varsha, I'd like to know more about your diet plans.",
  },

  // Hero — top of the homepage. Photo is real.
  hero: {
    visible: true,
    // PLACEHOLDER — LOW RISK
    headline: "Evidence-based nutrition built for real Indian lifestyles.",
    subtext:
      "Specialized clinical care for PCOD, diabetes, thyroid health, and pregnancy. Work directly with a dietitian who listens first.",
    image: "/images/hero/varsha-photo.jpeg",
    imageAlt: "Dt. Varsha Ladkat",
    dishes: [
      { src: "/images/hero/dish-1.png", alt: "Indian dish" },
      { src: "/images/hero/dish-2.png", alt: "Indian dish" },
      { src: "/images/hero/dish-3.png", alt: "Indian dish" },
      { src: "/images/hero/dish-4.png", alt: "Indian dish" },
      { src: "/images/hero/dish-5.png", alt: "Indian dish" },
    ],
    nameTag: "DT. Varsha Ladkat",
    nameTagTail: "/images/icons/name-tag-tail.svg",
    primaryCta: {
      label: "Book Consultation",
      action: "whatsapp" as const,
      icon: "/images/icons/whatsapp.svg",
    },
    secondaryCta: {
      label: "Explore Diet Plans",
      href: "/packages",
      icon: "/images/icons/salad.svg",
    },
  },

  // Slim strip under the hero. Only show a stat when its own visible flag is true.
  trustBar: {
    visible: false,
    stats: [
      {
        visible: true,
        label: "Years of experience",
        value: "5",
      },
      {
        // UNCONFIRMED — verify with Varsha, number looks like placeholder
        visible: false,
        label: "Clients helped",
        value: "4000-5000",
      },
      {
        visible: true,
        label: "Diet plans",
        value: "11",
      },
      {
        // UNCONFIRMED — registration photo reads 481733; pricing sheet may show a different number
        visible: true,
        label: "Registration no.",
        value: "481733",
      },
    ],
  },

  // Meet Varsha — registration, title, and her own words from landing-page.md
  qualifications: {
    visible: false,
    heading: "Meet Varsha",
    name: "Dt. Varsha Ladkat",
    title: "Dietician and Nutritionist",
    // UNCONFIRMED — registration photo reads 481733; pricing sheet may show a different number
    registrationNumber: "481733",
    registrationImage: "/images/registration-number.jpeg",
    yearsOfPractice: "5",
    story: [
      "I focus on transforming your daily relationship with food rather than just handing you a restrictive, temporary meal plan.",
      "I combine evidence-based clinical nutrition with realistic lifestyle design so your results are actually sustainable.",
      "I specialize in a guilt-free approach that prioritizes your overall energy and well-being over just the number on the scale.",
    ],
  },

  // Specialities — names and prices from /images/diet-plans-pricing.jpg. No benefit blurbs were provided.
  specialities: {
    visible: false,
    heading: "Specialities",
    items: [
      {
        name: "Thyroid Diet Plan",
        icon: "thyroid",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Balanced nutrition to support healthy thyroid function.",
      },
      {
        name: "Diabetes Management Plan",
        icon: "diabetes",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Practical meal plans to help manage blood sugar day to day.",
      },
      {
        name: "PCOD Diet Plan",
        icon: "pcod",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Nutrition support tailored to hormonal balance and PCOD symptoms.",
      },
      {
        name: "GDM (Gestational Diabetes Mellitus) Diet Plan",
        icon: "gdm",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Safe, guided nutrition for a healthy pregnancy with GDM.",
      },
      {
        name: "Weight Gain Diet Plan",
        icon: "weight-gain",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Structured plans to help you gain weight the healthy way.",
      },
      {
        name: "Weight Loss Diet Plan",
        icon: "weight-loss",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Sustainable plans built around real food, not restriction.",
      },
      {
        name: "Muscle Gain Diet Plan",
        icon: "muscle",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Nutrition to support your strength and fitness goals.",
      },
      {
        name: "IBS (Irritable Bowel Syndrome) Diet Plan",
        icon: "ibs",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Gentle, structured eating to help manage IBS symptoms.",
      },
      {
        name: "Child Nutrition Plan",
        icon: "child",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Age-appropriate nutrition guidance for growing children.",
      },
      {
        name: "Pregnancy Diet Plan (Pre/Post)",
        icon: "pregnancy",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        // PLACEHOLDER — LOW RISK
        blurb: "Supportive nutrition through pregnancy and after.",
      },
      {
        name: "Detox Diet Plan",
        icon: "detox",
        prices: { oneMonth: 2500, threeMonths: 7500, sixMonths: 13000 },
        // PLACEHOLDER — LOW RISK
        blurb: "A short-term reset to help you feel lighter and more energised.",
      },
    ],
  },

  // Before/after — real photo pairs. Names and result lines are dummy stand-ins
  // in the same pattern as the Figma caption for Shivam, until Varsha confirms.
  beforeAfter: {
    visible: true,
    heading: "Real\nResults\nnaturally.",
    subtext:
      "No crash diets. No supplements. Just everyday home-cooked food and expert clinical guidance.",
    beforeLabel: "Before",
    afterLabel: "After",
    prevLabel: "Previous result",
    nextLabel: "Next result",
    prevIcon: "/images/icons/chevron-prev.svg",
    nextIcon: "/images/icons/chevron-next.svg",
    clients: [
      {
        before: "/images/results/man-06-before.jpeg",
        after: "/images/results/man-06-after.jpeg",
        name: "Shivam",
        result: "Gained 5kg and built lean muscle in just 3 months",
        caption: "Shivam gained 5kg and built lean muscle in just 3 months.",
      },
      {
        before: "/images/results/woman-01-before.jpeg",
        after: "/images/results/woman-01-after.jpeg",
        // DUMMY
        name: "Priya",
        // DUMMY
        result: "Lost 8kg in 4 months",
        caption: "Priya lost 8kg in 4 months eating everyday home-cooked food.",
      },
      {
        before: "/images/results/woman-02-before.jpeg",
        after: "/images/results/woman-02-after.jpeg",
        // DUMMY
        name: "Meera",
        // DUMMY
        result: "Lost 6kg in 3 months",
        caption: "Meera lost 6kg in 3 months without crash diets or supplements.",
      },
      {
        before: "/images/results/woman-03-before.jpeg",
        after: "/images/results/woman-03-after.jpeg",
        // DUMMY
        name: "Anjali",
        // DUMMY
        result: "Lost 9kg in 5 months",
        caption: "Anjali lost 9kg in 5 months and feels more energetic every day.",
      },
      {
        before: "/images/results/woman-04-before.jpeg",
        after: "/images/results/woman-04-after.jpeg",
        // DUMMY
        name: "Sneha",
        // DUMMY
        result: "Dropped 2 sizes in 4 months",
        caption: "Sneha dropped 2 sizes in 4 months on a plan built around home food.",
      },
      {
        before: "/images/results/woman-05-before.jpeg",
        after: "/images/results/woman-05-after.jpeg",
        // DUMMY
        name: "Kavya",
        // DUMMY
        result: "Lost 7kg in 3 months",
        caption: "Kavya lost 7kg in 3 months and kept the results without supplements.",
      },
    ],
  },

  // How it works — generic process copy until Varsha confirms the real steps.
  howItWorks: {
    visible: true,
    heading: "Your Journey to Better Health",
    subtext: "A simple, transparent process designed to support you at every step.",
    connector: "/images/how-it-works/connector.svg",
    steps: [
      {
        title: "Say Hello",
        body: "Drop a WhatsApp message to start the conversation. No complicated forms, no hassle.",
        number: "/images/how-it-works/01.svg",
        numberWidth: 184,
      },
      {
        title: "First Consultation",
        body: "We sit down to deeply understand your lifestyle, medical history, and exact goals.",
        number: "/images/how-it-works/02.svg",
        numberWidth: 226,
      },
      {
        title: "Get Your Custom Plan",
        body: "Receive a clinical diet chart built around your routine and the foods you actually enjoy.",
        number: "/images/how-it-works/03.svg",
        numberWidth: 228,
      },
      {
        title: "Stay on Track",
        body: "Get weekly check-ins and direct WhatsApp support to keep you moving forward.",
        number: "/images/how-it-works/04.svg",
        numberWidth: 239,
      },
    ],
  },

  // Recipes teaser — three cards from the recipe document, linking to /recipes
  recipesTeaser: {
    visible: true,
    heading: "Eat what you love",
    subtext:
      "Healthy doesn't mean boring. A sneak peek at the delicious, high-protein meals you will actually enjoy eating.",
    cta: {
      label: "See All Recipes",
      href: "/recipes",
      icon: "/images/icons/link-next.svg",
    },
    recipeIds: [
      "paneer-bhurji",
      "moong-dal-chilla",
      "soya-chunk-stir-fry",
      "masala-egg-bhurji",
    ],
  },

  // Full recipes page — names, protein, time, and steps from /images/recipes/high-protein-indian-recipes.pdf
  recipes: {
    visible: true,
    heading: "Eat what you love",
    subtext:
      "Healthy doesn't mean boring. A sneak peek at the delicious, high-protein meals you will actually enjoy eating.",
    document: "/images/recipes/high-protein-indian-recipes.pdf",
    items: [
      {
        id: "paneer-bhurji",
        name: "Paneer Bhurji (Scrambled Cottage Cheese)",
        image: "/images/recipes/paneer-bhurji.jpeg",
        protein: "~18g per serving",
        time: "15 mins",
        // PLACEHOLDER — LOW RISK
        meal: "Breakfast",
        steps: [
          "Heat oil in a pan and add cumin seeds. Let them splutter.",
          "Add chopped onions and green chilli, sauté until golden.",
          "Add tomatoes and spices, cook until soft and mushy.",
          "Mix in crumbled paneer and cook for 2-3 minutes (do not overcook). Garnish with coriander.",
        ],
      },
      {
        id: "moong-dal-chilla",
        name: "Moong Dal Chilla (Lentil Pancakes)",
        image: "/images/recipes/moong-dal-chilla.jpeg",
        protein: "~12g per chilla",
        time: "15 mins (plus soaking)",
        // PLACEHOLDER — LOW RISK
        meal: "Breakfast",
        steps: [
          "Blend the soaked dal, ginger, and chilli into a smooth batter. Add a little water as needed.",
          "Add salt and hing to the batter.",
          "Spread a ladle of batter on a hot non-stick pan in a circular motion like a dosa.",
          "Drizzle a few drops of oil and cook both sides until golden and crisp.",
        ],
      },
      {
        id: "soya-chunk-stir-fry",
        name: "Soya Chunk Stir Fry (Dry)",
        image: "/images/recipes/soya-chunk-stir-fry.jpeg",
        protein: "~25g per serving",
        time: "20 mins",
        // PLACEHOLDER — LOW RISK
        meal: "Lunch/Dinner",
        steps: [
          "Boil the soya chunks in salted water for 5 minutes. Drain, rinse with cold water, and squeeze out all excess water completely.",
          "Heat oil, add ginger-garlic paste and sauté.",
          "Add sliced onion and capsicum, stir fry on high heat for 2 minutes to retain crunch.",
          "Add the squeezed soya chunks and dry spices. Toss well and roast for 4-5 minutes.",
        ],
      },
      {
        id: "masala-egg-bhurji",
        name: "Quick Masala Egg Bhurji (Scrambled Eggs)",
        image: "/images/recipes/masala-egg-bhurji.jpeg",
        protein: "~18g per serving",
        time: "10 mins",
        // PLACEHOLDER — LOW RISK
        meal: "Breakfast",
        steps: [
          "Crack the eggs into a bowl, add a pinch of salt, and whisk well.",
          "Heat butter/oil in a pan. Sauté onions and green chilli until soft.",
          "Add tomatoes and dry spices. Cook for 2 minutes until it forms a chunky base.",
          "Lower the heat, pour in the eggs, and stir continuously until scrambled and cooked.",
        ],
      },
      {
        id: "roasted-chana-salad",
        name: "Roasted Chana Salad (Chickpea Salad)",
        image: "/images/recipes/roasted-chana-salad.jpeg",
        protein: "~15g per bowl",
        time: "10 mins (No cook)",
        meal: "Snack",
        steps: [
          "In a large mixing bowl, combine the roasted chana, chopped cucumber, tomato, and onion.",
          "Sprinkle chaat masala and salt according to your preference.",
          "Squeeze lemon juice over the mixture and toss everything together thoroughly.",
          "Serve immediately as a refreshing, crunchy high-protein snack.",
        ],
      },
    ],
  },

  labels: {
    email: "Email",
    phone: "WhatsApp",
    whatsapp: "Whatsapp",
    call: "Call",
    instagram: "Instagram",
    hours: "Clinic Hours",
    maps: "Open in Maps",
    from: "From",
    all: "All",
    registration: "Reg. no.",
  },

  // Contact strip above the footer. Actions use the real WhatsApp, phone, and maps links only.
  talkToUs: {
    visible: true,
    heading: "Lets build your plan together",
    items: [
      {
        kind: "whatsapp" as const,
        label: "Chat on Whatsapp",
        detail: "+91 9699145567",
        icon: "/images/contact/whatsapp.png",
        arrow: "/images/icons/arrow-whatsapp.svg",
      },
      {
        kind: "maps" as const,
        label: "Open in Maps",
        detail: "Mukta Clinic",
        icon: "/images/contact/maps.png",
        arrow: "/images/icons/arrow-maps.svg",
      },
      {
        kind: "call" as const,
        label: "Call Now",
        detail: "+91 9699145567",
        icon: "/images/contact/phone.png",
        arrow: "/images/icons/arrow-phone.svg",
      },
    ],
  },

  // Testimonials — Google review screenshots only. WhatsApp quotes were marked dummy and are not used.
  testimonials: {
    visible: true,
    heading: "Real Stories, Real Results",
    reviewsHeading: "Reviews",
    subtext:
      "Hear from people who transformed their health without giving up the food they love.",
    video: "/images/reviews/client-video.mp4",
    sourceLabel: "Google",
    googleIcon: "/images/icons/google.svg",
    avatarColor: "#4f74f2",
    cta: {
      label: "See all\nGoogle reviews",
      href: "https://maps.app.goo.gl/ksq5J1F9dkcyFemL8",
      arrow: "/images/icons/arrow-reviews.svg",
    },
    homepagePreviewCount: 8,
    items: [
      {
        source: "google" as const,
        image: "/images/reviews/review-01.png",
        name: "Varsha Bajange",
        quote:
          "I was very underweight and had low energy levels. After following the diet plan from this clinic, I gained weight gradually and started feeling more energetic and confident. The dietitian is very supportive and always available for guidance. Truly satisfied with the results! thank you varsha madam",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-02.png",
        name: "Sakshi Gujarani",
        quote:
          "We consulted this dietician for my grandfather, who has renal issues and diabetes. The diet plan provided was very well-balanced, easy to follow, and tailored perfectly to his condition. We’ve seen noticeable improvement in his health and overall well-being. Highly recommend for anyone managing kidney and diabetic conditions.",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-03.png",
        name: "Ashu Shilimkar",
        quote:
          "My Blood reports show slight nutritional deficiencies. I m going varsha diet clinic consultation. She give me proper diet plan With proper dietary modifications and supplementation, levels can be improved. A customized diet plan is recommended for better results. thank u so much.",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-04.png",
        name: "Sangita Shendge",
        quote:
          "My son is 10 years old. admitted in hospital.giving diet related pediatric case with fever, weakness and low platelet.giving best diet. recovery is fast. improving my son strength, better appetite.and recovery.thank u so much varsha madam. I m so happy.",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-05.png",
        name: "Shon Chopda",
        quote:
          "I m following regular diet, controled sugar level. Maintained my weight. I m happy now. Feeling better. Thank u. Highly recommend varsha diet clinic",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-06.png",
        name: "Pushpa Boddu",
        quote:
          "Dm pt.recently I visit diet clinic. My health issues. Control sugar level in proper diet plan. Following regularly. I m happy. Thank u",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-07.png",
        name: "Jayshree Shah",
        quote:
          "I had a very good experience with the diet consultation for Rt feeding in a diabetic patient.the diet plan was well structured, nutritionally balanced, and specialy tailored to control blood sugar levels while ensuring adequate calories and protein.highly recommend for anyone looking expert diet advice on clinical Nutrition especially for tube feeding and diabetic care.",
      },
      {
        source: "google" as const,
        image: "/images/reviews/review-08.png",
        name: "Pratibha Rade",
        quote:
          "I m rade Dilip. Diabetic and tuberculosis pt.follwing properly diet.sugar control.feeling happy. Dialy following diet and regular exercise. Thank u so much dt.varsha ladkat madam.",
      },
    ],
  },

  // Pricing — full list from the pricing sheet. Homepage snapshot is the first four rows, not a "popular" ranking.
  pricing: {
    visible: true,
    heading: "Specialized Diet Plans",
    subtext:
      "Clinical nutrition tailored to your exact health goals. Every plan includes direct WhatsApp access to your dietitian.",
    sheetImage: "/images/diet-plans-pricing.jpg",
    currency: "INR",
    cta: { label: "View all Plans", href: "/packages" },
    homepagePreviewCount: 5,
    chatLabel: "Chat on Whatsapp",
    pagePlates: [
      { src: "/images/hero/dish-5.png", alt: "Indian dish" },
      { src: "/images/hero/dish-4.png", alt: "Indian dish" },
    ],
    icons: {
      calendar: "/images/icons/calendar.svg",
      chevronDown: "/images/icons/chevron-down.svg",
      chevronRight: "/images/icons/chevron-right.svg",
      linkNext: "/images/icons/link-next.svg",
    },
    durationLabels: {
      oneMonth: "1 month",
      threeMonths: "3 months",
      sixMonths: "6 months",
    },
    consultations: [
      { name: "First-Time Consultation", charge: 500 },
      { name: "Home Visit Diet Consultation (Per Visit)", charge: 800 },
      { name: "Follow-Up Session (In-Person)", charge: 300 },
      { name: "Follow-Up Session (Virtual)", charge: 300 },
    ],
    plans: [
      {
        name: "Thyroid Diet Plan",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        image: "/images/diet-plans/Thyroid Diet Plan.jpeg",
      },
      {
        name: "Diabetes Management Plan",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        image: "/images/diet-plans/Diabetes Management Plan.jpeg",
      },
      {
        name: "PCOD Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/PCOD Diet Plan.jpeg",
      },
      {
        name: "GDM (Gestational Diabetes Mellitus) Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/GDM (Gestational Diabetes Mellitus) Diet Plan.jpeg",
      },
      {
        name: "Weight Gain Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/Weight Gain Diet Plan.jpeg",
      },
      {
        name: "Weight Loss Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/Weight Loss Diet Plan.jpeg",
      },
      {
        name: "Muscle Gain Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/Muscle Gain Diet Plan.jpeg",
      },
      {
        name: "IBS (Irritable Bowel Syndrome) Diet Plan",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/IBS (Irritable Bowel Syndrome) Diet Plan.jpeg",
      },
      {
        name: "Child Nutrition Plan",
        prices: { oneMonth: 3000, threeMonths: 8500, sixMonths: 15000 },
        image: "/images/diet-plans/Child Nutrition Plan.jpeg",
      },
      {
        name: "Pregnancy Diet Plan (Pre/Post)",
        prices: { oneMonth: 3500, threeMonths: 9500, sixMonths: 17000 },
        image: "/images/diet-plans/Pregnancy Diet Plan (Pre:Post).jpeg",
      },
      {
        name: "Detox Diet Plan",
        prices: { oneMonth: 2500, threeMonths: 7500, sixMonths: 13000 },
        image: "/images/diet-plans/Detox Diet Plan.jpeg",
      },
    ],
  },

  // FAQ — only the visitor questions written down. Answers only where the pricing sheet covers them.
  faq: {
    visible: true,
    heading: "FAQs",
    subtext:
      "Honest answers to help you make an informed decision about your health journey.",
    plusIcon: "/images/icons/plus.svg",
    items: [
      {
        visible: true,
        question: "Is your first consultation free or paid?",
        answer: "The first-time consultation is ₹500.",
      },
      {
        visible: true,
        question: "Do you do video call consultations too, or only in-person?",
        // PLACEHOLDER — LOW RISK
        answer: "Available both in-person at the clinic and via video call.",
      },
      {
        visible: true,
        question: "How soon do people usually start seeing results?",
        // PLACEHOLDER — LOW RISK
        answer:
          "It depends on the person and the plan, but most clients start noticing changes within the first few weeks of following their plan consistently.",
      },
      {
        visible: true,
        question: "What do people usually ask before booking?",
        // PLACEHOLDER — LOW RISK
        answer:
          "Most people want to know how the plan is personalised to them, and whether it fits their daily routine. That's exactly what we cover in your first consultation.",
      },
    ],
  },

  // Clinic & location — address, hours, map, and contact from the notes and pricing sheet. No clinic photos were provided.
  location: {
    visible: true,
    heading: "Clinic & location",
    clinicName: "Varsha Diet Clinic",
    addressLines: [
      "Shop no 02, Plot. 64, Mahesh Society",
      "Bibwewadi, Pune, Maharashtra 411037",
    ],
    mapsUrl: "https://maps.app.goo.gl/ksq5J1F9dkcyFemL8",
    mapsArrow: "/images/icons/arrow-right.svg",
    embedQuery: "Mukta Clinic, Shop no 02, Plot. 64, Mahesh Society, Bibwewadi, Pune, Maharashtra 411037",
    // MISSING — no clinic photos provided; do not fill with stock
    photos: [] as string[],
    hours: [
      { day: "Sunday", slots: ["10am - 2pm", "5pm - 7pm"] },
      { day: "Monday", slots: ["10:30am - 1:30pm", "6pm - 8pm"] },
      { day: "Tuesday", slots: ["10:30am - 1:30pm", "6pm - 8pm"] },
      { day: "Wednesday", slots: ["5pm - 7:30pm"] },
      { day: "Thursday", slots: ["5pm - 7:30pm"] },
      { day: "Friday", slots: ["5pm - 7:30pm"] },
      { day: "Saturday", slots: ["10:30am - 1:30pm", "5pm - 8pm"] },
    ],
  },

  // Closing band
  finalCta: {
    visible: true,
    // PLACEHOLDER — LOW RISK
    headline: "Let's build your health plan together.",
    primaryCta: {
      label: "Chat on WhatsApp",
      action: "whatsapp" as const,
    },
  },

  // Footer — logo, contact, hours, and Instagram from provided materials.
  footer: {
    visible: true,
    logo: "/images/logo.svg",
    logoFallbacks: ["/images/logo.png", "/images/logo.jpeg"],
    mark: "/images/icons/footer-mark.svg",
    tagline: "Healthy Eating, Happy Living",
    taglineLines: ["Healthy Eating.", "Happy Living."],
    email: "varshasdietclinic@gmail.com",
    phone: "+91 9699145567",
    instagram: {
      handle: "varshasdietclinic",
      url: "https://www.instagram.com/varshasdietclinic?igsi=MXVqY3Z0d3FlazBkbQ%3D%3D&utm_source=qr",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Results", href: "/#results" },
      { label: "Diet Plans", href: "/packages" },
      { label: "High-Protein Recipes", href: "/recipes" },
    ],
    copyright: "© Varshas diet clinic",
    credit: "Website by Mayur",
  },
};

export function whatsappHref(message = content.whatsapp.defaultMessage) {
  return `https://wa.me/${content.whatsapp.countryCode}${content.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function whatsappPlanHref(planName: string, duration?: string) {
  const extra = duration ? ` (${duration})` : "";
  return whatsappHref(`Hi Varsha, I'm interested in the ${planName}${extra}.`);
}

export function formatInr(amount: number) {
  const digits = Math.round(amount).toString();
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₹${grouped}`;
}

export type Content = typeof content;
```

---

## `content/landing-page.md`

```md
# Landing page

### 1. Her Story (for the "About/Hero" part)

- "Why did you become a dietitian? What made you choose this?"
- "How many years have you been doing this work?" 5 years
- "Roughly how many clients have you helped so far?" (even a rough number like "200+" is fine) 4000- 5000 clients
- "If someone asks you in one sentence — 'what makes you different from other dietitians?' — what would you say?" I focus on transforming your daily relationship with food rather than just handing you a restrictive, temporary meal plan……I combine evidence-based clinical nutrition with realistic lifestyle design so your results are actually sustainable……..I specialize in a guilt-free approach that prioritizes your overall energy and well-being over just the number on the scale.

### 2. Her Photo & Look

- photo of yourself — `/images/varsha.jpeg`

### 3. Before/After Client Photos (`/images/results/woman-01-before.jpeg` through `/images/results/woman-05-after.jpeg`)

- "Should we show their full name, just first name, or no name at all — just say 'Client'? - put dummy names
- "Can you tell me what result each person got — like how much weight, or what health improvement, so I can write one line under each photo?" - again use dummy data

### 4. What People Say About Her (Testimonials)

- "Do you have any nice messages clients have sent you on WhatsApp thanking you or sharing results? Can you send me screenshots of 3-4 of those?" - use dummy data
- "Has anyone left you a Google review already? If yes, can I use their words on the website?" — `/images/reviews/review-01.png` through `/images/reviews/review-08.png`

### 5. Questions People Usually Ask Her (for the FAQ section)

- "When someone calls you for the first time, what questions do they usually ask before booking?"
- "Is your first consultation free or paid?"
- "Do you do video call consultations too, or only in-person?"
- "How soon do people usually start seeing results?"

### 6. Contact Details

- "What WhatsApp number should go on the website for people to message you?" - 9699145567
- "What are your clinic timings — which days are you open, and from what time to what time?"
- **Sunday:** 10:00 am–2:00 pm, 5:00 pm–7:00 pm
- **Monday:** 10:30 am–1:30 pm, 6:00 pm–8:00 pm
- **Tuesday:** 10:30 am–1:30 pm, 6:00 pm–8:00 pm
- **Wednesday:** 5:00 pm–7:30 pm
- **Thursday:** 5:00 pm–7:30 pm
- **Friday:** 5:00 pm–7:30 pm
- **Saturday:** 10:30 am–1:30 pm, 5:00 pm–8:00 pm
- "Is the clinic address on your pricing sheet still correct?" -[Mukta Clinic, Shop no 02, Plot. 64, Mahesh Society, Bibwewadi, Pune, Maharashtra 411037](https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjYr8PG-ceWAxUAAAAAHQAAAAAQCQ..i&pvq=Cg0vZy8xMXYwNHdmd19qIhoKFHZhcnNoYSdzIGRpZXQgY2xpbmljEAIYAw&lqi=ChR2YXJzaGEncyBkaWV0IGNsaW5pY0jw39vNgLqAgAhaLBAAEAEQAhgAGAEYAiIUdmFyc2hhJ3MgZGlldCBjbGluaWMqCAgCEAAQARACkgEJZGlldGl0aWFu&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bc2eb5dd5d54f05:0x8b3f1b8c0043244a)

### 7. Recipes Page

- photos — `/images/recipes/moong-dal-chilla.jpeg`, `/images/recipes/masala-egg-bhurji.jpeg`, `/images/recipes/paneer-bhurji.jpeg`, `/images/recipes/soya-chunk-stir-fry.jpeg`, `/images/recipes/roasted-chana-salad.jpeg`
- document — `/images/recipes/high-protein-indian-recipes.pdf`

### 8. Her Look & Branding

- logo — `/images/logo.svg` (also `/images/logo.png`, `/images/logo.jpeg`)
- photo — `/images/varsha.jpeg`

### 9. Business Details (for trust/credibility)

- registration number — `/images/registration-number.jpeg`
- diet plans pricing — `/images/diet-plans-pricing.jpg`
- instagram link -  [https://www.instagram.com/varshasdietclinic?igsi=MXVqY3Z0d3FlazBkbQ%3D%3D&utm_source=qr](https://www.instagram.com/varshasdietclinic?igsi=MXVqY3Z0d3FlazBkbQ%3D%3D&utm_source=qr)
```

---

## `src/data/content.ts`

```ts
export {
  MISSING,
  content,
  whatsappHref,
  whatsappPlanHref,
  formatInr,
  type Content,
} from "../../content/content";
```

---

## `src/app/globals.css`

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-roboto), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-roboto-mono), ui-monospace, monospace;
  --font-display: var(--font-editorial), ui-serif, Georgia, serif;
  --color-cream: #fff8ee;
  --color-results: #fcf7c4;
  --color-paper: #ffffff;
  --color-ink: #143d00;
  --color-ink-muted: #3d5c2e;
  --color-leaf: #143d00;
  --color-cta: #ee7c24;
  --color-coral: #ee7c24;
  --color-mango: #ee7c24;
  --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
  --shadow-soft: 0 8px 30px -18px rgb(20 61 0 / 0.18);
  --text-sm: 1rem;
  --text-sm--line-height: 1.5;
  --text-base: 1.125rem;
  --text-base--line-height: 1.65;
  --text-lg: 1.25rem;
  --text-lg--line-height: 1.65;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  background: var(--color-paper);
  color: var(--color-ink);
}

.glass-tag {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.75),
    inset 0 -10px 18px rgba(255, 255, 255, 0.08),
    0 10px 28px rgba(20, 61, 0, 0.12);
  text-shadow: 0 1px 8px rgb(20 61 0 / 0.28);
}

.glass-tag-tail {
  opacity: 0.85;
  filter: drop-shadow(0 4px 8px rgb(20 61 0 / 0.12));
}

/* Results: 1440 spec, then grow toward the 1920 Figma frame.
   Top padding is nav (86px) + 100px. Bottom padding is 100px. */
.results-section {
  --results-nav-h: 72px;
  --results-img-w: 260px;
  --results-img-h: 353px;
  --results-chevron: 40px;
  --results-img-gap: 16px;
  --results-caption-gap: 24px;
  --results-col-gap: 32px;
  --results-pt: 100px;
  --results-pb: 64px;
  --results-radius: 8px;
}

@media (min-width: 1024px) {
  .results-section {
    --results-nav-h: 86px;
    --results-img-w: 342px;
    --results-img-h: 464px;
    --results-chevron: 46px;
    --results-img-gap: 26px;
    --results-caption-gap: 31px;
    --results-col-gap: 80px;
    --results-pt: 186px;
    --results-pb: 100px;
    --results-radius: 8px;
  }
}

.diet-plans-section,
.diet-plans-page {
  --plan-card-w: 366px;
  --plan-card-h: 500px;
  --plans-grid-w: 1178px;
}

@media (min-width: 1440px) {
  .results-section {
    --results-img-w: clamp(342px, calc(342px + (100vw - 1440px) * 93.086 / 480), 435.086px);
    --results-img-h: clamp(464px, calc(464px + (100vw - 1440px) * 126.293 / 480), 590.293px);
    --results-chevron: clamp(46px, calc(46px + (100vw - 1440px) * 12.52 / 480), 58.52px);
    --results-img-gap: clamp(26px, calc(26px + (100vw - 1440px) * 7.077 / 480), 33.077px);
    --results-caption-gap: clamp(31px, calc(31px + (100vw - 1440px) * 8.438 / 480), 39.438px);
    --results-col-gap: clamp(80px, calc(80px + (100vw - 1440px) * 143 / 480), 223px);
    --results-pt: 186px;
    --results-pb: 100px;
    --results-radius: clamp(8px, calc(8px + (100vw - 1440px) * 2.177 / 480), 10.177px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { content } from "@/data/content";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

const editorial = localFont({
  src: "../../fonts/EditorialToday-Regular.ttf",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.site.clinicName,
  description: content.site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} ${editorial.variable}`}
    >
      <body className={`${roboto.className} min-h-dvh bg-paper font-sans text-ink antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
```

---

## `src/app/packages/page.tsx`

```tsx
import Image from "next/image";
import { HeroNav } from "@/components/hero-nav";
import { PlanCatalog } from "@/components/plan-catalog";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function PackagesPage() {
  if (!content.pricing.visible) return null;

  const plates = content.pricing.pagePlates;

  return (
    <main className="diet-plans-page relative bg-white">
      <HeroNav sticky={false} />

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-[560px] overflow-hidden lg:block">
        {plates[0] ? (
          <Image
            src={plates[0].src}
            alt=""
            width={840}
            height={808}
            quality={100}
            className="absolute top-[-72px] left-[-110px] h-[420px] w-[436px] max-w-none object-contain mix-blend-multiply"
          />
        ) : null}
        {plates[1] ? (
          <Image
            src={plates[1].src}
            alt=""
            width={440}
            height={424}
            quality={100}
            className="absolute top-[210px] left-[-28px] h-[210px] w-[218px] max-w-none object-contain mix-blend-multiply"
          />
        ) : null}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1178px] flex-col items-center px-5 pt-10 pb-16 sm:px-[30px] sm:pt-[44px] sm:pb-24">
        <header className="flex w-full flex-col items-center gap-[31px] text-center text-ink">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-display text-[32px] leading-none sm:text-[48px] lg:text-[80px] lg:whitespace-nowrap">
              {content.pricing.heading}
            </h1>
            <p className="max-w-[720px] font-mono text-[20px] leading-[1.3] font-normal">
              {content.pricing.subtext}
            </p>
          </div>
          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 text-[20px] leading-[1.3] font-semibold text-paper"
            >
              <WhatsAppIcon className="size-6" />
              {content.hero.primaryCta.label}
            </MotionPill>
          ) : null}
        </header>

        <div className="mt-16 w-full sm:mt-24">
          <PlanCatalog plans={content.pricing.plans} layout="grid" />
        </div>
      </div>
    </main>
  );
}
```

---

## `src/app/page.tsx`

```tsx
import { BeforeAfter } from "@/components/before-after";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HeroNav } from "@/components/hero-nav";
import { HowItWorks } from "@/components/how-it-works";
import { Location } from "@/components/location";
import { PricingSnapshot } from "@/components/pricing-snapshot";
import { RecipesTeaser } from "@/components/recipes-teaser";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroNav />
      <BeforeAfter />
      <PricingSnapshot />
      <Testimonials />
      <HowItWorks />
      <RecipesTeaser />
      <Faq />
      <Location />
    </main>
  );
}
```

---

## `src/app/recipes/page.tsx`

```tsx
import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { MotionCard } from "@/components/motion-pill";
import { content } from "@/data/content";

export default function RecipesPage() {
  if (!content.recipes.visible) return null;

  return (
    <main className="min-h-dvh bg-cream px-5 py-16 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {content.recipes.heading}
          </h1>
          <p className="mt-3 max-w-[40rem] text-base leading-7 text-ink-muted">
            {content.recipes.subtext}
          </p>
        </FadeIn>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.recipes.items.map((recipe) => (
            <StaggerItem key={recipe.id} className="h-full">
              <MotionCard className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <div className="relative aspect-square w-full shrink-0">
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <p className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                      {recipe.meal}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-gray-900">
                      {recipe.name}
                    </h2>
                    <p className="mt-1 text-sm text-ink-muted">
                      {recipe.protein} · {recipe.time}
                    </p>
                    <ol className="mt-4 list-decimal space-y-1.5 pl-4 text-sm leading-6 text-ink-muted">
                      {recipe.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </article>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </main>
  );
}
```

---

## `src/components/before-after.tsx`

```tsx
"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { MISSING, content } from "@/data/content";

const imageEase = [0.23, 1, 0.32, 1] as const;

export function BeforeAfter() {
  if (!content.beforeAfter.visible) return null;
  return <ResultsCarousel />;
}

function ResultsCarousel() {
  const section = content.beforeAfter;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const clients = section.clients;
  const client = clients[index];

  const go = useCallback(
    (delta: number) => {
      if (clients.length < 2) return;
      setDirection(delta);
      setIndex((current) => (current + delta + clients.length) % clients.length);
    },
    [clients.length],
  );

  if (!client) return null;

  const caption = client.caption !== MISSING ? client.caption : null;
  const name = client.name !== MISSING ? client.name : null;
  const beforeAlt = name
    ? `${section.beforeLabel} — ${name}`
    : section.beforeLabel;
  const afterAlt = name ? `${section.afterLabel} — ${name}` : section.afterLabel;

  return (
    <section
      id="results"
      className="results-section relative z-0 -mt-[72px] bg-results px-[20px] sm:-mt-[86px] lg:px-[30px]"
      style={{
        paddingTop: "var(--results-pt)",
        paddingBottom: "var(--results-pb)",
      }}
    >
      <div
        className="flex w-full flex-col items-start lg:flex-row lg:items-start"
        style={{ gap: "var(--results-col-gap)" }}
      >
        <div className="flex w-full shrink-0 flex-col gap-6 text-ink lg:w-[424px]">
          <h2 className="font-display text-[2.5rem] leading-none whitespace-pre-wrap sm:text-6xl lg:text-[80px]">
            {section.heading}
          </h2>
          <p className="font-mono text-[0.9375rem] leading-[1.45] font-normal sm:text-lg lg:text-[20px] lg:leading-[1.3]">
            {section.subtext}
          </p>
        </div>

        <div
          className="flex w-full items-center lg:w-auto lg:shrink-0"
          style={{ gap: "var(--results-img-gap)" }}
        >
          <CarouselButton
            label={section.prevLabel}
            icon={section.prevIcon}
            onClick={() => go(-1)}
          />

          <div
            className="flex min-w-0 flex-1 flex-col items-start lg:flex-none lg:w-[calc(var(--results-img-w)*2+var(--results-img-gap))]"
            style={{
              gap: "var(--results-caption-gap)",
            }}
          >
            <div
              className="relative w-full overflow-hidden lg:h-[var(--results-img-h)]"
              onPointerDown={(event) => {
                if (event.button !== 0) return;
                const startX = event.clientX;
                const target = event.currentTarget;
                const onUp = (up: PointerEvent) => {
                  const dx = up.clientX - startX;
                  if (dx > 48) go(-1);
                  else if (dx < -48) go(1);
                  window.removeEventListener("pointerup", onUp);
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                };
                target.setPointerCapture(event.pointerId);
                window.addEventListener("pointerup", onUp);
              }}
            >
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={client.before}
                  className="flex"
                  style={{ gap: "var(--results-img-gap)" }}
                  custom={direction}
                  initial={
                    reduce ? { opacity: 1 } : { opacity: 0, x: direction * 24 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction * -24 }
                  }
                  transition={{ duration: 0.38, ease: imageEase }}
                >
                  <ResultPhoto
                    src={client.before}
                    alt={beforeAlt}
                    label={section.beforeLabel}
                  />
                  <ResultPhoto
                    src={client.after}
                    alt={afterAlt}
                    label={section.afterLabel}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p
              className="font-mono text-[0.9375rem] leading-[1.3] text-ink sm:text-lg lg:text-[20px]"
              aria-live="polite"
            >
              {caption}
            </p>
          </div>

          <CarouselButton
            label={section.nextLabel}
            icon={section.nextIcon}
            onClick={() => go(1)}
          />
        </div>
      </div>
    </section>
  );
}

function ResultPhoto({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      className="relative aspect-[342/464] min-w-0 flex-1 overflow-hidden lg:h-[var(--results-img-h)] lg:w-[var(--results-img-w)] lg:flex-none lg:aspect-auto"
      style={{
        borderRadius: "var(--results-radius)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 50vw, (max-width: 1919px) 342px, 435px"
        className="pointer-events-none object-cover object-top"
      />
      <span className="absolute top-2 left-2 rounded-full bg-paper px-3 py-1 font-sans text-[16px] leading-[1.2] text-black min-[1920px]:top-[10px] min-[1920px]:left-[10px] min-[1920px]:px-[15px] min-[1920px]:py-[5px] min-[1920px]:text-[20px]">
        {label}
      </span>
    </div>
  );
}

function CarouselButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative shrink-0 cursor-pointer transition-transform duration-100 ease-out hover:scale-[1.04] active:scale-[0.97]"
      style={{ width: "var(--results-chevron)", height: "var(--results-chevron)" }}
    >
      <img src={icon} alt="" className="size-full" />
    </button>
  );
}
```

---

## `src/components/blobs.tsx`

```tsx
export function HeroBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -top-10 -right-8 h-[22rem] w-[22rem] text-coral/30 lg:h-[34rem] lg:w-[34rem]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M312 78c48 36 78 98 62 154s-82 98-148 108-138-18-168-78 4-148 70-186 136-34 184 2Z" />
      </svg>
      <svg
        className="absolute top-1/3 -right-16 hidden h-64 w-64 text-sage lg:block"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M118 62c62-28 148-8 188 52s18 156-42 198-154 28-198-32 0-192 52-218Z" />
      </svg>
      <svg
        className="absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 text-butter lg:left-auto lg:right-24 lg:h-52 lg:w-52"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M86 154c34-72 138-98 198-52s72 154 12 204-168 42-210-18 0-86 0-134Z" />
      </svg>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-16 overflow-hidden bg-cream sm:h-20">
      <svg
        className="absolute inset-x-0 -top-8 h-24 w-full text-mango/20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 72c80-28 160 20 240 8s160-48 240-28 160 52 240 36 160-56 240-28 160 40 240 16v44H0Z" />
      </svg>
      <svg
        className="absolute inset-x-0 -bottom-6 h-20 w-full text-leaf/15"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 48c120 28 200-16 320-8s200 40 320 20 220-44 360-20 140 36 200 16v64H0Z" />
      </svg>
    </div>
  );
}
```

---

## `src/components/fade-in.tsx`

```tsx
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const viewport = { once: true, margin: "-100px" } as const;

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? "show" : "hidden"}
      animate={reduce || inView ? "show" : "hidden"}
      variants={reveal}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  as: Tag = "ul",
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, viewport);
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? "show" : "hidden"}
      animate={reduce || inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 400, damping: 30 },
        },
      }}
    >
      {children}
    </motion.li>
  );
}
```

---

## `src/components/faq.tsx`

```tsx
import Image from "next/image";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";

export function Faq() {
  if (!content.faq.visible) return null;

  const items = content.faq.items.filter((item) => item.visible && item.answer);

  if (items.length === 0) return null;

  return (
    <section
      id="faq"
      className="scroll-mt-[86px] bg-[#f5fef1] px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-[138px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-10 lg:w-[526px]">
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
              {content.faq.heading}
            </h2>
            <p className="font-mono text-[20px] leading-[1.3] font-normal">
              {content.faq.subtext}
            </p>
          </div>
          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] w-[248px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 font-sans text-[20px] leading-[1.3] font-semibold text-white"
            >
              <Image
                src={content.hero.primaryCta.icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {content.hero.primaryCta.label}
            </MotionPill>
          ) : null}
        </div>

        <div className="flex w-full flex-col lg:min-h-[426px]">
          {items.map((item, index) => (
            <details
              key={item.question}
              className={`group border-t-2 border-ink ${index === items.length - 1 ? "border-b-2" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-[17px] marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="font-sans text-[20px] leading-[1.4] font-normal tracking-[-0.2px]">
                  {item.question}
                </span>
                <Image
                  src={content.faq.plusIcon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0 transition-transform duration-150 group-open:rotate-45"
                />
              </summary>
              <p className="px-4 pb-5 font-sans text-[18px] leading-[1.4] text-ink">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## `src/components/final-cta.tsx`

```tsx
import { FadeIn } from "@/components/fade-in";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, whatsappHref } from "@/data/content";

export function FinalCta() {
  if (!content.finalCta.visible) return null;

  return (
    <section className="bg-cream px-5 py-24 pb-28 sm:px-8 sm:py-32 lg:px-12">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {content.finalCta.headline}
        </h2>
        {content.whatsapp.visible ? (
          <MotionPill
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-leaf px-7 text-base font-semibold text-paper"
          >
            <WhatsAppIcon className="size-[18px]" />
            {content.finalCta.primaryCta.label}
          </MotionPill>
        ) : null}
      </FadeIn>
    </section>
  );
}
```

---

## `src/components/hero-nav.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

function navHref(href: string, pathname: string) {
  if (href === "#diet-plans" && pathname === "/packages") return "/packages";
  if (href.startsWith("#") && pathname !== "/") return `/${href}`;
  return href;
}

export function HeroNav({ sticky = true }: { sticky?: boolean }) {
  const pathname = usePathname();

  return (
    <header
      className={`${sticky ? "sticky top-0" : "relative"} z-50 h-[72px] bg-white/50 backdrop-blur-[14px] sm:h-[86px]`}
    >
      <div className="flex h-full items-center justify-between pl-5 sm:pl-[30px]">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={content.footer.logo}
            alt={content.site.clinicName}
            width={90}
            height={54}
            className="h-9 w-auto sm:h-[54px] sm:w-[90px] sm:object-contain"
            priority
          />
        </Link>

        <div className="flex h-full min-w-0 items-center gap-5">
          <nav
            className="hidden h-full max-w-[720px] items-center justify-between min-[1200px]:flex min-[1200px]:w-[720px]"
            aria-label="Primary"
          >
            {content.site.nav.map((item) => (
              <Link
                key={item.href}
                href={navHref(item.href, pathname)}
                className="flex h-full items-center justify-center px-8 font-mono text-[20px] leading-[1.3] whitespace-nowrap text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-flex h-10 shrink-0 items-center justify-center gap-2.5 rounded-[2px] bg-cta px-4 font-sans text-[13px] font-semibold text-paper sm:mr-[30px] sm:h-[58px] sm:w-[248px] sm:px-6 sm:text-[20px] sm:leading-[1.3]"
            >
              <WhatsAppIcon className="size-5 sm:size-6" />
              <span className="hidden sm:inline">{content.hero.primaryCta.label}</span>
            </MotionPill>
          ) : null}
        </div>
      </div>
    </header>
  );
}
```

---

## `src/components/hero.tsx`

```tsx
import Image from "next/image";
import { MISSING, content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Hero() {
  if (!content.hero.visible) return null;

  const { hero } = content;
  const showHeadline = hero.headline !== MISSING;
  const showSubtext = hero.subtext !== MISSING;

  return (
    <section className="hero-section relative overflow-hidden bg-paper lg:h-dvh">
      <div className="relative h-[16.5rem] w-full sm:h-[20rem] lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:h-auto lg:w-1/2">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-[center_18%]"
        />
      </div>

      <div className="relative px-5 pt-6 pb-10 sm:px-8 lg:px-[30px] lg:pt-[30px] lg:pb-0">
        <div className="relative z-20 flex max-w-[595px] flex-col gap-6 lg:gap-[31px]">
          <div className="flex flex-col gap-4 lg:gap-6">
            {showHeadline ? (
              <h1 className="font-display text-[2rem] leading-[1.06] text-ink sm:text-[3.25rem] sm:leading-[1.04] lg:text-[80px] lg:leading-none">
                {hero.headline}
              </h1>
            ) : null}

            {showSubtext ? (
              <p className="font-mono text-[0.9375rem] leading-[1.45] font-normal text-ink sm:text-lg lg:text-[20px] lg:leading-[1.3]">
                {hero.subtext}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-5">
            {content.whatsapp.visible ? (
              <MotionPill
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 font-sans text-[15px] font-semibold text-paper lg:h-[58px] lg:text-xl"
              >
                <WhatsAppIcon className="size-6" />
                {hero.primaryCta.label}
              </MotionPill>
            ) : null}

            <MotionPill
              href={hero.secondaryCta.href}
              className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink bg-paper px-6 font-sans text-[15px] font-semibold text-ink lg:h-[58px] lg:text-xl"
            >
              <img
                src={hero.secondaryCta.icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {hero.secondaryCta.label}
            </MotionPill>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## `src/components/how-it-works.tsx`

```tsx
import Image from "next/image";
import { content } from "@/data/content";

export function HowItWorks() {
  if (!content.howItWorks.visible) return null;

  return (
    <section
      id="how-it-works"
      className="bg-[#f5fef1] px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex max-w-[873px] flex-col items-start gap-6">
        <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
          {content.howItWorks.heading}
        </h2>
        <p className="max-w-[653px] font-mono text-[20px] leading-[1.3] font-normal">
          {content.howItWorks.subtext}
        </p>
      </div>

      <ol className="mt-12 flex flex-col gap-10 lg:mt-8 lg:flex-row lg:items-start lg:gap-3">
        {content.howItWorks.steps.map((step, index) => (
          <li key={step.title} className="contents">
            {index > 0 ? (
              <div className="mt-[100px] hidden h-5 w-[85px] shrink-0 lg:block">
                <Image
                  src={content.howItWorks.connector}
                  alt=""
                  width={85}
                  height={20}
                  className="h-5 w-[85px]"
                />
              </div>
            ) : null}
            <article className="relative w-full max-w-[263px] shrink-0 pt-[29px]">
              <Image
                src={step.number}
                alt=""
                width={step.numberWidth}
                height={148}
                className="h-[148px] w-auto"
              />
              <h3 className="-mt-7 font-sans text-[32px] leading-[1.1] font-semibold text-black">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[20px] leading-[1.4] font-normal tracking-[-0.2px] text-[#686868]">
                {step.body}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

---

## `src/components/location.tsx`

```tsx
import Image from "next/image";
import { content } from "@/data/content";

export function Location() {
  if (!content.location.visible) return null;

  const { heading, clinicName, addressLines, mapsUrl, mapsArrow, embedQuery, hours } =
    content.location;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(embedQuery)}&output=embed`;

  return (
    <section
      id="location"
      className="scroll-mt-[86px] bg-white px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[100px]">
        <div className="flex w-full flex-col gap-10 lg:w-[640px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {heading}
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
              <p className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px]">
                {clinicName}
              </p>
              <p className="font-mono text-[20px] leading-[1.3] font-normal">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[20px] leading-[1.3] font-bold tracking-[-0.6px]"
              >
                {content.labels.maps}
                <Image
                  src={mapsArrow}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px]">
                {content.labels.hours}
              </h3>
              <ul className="flex flex-col gap-2">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-start gap-2 font-mono text-[20px] leading-[1.3] font-normal"
                  >
                    <span className="min-w-0 flex-1">{row.day}</span>
                    <span className="shrink-0 text-right whitespace-nowrap">
                      {row.slots.map((slot, index) => (
                        <span key={slot}>
                          {index > 0 ? (
                            <>
                              {" "}
                              <span className="font-bold tracking-[-0.6px]">&</span>{" "}
                            </>
                          ) : null}
                          {slot}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[320px] w-full overflow-hidden rounded-[12px] bg-[#e1e1e1] lg:h-[591px] lg:w-[606px] lg:shrink-0">
          <iframe
            title={heading}
            src={embedSrc}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
```

---

## `src/components/motion-pill.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

export function MotionPill({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
    >
      {children}
    </motion.a>
  );
}

export function MotionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}
```

---

## `src/components/plan-card.tsx`

```tsx
"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, formatInr, whatsappPlanHref } from "@/data/content";

const DURATIONS = ["oneMonth", "threeMonths", "sixMonths"] as const;

type DurationKey = (typeof DURATIONS)[number];
type Plan = (typeof content.pricing.plans)[number];

export function PlanCard({ plan }: { plan: Plan }) {
  const [duration, setDuration] = useState<DurationKey>("oneMonth");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const speciality = content.specialities.items.find((item) => item.name === plan.name);
  const durationLabel = content.pricing.durationLabels[duration];
  const price = plan.prices[duration];
  const image = plan.image;

  const updateMenuPos = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMenuPos({ top: rect.bottom + 6, left: rect.left, width: Math.max(rect.width, 148) });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updateMenuPos();
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onReposition = () => updateMenuPos();
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onReposition, true);
    window.addEventListener("resize", onReposition);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onReposition, true);
      window.removeEventListener("resize", onReposition);
    };
  }, [open]);

  return (
    <article className="plan-card flex h-[500px] w-[366px] max-w-full shrink-0 flex-col overflow-visible rounded-[12px] border-2 border-[#e5e5e5] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
      <div className="relative h-[246px] w-full shrink-0 overflow-hidden rounded-t-[10px]">
        <Image
          src={image}
          alt={plan.name}
          fill
          quality={100}
          unoptimized
          sizes="366px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between gap-4 px-4 pt-5 pb-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="truncate text-[24px] leading-[1.1] font-semibold text-[#131724]">
              {plan.name}
            </h3>
            <p className="line-clamp-2 text-[18px] leading-[1.3] text-[#808289]">
              {speciality?.blurb ?? ""}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="flex items-center justify-center gap-2 rounded-[8px] bg-[#316148] px-3 py-1.5 text-white"
              >
                <Image
                  src={content.pricing.icons.calendar}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span className="text-[16px] leading-[1.2] whitespace-nowrap">
                  {durationLabel}
                </span>
                <Image
                  src={content.pricing.icons.chevronDown}
                  alt=""
                  width={20}
                  height={20}
                  className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && mounted
                ? createPortal(
                    <ul
                      ref={menuRef}
                      role="listbox"
                      style={{ top: menuPos.top, left: menuPos.left, minWidth: menuPos.width }}
                      className="fixed z-[80] overflow-hidden rounded-[8px] border border-[#e5e5e5] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    >
                      {DURATIONS.map((key, index) => {
                        const selected = key === duration;
                        return (
                          <li key={key} role="option" aria-selected={selected}>
                            <button
                              type="button"
                              onClick={() => {
                                setDuration(key);
                                setOpen(false);
                              }}
                              className={`w-full px-3 py-2 text-left text-[16px] leading-[1.2] whitespace-nowrap ${
                                index === 0 ? "rounded-t-[6px]" : ""
                              } ${index === DURATIONS.length - 1 ? "rounded-b-[6px]" : ""} ${
                                selected
                                  ? "bg-[#316148] text-white"
                                  : "text-[#131724] hover:bg-[#f4f6f4]"
                              }`}
                            >
                              {content.pricing.durationLabels[key]}
                            </button>
                          </li>
                        );
                      })}
                    </ul>,
                    document.body,
                  )
                : null}
            </div>

            <p className="flex items-center gap-[5px] whitespace-nowrap">
              <span className="text-[16px] leading-[1.2] text-[#494c54]">
                {content.labels.from}
              </span>
              <span className="text-[32px] leading-[1.1] font-semibold text-[#131724]">
                {formatInr(price)}
              </span>
            </p>
          </div>
        </div>

        <a
          href={whatsappPlanHref(plan.name, durationLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-between rounded-[8px] border-t border-[#ececec] pt-2"
        >
          <span className="flex items-center gap-2.5">
            <WhatsAppIcon className="size-6 text-[#23ac56]" />
            <span className="text-[18px] leading-[1.3] font-normal text-[#131724]">
              {content.pricing.chatLabel}
            </span>
          </span>
          <Image
            src={content.pricing.icons.chevronRight}
            alt=""
            width={24}
            height={24}
            className="size-6 opacity-50"
          />
        </a>
      </div>
    </article>
  );
}
```

---

## `src/components/plan-catalog.tsx`

```tsx
import { PlanCard } from "@/components/plan-card";
import { content } from "@/data/content";

export function PlanCatalog({
  plans,
  layout = "grid",
}: {
  plans: typeof content.pricing.plans;
  layout?: "grid" | "row";
}) {
  if (layout === "row") {
    return (
      <div className="-mx-5 flex gap-10 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 min-[1920px]:gap-2 [&::-webkit-scrollbar]:hidden">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-[1178px] grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}
```

---

## `src/components/pricing-snapshot.tsx`

```tsx
import Image from "next/image";
import Link from "next/link";
import { PlanCatalog } from "@/components/plan-catalog";
import { content } from "@/data/content";

export function PricingSnapshot() {
  if (!content.pricing.visible) return null;

  const plans = content.pricing.plans.slice(0, content.pricing.homepagePreviewCount);

  return (
    <section
      id="diet-plans"
      className="diet-plans-section scroll-mt-[86px] bg-white px-5 py-16 sm:px-[30px] sm:py-[100px] min-[1920px]:px-5"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0 text-ink">
            <h2 className="font-display text-[32px] leading-none sm:text-[48px] lg:text-[80px] lg:whitespace-nowrap">
              {content.pricing.heading}
            </h2>
            <p className="mt-6 max-w-[720px] font-mono text-[20px] leading-[1.3] font-normal">
              {content.pricing.subtext}
            </p>
          </div>
          <Link
            href={content.pricing.cta.href}
            className="inline-flex h-[58px] shrink-0 items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink px-6 text-[20px] leading-[1.3] font-semibold text-ink"
          >
            {content.pricing.cta.label}
            <Image
              src={content.pricing.icons.linkNext}
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </Link>
        </div>
        <PlanCatalog plans={plans} layout="row" />
      </div>
    </section>
  );
}
```

---

## `src/components/qualifications.tsx`

```tsx
import { FadeIn } from "@/components/fade-in";
import { content } from "@/data/content";

export function Qualifications() {
  if (!content.qualifications.visible) return null;

  const { heading, name, title, registrationNumber, story } =
    content.qualifications;

  return (
    <section className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <FadeIn className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 font-display text-xl font-bold tracking-tight text-gray-900">
            {name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{title}</p>
          <p className="mt-6 inline-flex rounded-full border border-black/5 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
            {content.labels.registration} {registrationNumber}
          </p>
        </div>
        <div className="space-y-4 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
```

---

## `src/components/recipes-teaser.tsx`

```tsx
import Image from "next/image";
import Link from "next/link";
import { content } from "@/data/content";

function cardTitle(name: string) {
  const cut = name.indexOf(" (");
  return cut === -1 ? name : name.slice(0, cut);
}

export function RecipesTeaser() {
  if (!content.recipesTeaser.visible) return null;

  const recipes = content.recipesTeaser.recipeIds
    .map((id) => content.recipes.items.find((recipe) => recipe.id === id))
    .filter((recipe): recipe is (typeof content.recipes.items)[number] => Boolean(recipe));

  return (
    <section
      id="recipes"
      className="scroll-mt-[86px] overflow-hidden bg-white px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[873px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {content.recipesTeaser.heading}
          </h2>
          <p className="mt-6 max-w-[653px] font-mono text-[20px] leading-[1.3] font-normal">
            {content.recipesTeaser.subtext}
          </p>
        </div>
        <Link
          href={content.recipesTeaser.cta.href}
          className="inline-flex h-[58px] w-fit shrink-0 items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink px-6 text-[20px] leading-[1.3] font-semibold"
        >
          {content.recipesTeaser.cta.label}
          <Image
            src={content.recipesTeaser.cta.icon}
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </Link>
      </div>

      <div className="-mx-5 mt-12 flex gap-[34px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={content.recipesTeaser.cta.href}
            className="relative size-[280px] shrink-0 overflow-hidden rounded-[12px] bg-[#e7e7e7] sm:size-[404px]"
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              sizes="404px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[163px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] backdrop-blur-[20.7px]">
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
                <p className="truncate font-sans text-[24px] leading-[1.1] font-semibold text-white">
                  {cardTitle(recipe.name)}
                </p>
                <p className="truncate font-sans text-[20px] leading-[1.4] tracking-[-0.2px] text-[#b2b1b1]">
                  {recipe.protein}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

---

## `src/components/site-footer.tsx`

```tsx
import Image from "next/image";
import Link from "next/link";
import { TalkToUs } from "@/components/talk-to-us";
import { content, whatsappHref } from "@/data/content";

export function SiteFooter() {
  if (!content.footer.visible) return null;

  const { logo, mark, taglineLines, email, phone, instagram, copyright, links } = content.footer;

  return (
    <footer>
      <TalkToUs />
      <div className="relative overflow-hidden bg-[#2c4836] px-5 py-10 sm:px-[30px]">
        <Image
          src={logo}
          alt=""
          width={421}
          height={252}
          className="pointer-events-none absolute -right-11 bottom-0 hidden h-[252px] w-[421px] object-contain opacity-[0.08] lg:block"
        />
        <div className="relative flex flex-col gap-12 sm:gap-[99px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-6">
            <div className="flex max-w-[171px] flex-col gap-[19px]">
              <Image src={mark} alt={content.site.clinicName} width={158} height={95} className="h-[95px] w-[158px]" />
              <p className="font-display text-[20px] leading-[1.3] font-normal tracking-[0.4px] text-white">
                {taglineLines[0]}
                <br />
                {taglineLines[1]}
              </p>
            </div>

            <nav className="flex flex-col items-start gap-[19px] font-mono text-[20px] leading-[1.3] font-normal text-white">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="hover:opacity-80">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex max-w-[313px] flex-col items-start gap-[19px] text-[20px]">
              <p className="font-mono font-normal tracking-[-0.4px] text-white">
                {content.site.clinicName}
              </p>
              <div className="font-mono text-[20px] leading-[1.3] font-normal text-[#9eaba3]">
                {content.location.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="flex max-w-[414px] flex-col items-start gap-5 font-mono text-[20px] leading-[1.3] font-normal">
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.whatsapp}</p>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-[#9eaba3]">
                  {phone}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.email}</p>
                <a href={`mailto:${email}`} className="text-[#9eaba3]">
                  {email}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.instagram}</p>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9eaba3]"
                >
                  {instagram.handle}
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-[16px] leading-[1.2] text-[#9eaba3]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
```

---

## `src/components/site-header.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, whatsappHref } from "@/data/content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { MotionPill } from "@/components/motion-pill";

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/packages") return null;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-5 py-3.5 md:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src={content.footer.logo}
            alt={content.site.clinicName}
            width={160}
            height={96}
            className="h-9 w-auto md:h-10"
            priority
          />
          <span className="hidden font-display text-[15px] font-bold tracking-tight text-gray-900 sm:inline md:text-base">
            {content.site.clinicName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {content.site.pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="font-display text-[13px] font-medium tracking-tight text-gray-900"
            >
              {page.label}
            </Link>
          ))}
        </nav>

        {content.whatsapp.visible ? (
          <MotionPill
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-leaf px-4 text-[13px] font-semibold text-paper md:px-5"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">{content.hero.primaryCta.label}</span>
          </MotionPill>
        ) : null}
      </div>
    </header>
  );
}
```

---

## `src/components/specialities.tsx`

```tsx
"use client";

import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { MotionCard } from "@/components/motion-pill";
import { SpecialityIcon } from "@/components/speciality-icon";
import { MISSING, content } from "@/data/content";

export function Specialities() {
  if (!content.specialities.visible) return null;

  const { heading, items } = content.specialities;

  return (
    <section className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
        </FadeIn>
        <Stagger className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.name}>
              <MotionCard>
                <Link
                  href="/packages"
                  className="flex h-full gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/8 text-leaf">
                    <SpecialityIcon name={item.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold tracking-tight text-gray-900">
                      {item.name}
                    </span>
                    {item.blurb !== MISSING ? (
                      <span className="mt-1 block text-sm leading-5 text-ink-muted">
                        {item.blurb}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
```

---

## `src/components/speciality-icon.tsx`

```tsx
const icons = {
  thyroid: (
    <path d="M8 14c0-2.2 1.8-5 4-5s4 2.8 4 5M9 14v5a3 3 0 0 0 6 0v-5M12 4v5M9 6.5 12 4l3 2.5" />
  ),
  diabetes: (
    <path d="M12 3.5c3.5 4.2 7 8 7 11.2A7 7 0 0 1 5 14.7C5 11.5 8.5 7.7 12 3.5Z" />
  ),
  pcod: (
    <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2M4.5 10.5c1.2 0 2.2.7 2.7 1.7M19.5 10.5c-1.2 0-2.2.7-2.7 1.7" />
  ),
  gdm: (
    <path d="M8 21c0-4 1.8-7 4-7s4 3 4 7M12 14V8m-4 2c0-2.5 1.8-4.5 4-4.5S16 7.5 16 10" />
  ),
  "weight-gain": (
    <path d="M6 16h12M8 16V9l4-3 4 3v7M12 21V3" />
  ),
  "weight-loss": (
    <path d="M6 8h12M8 8v7l4 3 4-3V8M12 3v18" />
  ),
  muscle: (
    <path d="M7 14c-2 0-3-1.4-3-3s1.2-3 2.6-2.2C7 6.4 9 5 12 5s5 1.4 5.4 3.8C18.8 8 20 9.2 20 11s-1 3-3 3M8 14v5h8v-5" />
  ),
  ibs: (
    <path d="M5 10c2-3 5-4 7-1s5 2 7-1M5 15c2-3 5-4 7-1s5 2 7-1" />
  ),
  child: (
    <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21v-1.5A5.5 5.5 0 0 1 11.5 14h1A5.5 5.5 0 0 1 18 19.5V21" />
  ),
  pregnancy: (
    <path d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10 10.5c0-1.2.9-2 2-2s2 .8 2 2c0 3 3 4.5 3 8.5H7c0-4 3-5.5 3-8.5Z" />
  ),
  detox: (
    <path d="M9 21h6M10 21V10l-3-5h10l-3 5v11M12 10v4" />
  ),
} as const;

export type SpecialityIconName = keyof typeof icons;

export function SpecialityIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const path = icons[name as SpecialityIconName] ?? icons.detox;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {path}
    </svg>
  );
}
```

---

## `src/components/talk-to-us.tsx`

```tsx
import Image from "next/image";
import { content, whatsappHref } from "@/data/content";

function hrefFor(kind: (typeof content.talkToUs.items)[number]["kind"]) {
  if (kind === "whatsapp") return whatsappHref();
  if (kind === "call") return `tel:${content.footer.phone.replace(/\s+/g, "")}`;
  return content.location.mapsUrl;
}

function accent(kind: (typeof content.talkToUs.items)[number]["kind"]) {
  if (kind === "maps") {
    return { label: "text-[#78060a]", detail: "text-[#ae696b]" };
  }
  if (kind === "call") {
    return { label: "text-[#ac3d08]", detail: "text-[#cd8a6a]" };
  }
  return { label: "text-ink", detail: "text-[#6d8b5e]" };
}

export function TalkToUs() {
  if (!content.talkToUs.visible) return null;

  return (
    <section className="bg-results px-5 py-16 sm:px-[30px] sm:py-20">
      <div className="flex flex-col gap-8 sm:gap-11">
        <h2 className="max-w-[1193px] font-display text-[2.5rem] leading-none text-ink sm:text-6xl lg:text-[80px]">
          {content.talkToUs.heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-[38px]">
          {content.talkToUs.items.map((item) => {
            const href = hrefFor(item.kind);
            const external = item.kind !== "call";
            const colors = accent(item.kind);
            return (
              <a
                key={item.kind}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 overflow-hidden rounded-[44px] border-4 border-white/80 bg-[rgba(255,253,238,0.4)] p-4"
              >
                <span className="relative block size-[72px] sm:size-[100px]">
                  <Image src={item.icon} alt="" fill sizes="100px" className="object-contain" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[20px] leading-[1.3] font-normal ${colors.label}`}
                    >
                      {item.label}
                    </span>
                    <Image
                      src={item.arrow}
                      alt=""
                      width={40}
                      height={40}
                      className="size-8 rotate-90 sm:size-10"
                    />
                  </span>
                  <span className={`font-mono text-[20px] leading-[1.3] font-normal ${colors.detail}`}>
                    {item.detail}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## `src/components/testimonials.tsx`

```tsx
import Image from "next/image";
import { content } from "@/data/content";

export function Testimonials() {
  if (!content.testimonials.visible) return null;

  const items = content.testimonials.items.slice(
    0,
    content.testimonials.homepagePreviewCount,
  );

  return (
    <>
      <section
        id="stories"
        className="grid min-h-[420px] bg-[#2c4836] lg:grid-cols-2 lg:h-[725px]"
      >
        <div className="flex flex-col justify-start gap-6 px-5 py-10 text-[#fefef1] sm:px-[30px] sm:py-[30px] lg:max-w-[452px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {content.testimonials.heading}
          </h2>
          <p className="font-mono text-[20px] leading-[1.3] font-normal">
            {content.testimonials.subtext}
          </p>
        </div>
        <div className="relative min-h-[280px] bg-[#e1e1e1] lg:min-h-0">
          <video
            className="absolute inset-0 size-full object-cover"
            src={content.testimonials.video}
            controls
            playsInline
            preload="metadata"
            aria-label={content.testimonials.heading}
          />
        </div>
      </section>

      <section
        id="reviews"
        className="overflow-hidden bg-[#fcf9b9] px-5 py-16 sm:px-[30px] sm:py-[100px]"
      >
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[17px]">
          <div className="flex w-full shrink-0 flex-col items-start gap-6 text-[#2c4836] lg:w-[381px]">
            <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
              {content.testimonials.reviewsHeading}
            </h2>
            <p className="font-mono text-[20px] leading-[1.3] font-normal">
              {content.testimonials.subtext}
            </p>
            <a
              href={content.testimonials.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end gap-1"
            >
              <span className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px] whitespace-pre-line">
                {content.testimonials.cta.label}
              </span>
              <Image
                src={content.testimonials.cta.arrow}
                alt=""
                width={54}
                height={27}
                className="mb-1 h-[27px] w-[54px]"
              />
            </a>
          </div>

          <div className="-mx-5 flex w-full gap-[50px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
              <article
                key={item.name}
                className="flex h-[411px] w-[317px] shrink-0 flex-col gap-3 rounded-[12px] bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-start gap-2">
                  <span
                    className="grid size-[51px] shrink-0 place-items-center rounded-full text-[20px] leading-[1.4] font-medium tracking-[-0.2px] text-white"
                    style={{ backgroundColor: content.testimonials.avatarColor }}
                  >
                    {item.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[20px] leading-[1.4] font-medium tracking-[-0.2px] text-black">
                      {item.name}
                    </p>
                    <p className="flex items-center gap-1 text-[18px] leading-[1.3] text-[#b6b6b6]">
                      <Image
                        src={content.testimonials.googleIcon}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                      {content.testimonials.sourceLabel}
                    </p>
                  </div>
                </div>
                <p className="overflow-hidden text-[18px] leading-[1.3] font-normal text-[#5f5f5f]">
                  “{item.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## `src/components/trust-bar.tsx`

```tsx
import { FadeIn } from "@/components/fade-in";
import { content } from "@/data/content";

export function TrustBar() {
  if (!content.trustBar.visible) return null;

  const stats = content.trustBar.stats.filter((stat) => stat.visible);
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-black/5 bg-white">
      <FadeIn>
        <ul className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-black/5">
          {stats.map((stat) => (
            <li key={stat.label} className="px-3 py-8 text-center sm:px-6 sm:py-10">
              <p className="font-display text-2xl font-extrabold tracking-tight text-leaf sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] leading-4 text-ink-muted sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
```

---

## `src/components/whatsapp-fab.tsx`

```tsx
"use client";

import { usePathname } from "next/navigation";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, whatsappHref } from "@/data/content";

export function WhatsAppFab() {
  const pathname = usePathname();
  if (!content.whatsapp.visible) return null;
  if (pathname === "/" || pathname === "/packages") return null;

  return (
    <MotionPill
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel={content.hero.primaryCta.label}
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-leaf text-paper shadow-sm lg:right-6 lg:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </MotionPill>
  );
}
```

---

## `src/components/whatsapp-icon.tsx`

```tsx
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.38-1.4a10 10 0 0 0 4.66 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.78 13.99c-.24.68-1.42 1.3-1.97 1.38-.5.08-1.14.11-1.84-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.22-5-4.41-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.4.26-.28.57-.35.76-.35h.55c.18 0 .41-.06.64.49.24.58.8 2 .87 2.14.07.14.12.3.02.49-.1.2-.14.32-.28.5-.14.17-.3.39-.42.52-.14.14-.28.3-.12.58.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.33.07.11.07.66-.17 1.34Z" />
    </svg>
  );
}
```
