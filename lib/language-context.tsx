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
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.bookStrategy": "Book a Free Strategy",

    // Hero
    "hero.trusted": "Trusted by 20+ brands across Europe and USA",
    "hero.headline1": "We help e-commerce brands ",
    "hero.headline2": "sell more products",
    "hero.headline3": " with ",
    "hero.headline4": "AI-generated content",
    "hero.headline5": " and ",
    "hero.headline6": "Meta ads",
    "hero.subheadline": "We create the right strategy, save you hours on content production, and handle the execution from start to finish.",
    "hero.cta": "Book a Free Strategy Call",
    "hero.stat1.value": "1,435,267€+",
    "hero.stat1.label": "Revenue Generated",
    "hero.stat2.value": "10,500+",
    "hero.stat2.label": "Orders Generated",
    "hero.stat3.value": "20+",
    "hero.stat3.label": "Brands Scaled",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "Years of Team Experience",
    "hero.viewCaseStudies": "View Case Studies",
    "hero.microcopy": "15-minute discovery call. Custom strategy in presentation format. Built around your brand.",

    // Services
    "services.label": "Our Services",
    "services.title1": "Everything E-Commerce Brands Need to ",
    "services.title2": "Scale in 2026",
    "services.description": "Running ads is only one part of the puzzle. We build the strategy, creative, and funnel behind it, so everything works together to grow your brand.",
    "services.meta.title": "Meta Ads",
    "services.meta.description": "Strategic campaigns on Facebook and Instagram built to drive sales, not just traffic. Full-funnel approach from awareness to conversion.",
    "services.google.title": "Google Ads",
    "services.google.description": "Search, Shopping, and Performance Max campaigns that capture high-intent buyers actively looking for your products.",
    "services.tiktok.title": "TikTok Ads",
    "services.tiktok.description": "Reach younger audiences with engaging video ads on TikTok. Full campaign management and creative strategy.",
    "services.creative.title": "Creative & Content",
    "services.creative.description": "Scroll-stopping ad creatives, UGC-style videos, and landing pages that convert. We handle the entire creative process.",

    // Why Us
    "whyUs.label": "Why Brands Choose Us",
    "whyUs.title1": "Built Different",
    "whyUs.description": "We've built our experience across many of our own and client projects, which gives us a broad view of what works. We keep learning, testing, and improving — because we genuinely enjoy it.",
    "whyUs.point1.title": "We've Got the Drive",
    "whyUs.point1.description": "We like this work, we care about doing it properly, and we're always looking for ways to improve and get better results.",
    "whyUs.point2.title": "We See the Full Picture",
    "whyUs.point2.description": "We don't focus only on ads. We look at the whole system around them to understand what's working and what needs to change.",
    "whyUs.point3.title": "We Save You Hours",
    "whyUs.point3.description": "We help you save time on strategy, content, and execution, so you can focus on the bigger picture.",
    "whyUs.point4.title": "We Get Actual Results",
    "whyUs.point4.description": "We care about what really matters — performance, sales, and growth that makes sense for your brand.",

    // How It Works
    "howItWorks.label": "How It Works",
    "howItWorks.title1": "How we scale brands in ",
    "howItWorks.title2": "90-day test drive",
    "howItWorks.step1.title": "Discovery & Analysis",
    "howItWorks.step1.description": "We analyze your current marketing, competitors, and opportunities to build a custom growth plan.",
    "howItWorks.step2.title": "Strategy & Creative",
    "howItWorks.step2.description": "We develop your ad strategy, create compelling creatives, and set up proper tracking.",
    "howItWorks.step3.title": "Launch & Optimize",
    "howItWorks.step3.description": "Campaigns go live. We monitor performance daily and optimize for maximum ROAS.",
    "howItWorks.step4.title": "Scale & Grow",
    "howItWorks.step4.description": "Once we find winning combinations, we scale aggressively while maintaining profitability.",
    "howItWorks.step1.title": "Book a Free Marketing Strategy",
    "howItWorks.step1.desc": "Start with a 15-minute discovery call. We'll understand your brand, goals, and current challenges.",
    "howItWorks.step2.title": "We Prepare Your Custom Strategy",
    "howItWorks.step2.desc": "Based on our call, we'll create a detailed marketing strategy presentation tailored to your brand.",
    "howItWorks.step3.title": "Launch, Build & Optimize",
    "howItWorks.step3.desc": "We implement the strategy, launch campaigns, and continuously optimize. First test-drive is 90 days.",
    "howItWorks.cta": "Start Your Growth Journey",
    "howItWorks.note": "First collaboration period: 90 days. Long-term partnership built on results.",

    // Case Studies
    "caseStudies.label": "Case Studies",
    "caseStudies.title1": "Real Results,",
    "caseStudies.title2": " Real Brands",
    "caseStudies.description": "See how we've helped e-commerce brands achieve sustainable growth through strategic paid advertising.",

    // Testimonials
    "testimonials.quote": "\"I can see you're really putting effort into this and that you genuinely care about the project, which makes me really happy. So far, this is probably the best approach to ads I've had.\"",

    // Who It's For
    "whoItsFor.label": "Who It's For",
    "whoItsFor.title1": "We're ",
    "whoItsFor.title2": "Not For Everyone",
    "whoItsFor.description": "We work best with brands that are ready to invest in growth and understand that real results take time and collaboration.",
    "whoItsFor.good.title": "Perfect Fit",
    "whoItsFor.good1": "E-commerce brands doing €10K+/month in revenue",
    "whoItsFor.good2": "Ready to invest at least €1,500/month in ad spend",
    "whoItsFor.good3": "Have a proven product with good margins",
    "whoItsFor.good4": "Want a long-term growth partner, not quick fixes",
    "whoItsFor.bad.title": "Not The Right Fit",
    "whoItsFor.bad1": "Startups with no product-market fit yet",
    "whoItsFor.bad2": "Looking for overnight success or \"hacks\"",
    "whoItsFor.bad3": "Not ready to invest in proper marketing",
    "whoItsFor.bad4": "Want to micromanage every decision",

    // Founder
    "founder.title": "Meet the Founder",
    "founder.quote": "\"I started this because I saw that many e-commerce brands simply don't have enough time to create content and manage their marketing properly. I believe we can really help with that.\"",
    "founder.name": "Damian",
    "founder.role": "Founder, Dolphin Wave Media",

    // FAQ
    "faq.label": "FAQ",
    "faq.title1": "Frequently Asked",
    "faq.title2": " Questions",
    "faq.q1": "How much ad spend do I need to start?",
    "faq.a1": "We recommend a minimum of €1,500/month in ad spend to see meaningful results. This allows us to test different audiences, creatives, and strategies effectively. Brands typically see the best results with €3,000-10,000/month.",
    "faq.q2": "How long until I see results?",
    "faq.a2": "Most clients see initial results within the first 2-4 weeks. However, real, sustainable growth typically takes 2-3 months as we optimize campaigns, test creatives, and find winning combinations.",
    "faq.q3": "What platforms do you work with?",
    "faq.a3": "We specialize in Meta Ads (Facebook & Instagram), Google Ads (Search, Shopping, Performance Max), and TikTok Ads. We'll recommend the best mix based on your target audience and goals.",
    "faq.q4": "Do you create the ad creatives?",
    "faq.a4": "Yes! We handle everything from strategy to creative production. This includes ad copy, static images, video ads, UGC-style content, and landing page optimization.",
    "faq.q5": "What's your pricing model?",
    "faq.a5": "We work on a monthly retainer basis that includes strategy, creative, campaign management, and optimization. Pricing depends on your ad spend and scope. Book a call to get a custom quote.",
    "faq.q6": "How is communication handled?",
    "faq.a6": "You'll have direct access to your dedicated strategist via Slack or WhatsApp. We provide weekly reports and are always available for calls when needed.",

    // CTA
    "cta.title": "Ready to Scale Your E-commerce Brand?",
    "cta.description": "Book a free 15-minute consultation. We'll review your marketing and show you where there's room for growth.",
    "cta.button": "Book Your Free 15-minute Call",
    "cta.note": "No commitment required",

    // Footer
    "footer.description": "Performance marketing agency helping e-commerce brands scale with Meta Ads, Google Ads & TikTok Ads.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 Dolphin Wave Media. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
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
    "hero.trusted": "Dôveruje nám 20+ značiek v Európe a USA",
    "hero.headline1": "Pomáhame e-commerce značkám ",
    "hero.headline2": "predávať viac produktov",
    "hero.headline3": " pomocou ",
    "hero.headline4": "AI-generovaného obsahu",
    "hero.headline5": " a ",
    "hero.headline6": "Meta reklám",
    "hero.subheadline": "Vytvoríme správnu stratégiu, ušetríme vám hodiny na tvorbe obsahu a postaráme sa o realizáciu od začiatku do konca.",
    "hero.cta": "Rezervovať bezplatnú konzultáciu",
    "hero.stat1.value": "200 000€+",
    "hero.stat1.label": "Vygenerovaný obrat",
    "hero.stat2.value": "10 500+",
    "hero.stat2.label": "Vygenerovaných objednávok",
    "hero.stat3.value": "20+",
    "hero.stat3.label": "Škálovaných značiek",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "Rokov tímových skúseností",
    "hero.viewCaseStudies": "Pozrieť prípadové štúdie",
    "hero.microcopy": "15-minútový discovery hovor. Stratégia na mieru v prezentačnom formáte. Postavená okolo vašej značky.",

    // Services
    "services.label": "Naše služby",
    "services.title1": "Všetko, čo e-commerce značky potrebujú na ",
    "services.title2": "škálovanie v 2026",
    "services.description": "Spúšťanie reklám je len jedna časť skladačky. Budujeme stratégiu, kreatívu a celý lievik za tým, aby všetko spolupracovalo na raste vašej značky.",
    "services.meta.title": "Meta Reklamy",
    "services.meta.description": "Strategické kampane na Facebooku a Instagrame vytvorené na zvýšenie predajov, nie len návštevnosti. Full-funnel prístup od povedomia po konverziu.",
    "services.google.title": "Google Reklamy",
    "services.google.description": "Search, Shopping a Performance Max kampane, ktoré zachytávajú zákazníkov s vysokým záujmom aktívne hľadajúcich vaše produkty.",
    "services.tiktok.title": "TikTok Reklamy",
    "services.tiktok.description": "Oslovte mladšie publikum pútavými video reklamami na TikToku. Kompletný manažment kampaní a kreatívna stratégia.",
    "services.creative.title": "Kreatíva a obsah",
    "services.creative.description": "Reklamy, ktoré zastavia scrollovanie, UGC-style videá a landing pages, ktoré konvertujú. Postaráme sa o celý kreatívny proces.",

    // Why Us
    "whyUs.label": "Prečo si značky vyberajú nás",
    "whyUs.title1": "Odlišný prístup",
    "whyUs.description": "Naše skúsenosti sme nazbierali na mnohých vlastných aj klientskych projektoch, čo nám dáva široký pohľad na to, čo funguje. Neustále sa učíme, testujeme a zlepšujeme — pretože nás to naozaj baví.",
    "whyUs.point1.title": "Máme drive",
    "whyUs.point1.description": "Táto práca nás baví, záleží nám na tom, aby sme ju robili správne, a neustále hľadáme spôsoby, ako sa zlepšiť a dosahovať lepšie výsledky.",
    "whyUs.point2.title": "Vidíme celkový obraz",
    "whyUs.point2.description": "Nesústredíme sa len na reklamy. Pozeráme sa na celý systém okolo nich, aby sme pochopili, čo funguje a čo treba zmeniť.",
    "whyUs.point3.title": "Šetríme vám hodiny",
    "whyUs.point3.description": "Pomáhame vám ušetriť čas na stratégii, obsahu a realizácii, aby ste sa mohli sústrediť na dôležitejšie veci.",
    "whyUs.point4.title": "Dosahujeme reálne výsledky",
    "whyUs.point4.description": "Záleží nám na tom, na čom naozaj záleží — výkon, predaje a rast, ktorý dáva zmysel pre vašu značku.",

    // How It Works
    "howItWorks.label": "Ako to funguje",
    "howItWorks.title1": "Ako škálujeme značky v ",
    "howItWorks.title2": "90-dňovom teste",
    "howItWorks.step1.title": "Analýza a discovery",
    "howItWorks.step1.description": "Analyzujeme váš aktuálny marketing, konkurenciu a príležitosti, aby sme vytvorili plán rastu na mieru.",
    "howItWorks.step2.title": "Stratégia a kreatíva",
    "howItWorks.step2.description": "Vytvoríme reklamnú stratégiu, presvedčivé kreatívy a nastavíme správne meranie.",
    "howItWorks.step3.title": "Spustenie a optimalizácia",
    "howItWorks.step3.description": "Kampane sa spustia. Denne monitorujeme výkon a optimalizujeme pre maximálny ROAS.",
    "howItWorks.step4.title": "Škálovanie a rast",
    "howItWorks.step4.description": "Keď nájdeme víťazné kombinácie, agresívne škálujeme pri zachovaní profitability.",
    "howItWorks.step1.title": "Rezervujte si bezplatnú marketingovú stratégiu",
    "howItWorks.step1.desc": "Začnite 15-minútovým discovery hovorom. Pochopíme vašu značku, ciele a aktuálne výzvy.",
    "howItWorks.step2.title": "Pripravíme vám stratégiu na mieru",
    "howItWorks.step2.desc": "Na základe hovoru vytvoríme detailnú prezentáciu marketingovej stratégie prispôsobenú vašej značke.",
    "howItWorks.step3.title": "Spustenie, budovanie a optimalizácia",
    "howItWorks.step3.desc": "Implementujeme stratégiu, spustíme kampane a neustále optimalizujeme. Prvý test trvá 90 dní.",
    "howItWorks.cta": "Začnite svoju cestu k rastu",
    "howItWorks.note": "Prvé obdobie spolupráce: 90 dní. Dlhodobé partnerstvo postavené na výsledkoch.",

    // Case Studies
    "caseStudies.label": "Prípadové štúdie",
    "caseStudies.title1": "Reálne výsledky,",
    "caseStudies.title2": " reálne značky",
    "caseStudies.description": "Pozrite sa, ako sme pomohli e-commerce značkám dosiahnuť udržateľný rast prostredníctvom strategickej platenej reklamy.",

    // Testimonials
    "testimonials.quote": "\"Vidím, že do toho naozaj dávate úsilie a že vám na projekte skutočne záleží, čo ma veľmi teší. Zatiaľ je to pravdepodobne najlepší prístup k reklamám, aký som mal.\"",

    // Who It's For
    "whoItsFor.label": "Pre koho to je",
    "whoItsFor.title1": "Nie sme ",
    "whoItsFor.title2": "pre každého",
    "whoItsFor.description": "Najlepšie spolupracujeme so značkami, ktoré sú pripravené investovať do rastu a chápu, že skutočné výsledky vyžadujú čas a spoluprácu.",
    "whoItsFor.good.title": "Ideálny fit",
    "whoItsFor.good1": "E-commerce značky s obratom 10 000€+/mesiac",
    "whoItsFor.good2": "Pripravené investovať minimálne 1 500€/mesiac do reklám",
    "whoItsFor.good3": "Majú overený produkt s dobrými maržami",
    "whoItsFor.good4": "Chcú dlhodobého partnera pre rast, nie rýchle riešenia",
    "whoItsFor.bad.title": "Nie je to pre vás",
    "whoItsFor.bad1": "Startupy bez overeného product-market fit",
    "whoItsFor.bad2": "Hľadáte úspech cez noc alebo \"hacky\"",
    "whoItsFor.bad3": "Nie ste pripravení investovať do poriadneho marketingu",
    "whoItsFor.bad4": "Chcete mikromanažovať každé rozhodnutie",

    // Founder
    "founder.title": "Spoznajte zakladateľa",
    "founder.quote": "\"Začal som s tým, pretože som videl, že mnohé e-commerce značky jednoducho nemajú dostatok času na tvorbu obsahu a správne riadenie svojho marketingu. Verím, že s tým vieme naozaj pomôcť.\"",
    "founder.name": "Damian",
    "founder.role": "Zakladateľ, Dolphin Wave Media",

    // FAQ
    "faq.label": "FAQ",
    "faq.title1": "Často kladené",
    "faq.title2": " otázky",
    "faq.q1": "Koľko potrebujem investovať do reklám na začiatok?",
    "faq.a1": "Odporúčame minimálne 1 500€/mesiac na reklamný rozpočet, aby sme videli zmysluplné výsledky. To nám umožňuje efektívne testovať rôzne publiká, kreat��vy a stratégie. Značky zvyčajne vidia najlepšie výsledky s 3 000-10 000€/mesiac.",
    "faq.q2": "Ako dlho trvá, kým uvidím výsledky?",
    "faq.a2": "Väčšina klientov vidí prvé výsledky v priebehu 2-4 týždňov. Skutočný, udržateľný rast však zvyčajne trvá 2-3 mesiace, počas ktorých optimalizujeme kampane, testujeme kreatívy a hľadáme víťazné kombinácie.",
    "faq.q3": "Na akých platformách pracujete?",
    "faq.a3": "Špecializujeme sa na Meta Ads (Facebook a Instagram), Google Ads (Search, Shopping, Performance Max) a TikTok Ads. Odporučíme najlepší mix na základe vašej cieľovej skupiny a cieľov.",
    "faq.q4": "Tvoríte aj reklamné kreatívy?",
    "faq.a4": "Áno! Postaráme sa o všetko od stratégie po produkciu kreatív. To zahŕňa reklamné texty, statické obrázky, video reklamy, UGC-style obsah a optimalizáciu landing pages.",
    "faq.q5": "Aký je váš cenový model?",
    "faq.a5": "Pracujeme na mesačnom retaineri, ktorý zahŕňa stratégiu, kreatívu, manažment kampaní a optimalizáciu. Cena závisí od vášho reklamného rozpočtu a rozsahu. Rezervujte si hovor pre cenovú ponuku na mieru.",
    "faq.q6": "Ako prebieha komunikácia?",
    "faq.a6": "Budete mať priamy prístup k svojmu dedikovanému stratégovi cez Slack alebo WhatsApp. Poskytujeme týždenné reporty a sme vždy k dispozícii na hovory podľa potreby.",

    // CTA
    "cta.title": "Pripravení škálovať vašu e-commerce značku?",
    "cta.description": "Rezervujte si bezplatnú 15-minútovú konzultáciu. Pozrieme sa na váš marketing a ukážeme vám, kde je priestor na rast.",
    "cta.button": "Rezervovať bezplatnú 15-minútovú konzultáciu",
    "cta.note": "Bez záväzkov",

    // Footer
    "footer.description": "Performance marketingová agentúra pomáhajúca e-commerce značkám škálovať s Meta Ads, Google Ads a TikTok Ads.",
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
