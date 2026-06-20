"use client"

import Link from "next/link"
import { useMetaPixel } from "@/hooks/useMetaPixel"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const otherServices = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Optimalizácia webu",
    description: "Vylepšíme UX a dizajn vášho webu, aby lepšie konvertoval. Landing pages, e-shopy - postaráme sa, aby každý návštevník počítal."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email marketing",
    description: "Automatizované emaily, newslettre, kampane. Budujeme systémy, ktoré predávajú aj keď spíte."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    title: "Obsah na sociálne siete",
    description: "Tvoríme a publikujeme obsah na vaše sociálne siete. Stratégia, grafiky, texty, plánovanie - všetko vybavíme."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.5 10.5 5 14l-2-1" />
        <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6Z" />
        <path d="m9 18 3 3 3-3" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "AI riešenia na mieru",
    description: "AI chatboty, automatizované workflowy, vlastné nástroje. Šetríme čas a škálujeme operácie."
  }
]

export function OtherServices() {
  const { trackLead } = useMetaPixel()
  const { t } = useLanguage()

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Nielen reklamy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Toto budete{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              tiež potrebovať
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meta reklamy a AI obsah sú naša špecializácia. Ale skutočný rast potrebuje kompletný systém. Tu je, čo ešte vieme.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card/80 transition-all"
            >
              <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Chcem bezplatnú konzultáciu
            <svg className="ml-2 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
