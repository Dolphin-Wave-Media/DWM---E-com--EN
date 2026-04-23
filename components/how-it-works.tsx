"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.desc"),
    },
    {
      number: "02",
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.desc"),
    },
    {
      number: "03",
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.desc"),
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="howGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="0" y1="400" x2="300" y2="100" stroke="url(#howGradient)" strokeWidth="1" />
        <line x1="50" y1="500" x2="350" y2="200" stroke="url(#howGradient)" strokeWidth="1" />
        <line x1="1140" y1="100" x2="1440" y2="400" stroke="url(#howGradient)" strokeWidth="1" />
        <line x1="1090" y1="0" x2="1390" y2="300" stroke="url(#howGradient)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            {t("howItWorks.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            {t("howItWorks.title1")}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("howItWorks.title2")}
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            {t("howItWorks.cta")}
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("howItWorks.note")}
          </p>
        </div>
      </div>
    </section>
  )
}
