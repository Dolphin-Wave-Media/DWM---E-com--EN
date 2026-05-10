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
    // Navigation
    "nav.services": "Služby",
    "nav.caseStudies": "Prípadové štúdie",
    "nav.about": "O nás",
    "nav.testimonials": "Referencie",
    "nav.faq": "FAQ",
    "nav.bookStrategy": "Bezplatná konzultácia",

    // Hero
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

    // Services
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

    // Why Us
    "whyUs.label": "Prečo my",
    "whyUs.title1": "Robíme to inak",
    "whyUs.description": "Skúsenosti máme z vlastných projektov aj od klientov. Vieme, čo funguje a čo nie. Stále sa učíme a testujeme - lebo nás to baví.",
    "whyUs.point1.title": "Máme drive",
    "whyUs.point1.description": "Táto robota nás baví. Záleží nám na tom, aby sme ju robili dobre. A stále hľadáme, ako to robiť ešte lepšie.",
    "whyUs.point2.title": "Vidíme celý obraz",
    "whyUs.point2.description": "Neriešime len reklamy. Pozeráme sa na celý systém - web, ponuku, komunikáciu. Všetko musí sedieť.",
    "whyUs.point3.title": "Šetríme vám čas",
    "whyUs.point3.description": "Stratégia, obsah, realizácia - to všetko berieme na seba. Vy sa môžete venovať biznisu.",
    "whyUs.point4.title": "Reálne výsledky",
    "whyUs.point4.description": "Zaujímajú nás čísla, ktoré majú zmysel. Predaje, obrat, rast. Nie len metriky na papieri.",

    // How It Works
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
    "howItWorks.step1.title": "Bezplatná stratégia",
    "howItWorks.step1.desc": "15-minútový hovor. Pochopíme vašu značku, ciele a výzvy.",
    "howItWorks.step2.title": "Stratégia na mieru",
    "howItWorks.step2.desc": "Na základe hovoru pripravíme detailnú prezentáciu s návrhom stratégie.",
    "howItWorks.step3.title": "Realizácia a optimalizácia",
    "howItWorks.step3.desc": "Spustíme kampane a neustále ich vylepšujeme. Prvý test trvá 90 dní.",
    "howItWorks.cta": "Poďme na to",
    "howItWorks.note": "Prvá spolupráca: 90 dní. Potom dlhodobé partnerstvo postavené na výsledkoch.",

    // Case Studies
    "caseStudies.label": "Výsledky",
    "caseStudies.title1": "Reálne čísla,",
    "caseStudies.title2": " reálne značky",
    "caseStudies.description": "Pozrite sa, ako sme pomohli e-shopom rásť cez platenej reklamy.",

    // Testimonials
    "testimonials.quote": "\"Vidím, že do toho dávate effort a že vám na tom naozaj záleží. To ma teší. Zatiaľ najlepší prístup k reklamám, aký som zažil.\"",

    // Who It's For
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

    // Founder
    "founder.title": "Kto za tým stojí",
    "founder.quote": "\"Začal som s tým, lebo som videl, že veľa e-shopov proste nemá čas na obsah a správny marketing. Verím, že s tým vieme naozaj pomôcť.\"",
    "founder.name": "Damian",
    "founder.role": "Zakladateľ, Dolphin Wave Media",

    // FAQ
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

    // CTA
    "cta.title": "Pripravení škálovať váš e-shop?",
    "cta.description": "Bezplatná 15-minútová konzultácia. Pozrieme sa na váš marketing a ukážeme, kde je priestor na rast.",
    "cta.button": "Chcem bezplatnú konzultáciu",
    "cta.note": "Bez záväzkov",

    // Footer
    "footer.description": "Performance marketing pre e-shopy. Meta Ads, Google Ads, TikTok Ads.",
    "footer.navigation": "Navigácia",
    "footer.contact": "Kontakt",
    "footer.rights": "© 2026 Dolphin Wave Media. Všetky práva vyhradené.",
    "footer.privacy": "Ochrana súkromia",
    "footer.terms": "Obchodné podmienky",
  },
  sk: {
    // Navigation
    "nav.services": "Služby",
    "nav.caseStudies": "Prípadové štúdie",
    "nav.about": "O nás",
    "nav.testimonials": "Referencie",
    "nav.faq": "FAQ",
    "nav.bookStrategy": "Bezplatná konzultácia",

    // Hero
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

    // Services
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

    // Why Us
    "whyUs.label": "Prečo my",
    "whyUs.title1": "Robíme to inak",
    "whyUs.description": "Skúsenosti máme z vlastných projektov aj od klientov. Vieme, čo funguje a čo nie. Stále sa učíme a testujeme - lebo nás to baví.",
    "whyUs.point1.title": "Máme drive",
    "whyUs.point1.description": "Táto robota nás baví. Záleží nám na tom, aby sme ju robili dobre. A stále hľadáme, ako to robiť ešte lepšie.",
    "whyUs.point2.title": "Vidíme celý obraz",
    "whyUs.point2.description": "Neriešime len reklamy. Pozeráme sa na celý systém - web, ponuku, komunikáciu. Všetko musí sedieť.",
    "whyUs.point3.title": "Šetríme vám čas",
    "whyUs.point3.description": "Stratégia, obsah, realizácia - to všetko berieme na seba. Vy sa môžete venovať biznisu.",
    "whyUs.point4.title": "Reálne výsledky",
    "whyUs.point4.description": "Zaujímajú nás čísla, ktoré majú zmysel. Predaje, obrat, rast. Nie len metriky na papieri.",

    // How It Works
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
    "howItWorks.step1.title": "Bezplatná stratégia",
    "howItWorks.step1.desc": "15-minútový hovor. Pochopíme vašu značku, ciele a výzvy.",
    "howItWorks.step2.title": "Stratégia na mieru",
    "howItWorks.step2.desc": "Na základe hovoru pripravíme detailnú prezentáciu s návrhom stratégie.",
    "howItWorks.step3.title": "Realizácia a optimalizácia",
    "howItWorks.step3.desc": "Spustíme kampane a neustále ich vylepšujeme. Prvý test trvá 90 dní.",
    "howItWorks.cta": "Poďme na to",
    "howItWorks.note": "Prvá spolupráca: 90 dní. Potom dlhodobé partnerstvo postavené na výsledkoch.",

    // Case Studies
    "caseStudies.label": "Výsledky",
    "caseStudies.title1": "Reálne čísla,",
    "caseStudies.title2": " reálne značky",
    "caseStudies.description": "Pozrite sa, ako sme pomohli e-shopom rásť cez platenej reklamy.",

    // Testimonials
    "testimonials.quote": "\"Vidím, že do toho dávate effort a že vám na tom naozaj záleží. To ma teší. Zatiaľ najlepší prístup k reklamám, aký som zažil.\"",

    // Who It's For
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

    // Founder
    "founder.title": "Kto za tým stojí",
    "founder.quote": "\"Začal som s tým, lebo som videl, že veľa e-shopov proste nemá čas na obsah a správny marketing. Verím, že s tým vieme naozaj pomôcť.\"",
    "founder.name": "Damian",
    "founder.role": "Zakladateľ, Dolphin Wave Media",

    // FAQ
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

    // CTA
    "cta.title": "Pripravení škálovať váš e-shop?",
    "cta.description": "Bezplatná 15-minútová konzultácia. Pozrieme sa na váš marketing a ukážeme, kde je priestor na rast.",
    "cta.button": "Chcem bezplatnú konzultáciu",
    "cta.note": "Bez záväzkov",

    // Footer
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
  const [language, setLanguage] = useState<Language>("en")

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
