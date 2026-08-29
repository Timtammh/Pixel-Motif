import Reveal from './Reveal.jsx'
import QuoteForm from './QuoteForm.jsx'
import { WHATSAPP_URL } from '../siteConfig.js'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 xl:py-36 2xl:py-25">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl xl:text-5xl">
              Ready to Build a Better Website?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft xl:max-w-lg xl:text-lg">
              Tell us what you need. We&apos;ll review your project and provide a clear quotation.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink xl:px-7 xl:py-4 xl:text-base"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 8.8c.3-1 1.4-.9 1.7-.4l.6 1.1c.2.4.1.8-.2 1.1l-.5.5c.4.9 1.2 1.7 2.1 2.1l.5-.5c.3-.3.7-.4 1.1-.2l1.1.6c.5.3.6 1.4-.4 1.7-1.7.6-4-1-5.3-2.3-1.3-1.3-2.9-3.6-2.3-5.3Z"
                  fill="currentColor"
                />
              </svg>
              WhatsApp Us
            </a>
            <p className="mt-2 text-xs text-ink-soft">
              WhatsApp link is a placeholder — replace with your business number.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
