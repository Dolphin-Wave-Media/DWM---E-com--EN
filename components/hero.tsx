"use client"

import Link from "next/link"
import { useRef } from "react"
import { usePathname } from "next/navigation"
import { ClientLogos } from "./client-logos"
import { useLanguage } from "@/lib/language-context"
import { AnimatedCounter } from "./animated-counter"
import { useMetaPixel } from "@/hooks/useMetaPixel"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function Hero() {
  const { t } = useLanguage()
  const { trackLead } = useMetaPixel()
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en') || !pathname.startsWith('/sk')
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ delay: 100 })
  const { ref: videoRef, isVisible: videoVisible } = useScrollReveal({ delay: 200 })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Diagonal lines pattern */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Top left diagonal lines */}
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="0" y1="300" x2="400" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="0" y1="450" x2="550" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="0" y1="600" x2="700" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          {/* Bottom right diagonal lines */}
          <line x1="890" y1="900" x2="1440" y2="350" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="1040" y1="900" x2="1440" y2="500" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="1190" y1="900" x2="1440" y2="650" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          <line x1="1340" y1="900" x2="1440" y2="800" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
        </svg>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center w-full overflow-hidden">
          {/* Trust badge with checkmark */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-foreground font-medium underline decoration-green-500 decoration-2 underline-offset-4">
                {t("hero.trusted")}
              </span>
            </div>
          </div>

          {/* Headline - Fixed for mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-balance">
            <span className="text-foreground">{t("hero.headline1")}</span>
            <span className="bg-gradient-to-r from-accent via-primary to-[#9b4dca] bg-clip-text text-transparent">{t("hero.headline2")}</span>
            <span className="text-foreground">{t("hero.headline3")}</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("hero.headline4")}</span>
            <span className="text-foreground">{t("hero.headline5")}</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{t("hero.headline6")}</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
            {t("hero.subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              {t("hero.cta")}
              <svg className="ml-2 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-4 text-base font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
            >
              {t("hero.viewCaseStudies")}
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground mb-16 text-balance">
            {t("hero.microcopy")}
          </p>

          {/* Trust Metrics */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-16 transition-all ${statsVisible ? 'reveal-fade-up' : 'opacity-0'}`}
          >
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={1435267} duration={2500} suffix="€+" />
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat1.label")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={10500} duration={2000} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat2.label")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={20} duration={1500} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat3.label")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={12} duration={1500} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat4.label")}</p>
            </div>
          </div>

          {/* Video Section */}
          <div 
            ref={videoRef}
            className={`max-w-4xl mx-auto transition-all ${videoVisible ? 'reveal-scale' : 'opacity-0'}`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src={isEnglish ? "https://drive.google.com/file/d/1-wPMUzkQy2DEHTr9ZdC5l1jp_S7u4A6E/preview" : "https://drive.google.com/file/d/1f_1qXjH-JC7MzHNqRPZxWgZL6v2EZEgd/preview"}
                  frameBorder="0" 
                  allow="autoplay; fullscreen"
                  className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] scale-[1.01]"
                  title="Dolphin Wave Media - Results video"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* CTA below video */}
            <div className="mt-8 flex justify-center">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLead}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-primary/30 text-base font-medium text-foreground hover:from-accent/30 hover:to-primary/30 hover:border-primary/50 transition-all"
              >
                {t("hero.cta")}
                <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Client Logos */}
          <ClientLogos />
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
