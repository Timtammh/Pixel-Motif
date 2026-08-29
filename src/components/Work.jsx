import evProject from '../assets/ev-project.jpg'
import samson from '../assets/samson.jpg'
import sms from '../assets/sms.jpg'
import travel from '../assets/travel.jpg'
import BrowserFrame from './BrowserFrame.jsx'
import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    title: 'EV Service & Charging Platform',
    category: 'Web Design · UI/UX · Frontend',
    description:
      'A modern digital platform designed to help EV owners manage battery maintenance, discover charging locations and book services.',
    url: 'https://evproject-two.vercel.app/',
    image: evProject,
    imageAlt:
      'Homepage preview of the EV Service and Charging Platform website, showing a full-bleed automotive hero image with a minimal navigation bar',
  },
  {
    title: 'Travel Website',
    category: 'Web Design · Frontend',
    description: 'A travel-themed website inspired by "Different intents. Endless discoveries."',
    url: 'https://timtammh.github.io/assignment1-TAMMANHO11/',
    image: travel,
    imageAlt: 'Homepage preview of the travel-themed website, showing its hero section',
  },
  {
    title: 'Samson Label Vietnam',
    category: 'Web Design · Corporate Website',
    description:
      'Corporate website showcasing services including Design & Creative, Turn-key Concepts & Branding, Product Development, and Logistics Solutions.',
    url: 'https://www.samsonlabelvietnam.com',
    image: samson,
    imageAlt: 'Homepage preview of the Samson Label Vietnam corporate website',
  },
  {
    title: 'SMS Team International',
    category: 'Web Design · Corporate Website',
    description:
      "Company website featuring a Hong Kong night skyline hero image, introducing SMS Team International Ltd.'s business.",
    url: 'https://www.smsteamint.com',
    image: sms,
    imageAlt:
      "Homepage preview of the SMS Team International website, showing a Hong Kong night skyline hero image",
  },
]

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        width="1400"
        height="900"
      />
    )
  }

  const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div className="flex h-full w-full items-center justify-center bg-paper-dim p-6 sm:p-8">
      {/* TODO: replace with a real screenshot of this project */}
      <BrowserFrame url={domain} className="w-full max-w-sm transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-paper-dim to-white px-6 text-center">
          <span className="font-display text-lg font-medium text-ink">{project.title}</span>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft/70">
            Preview coming soon
          </span>
        </div>
      </BrowserFrame>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 xl:py-36 2xl:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16">
        <Reveal className="max-w-2xl xl:max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent xl:text-base">Selected Work</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl xl:text-5xl">
            Recent Projects.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 xl:mt-16 xl:gap-10">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index + 1, 3)}>
              <div className="overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_30px_80px_-30px_rgba(12,12,13,0.3)] lg:grid lg:grid-cols-[1.15fr_1fr]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center overflow-hidden bg-paper-dim"
                  aria-label={`View ${project.title} project (opens in a new tab)`}
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <ProjectPreview project={project} />
                  </div>
                </a>

                <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12">
                  <span className="w-fit rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent-dark xl:text-sm">
                    {project.category}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-medium text-ink xl:text-3xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft xl:text-base">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark xl:px-7 xl:py-3.5 xl:text-base"
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
          ))}
        </div>
      </div>
    </section>
  )
}
