"use client"

import Link from "next/link"
import { useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { useMetaPixel } from "@/hooks/useMetaPixel"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const testimonials = [
  {
    quote: "Konečne agentúra, čo rozumie e-commerce. Nerobia len reklamy - premýšľajú nad celým funnelom.",
    name: "Robert Stefanco",
    title: "Zakladateľ, Pánska Elegancia",
  },
  {
    quote: "Komunikácia je super. Proaktívni, transparentní, vždy prídu s novými nápadmi. Akoby som mal interný tím, nie externú agentúru.",
    name: "Matej Časár",
    title: "Zakladateľ, Bomba Zľava",
  },
  {
    quote: "Kreatívna stratégia nám zmenila všetko. Naše reklamy konečne vyčnievajú. Výsledky hovoria za seba - najlepšie rozhodnutie tohto roka.",
    name: "Juraj Habala",
    title: "Zakladateľ, Habala",
  },
]

export function Testimonials() {
  const { t } = useLanguage()
  const { trackLead } = useMetaPixel()
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal({ delay: 100 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ delay: 200 })

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 scroll-mt-16 overflow-hidden">
      {/* Subtle diagonal lines background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="testimonialsGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c9388c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <line x1="1200" y1="0" x2="1440" y2="240" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
        <line x1="1050" y1="0" x2="1440" y2="390" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
        <line x1="900" y1="0" x2="1440" y2="540" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
        <line x1="0" y1="500" x2="300" y2="800" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
        <line x1="0" y1="350" x2="450" y2="800" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
        <line x1="0" y1="200" x2="600" y2="800" stroke="url(#testimonialsGradient)" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Referencie
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-tight text-balance mb-4 max-w-4xl mx-auto px-4 italic">
            {t("testimonials.quote")}
          </h2>
        </div>

        <div 
          ref={testimonialsRef}
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 transition-all ${testimonialsVisible ? 'reveal-fade-up' : 'opacity-0'}`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 sm:left-8">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"/>
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6 pt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          ref={ctaRef}
          className={`flex justify-center transition-all ${ctaVisible ? 'reveal-scale' : 'opacity-0'}`}
        >
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
