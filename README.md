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

- `src/siteConfig.js` — WhatsApp is configured for +852 9130 5925.
- `src/components/QuoteForm.jsx` — the form posts to FormSubmit and emails `motifphco@gmail.com`. reCAPTCHA remains enabled; FormSubmit handles verification and the confirmation page.
  - Before launch, submit the form once from the website and complete verification. Check the recipient inbox (including Spam) for the FormSubmit activation email and click its confirmation link.
  - After activation, submit another test enquiry and verify that the email arrives with name, business, email, and message. Submissions use the subject `Pixel Motif — New Quote Request`.
  - Repeat the activation check when moving to a different website URL. No API key is required.
- `src/components/Footer.jsx` — Instagram and LinkedIn entries are commented out until real profile URLs are available.
- `public/og-image.png` — replace with a designed Open Graph image if desired.
- `src/assets/ev-project.jpg` — case study screenshot of the EV project; replace if the live site changes.
