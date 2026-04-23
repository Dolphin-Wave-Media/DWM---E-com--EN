import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section label */}
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            About Us
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
            Young. Data-Driven. Results-Obsessed.
          </h2>

          {/* Body */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty">
            Dolphin Wave Media is a performance-focused marketing agency built for e-commerce. We manage thousands of euros in ads monthly, craft high-converting creatives, and build long-term growth strategies for 5-6 figure brands. We don&apos;t do vanity metrics — we do revenue.
          </p>

          {/* CTA */}
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            {"Let's Talk About Your Brand"}
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
