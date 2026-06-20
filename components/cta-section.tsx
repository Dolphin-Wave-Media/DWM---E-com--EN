"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useMetaPixel } from "@/hooks/useMetaPixel"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function CTASection() {
  const { t } = useLanguage()
  const { trackLead } = useMetaPixel()

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-[100px] opacity-60" />
      </div>
      
      {/* Subtle background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line x1="0" y1="100" x2="200" y2="0" stroke="url(#ctaGradient)" strokeWidth="1" />
        <line x1="0" y1="200" x2="300" y2="0" stroke="url(#ctaGradient)" strokeWidth="1" />
        <line x1="0" y1="300" x2="400" y2="0" stroke="url(#ctaGradient)" strokeWidth="1" />
        <line x1="1240" y1="500" x2="1440" y2="400" stroke="url(#ctaGradient)" strokeWidth="1" />
        <line x1="1140" y1="500" x2="1440" y2="300" stroke="url(#ctaGradient)" strokeWidth="1" />
        <line x1="1040" y1="500" x2="1440" y2="200" stroke="url(#ctaGradient)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
          {t("cta.title")}
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 text-pretty px-4">
          {t("cta.description")}
        </p>

        {/* CTA */}
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLead}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
        >
          {t("cta.button")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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

        {/* Trust note */}
        <p className="mt-6 sm:mt-8 text-sm text-muted-foreground">
          {t("cta.note")}
        </p>
      </div>
    </section>
  )
}
