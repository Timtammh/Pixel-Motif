# Pixel Motif

One-page marketing website for Pixel Motif, a freelance web design and development studio for small businesses in Hong Kong.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Before going live

A few placeholders need to be swapped for real values:

- `src/siteConfig.js` — `WHATSAPP_URL` (currently a placeholder `wa.me` link).
- `src/components/QuoteForm.jsx` — the quote form currently only shows a client-side confirmation. Wire `handleSubmit` up to a real backend or email service (e.g. Formspree, EmailJS, or a mailto: link).
- `src/components/Footer.jsx` — `SOCIALS` links are placeholders (`href="#"`).
- `public/og-image.png` — replace with a designed Open Graph image if desired.
- `src/assets/ev-project.jpg` — case study screenshot of the EV project; replace if the live site changes.
