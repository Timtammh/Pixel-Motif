// Chinese glyphs are visually denser than Latin letters at the same font
// size, so headings step down one size and drop tracking-tight (handled
// globally for h1/h2/h3 via :lang(zh-HK) in index.css) to avoid awkward
// wraps and overly heavy display type.
export const H1_CLASS = {
  en: 'text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] 2xl:text-[4.75rem] tracking-tight',
  'zh-HK': 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.75rem]',
}

export const H2_CLASS = {
  en: 'text-3xl sm:text-4xl xl:text-5xl tracking-tight',
  'zh-HK': 'text-2xl sm:text-3xl xl:text-4xl',
}

// Wide letter-spacing on small uppercase labels reads as generic tracking
// on Latin text but looks loose/broken on CJK, so it's reduced for zh-HK.
export const EYEBROW_CLASS = {
  en: 'tracking-[0.16em]',
  'zh-HK': 'tracking-[0.04em]',
}

export const LABEL_CLASS = {
  en: 'tracking-[0.14em]',
  'zh-HK': 'tracking-[0.03em]',
}
