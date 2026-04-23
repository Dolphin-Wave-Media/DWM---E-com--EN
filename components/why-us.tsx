"use client"

import { useLanguage } from "@/lib/language-context"

export function WhyUs() {
  const { t } = useLanguage()

  const points = [
    { titleKey: "whyUs.point1.title", descriptionKey: "whyUs.point1.description" },
    { titleKey: "whyUs.point2.title", descriptionKey: "whyUs.point2.description" },
    { titleKey: "whyUs.point3.title", descriptionKey: "whyUs.point3.description" },
    { titleKey: "whyUs.point4.title", descriptionKey: "whyUs.point4.description" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {t("whyUs.label")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t("whyUs.title1")}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("whyUs.description")}
            </p>

            <div className="space-y-5 sm:space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                      {t(point.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t(point.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Results Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
              <img 
                src="/results-table.png" 
                alt="Meta Ads performance results showing 12.73 ROAS" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
