import { useState } from 'react'

const inputClasses =
  'w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 xl:px-5 xl:py-3.5 xl:text-base'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  // TODO: wire this up to a real backend or email service (e.g. Formspree,
  // EmailJS, or a mailto: link with your real address) before launch.
  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center sm:p-10 xl:p-12" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent-dark xl:h-14 xl:w-14">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl font-medium text-ink xl:text-2xl">Thanks — request received.</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft xl:text-base">
          We&apos;ll review your project and get back to you with a clear quotation shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-8 sm:p-10 xl:p-12"
      aria-labelledby="quote-form-heading"
    >
      <h3 id="quote-form-heading" className="font-display text-xl font-medium text-ink xl:text-2xl">
        Request a Free Quote
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft xl:text-base">
        Tell us a little about your business and we&apos;ll follow up with a quotation.
      </p>

      <div className="mt-7 grid gap-5 xl:mt-9 xl:gap-6">
        <div className="grid gap-5 sm:grid-cols-2 xl:gap-6">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink xl:text-sm">
              Name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="business" className="mb-1.5 block text-xs font-medium text-ink xl:text-sm">
              Business name
            </label>
            <input id="business" name="business" type="text" autoComplete="organization" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink xl:text-sm">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink xl:text-sm">
            What do you need?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. A new website for my restaurant with online booking"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark sm:w-auto xl:mt-9 xl:px-8 xl:py-4 xl:text-base"
      >
        Send Quote Request
      </button>
    </form>
  )
}
