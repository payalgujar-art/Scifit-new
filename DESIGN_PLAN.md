# SciFit — Research, Audit & Design Plan

## Phase 1 — Reference research (simplestrong.in)
**Access:** a plain HTTP fetch returned only a JS shell, but the site rendered fully in a real browser, so the findings below are observed, not guessed.
**What was NOT inspected:** hover/animation timing, the inner pages behind "Programs"/"Camps"/"Gallery" "Know more / View More" buttons, and tablet/mobile breakpoints (only desktop-width screenshots were captured).

**Observed structure (single long page, React SPA + Bootstrap + jQuery):**
1. Dark charcoal header (#1d1d1d): logo left; About Us · Programs · Upcoming Camps · Gallery · Contact Us; "Book a trial session" CTA.
2. Hero: full-bleed image carousel (Previous/Next), large brand-symbol watermark behind sections.
3. Section titles as full-width dark bars with condensed uppercase type (ABOUT US, PROGRAMS, UPCOMING CAMPS, GALLERY).
4. About: headline + short philosophy paragraph + 3 icon stat blocks.
5. Team: grid of portrait cards (name, role, Instagram icon).
6. Programs: photo cards with centered overlay titles on dark tint.
7. Camps: two photo+text blocks with "Know more".
8. Gallery teaser with "View More".
9. Footer: olive-green (#7e8e69) — address, hours, phone, email, legal links, updates signup (WhatsApp), social icons, embedded Google map, copyright. Floating WhatsApp "Book a trial session" button.

**Visual language:** Anton (condensed display) headings + Poppins body; stone/off-white (#f9f9f9, #d9d8d1), charcoal, muted olive accent; 6px-radius buttons; photography-led cards.
**Note:** the reference has no membership, pricing or schedule pages — those are SciFit additions designed in the same language.

## Phase 2 — Project audit
`New_Scifit/` was **empty** (no code, deps, components). Greenfield; nothing deleted or overwritten. Node 24 / npm 12 available.

## Phase 3 — Design plan
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Why: file-based routing for Programs/Membership/Schedule/Contact pages, SSG + built-in metadata/sitemap for SEO, `next/font` + `next/image` for performance, free static hosting (Vercel/Netlify/Cloudflare Pages), and a clean path to API routes, booking and an admin dashboard later. No extra runtime dependencies beyond Next/React/Tailwind. Animations are CSS + a tiny IntersectionObserver hook.

**Pages:** `/` (all sections), `/programs`, `/membership`, `/schedule`, `/contact`.

**Components:** `layout/` (Header, MobileMenu, Footer, FloatingCTA) · `ui/` (Button, SectionHeading/TitleBar, Card, Reveal, Container) · `sections/` (Hero, About, Programs, Benefits, Facilities, Trainers, Membership, Testimonials, ContactSection, CTA band) · `schedule/` (ScheduleBoard) · `forms/` (ContactForm).
**Data layer:** `src/data/*.ts` + `src/config/site.ts` — all copy, prices, contacts and schedule live here, typed, so they can be swapped for API calls.

**Design system:** Ink `#111111`/`#1A1A1A`, Bone `#F4F2EC`, Stone `#D9D6CC`, single accent Volt-lime `#C6F04A` (distinct from the reference's olive, used sparingly). Headings: Anton (uppercase, tight). Body: Poppins. 4/8px spacing scale, 1200px container, section padding 96px desktop / 64px mobile. Sharp 4px radius.
**Responsive:** mobile-first; header collapses to a full-screen menu below `lg`; grids 1→2→3/4 columns; schedule becomes a day-tab view on mobile.
**Imagery:** original SVG/CSS visuals and clearly marked photo slots (`public/images/`) — no copyrighted photos; swap in real SciFit photography later.

**Placeholders (need your input):** address, phone, email, map embed, prices, trainer names/bios/certifications, testimonials, class timetable, social links.
