import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H2_CLASS, LABEL_CLASS } from '../i18n/typography.js'

export default function Services() {
  const { lang, t } = useLanguage()

  return (
    <section id="services" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className={`text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.services.eyebrow}
          </p>
          <h2 className={`mt-3 font-display font-medium text-ink ${H2_CLASS[lang]}`}>{t.services.heading}</h2>
        </Reveal>

        <Reveal className="mt-14 border-t border-line xl:mt-16">
          {t.services.items.map((service, index) => (
            <div key={service.title} className="group border-b border-line">
              <div className="grid gap-3 py-10 transition-colors duration-300 group-hover:bg-paper-dim/60 md:grid-cols-[3.5rem_1fr_1fr] md:items-baseline md:gap-8 md:px-3 md:py-12 xl:py-14">
                <span className="font-display text-2xl text-line transition-colors duration-300 group-hover:text-accent xl:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink xl:text-3xl">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft xl:text-base">
                    {service.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase text-ink-soft/70 md:justify-end md:text-right xl:text-sm ${LABEL_CLASS[lang]}`}
                >
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
