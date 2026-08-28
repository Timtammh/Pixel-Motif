import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    title: 'Business Website',
    description: 'Custom responsive websites for local businesses.',
    items: [
      '3–5 pages',
      'Responsive design',
      'Contact forms',
      'WhatsApp CTA',
      'Google Maps',
      'Basic SEO',
      'Deployment',
    ],
    icon: (
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 9h16 M9 21V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Landing Page',
    description: 'Focused landing pages designed for campaigns, products and services.',
    items: [
      'Custom UI',
      'Mobile responsive',
      'Strong CTA',
      'Conversion-focused layout',
      'Fast deployment',
    ],
    icon: (
      <path
        d="M12 3v6l4-2M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Website Redesign',
    description: 'Modernise outdated websites and improve the user experience.',
    items: [
      'UI redesign',
      'Mobile optimisation',
      'UX improvements',
      'Performance improvements',
      'Modern visual system',
    ],
    icon: (
      <path
        d="M4 16l4.5-4.5a2 2 0 0 1 2.8 0L14 14l3-3M15 5h5v5M20 5l-6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Services</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Everything You Need to Build a Better Online Presence.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delay={Math.min(index + 1, 3)}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(12,12,13,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-ink-soft">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
