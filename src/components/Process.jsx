import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H2_CLASS } from '../i18n/typography.js'

export default function Process() {
  const { lang, t } = useLanguage()

  return (
    <section id="process" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className={`text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.process.eyebrow}
          </p>
          <h2 className={`mt-3 font-display font-medium text-ink ${H2_CLASS[lang]}`}>{t.process.heading}</h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {t.process.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delay={Math.min(index + 1, 3)} className="relative pl-0">
              <div className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="font-display text-3xl font-medium text-accent xl:text-4xl">{step.number}</span>
                  <div className="hidden h-px flex-1 bg-line lg:mt-6 lg:block" />
                </div>
                <h3 className="mt-3 font-display text-lg font-medium text-ink lg:mt-5 xl:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft xl:text-base">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
