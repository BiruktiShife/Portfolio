# Biruktawit Shiferaw — Portfolio

Redesigned portfolio built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, and **shadcn/ui**.

## Design direction

- Deep navy background with a warm amber-gold accent and a soft moss-green
  secondary color — distinct from typical "AI portfolio" templates.
- Fraunces (serif display) + Inter (body) + JetBrains Mono (labels/code),
  leaning into the developer identity.
- The experience section is styled as a **git commit log**, and the hero has
  a terminal-style typing effect — both tie the design back to what you
  actually do.
- Single scrolling page with anchor navigation (About → Log → Projects →
  Contact), which reads as more modern than separate pages for a portfolio
  this size, and is easier for recruiters to skim quickly.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add your images (see `public/PLACE_IMAGES_HERE.txt` for the exact list —
   profile photo, project screenshots, resume PDF).
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## Things to finish before publishing

- [ ] Add real images to `/public` (profile.jpg, project screenshots, resume.pdf)
- [ ] Replace the placeholder descriptions for **Job Board Platform**,
      **Local Language Translator**, and **Tatari Hub** in
      `components/projects.tsx` — your live site only exposed screenshots
      for these, not full descriptions, so I couldn't pull real copy for them.
- [ ] Wire up the contact form in `components/contact.tsx` — it currently
      only shows a success state in the UI. Connect it to an API route,
      [Resend](https://resend.com), or [Formspree](https://formspree.io) to
      actually receive messages.
- [ ] Update social links / email / phone if anything has changed.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no
extra configuration needed.
