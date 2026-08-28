export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid grid-cols-2 grid-rows-2 gap-[3px]" aria-hidden="true">
        <span className="h-[7px] w-[7px] bg-ink" />
        <span className="h-[7px] w-[7px] bg-accent" />
        <span className="h-[7px] w-[7px] bg-accent" />
        <span className="h-[7px] w-[7px] bg-ink" />
      </span>
      <span className="font-display text-lg font-medium tracking-tight text-ink">Pixel Motif</span>
    </span>
  )
}
