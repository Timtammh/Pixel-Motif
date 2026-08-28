import evProject from '../assets/ev-project.jpg'
import Reveal from './Reveal.jsx'

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Selected Work</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            A Recent Project.
          </h2>
        </Reveal>

        <Reveal delay={2} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_30px_80px_-30px_rgba(12,12,13,0.3)] lg:grid lg:grid-cols-[1.15fr_1fr]">
            <a
              href="https://evproject-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-paper-dim"
              aria-label="View EV Service & Charging Platform project (opens in a new tab)"
            >
              <img
                src={evProject}
                alt="Homepage preview of the EV Service and Charging Platform website, showing a full-bleed automotive hero image with a minimal navigation bar"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                width="1400"
                height="900"
              />
            </a>

            <div className="flex flex-col justify-center p-8 lg:p-10">
              <span className="w-fit rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent-dark">
                Web Design · UI/UX · Frontend
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                EV Service &amp; Charging Platform
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A modern digital platform designed to help EV owners manage battery maintenance,
                discover charging locations and book services.
              </p>
              <a
                href="https://evproject-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
              >
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
