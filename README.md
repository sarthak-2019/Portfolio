# UGC Media Kit — Editorial Binder UGC Creator Portfolio (Next.js)

[![Watch Demo](./poster.jpg)](./demo.mp4)

A UGC creator portfolio built on the Crimson Press Kit binder design: a spiral-bound media kit where each page is a card with a heavy drop shadow, joined by SVG spiral dividers, in crimson, near-black and off-white with a grain overlay. It runs cover → contents → intro (stats + brand marquee) → sample work (vertical reels) → clients → testimonials → process → contact.

**Make it yours:** every name, link, stat, brand, reel, testimonial and process step lives in `lib/content.ts`. To make a reel playable, drop an MP4 into `public/videos/` and set its `video` field (e.g. `"/videos/lumen.mp4"`); reels without one show their poster image only. Swap images in `public/img/`.

**Motion:** GSAP 3.15 drives everything — ScrollSmoother smooth scroll + parallax, a counter loader into a cover intro, SplitText heading reveals, ScrambleText labels, DrawSVG underline, velocity-reactive marquee, reel wipe/tilt/glare, a cursor-trailing client preview, magnetic buttons and a custom cursor. Scroll choreography lives in `lib/motion/scroll.ts`, pointer effects in `lib/motion/pointer.ts`, loader/intro in `lib/motion/intro.ts`. All of it is skipped under `prefers-reduced-motion`, and pointer effects only run on mouse/trackpad devices.

## Run

This is a Next.js (App Router) app:

```sh
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production
```

Layout: `app/` (layout, page, global styles, local fonts), `components/` (one file per binder page plus the interactive client pieces: page reveal, TOC, reel player, back-to-contents button, query form, grain), `lib/content.ts` (copy and data), `public/img/` (images). The original static HTML/CSS/JS version is kept in `legacy/` for reference.

See `prompt.md` for the full build spec; `demo.mp4` shows it in motion.

---

Part of the [Portfolios](../) collection in the [claude-directory](../../) — an open-source gallery of AI-generated UI built with Claude Fable 5. [Browse the live gallery](https://pulkitxm.com/claude-directory).
