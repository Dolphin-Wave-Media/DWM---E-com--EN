"use client"

import { useLanguage } from "@/lib/language-context"

export function WhoItsFor() {
  const { t } = useLanguage()

  const forYou = [
    t("whoItsFor.good1"),
    t("whoItsFor.good2"),
    t("whoItsFor.good3"),
    t("whoItsFor.good4"),
  ]

  const notForYou = [
    t("whoItsFor.bad1"),
    t("whoItsFor.bad2"),
    t("whoItsFor.bad3"),
    t("whoItsFor.bad4"),
  ]

  return (
    <section className="relative py-16 sm:py-24 bg-card/30 overflow-hidden">
      {/* Subtle background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="0" y1="150" x2="250" y2="0" stroke="url(#whoGradient)" strokeWidth="1" />
        <line x1="0" y1="250" x2="350" y2="0" stroke="url(#whoGradient)" strokeWidth="1" />
        <line x1="1190" y1="700" x2="1440" y2="550" stroke="url(#whoGradient)" strokeWidth="1" />
        <line x1="1090" y1="700" x2="1440" y2="450" stroke="url(#whoGradient)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            {t("whoItsFor.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            {t("whoItsFor.title1")}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("whoItsFor.title2")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t("whoItsFor.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* For You */}
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t("whoItsFor.good.title")}</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t("whoItsFor.bad.title")}</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
