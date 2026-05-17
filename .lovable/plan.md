# Baba Food Inn — Landing Page Plan

Build a single, cinematic landing page only. No extra pages, backend, forms, or systems until you approve.

## Brand inputs (locked from your answers)
- **Name:** Baba Food Inn
- **Tagline:** "Agla stop hamare corner pe"
- **About:** Family-friendly restaurant known for great dosas, sandwiches, and chaat items.
- **Address:** Shop No. 10, Venus Apartment, opp. Joggers Park Road, Chikoowadi, Borivali West, Mumbai 400092
- **Phone:** 080808 09889
- **Hours:** 1 PM – 11 PM
- **Instagram:** @babafoodinn
- **Zomato:** baba-food-inn-borivali-west
- **Mood:** Bright modern street-food (vibrant, premium, playful)

## Visual direction
- Palette: warm cream background (#FFF7EC), deep chaat-red primary (#E0432B), mustard accent (#F2B441), chutney-green secondary (#2E7D4F), espresso ink (#1A1208).
- Typography: display serif for editorial headlines (e.g. Fraunces / Instrument Serif) paired with a clean grotesk (Geist / Inter) for body.
- Imagery: your 9 uploaded food photos used full-bleed, with grain + soft warm color grade to unify the look.
- Logo: generated wordmark combining "Baba Food Inn" with a subtle dosa-swirl / chaat-bowl glyph — bright, premium street-food feel.

## Page structure (in scroll order)
1. **Intro logo screen** — fullscreen cream backdrop, centered animated logo, soft ambient parallax, subtle "Tap to enter" hint. Click on logo triggers the cinematic transition.
2. **Cinematic transition** — logo lifts + fades while a warm-gradient curtain sweeps and a hero image flashes in, then content staggers in.
3. **Editorial hero / about** — large serif headline ("Agla stop hamare corner pe"), supporting paragraph, full-bleed food image with parallax, restaurant name lockup.
4. **Featured food showcase** — 3–4 hero dishes from your uploads (cheese bhel cone, cheese-loaded chaat, masala dosa, star sandwich) in editorial split layouts with scroll-triggered image reveals.
5. **Minimal menu preview** — categorized teaser: Dosas · Sandwiches · Chaat. 2 items per category (name + short description, no prices, no full menu yet).
6. **Social / contact strip** — address, hours, phone, Instagram + Zomato links with hover micro-interactions.
7. **Footer** — wordmark, tagline, copyright, repeat socials.

## Motion system (Framer Motion)
- Logo intro: scale-in + soft blur clear, idle breathing loop.
- Click transition: orchestrated timeline — logo lift, curtain wipe, hero stagger-in.
- Scroll: fade/translate reveals, image clip-path reveals, parallax on food photos, headline word-by-word stagger.
- Hover: image zoom + caption slide, link underline draw, button press scale.
- Respects `prefers-reduced-motion`.

## Technical (matches this project's stack)
- TanStack Start + React + TypeScript + Tailwind v4 (existing).
- Framer Motion for all animation.
- Single route: `src/routes/index.tsx` (replaces the placeholder).
- Components under `src/components/landing/`: `IntroLogo`, `Hero`, `FeaturedDishes`, `MenuPreview`, `ContactStrip`, `Footer`, plus motion primitives `SectionReveal` and `ParallaxImage`.
- Design tokens added to `src/styles.css` (palette, radii, gradients, shadows) in oklch.
- Uploaded photos copied to `src/assets/food/` and imported as ES6 modules; lazy-loaded below the fold.
- Generated logo saved as `src/assets/logo.png` (transparent).

## SEO & performance
- Route `head()`: title "Baba Food Inn — Dosas, Sandwiches & Chaat in Borivali West", meta description, Open Graph tags, JSON-LD `Restaurant` schema (name, address, phone, hours, sameAs links to Instagram + Zomato).
- Semantic HTML, single H1, alt text on every image, responsive images with width/height, lazy loading below the fold.

## Mobile
- Mobile-first layouts, tap-friendly logo intro, reduced parallax intensity on small screens, fluid type scale with `clamp()`.

## Out of scope (will ask after this ships)
Full menu page, online ordering, gallery page, testimonials, contact form, embedded map, deeper social integrations, admin/CMS, booking.

After the landing page is live in preview, I'll stop and ask which of the above you want next.