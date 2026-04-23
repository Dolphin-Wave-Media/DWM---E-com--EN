import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const steps = [
  {
    number: "01",
    title: "Book a Free Marketing Strategy",
    description: "Start with a 15-minute discovery call. We'll understand your brand, goals, and current challenges.",
  },
  {
    number: "02",
    title: "We Prepare Your Custom Strategy",
    description: "Based on our call, we'll create a detailed marketing strategy presentation tailored to your brand.",
  },
  {
    number: "03",
    title: "Launch, Build & Optimize",
    description: "We implement the strategy, launch campaigns, and continuously optimize. First test-drive is 90 days.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            How we scale brands in{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              90-day test drive
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            Start Your Growth Journey
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            First collaboration period: 90 days. Long-term partnership built on results.
          </p>
        </div>
      </div>
    </section>
  )
}
