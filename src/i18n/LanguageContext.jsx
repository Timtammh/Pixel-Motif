import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './content.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'pixelmotif-lang'
const SUPPORTED = ['en', 'zh-HK']

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en'

  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('lang')
  if (fromUrl === 'zh-hk') return 'zh-HK'
  if (fromUrl === 'en') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored

  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = content[lang].htmlLang

    document.title = content[lang].meta.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', content[lang].meta.description)
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', content[lang].meta.description)
    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', content[lang].meta.description)
    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    if (ogTitleTag) ogTitleTag.setAttribute('content', content[lang].meta.title)
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitleTag) twitterTitleTag.setAttribute('content', content[lang].meta.title)

    window.localStorage.setItem(STORAGE_KEY, lang)

    const url = new URL(window.location.href)
    if (lang === 'zh-HK') {
      url.searchParams.set('lang', 'zh-hk')
    } else {
      url.searchParams.delete('lang')
    }
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        if (SUPPORTED.includes(next)) setLangState(next)
      },
      isZh: lang === 'zh-HK',
      t: content[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
