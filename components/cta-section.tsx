"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-[100px] opacity-60" />
      </div>

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
