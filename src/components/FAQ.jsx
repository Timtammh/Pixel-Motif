import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EYEBROW_CLASS, H2_CLASS } from '../i18n/typography.js'

function FAQItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-lg font-medium text-ink xl:text-xl">{item.question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 xl:h-9 xl:w-9 ${
              isOpen ? 'rotate-45 border-accent text-accent' : ''
            }`}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft xl:text-base">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { lang, t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 xl:max-w-5xl xl:px-14">
        <Reveal className="max-w-2xl">
          <p className={`text-sm font-medium uppercase text-accent xl:text-base ${EYEBROW_CLASS[lang]}`}>
            {t.faq.eyebrow}
          </p>
          <h2 className={`mt-3 font-display font-medium text-ink ${H2_CLASS[lang]}`}>{t.faq.heading}</h2>
        </Reveal>

        <Reveal delay={2} className="mt-12 border-t border-line xl:mt-16">
          {t.faq.items.map((item, index) => (
            <FAQItem
              key={item.question}
              id={`faq-${index}`}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
