import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,56,140,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,56,140,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Magenta/Pink glow */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[128px] opacity-40" />
        {/* Orange glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/25 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-medium text-primary">
            Performance Marketing Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance mb-6">
          We Turn Paid Ads Into Your Most Reliable Revenue Channel
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty">
          We help e-commerce brands scale with Meta Ads, Google Ads & TikTok Ads — built on data, sharp creative, and proven strategy.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Get Your Free Marketing Strategy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <Link
            href="#results"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors"
          >
            See Our Results
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-sm text-muted-foreground">
          No commitment. 100% free strategy call.
        </p>
      </div>
    </section>
  )
}
