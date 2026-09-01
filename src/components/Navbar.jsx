import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { QUOTE_ANCHOR } from '../siteConfig.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function LanguageSwitcher({ lang, setLang, className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 text-sm font-medium ${className}`}>
      <button
        type="button"
        onClick={() => setLang('zh-HK')}
        aria-pressed={lang === 'zh-HK'}
        className={`transition-colors ${lang === 'zh-HK' ? 'text-ink' : 'text-ink-soft hover:text-ink'}`}
      >
        繁中
      </button>
      <span className="text-line" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`transition-colors ${lang === 'en' ? 'text-ink' : 'text-ink-soft hover:text-ink'}`}
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = t.nav.links.map((link) => document.querySelector(link.href)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [t.nav.links])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-paper/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10 lg:py-5 xl:max-w-[1280px] xl:px-14 2xl:max-w-[1440px] 2xl:px-16"
        aria-label="Primary"
      >
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex xl:gap-10">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:text-ink hover:after:w-full xl:text-[15px] ${
                  activeHref === link.href ? 'text-ink after:w-full' : 'text-ink-soft'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex xl:gap-6">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a
            href={QUOTE_ANCHOR}
            className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark xl:px-6 xl:py-3 xl:text-[15px]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 md:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-base font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={QUOTE_ANCHOR}
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-paper"
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
