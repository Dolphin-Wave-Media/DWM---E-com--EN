"use client"

import { useLanguage } from "@/lib/language-context"

const caseStudiesData = {
  en: [
    {
      title: "Children's Apparel Brand",
      description: "Strong product. Loyal audience. No clear paid acquisition system. We built the Meta ad engine and turned existing demand into scalable revenue.",
      metrics: [
        { label: "Ad Spend", value: "€1,459" },
        { label: "Revenue", value: "€18,579" },
        { label: "ROAS", value: "12.73" },
        { label: "Cost/Purchase", value: "~€5" },
      ],
    },
    {
      title: "Fashion E-commerce Brand",
      description: "The brand had demand, but no time or structure to run growth properly. We took over the campaigns and helped turn the season into real numbers.",
      metrics: [
        { label: "Ad Spend", value: "€7,020" },
        { label: "Revenue", value: "€39,223" },
        { label: "ROAS", value: "5.59" },
        { label: "Focus", value: "Meta Ads" },
      ],
    },
    {
      title: "Powersports E-commerce Store",
      description: "The owner was managing ads manually, which slowed growth. We improved performance, saved time, and built a stronger acquisition system.",
      metrics: [
        { label: "Ad Spend", value: "€1,008" },
        { label: "Revenue", value: "€19,003" },
        { label: "ROAS", value: "18.85" },
        { label: "AOV", value: "€100.63" },
      ],
    },
    {
      title: "Google Ads Growth Case",
      description: "We launched and optimized high-intent search campaigns around best-selling products for this e-commerce store.",
      metrics: [
        { label: "Ad Spend", value: "€1,847" },
        { label: "Revenue", value: "€11,656" },
        { label: "Conversions", value: "126" },
        { label: "Return", value: "630%" },
      ],
    },
  ],
  sk: [
    {
      title: "Značka detského oblečenia",
      description: "Silný produkt. Lojálne publikum. Žiadny jasný systém platenej akvizície. Vybudovali sme Meta reklamný motor a pretvorili existujúci dopyt na škálovateľný príjem.",
      metrics: [
        { label: "Reklamný rozpočet", value: "€1,459" },
        { label: "Tržby", value: "€18,579" },
        { label: "ROAS", value: "12.73" },
        { label: "Cena/Nákup", value: "~€5" },
      ],
    },
    {
      title: "Módna e-commerce značka",
      description: "Značka mala dopyt, ale nemala čas ani štruktúru na správne riadenie rastu. Prevzali sme kampane a pomohli premeniť sezónu na reálne čísla.",
      metrics: [
        { label: "Reklamný rozpočet", value: "€7,020" },
        { label: "Tržby", value: "€39,223" },
        { label: "ROAS", value: "5.59" },
        { label: "Zameranie", value: "Meta Ads" },
      ],
    },
    {
      title: "Powersports e-commerce",
      description: "Majiteľ spravoval reklamy manuálne, čo spomaľovalo rast. Zlepšili sme výkon, ušetrili čas a vybudovali silnejší akvizičný systém.",
      metrics: [
        { label: "Reklamný rozpočet", value: "€1,008" },
        { label: "Tržby", value: "€19,003" },
        { label: "ROAS", value: "18.85" },
        { label: "Priem. objednávka", value: "€100.63" },
      ],
    },
    {
      title: "Google Ads prípadová štúdia",
      description: "Spustili a optimalizovali sme vysoko-zámerové vyhľadávacie kampane okolo najpredávanejších produktov pre tento e-commerce obchod.",
      metrics: [
        { label: "Reklamný rozpočet", value: "€1,847" },
        { label: "Tržby", value: "€11,656" },
        { label: "Konverzie", value: "126" },
        { label: "Návratnosť", value: "630%" },
      ],
    },
  ],
}

export function CaseStudies() {
  const { language, t } = useLanguage()
  const caseStudies = caseStudiesData[language]

  return (
    <section id="case-studies" className="relative py-16 sm:py-24 bg-card/30 scroll-mt-16 overflow-hidden">
      {/* Subtle background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="caseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="0" y1="200" x2="400" y2="0" stroke="url(#caseGradient)" strokeWidth="1" />
        <line x1="100" y1="300" x2="500" y2="100" stroke="url(#caseGradient)" strokeWidth="1" />
        <line x1="1040" y1="900" x2="1440" y2="700" stroke="url(#caseGradient)" strokeWidth="1" />
        <line x1="1140" y1="800" x2="1440" y2="600" stroke="url(#caseGradient)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            {t("caseStudies.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            {t("caseStudies.title1")}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("caseStudies.title2")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t("caseStudies.description")}
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-[#9b4dca]" />
              
              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">
                        {metric.value}
                      </p>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
