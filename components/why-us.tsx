const points = [
  {
    title: "We've Got the Drive",
    description: "We like this work, we care about doing it properly, and we're always looking for ways to improve and get better results.",
  },
  {
    title: "We See the Full Picture",
    description: "We don't focus only on ads. We look at the whole system around them to understand what's working and what needs to change.",
  },
  {
    title: "We Save You Hours",
    description: "We help you save time on strategy, content, and execution, so you can focus on the bigger picture.",
  },
  {
    title: "We Get Actual Results",
    description: "We care about what really matters — performance, sales, and growth that makes sense for your brand.",
  },
]

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Approach
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
              Why Brands Choose{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;ve built our experience across many of our own and client projects, which gives us a broad view of what works. We keep learning, testing, and improving — because we genuinely enjoy it.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
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
