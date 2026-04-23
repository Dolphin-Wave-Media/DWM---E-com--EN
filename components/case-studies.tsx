const caseStudies = [
  {
    brand: "Pánska Elegancia",
    category: "Men's Fashion",
    situation: "Struggling with high CPA and inconsistent ROAS across Meta campaigns.",
    approach: "Rebuilt creative strategy with UGC-style ads, optimized landing pages, restructured campaigns.",
    results: {
      roas: "8.2x",
      revenue: "€82K",
      period: "3 months",
    },
  },
  {
    brand: "Tentation",
    category: "Beauty & Skincare",
    situation: "New brand launch with zero ad history and limited creative assets.",
    approach: "Built full funnel from scratch — hooks, scripts, landing page, email flows, Meta campaigns.",
    results: {
      roas: "6.5x",
      revenue: "€45K",
      period: "2 months",
    },
  },
  {
    brand: "Habala",
    category: "Home & Lifestyle",
    situation: "Plateaued growth with existing agency, creative fatigue across campaigns.",
    approach: "Fresh creative angles, new audience segments, funnel optimization, scaling strategy.",
    results: {
      roas: "5.8x",
      revenue: "€38K",
      period: "6 weeks",
    },
  },
  {
    brand: "Bubbe",
    category: "Kids & Baby",
    situation: "High ad spend with declining returns, no clear strategy.",
    approach: "Complete audit, restructured account, new creative direction, landing page A/B tests.",
    results: {
      roas: "7.1x",
      revenue: "€52K",
      period: "3 months",
    },
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-card/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Real Brands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what we&apos;ve achieved for e-commerce brands like yours.
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-[#9b4dca]" />
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {study.brand}
                    </h3>
                    <p className="text-sm text-primary">
                      {study.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Situation & Approach */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Situation</p>
                    <p className="text-sm text-muted-foreground">{study.situation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Approach</p>
                    <p className="text-sm text-muted-foreground">{study.approach}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-center gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {study.results.roas}
                    </p>
                    <p className="text-xs text-muted-foreground">ROAS</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {study.results.revenue}
                    </p>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {study.results.period}
                    </p>
                    <p className="text-xs text-muted-foreground">Timeline</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
