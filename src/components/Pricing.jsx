import Reveal from './Reveal.jsx'
import { QUOTE_ANCHOR } from '../siteConfig.js'

const FEATURES = [
  '3–5 pages',
  'Responsive design',
  'Contact form',
  'WhatsApp CTA',
  'Google Maps',
  'Basic SEO',
  'Deployment',
  '2 rounds of revisions',
  '5–7 working day typical delivery',
]

const ADD_ONS = [
  { title: 'Extra Page', price: '+HK$500' },
  { title: 'Website Maintenance', price: 'From HK$500/month' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 xl:py-36 2xl:py-25">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent xl:text-base">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl xl:text-5xl">
            Simple Pricing. No Guesswork.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr] xl:mt-16 xl:gap-8">
          <Reveal className="rounded-2xl border border-ink bg-ink p-8 text-paper sm:p-10 xl:p-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-medium xl:text-3xl">Business Website</h3>
              <p className="font-display text-3xl font-medium text-accent xl:text-4xl">From HK$3,500</p>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:mt-10 xl:gap-y-4">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-paper/80 xl:text-base">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={QUOTE_ANCHOR}
              className="mt-9 inline-flex items-center justify-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper xl:px-8 xl:py-4 xl:text-base"
            >
              Request a Free Quote
            </a>

            <p className="mt-5 text-xs leading-relaxed text-paper/50 xl:text-sm">
              Final pricing depends on project scope and requirements.
            </p>
          </Reveal>

          <Reveal delay={2} className="flex flex-col gap-6">
            {ADD_ONS.map((addOn) => (
              <div
                key={addOn.title}
                className="flex flex-1 flex-col justify-center rounded-2xl border border-line bg-white p-7 xl:p-8"
              >
                <h4 className="font-display text-lg font-medium text-ink xl:text-xl">{addOn.title}</h4>
                <p className="mt-2 text-base font-medium text-accent xl:text-lg">{addOn.price}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
