"use client"

export function AdvertisingImportance() {
  const benefits = [
    {
      title: "Instant Visibility & Growth",
      description: "Organic growth takes time. Digital advertising (Meta, Google, TikTok) allows e-commerce brands to generate traffic and sales instantly. For startups, paid search ads have been shown to account for nearly 47% of total sales variance."
    },
    {
      title: "Precision Targeting",
      description: "We don't just \"show ads\"—we find your ideal buyer. Using data-driven tools, we can target users based on their exact interests, behaviors, and past shopping habits, ensuring your budget is never wasted on the wrong audience."
    },
    {
      title: "The \"Rule of 7\"",
      description: "It takes an average of seven \"touches\" before someone buys from a new brand. Retargeting ads keep your brand top-of-mind, bringing back the 98% of visitors who don't buy on their first visit."
    },
    {
      title: "Scaling Success",
      description: "Once we find a winning piece of content, ads allow us to \"pour gasoline on the fire,\" scaling your revenue from thousands to millions by reaching a global audience at the click of a button."
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background illustration - abstract lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="adGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="adGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c9388c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {/* Upward trending lines - representing growth */}
        <path d="M0 700 Q 200 600, 400 500 T 800 300 T 1200 150 T 1440 50" stroke="url(#adGradient1)" strokeWidth="2" fill="none" />
        <path d="M0 750 Q 250 650, 500 550 T 900 350 T 1300 200 T 1440 100" stroke="url(#adGradient2)" strokeWidth="1.5" fill="none" />
        <path d="M0 650 Q 180 550, 360 450 T 720 280 T 1080 130 T 1440 30" stroke="url(#adGradient1)" strokeWidth="1" fill="none" opacity="0.7" />
        
        {/* Decorative dots at key points */}
        <circle cx="400" cy="500" r="4" fill="#f5a623" opacity="0.4" />
        <circle cx="800" cy="300" r="5" fill="#c9388c" opacity="0.4" />
        <circle cx="1200" cy="150" r="6" fill="#f5a623" opacity="0.5" />
        
        {/* Vertical accent lines */}
        <line x1="200" y1="0" x2="200" y2="800" stroke="url(#adGradient1)" strokeWidth="0.5" opacity="0.3" />
        <line x1="600" y1="0" x2="600" y2="800" stroke="url(#adGradient2)" strokeWidth="0.5" opacity="0.3" />
        <line x1="1000" y1="0" x2="1000" y2="800" stroke="url(#adGradient1)" strokeWidth="0.5" opacity="0.3" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Why Advertising Matters
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 max-w-4xl mx-auto text-balance">
            Don&apos;t Wait for Customers to Find You.{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Go Where They Are.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If content is the &quot;engine&quot; of your brand, advertising is the &quot;fuel.&quot; Even the best website in the world won&apos;t make money if nobody sees it.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all group"
            >
              {/* Number indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom illustration - growing chart bars */}
        <div className="mt-12 flex items-end justify-center gap-2 sm:gap-3 opacity-40">
          <div className="w-6 sm:w-8 h-12 bg-gradient-to-t from-accent/50 to-accent/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-20 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-16 bg-gradient-to-t from-accent/50 to-accent/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-28 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-24 bg-gradient-to-t from-accent/50 to-accent/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-36 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-32 bg-gradient-to-t from-accent/50 to-accent/20 rounded-t-lg" />
          <div className="w-6 sm:w-8 h-44 bg-gradient-to-t from-primary/60 to-primary/30 rounded-t-lg" />
        </div>
      </div>
    </section>
  )
}
