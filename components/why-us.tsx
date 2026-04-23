const points = [
  {
    title: "We See the Full Picture",
    description: "Most agencies only look at the ads manager. We analyze your entire customer journey — from first impression to checkout and beyond.",
  },
  {
    title: "Creative is King",
    description: "Great ads start with great creative. We write hooks, scripts, and concepts that actually stop the scroll and drive action.",
  },
  {
    title: "Data Drives Everything",
    description: "No guessing. Every decision is backed by data. We track, test, and optimize relentlessly.",
  },
  {
    title: "System Thinking",
    description: "Ads are just one piece. We optimize landing pages, offers, funnels, and messaging to maximize every dollar spent.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Why Brands Choose{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;re not another agency that just &quot;manages your ads.&quot; We&apos;re growth 
              partners who understand that real results come from a complete system — 
              not isolated tactics.
            </p>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">Growth First</p>
                <p className="text-muted-foreground">
                  Every strategy built to scale
                </p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
