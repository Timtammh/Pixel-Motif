export default function BrowserFrame({ url = 'yourbusiness.com', children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_80px_-24px_rgba(12,12,13,0.35)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-paper-dim px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs text-ink-soft">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path
                d="M5 1v2M5 7v2M1 5h2M7 5h2M2.5 2.5l1.4 1.4M6.1 6.1l1.4 1.4M2.5 7.5l1.4-1.4M6.1 3.9l1.4-1.4"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
            <span>{url}</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
