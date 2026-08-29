import Reveal from './Reveal.jsx'

const VALUES = [
  {
    title: 'Designed for Your Business',
    description:
      'Not another generic template. The website is designed around your business, customers and goals.',
  },
  {
    title: 'Built for Every Screen',
    description: 'Responsive layouts that work properly across desktop, tablet and mobile.',
  },
  {
    title: 'Ready to Launch',
    description: 'From design and development to deployment, everything is handled in one process.',
  },
]

export default function ValueProps() {
  return (
    <section className="border-y border-line bg-ink py-24 text-paper lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-xl xl:max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent xl:text-base">Why Pixel Motif</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl xl:text-5xl">
            Beyond the Template.
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-0 sm:border-t-0 sm:pt-0 xl:mt-16">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent xl:text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium xl:text-2xl">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65 xl:text-base">{value.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
