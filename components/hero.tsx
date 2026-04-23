import Link from "next/link"
import Image from "next/image"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Wave pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9388c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0,350 Q360,250 720,350 T1440,350" fill="none" stroke="url(#waveGradient)" strokeWidth="1" />
          <path d="M0,380 Q360,280 720,380 T1440,380" fill="none" stroke="url(#waveGradient)" strokeWidth="1" opacity="0.7" />
          <path d="M0,410 Q360,310 720,410 T1440,410" fill="none" stroke="url(#waveGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M0,440 Q360,340 720,440 T1440,440" fill="none" stroke="url(#waveGradient)" strokeWidth="1" opacity="0.3" />
        </svg>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Trust badge with checkmark */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm">
              <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-foreground font-medium underline decoration-green-500 decoration-2 underline-offset-4">
                Trusted by 20+ brands across Europe and USA
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 px-2">
            <span className="text-foreground">We Build </span>
            <span className="bg-gradient-to-r from-accent via-primary to-[#9b4dca] bg-clip-text text-transparent">Marketing Systems</span>
            <br />
            <span className="text-foreground">That Drive Real </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed px-4">
            Performance-driven Meta Ads, creative strategy, and funnel optimization 
            for e-commerce brands ready to scale. Not just ads — a complete growth system.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-4">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Book a Free Marketing Strategy
              <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-4 text-base font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
            >
              View Case Studies
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground mb-16 px-4">
            15-minute discovery call. Custom strategy in presentation format. Built around your brand.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 px-4">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">200K+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10K+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Orders Generated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">20+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Brands Scaled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">12+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://drive.google.com/file/d/1NP_t-dOPLwd2ydJhjTS8HjIQQfKOBrDC/preview" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Dolphin Wave Media - Website video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-6 h-6 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </section>
  )
}
