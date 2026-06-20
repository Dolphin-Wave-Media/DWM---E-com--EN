"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "sk"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.bookStrategy": "Free Consultation",
    "hero.trusted": "Trusted by Slovak and Czech brands",
    "hero.headline1": "We help e-shops ",
    "hero.headline2": "sell more",
    "hero.headline3": " with ",
    "hero.headline4": "AI content",
    "hero.headline5": " and ",
    "hero.headline6": "Meta ads",
    "hero.subheadline": "We'll create a custom strategy, save you hours on content, and handle everything from A to Z.",
    "hero.cta": "Get My Free Consultation",
    "hero.stat1.value": "€1.4M+",
    "hero.stat1.label": "Revenue Generated",
    "hero.stat2.value": "10,500+",
    "hero.stat2.label": "Orders",
    "hero.stat3.value": "20+",
    "hero.stat3.label": "Brands Scaled",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "Years of Team Experience",
    "hero.viewCaseStudies": "View Results",
    "hero.microcopy": "30-minute call. Strategy in presentation. Custom for your brand.",
    "services.label": "What We Do",
    "services.title1": "Everything e-shops need to ",
    "services.title2": "grow in 2026",
    "services.description": "Ads are only part of the puzzle. We build the whole system—strategy, creative, and funnel. Everything works together.",
    "services.meta.title": "Meta Ads",
    "services.meta.description": "Facebook and Instagram campaigns that sell. Not just clicks, but orders. Full-funnel from first contact to purchase.",
    "services.google.title": "Google Ads",
    "services.google.description": "Search, Shopping, and Performance Max campaigns. We capture people actively looking for what you sell.",
    "services.tiktok.title": "TikTok Ads",
    "services.tiktok.description": "Reach younger audiences with engaging videos. Complete management and creative strategy.",
    "services.creative.title": "Creative & Content",
    "services.creative.description": "Ads that stop the scroll. UGC videos, graphics, landing pages. We handle it all.",
    "whyUs.label": "Why Us",
    "whyUs.title1": "We do things differently",
    "whyUs.description": "We have experience from our own projects and clients. We know what works and what doesn't. We're always learning and testing—because we love this work.",
    "whyUs.point1.title": "We have drive",
    "whyUs.point1.description": "We love this work. We care about doing it well. And we're always looking for ways to do it better.",
    "whyUs.point2.title": "We see the bigger picture",
    "whyUs.point2.description": "We don't just fix ads. We look at the whole system—website, offer, communication. Everything must fit together.",
    "whyUs.point3.title": "We save you time",
    "whyUs.point3.description": "Strategy, content, execution—we handle it all. You focus on your business.",
    "whyUs.point4.title": "Real results",
    "whyUs.point4.description": "We care about numbers that matter. Sales, revenue, growth. Not just metrics on paper.",
    "howItWorks.label": "How It Works",
    "howItWorks.title1": "We scale brands in a ",
    "howItWorks.title2": "90-day test",
    "howItWorks.step1.title": "Analysis",
    "howItWorks.step1.description": "We look at your marketing, competition, and opportunities. We create a growth plan.",
    "howItWorks.step2.title": "Strategy & Creative",
    "howItWorks.step2.description": "We design the ad strategy, create creative assets, and set up tracking.",
    "howItWorks.step3.title": "Launch & Optimize",
    "howItWorks.step3.description": "Campaigns are live. We monitor performance daily and optimize for max ROAS.",
    "howItWorks.step4.title": "Scale",
    "howItWorks.step4.description": "When we find winning combinations, we scale with intelligence and profit.",
    "howItWorks.cta": "Let's Go",
    "howItWorks.note": "First partnership: 90 days. Then long-term partnership built on results.",
    "caseStudies.label": "Results",
    "caseStudies.title1": "Real numbers,",
    "caseStudies.title2": " real brands",
    "caseStudies.description": "See how we helped e-shops grow through paid advertising.",
    "testimonials.quote": "\"I can see you put in the effort and truly care about this. That matters. It's the best approach to ads I've experienced.\"",
    "whoItsFor.label": "Who It's For",
    "whoItsFor.title1": "We're not ",
    "whoItsFor.title2": "for everyone",
    "whoItsFor.description": "We work with brands ready to invest in growth. And who understand results take time.",
    "whoItsFor.good.title": "Great Fit",
    "whoItsFor.good1": "E-shops with €10k+ monthly revenue",
    "whoItsFor.good2": "Ready to invest min. €1,500/month in ads",
    "whoItsFor.good3": "Proven product with good margins",
    "whoItsFor.good4": "Looking for a long-term partner, not quick fixes",
    "whoItsFor.bad.title": "Not a Fit",
    "whoItsFor.bad1": "Startups without a proven product",
    "whoItsFor.bad2": "Want overnight success or hacks",
    "whoItsFor.bad3": "Unwilling to invest in proper marketing",
    "whoItsFor.bad4": "Need to control every detail",
    "founder.title": "Who's Behind It",
    "founder.quote": "\"I started this because I saw many e-shops simply don't have time for content and proper marketing. I believe we can truly help with that.\"",
    "founder.name": "Damian",
    "founder.role": "Founder, Dolphin Wave Media",
    "faq.label": "FAQ",
    "faq.title1": "Frequently",
    "faq.title2": " Asked Questions",
    "faq.q1": "How much budget do I need for ads?",
    "faq.a1": "We recommend at least €1,500/month for proper testing. With €3,000-10,000 monthly, we see the best results.",
    "faq.q2": "When will I see results?",
    "faq.a2": "First results usually in 2-4 weeks. But real, sustainable growth takes 2-3 months—that's how long proper testing takes.",
    "faq.q3": "Which platforms do you work on?",
    "faq.a3": "Meta (Facebook, Instagram), Google (Search, Shopping, Performance Max), and TikTok. We'll advise what makes sense for you.",
    "faq.q4": "Do you create creative?",
    "faq.a4": "Absolutely! Copy, graphics, videos, UGC—everything. We also optimize landing pages.",
    "faq.q5": "How does pricing work?",
    "faq.a5": "Monthly retainer—strategy, creative, campaign management, optimization. Price depends on budget and scope. Call us for a quote.",
    "faq.q6": "How do we communicate?",
    "faq.a6": "Direct via Slack or WhatsApp. Weekly reports. We'll call when needed.",
    "cta.title": "Ready to scale your e-shop?",
    "cta.description": "Free 30-minute consultation. We'll look at your marketing and show you where there's room to grow.",
    "cta.button": "Get My Free Consultation",
    "cta.note": "No commitment",
    "footer.description": "Performance marketing for e-shops. Meta Ads, Google Ads, TikTok Ads.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 Dolphin Wave Media. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  sk: {
    "nav.services": "Služby",
    "nav.caseStudies": "Prípadové štúdie",
    "nav.about": "O nás",
    "nav.testimonials": "Referencie",
    "nav.faq": "FAQ",
    "nav.bookStrategy": "Bezplatná konzultácia",
    "hero.trusted": "Overené slovenskými a českými značkami",
    "hero.headline1": "Pomáhame e-shopom ",
    "hero.headline2": "predávať viac",
    "hero.headline3": " pomocou ",
    "hero.headline4": "AI obsahu",
    "hero.headline5": " a ",
    "hero.headline6": "Meta reklám",
    "hero.subheadline": "Pripravíme stratégiu na mieru, ušetríme vám hodiny práce na obsahu a všetko zrealizujeme od A po Z.",
    "hero.cta": "Chcem bezplatnú konzultáciu",
    "hero.stat1.value": "1 435 267€+",
    "hero.stat1.label": "Vygenerovaný obrat",
    "hero.stat2.value": "10 500+",
    "hero.stat2.label": "Objednávok",
    "hero.stat3.value": "20+",
    "hero.stat3.label": "Značiek sme škálovali",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "Rokov skúseností v tíme",
    "hero.viewCaseStudies": "Pozrieť výsledky",
    "hero.microcopy": "15-minútový hovor. Stratégia v prezentácii. Na mieru pre vašu značku.",
    "services.label": "Čo robíme",
    "services.title1": "Všetko čo e-shopy potrebujú na ",
    "services.title2": "rast v 2026",
    "services.description": "Reklamy sú len časť skladačky. Staviame celý systém - stratégiu, kreatívu aj funnel. Všetko musí hrať dokopy.",
    "services.meta.title": "Meta Reklamy",
    "services.meta.description": "Kampane na Facebooku a Instagrame, ktoré predávajú. Nie len kliky, ale objednávky. Full-funnel od prvého kontaktu po nákup.",
    "services.google.title": "Google Reklamy",
    "services.google.description": "Search, Shopping a Performance Max kampane. Zachytávame ľudí, ktorí už aktívne hľadajú to, čo predávate.",
    "services.tiktok.title": "TikTok Reklamy",
    "services.tiktok.description": "Oslovíme mladšiu cieľovku cez pútavé videá. Kompletný manažment aj kreatívna stratégia.",
    "services.creative.title": "Kreatíva a obsah",
    "services.creative.description": "Reklamy, čo zastavia scrollovanie. UGC videá, grafiky, landing pages. O všetko sa postaráme.",
    "whyUs.label": "Prečo my",
    "whyUs.title1": "Robíme to inak",
    "whyUs.description": "Skúsenosti máme z vlastných projektov aj od klientov. Vieme, čo funguje a čo nie. Stále sa učíme a testujeme - lebo nás to baví.",
    "whyUs.point1.title": "Máme drive",
    "whyUs.point1.description": "Táto robota nás baví. Záleží nám na tom, aby sme ju robili dobre. A stále hľadáme, ako to robiť ešte lepšie.",
    "whyUs.point2.title": "Vidíme celý obraz",
    "whyUs.point2.description": "Neriešime len reklamy. Pozeráme sa na celý systém - web, ponuku, komunikáciu. Všetko musí sedieť.",
    "whyUs.point3.title": "Šetríme vám čas",
    "whyUs.point3.description": "Stratégia, obsah, realizácia - to všetko berieme na seba. Vy sa m��žete venovať biznisu.",
    "whyUs.point4.title": "Reálne výsledky",
    "whyUs.point4.description": "Zaujímajú nás čísla, ktoré majú zmysel. Predaje, obrat, rast. Nie len metriky na papieri.",
    "howItWorks.label": "Ako to funguje",
    "howItWorks.title1": "Škálujeme značky v ",
    "howItWorks.title2": "90-dňovom teste",
    "howItWorks.step1.title": "Analýza",
    "howItWorks.step1.description": "Pozrieme sa na váš marketing, konkurenciu a príležitosti. Pripravíme plán rastu.",
    "howItWorks.step2.title": "Stratégia a kreatíva",
    "howItWorks.step2.description": "Navrhneme reklamnú stratégiu, vytvoríme kreatívy a nastavíme meranie.",
    "howItWorks.step3.title": "Spustenie a optimalizácia",
    "howItWorks.step3.description": "Kampane bežia. Denne sledujeme výkon a ladíme pre maximálny ROAS.",
    "howItWorks.step4.title": "Škálovanie",
    "howItWorks.step4.description": "Keď nájdeme víťazné kombinácie, ideme do objemu. S rozumom a profitom.",
    "howItWorks.cta": "Poďme na to",
    "howItWorks.note": "Prvá spolupráca: 90 dní. Potom dlhodobé partnerstvo postavené na výsledkoch.",
    "caseStudies.label": "Výsledky",
    "caseStudies.title1": "Reálne čísla,",
    "caseStudies.title2": " reálne značky",
    "caseStudies.description": "Pozrite sa, ako sme pomohli e-shopom rásť cez platenej reklamy.",
    "testimonials.quote": "\"Vidím, že do toho dávate effort a že vám na tom naozaj záleží. To ma teší. Zatiaľ najlepší prístup k reklamám, aký som zažil.\"",
    "whoItsFor.label": "Pre koho to je",
    "whoItsFor.title1": "Nie sme ",
    "whoItsFor.title2": "pre každého",
    "whoItsFor.description": "Spolupracujeme so značkami, ktoré sú pripravené investovať do rastu. A chápu, že výsledky chcú čas.",
    "whoItsFor.good.title": "Sedíme si",
    "whoItsFor.good1": "E-shopy s obratom 10 000€+ mesačne",
    "whoItsFor.good2": "Pripravení investovať min. 1 500€/mesiac do reklám",
    "whoItsFor.good3": "Overený produkt s dobrými maržami",
    "whoItsFor.good4": "Hľadáte partnera na dlhšie, nie rýchle fixky",
    "whoItsFor.bad.title": "Nesedíme si",
    "whoItsFor.bad1": "Startupy bez overeného produktu",
    "whoItsFor.bad2": "Chcete úspech cez noc alebo nejaké hacky",
    "whoItsFor.bad3": "Nechcete investovať do poriadneho marketingu",
    "whoItsFor.bad4": "Potrebujete kontrolovať každý detail",
    "founder.title": "Kto za tým stojí",
    "founder.quote": "\"Začal som s tým, lebo som videl, že veľa e-shopov proste nemá čas na obsah a správny marketing. Verím, že s tým vieme naozaj pomôcť.\"",
    "founder.name": "Damian",
    "founder.role": "Zakladateľ, Dolphin Wave Media",
    "faq.label": "FAQ",
    "faq.title1": "Časté",
    "faq.title2": " otázky",
    "faq.q1": "Koľko potrebujem na reklamy na štart?",
    "faq.a1": "Odporúčame minimálne 1 500€/mesiac, aby sme mohli poriadne testovať. S 3 000 - 10 000€ mesačne vidíme najlepšie výsledky.",
    "faq.q2": "Kedy uvidím výsledky?",
    "faq.a2": "Prvé výsledky väčšinou do 2-4 týždňov. Ale reálny, udržateľný rast chce 2-3 mesiace - kým otestujeme, čo funguje.",
    "faq.q3": "Na akých platformách robíte?",
    "faq.a3": "Meta (Facebook, Instagram), Google (Search, Shopping, Performance Max) a TikTok. Poradíme, čo dáva zmysel pre vás.",
    "faq.q4": "Robíte aj kreatívu?",
    "faq.a4": "Jasné! Texty, grafiky, videá, UGC - všetko. Aj landing pages vieme optimalizovať.",
    "faq.q5": "Ako funguje cenník?",
    "faq.a5": "Mesačný retainer - stratégia, kreatíva, manažment kampaní, optimalizácia. Cena závisí od rozpočtu a rozsahu. Zavolajte si a dáme ponuku.",
    "faq.q6": "Ako komunikujeme?",
    "faq.a6": "Priamo cez Slack alebo WhatsApp. Týždenné reporty. Keď treba, zavoláme.",
    "cta.title": "Pripravení škálovať váš e-shop?",
    "cta.description": "Bezplatná 15-minútová konzultácia. Pozrieme sa na váš marketing a ukážeme, kde je priestor na rast.",
    "cta.button": "Chcem bezplatnú konzultáciu",
    "cta.note": "Bez záväzkov",
    "footer.description": "Performance marketing pre e-shopy. Meta Ads, Google Ads, TikTok Ads.",
    "footer.navigation": "Navigácia",
    "footer.contact": "Kontakt",
    "footer.rights": "© 2026 Dolphin Wave Media. Všetky práva vyhradené.",
    "footer.privacy": "Ochrana súkromia",
    "footer.terms": "Obchodné podmienky",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from cookie set by middleware
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split('; ')
      const localeCookie = cookies.find(c => c.startsWith('NEXT_LOCALE='))
      if (localeCookie) {
        const lang = localeCookie.split('=')[1] as Language
        return lang === 'sk' ? 'sk' : 'en'
      }
      
      // Fallback: detect from domain
      const host = window.location.hostname
      return host.includes('.sk') ? 'sk' : 'en'
    }
    return 'sk'
  })

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
