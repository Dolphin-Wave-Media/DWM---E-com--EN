import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const trustItems = [
  "No commitment",
  "100% Free",
  "30-minute call",
  "Real strategy, not a sales pitch",
]

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
          Ready to Scale Your Brand With Paid Ads?
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Book a free 30-minute strategy session. We&apos;ll analyze your current marketing and show you exactly where the growth opportunity is.
        </p>

        {/* CTA */}
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
        >
          Book Your Free Strategy Call
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>

        {/* Trust items */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
