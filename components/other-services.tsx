"use client"

const otherServices = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Website Optimization",
    description: "We improve your website UX and design to maximize conversions. From landing pages to full e-commerce stores - we make sure every visitor counts."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email Marketing",
    description: "Automated email flows, newsletters, and campaigns that nurture leads and drive repeat purchases. We build systems that sell while you sleep."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    title: "Social Media Content",
    description: "We create and publish engaging content across your social channels. Strategy, graphics, copy, and scheduling - all handled for you."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.5 10.5 5 14l-2-1" />
        <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6Z" />
        <path d="m9 18 3 3 3-3" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Custom AI Solutions",
    description: "From AI-powered chatbots to automated workflows and custom tools - we build solutions that save time and scale your operations."
  }
]

export function OtherServices() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Beyond Ads
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            You&apos;ll Probably{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Need This Too
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meta Ads and AI content are our core expertise, but real growth requires a complete system. Here&apos;s what else we bring to the table.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card/80 transition-all"
            >
              <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
