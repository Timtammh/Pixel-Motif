import Reveal from './Reveal.jsx'

const VALUES = [
  {
    title: 'Designed for Your Business',
    description:
      'Not another generic template. The website is designed around your business, customers and goals.',
    icon: (
      <path
        d="M12 3l2.4 5.2L20 9l-4 4 1 5.6L12 16l-5 2.6 1-5.6-4-4 5.6-.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Built for Every Screen',
    description: 'Responsive layouts that work properly across desktop, tablet and mobile.',
    icon: (
      <path
        d="M4 5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM17 9h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Ready to Launch',
    description: 'From design and development to deployment, everything is handled in one process.',
    icon: (
      <path
        d="M12 3c3.5 2 5.5 5.3 5.5 9.2 0 2-.6 3.7-1.6 5.1l-1-2.6-2.9 1.7-2.9-1.7-1 2.6A9 9 0 0 1 6.5 12.2C6.5 8.3 8.5 5 12 3ZM10 20.5c0-1.1.9-2 2-2s2 .9 2 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
]

export default function ValueProps() {
  return (
    <section className="border-y border-line bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Why Pixel Motif</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            More Than Just a Website.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={Math.min(index + 1, 3)}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {value.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
