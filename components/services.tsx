import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const services = [
  {
    title: "Meta Ads",
    subtitle: "Facebook & Instagram",
    description: "Full campaign management, creative production, targeting & optimization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    title: "Google Ads",
    subtitle: "Search, Shopping & Performance Max",
    description: "Search, Shopping & Performance Max campaigns built for e-commerce ROAS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    title: "TikTok Ads",
    subtitle: "UGC-Style Creatives",
    description: "UGC-style creatives and performance campaigns built for the scroll",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        <path d="M12 2v7.5"/>
        <path d="M15.5 5c1.5 0 3 1 3.5 2.5V12"/>
        <path d="M9 12V4"/>
      </svg>
    ),
  },
  {
    title: "Tracking & Analytics",
    subtitle: "Shoptet, GA4, Meta Pixel",
    description: "Pixel setup, GA4 configuration, conversion tracking",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 scroll-mt-16 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            What We Do
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Full-funnel paid media management — from strategy to creative to scaling.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-primary mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Start Scaling Your Brand
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
