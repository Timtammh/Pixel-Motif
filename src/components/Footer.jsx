import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 xl:max-w-[1280px] xl:px-14 xl:py-16 2xl:max-w-[1440px] 2xl:px-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft xl:text-base">{t.footer.description}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2.5 sm:items-end">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-soft transition-colors hover:text-ink xl:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-6 border-t border-line pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-soft">{t.footer.copyright}</p>
          <ul className="flex gap-5">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-xs font-medium text-ink-soft transition-colors hover:text-ink"
                  aria-label={`${social.label} (placeholder link)`}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
