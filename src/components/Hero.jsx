import BrowserFrame from './BrowserFrame.jsx'
import Reveal from './Reveal.jsx'
import { QUOTE_ANCHOR } from '../siteConfig.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-accent-light),transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:px-10">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Web Design &amp; Development Studio
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Professional Websites That Help Small Businesses Grow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            We design and build modern, responsive websites for local businesses — from landing
            pages to complete business websites.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={QUOTE_ANCHOR}
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-dark hover:shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              View Our Work
            </a>
          </div>

          <p className="mt-10 text-sm font-medium tracking-wide text-ink-soft">
            Web Design <span className="mx-2 text-line">·</span> Development
            <span className="mx-2 text-line">·</span> Responsive
            <span className="mx-2 text-line">·</span> SEO Ready
          </p>
        </Reveal>

        <Reveal delay={2} className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] border border-line/70 lg:-inset-8" />
          <BrowserFrame url="yourbusiness.hk">
            <div className="bg-white">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[13px] font-semibold text-ink">Ember &amp; Co.</span>
                </div>
                <div className="hidden gap-4 text-[11px] text-ink-soft sm:flex">
                  <span>Menu</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
                <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-medium text-paper">
                  Book a Table
                </span>
              </div>

              <div className="mx-5 mb-5 rounded-lg bg-[linear-gradient(135deg,#12715a_0%,#0c0c0d_100%)] px-6 py-10">
                <p className="max-w-[220px] font-display text-xl font-medium leading-snug text-white">
                  Seasonal dining in the heart of the city
                </p>
                <span className="mt-4 inline-block rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-medium text-white">
                  Reserve Now
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 px-5 pb-6">
                {['Reservations', 'Our Menu', 'Find Us'].map((label) => (
                  <div key={label} className="rounded-md border border-line p-3">
                    <span className="mb-2 block h-1.5 w-5 rounded-full bg-accent" />
                    <span className="block text-[10px] font-medium text-ink">{label}</span>
                    <span className="mt-1 block h-1 w-full rounded-full bg-paper-dim" />
                  </div>
                ))}
              </div>
            </div>
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  )
}
