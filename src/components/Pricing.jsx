import Reveal from './Reveal.jsx'
import { QUOTE_ANCHOR } from '../siteConfig.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H2_CLASS } from '../i18n/typography.js'

export default function Pricing() {
  const { lang, t } = useLanguage()

  return (
    <section id="pricing" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className={`text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.pricing.eyebrow}
          </p>
          <h2 className={`mt-3 font-display font-medium text-ink ${H2_CLASS[lang]}`}>{t.pricing.heading}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr] xl:mt-16 xl:gap-8">
          <Reveal className="rounded-2xl border border-ink bg-ink p-8 text-paper sm:p-10 xl:p-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-medium xl:text-3xl">{t.pricing.packageTitle}</h3>
              <p className="font-display text-3xl font-medium text-accent xl:text-4xl">{t.pricing.price}</p>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:mt-10 xl:gap-y-4">
              {t.pricing.features.map((feature) => (
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
              {t.pricing.cta}
            </a>

            <p className="mt-5 text-xs leading-relaxed text-paper/50 xl:text-sm">{t.pricing.note}</p>
          </Reveal>

          <Reveal delay={2} className="flex flex-col gap-6">
            {t.pricing.addOns.map((addOn) => (
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
