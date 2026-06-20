"use client"

import Link from "next/link"
import { useRef } from "react"
import { useMetaPixel } from "@/hooks/useMetaPixel"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function AdvertisingImportance() {
  const { trackLead } = useMetaPixel()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal({ delay: 100 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ delay: 200 })
  const benefits = [
    {
      title: "Okamžitá viditeľnosť a rast",
      description: "Organický rast trvá roky. Digitálna reklama (Meta, Google, TikTok) vám prinesie traffic a predaje hneď. Pre e-shopy platené reklamy tvoria až 47% celkových predajov."
    },
    {
      title: "Presné cielenie",
      description: "Nerobíme len \"reklamy\". Hľadáme vášho ideálneho zákazníka. Cielime podľa záujmov, správania, nákupných zvykov. Rozpočet ide len tam, kde má zmysel."
    },
    {
      title: "Pravidlo siedmich",
      description: "Človek potrebuje v priemere 7 kontaktov so značkou, kým nakúpi. Retargeting drží vašu značku v hlave a vracia 98% ľudí, čo nekúpili na prvýkrát."
    },
    {
      title: "Škálovanie úspechu",
      description: "Keď nájdeme víťaznú kreatívu, reklamy nám umožňujú \"liať benzín do ohňa\". Z tisícov na milióny - stačí kliknutie."
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent pointer-events-none" />
      
      {/* Background illustration - abstract lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="adGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="adGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c9388c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Upward trending lines - representing growth */}
        <path d="M0 700 Q 200 600, 400 500 T 800 300 T 1200 150 T 1440 50" stroke="url(#adGradient1)" strokeWidth="2" fill="none" />
        <path d="M0 750 Q 250 650, 500 550 T 900 350 T 1300 200 T 1440 100" stroke="url(#adGradient2)" strokeWidth="1.5" fill="none" />
        <path d="M0 650 Q 180 550, 360 450 T 720 280 T 1080 130 T 1440 30" stroke="url(#adGradient1)" strokeWidth="1" fill="none" opacity="0.7" />
        
        {/* Decorative dots at key points */}
        <circle cx="400" cy="500" r="4" fill="#f5a623" opacity="0.3" />
        <circle cx="800" cy="300" r="5" fill="#c9388c" opacity="0.3" />
        <circle cx="1200" cy="150" r="6" fill="#f5a623" opacity="0.4" />
        
        {/* Subtle diagonal lines */}
        <line x1="0" y1="100" x2="200" y2="0" stroke="url(#adGradient1)" strokeWidth="1" opacity="0.4" />
        <line x1="1240" y1="800" x2="1440" y2="600" stroke="url(#adGradient2)" strokeWidth="1" opacity="0.4" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Prečo reklama
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 max-w-4xl mx-auto text-balance">
            Nečakajte, kým vás zákazníci nájdu.{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Choďte za nimi.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ak je obsah motor vašej značky, reklama je palivo. Aj ten najlepší web na svete nezarobí, keď ho nikto nevidí.
          </p>
        </div>

        {/* Benefits grid */}
        <div 
          ref={benefitsRef}
          className={`grid sm:grid-cols-2 gap-6 lg:gap-8 transition-all ${benefitsVisible ? 'reveal-fade-up' : 'opacity-0'}`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm hover:border-primary/30 hover:bg-card/30 transition-all group"
            >
              {/* Number indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          ref={ctaRef}
          className={`flex justify-center mt-12 sm:mt-16 transition-all ${ctaVisible ? 'reveal-scale' : 'opacity-0'}`}
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

        {/* Bottom illustration - smooth gradient bars */}
        <div className="mt-16 flex items-end justify-center gap-3 sm:gap-4">
          {[40, 60, 50, 80, 70, 100, 90, 120].map((height, i) => (
            <div 
              key={i}
              className="w-6 sm:w-10 rounded-t-lg transition-all duration-300"
              style={{ 
                height: `${height}px`,
                background: `linear-gradient(to top, ${i % 2 === 0 ? 'rgba(245, 166, 35, 0.4)' : 'rgba(201, 56, 140, 0.4)'}, ${i % 2 === 0 ? 'rgba(245, 166, 35, 0.1)' : 'rgba(201, 56, 140, 0.1)'})`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
