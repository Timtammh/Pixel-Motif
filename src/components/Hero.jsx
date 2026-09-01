import evProject from '../assets/ev-project.jpg'
import BrowserFrame from './BrowserFrame.jsx'
import Reveal from './Reveal.jsx'
import { QUOTE_ANCHOR } from '../siteConfig.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H1_CLASS, LABEL_CLASS } from '../i18n/typography.js'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 xl:pt-28 xl:pb-36 2xl:pt-32 2xl:pb-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-12 lg:px-10 xl:max-w-[1280px] xl:gap-16 xl:px-14 2xl:max-w-[1440px] 2xl:gap-20 2xl:px-16">
        <Reveal>
          <span className="mb-6 inline-block h-px w-10 bg-accent" aria-hidden="true" />
          <p className={`mb-5 text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.hero.eyebrow}
          </p>
          <h1 className={`font-display font-medium leading-[1.08] text-ink ${H1_CLASS[lang]}`}>
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft xl:max-w-2xl xl:text-xl">
            {t.hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 xl:mt-11">
            <a
              href={QUOTE_ANCHOR}
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-dark hover:shadow-lg xl:px-8 xl:py-4 xl:text-base"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink xl:px-8 xl:py-4 xl:text-base"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div
            className={`mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs font-medium uppercase text-ink-soft xl:mt-14 xl:pt-7 xl:text-sm ${LABEL_CLASS[lang]}`}
          >
            {t.hero.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal variant="image" delay={2} className="lg:mt-14 xl:mt-16">
          <a
            href="#work"
            className="group block"
            aria-label={`${t.hero.viewCaseStudy}: ${t.hero.featuredTitle}`}
          >
            <BrowserFrame url="evproject-two.vercel.app">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={evProject}
                  alt="Homepage preview of the EV Service and Charging Platform, showing a full-bleed automotive hero image with a minimal navigation bar"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width="1400"
                  height="900"
                />
              </div>
            </BrowserFrame>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <div>
                <p className={`text-xs font-medium uppercase text-ink-soft ${LABEL_CLASS[lang]}`}>
                  {t.hero.featuredLabel}
                </p>
                <p className="mt-1 font-display text-base font-medium text-ink xl:text-lg">
                  {t.hero.featuredTitle}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors group-hover:text-ink xl:text-sm">
                {t.hero.viewCaseStudy}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
