import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const results = [
  {
    category: "E-commerce Fashion Brand",
    highlight: "9.4x ROAS on Meta",
    result: "€40,000 revenue in 30 days",
  },
  {
    category: "Beauty Brand",
    highlight: "Scaled from €2K to €15K/month ad spend",
    result: "3x revenue growth",
  },
  {
    category: "Home Decor Brand",
    highlight: "Google Ads setup",
    result: "+180% organic + paid revenue",
  },
]

export function Results() {
  return (
    <section id="results" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            Results We&apos;ve Delivered
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real numbers. Real brands. Real growth.
          </p>
        </div>

        {/* Result cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border bg-card p-6 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50" />

              {/* Category */}
              <p className="text-sm font-medium text-primary mb-3">
                {item.category}
              </p>

              {/* Highlight */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.highlight}
              </h3>

              {/* Result */}
              <p className="text-muted-foreground">
                {item.result}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mb-10">
          (Full case studies coming soon)
        </p>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Want Results Like These? Book a Free Call
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
        </div>
      </div>
    </section>
  )
}
