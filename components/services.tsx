"use client"

import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      titleKey: "services.meta.title",
      descriptionKey: "services.meta.description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      titleKey: "services.google.title",
      descriptionKey: "services.google.description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      ),
    },
    {
      titleKey: "services.tiktok.title",
      descriptionKey: "services.tiktok.description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      ),
    },
    {
      titleKey: "services.creative.title",
      descriptionKey: "services.creative.description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="relative py-16 sm:py-24 scroll-mt-16 overflow-hidden">
      {/* Subtle diagonal lines background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="0" y1="200" x2="300" y2="0" stroke="url(#servicesGradient)" strokeWidth="1.5" />
        <line x1="0" y1="350" x2="450" y2="0" stroke="url(#servicesGradient)" strokeWidth="1.5" />
        <line x1="0" y1="500" x2="600" y2="0" stroke="url(#servicesGradient)" strokeWidth="1.5" />
        <line x1="990" y1="800" x2="1440" y2="350" stroke="url(#servicesGradient)" strokeWidth="1.5" />
        <line x1="1090" y1="800" x2="1440" y2="450" stroke="url(#servicesGradient)" strokeWidth="1.5" />
        <line x1="1190" y1="800" x2="1440" y2="550" stroke="url(#servicesGradient)" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            {t("services.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            {t("services.title1")}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("services.title2")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            {t("services.description")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all hover:border-primary/50 hover:bg-card"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4 sm:mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t(service.descriptionKey)}
              </p>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
