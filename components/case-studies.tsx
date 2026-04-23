const caseStudies = [
  {
    title: "Children's Apparel Brand",
    description: "Strong product. Loyal audience. No clear paid acquisition system. We built the Meta ad engine and turned existing demand into scalable revenue.",
    metrics: [
      { label: "Ad Spend", value: "€1,459" },
      { label: "Revenue", value: "€18,579" },
      { label: "ROAS", value: "12.73" },
      { label: "Cost/Purchase", value: "~€5" },
    ],
  },
  {
    title: "Fashion E-commerce Brand",
    description: "The brand had demand, but no time or structure to run growth properly. We took over the campaigns and helped turn the season into real numbers.",
    metrics: [
      { label: "Ad Spend", value: "€7,020" },
      { label: "Revenue", value: "€39,223" },
      { label: "ROAS", value: "5.59" },
      { label: "Focus", value: "Meta Ads" },
    ],
  },
  {
    title: "Powersports E-commerce Store",
    description: "The owner was managing ads manually, which slowed growth. We improved performance, saved time, and built a stronger acquisition system.",
    metrics: [
      { label: "Ad Spend", value: "€1,008" },
      { label: "Revenue", value: "€19,003" },
      { label: "ROAS", value: "18.85" },
      { label: "AOV", value: "€100.63" },
    ],
  },
  {
    title: "Google Ads Growth Case",
    description: "We launched and optimized high-intent search campaigns around best-selling products for this e-commerce store.",
    metrics: [
      { label: "Ad Spend", value: "€1,847" },
      { label: "Revenue", value: "€11,656" },
      { label: "Conversions", value: "126" },
      { label: "Return", value: "630%" },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-card/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Real Brands
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A few examples of how we help e-commerce brands grow through paid ads, stronger creative, and better-performing systems.
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-[#9b4dca]" />
              
              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground pr-4">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
