# Crimson Press Kit — Editorial Binder Designer Portfolio with Print Aesthetic (Next.js)

[![Watch Demo](./poster.jpg)](./demo.mp4)

Crimson Press Kit is a single-page designer portfolio staged as a physical spiral-bound magazine / brand press kit lying open on a dark studio table — a raw, editorial, print-inspired layout where each "page" is a full-bleed card with a heavy drop shadow, joined by metal spiral-binding dividers rendered in pure SVG. Signature crimson anchors the cover and method pages against near-black ink, warm off-white paper, and dark gallery cards, with a generated noise/grain texture overlay in `mix-blend-multiply` to sell the printed feel. The binder flows cover → contents → intro → selected works → the method → contact, using a heavy uppercase grotesk for headlines, monospace for labels, and one italic serif accent word. React client components handle smooth anchor scrolling, IntersectionObserver page reveals, grayscale-to-color hovers, and a fixed "back to contents" button. Generated with Claude Fable 5.

## Run

This is a Next.js (App Router) app:

```sh
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production
```

Layout: `app/` (layout, page, global styles, local fonts), `components/` (one file per binder page plus the interactive client pieces: page reveal, TOC, back-to-contents button, query form, grain), `lib/content.ts` (copy and data), `public/img/` (images). The original static HTML/CSS/JS version is kept in `legacy/` for reference.

See `prompt.md` for the full build spec; `demo.mp4` shows it in motion.

---

Part of the [Portfolios](../) collection in the [claude-directory](../../) — an open-source gallery of AI-generated UI built with Claude Fable 5. [Browse the live gallery](https://pulkitxm.com/claude-directory).
