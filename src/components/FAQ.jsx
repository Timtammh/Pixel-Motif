import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    question: 'How long does a website take?',
    answer:
      'Most standard websites can be completed within 5–7 working days depending on scope and content.',
  },
  {
    question: 'Do I need to provide the content?',
    answer:
      'Clients can provide their own content, or we can discuss AI-assisted content preparation.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. Existing websites can be redesigned and modernised while improving mobile usability.',
  },
  {
    question: 'Can you help with domain and hosting?',
    answer: 'Yes. Deployment and basic setup can be included depending on the project.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes. Monthly website maintenance is available from HK$500/month.',
  },
]

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
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 lg:py-32 xl:py-36 2xl:py-25">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 xl:max-w-5xl xl:px-14">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent xl:text-base">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl xl:text-5xl">
            Common Questions.
          </h2>
        </Reveal>

        <Reveal delay={2} className="mt-12 border-t border-line xl:mt-16">
          {FAQS.map((item, index) => (
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
