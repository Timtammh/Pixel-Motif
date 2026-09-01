import evProject from '../assets/ev-project.jpg'
import samson from '../assets/samson.jpg'
import sms from '../assets/sms.jpg'
import travel from '../assets/travel.jpg'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H2_CLASS, LABEL_CLASS } from '../i18n/typography.js'

// URLs, images and alt text don't change between languages.
const FEATURED_URL = 'https://evproject-two.vercel.app/'
const FEATURED_IMAGE = evProject
const FEATURED_IMAGE_ALT =
  'Homepage preview of the EV Service and Charging Platform, showing a full-bleed automotive hero image with a minimal navigation bar'

const MORE_WORK_STATIC = [
  {
    url: 'https://timtammh.github.io/assignment1-TAMMANHO11/',
    image: travel,
    imageAlt: 'Homepage preview of the travel-themed website, showing its hero section',
  },
  {
    url: 'https://www.samsonlabelvietnam.com',
    image: samson,
    imageAlt: 'Homepage preview of the Samson Label Vietnam corporate website',
  },
  {
    url: 'https://www.smsteamint.com',
    image: sms,
    imageAlt: 'Homepage preview of the SMS Team International website, showing a Hong Kong night skyline hero image',
  },
]

export default function Work() {
  const { lang, t } = useLanguage()
  const featured = t.work.featured
  const moreWork = t.work.moreWork.map((project, index) => ({ ...project, ...MORE_WORK_STATIC[index] }))

  return (
    <section id="work" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className={`text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.work.eyebrow}
          </p>
          <h2 className={`mt-3 font-display font-medium text-ink ${H2_CLASS[lang]}`}>{t.work.heading}</h2>
        </Reveal>

        <div className="mt-14 xl:mt-16">
          <Reveal variant="image">
            <a
              href={FEATURED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line bg-paper-dim"
              aria-label={`View ${featured.title} project (opens in a new tab)`}
            >
              <div className="aspect-[16/9] w-full overflow-hidden lg:aspect-[21/9]">
                <img
                  src={FEATURED_IMAGE}
                  alt={FEATURED_IMAGE_ALT}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="1400"
                  height="900"
                />
              </div>
            </a>
          </Reveal>

          <Reveal delay={1} className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:mt-10">
            <div>
              <p className={`text-xs font-medium uppercase text-ink-soft xl:text-sm ${LABEL_CLASS[lang]}`}>
                {featured.category}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink xl:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft xl:text-base">{featured.summary}</p>
              <a
                href={FEATURED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark xl:px-7 xl:py-3.5 xl:text-base"
              >
                {featured.viewLive}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </svg>
              </a>
            </div>

            <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-10">
              {featured.breakdown.map((item) => (
                <div key={item.label}>
                  <dt className={`text-xs font-medium uppercase text-accent xl:text-sm ${LABEL_CLASS[lang]}`}>
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft xl:text-base">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 xl:mt-24">
          <Reveal className="border-t border-line pt-8">
            <p className={`text-xs font-medium uppercase text-ink-soft xl:text-sm ${LABEL_CLASS[lang]}`}>
              {t.work.moreWorkLabel}
            </p>
          </Reveal>

          <Reveal delay={1} className="mt-8 grid gap-6 sm:grid-cols-3 xl:gap-8">
            {moreWork.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(12,12,13,0.3)]"
                aria-label={`View ${project.title} project (opens in a new tab)`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-paper-dim">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    width="1400"
                    height="900"
                  />
                </div>
                <div className="p-5 xl:p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft/70">{project.category}</p>
                  <h4 className="mt-1.5 font-display text-base font-medium text-ink xl:text-lg">{project.title}</h4>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
