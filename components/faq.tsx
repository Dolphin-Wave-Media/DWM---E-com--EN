"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Aký je minimálny rozpočet na reklamu?",
    answer: "Odporúčame minimálny mesačný ad spend od 2 000 € pre efektívne testovanie a optimalizáciu. Pri nižších rozpočtoch je ťažké získať dostatočné dáta na správne rozhodnutia."
  },
  {
    question: "Ako dlho trvá, kým uvidím výsledky?",
    answer: "Prvé výsledky zvyčajne vidíme do 2-4 týždňov. Stabilné a škálovateľné výsledky dosahujeme po 2-3 mesiacoch intenzívnej optimalizácie a testovania."
  },
  {
    question: "Aké platformy používate?",
    answer: "Špecializujeme sa na Meta Ads (Facebook & Instagram), Google Ads a TikTok Ads. Platformu vyberáme podľa vášho produktu a cieľovej skupiny."
  },
  {
    question: "Potrebujem mať vlastné kreatívy?",
    answer: "Nie nevyhnutne. Pomáhame s kreatívnou stratégiou a vieme odporučiť osvedčených partnerov na tvorbu UGC a reklamných materiálov."
  },
  {
    question: "Ako vyzerá reporting?",
    answer: "Dostávate týždenné reporty s kľúčovými metrikami a mesačné strategické review cally. Máte tiež prístup k live dashboardu s real-time dátami."
  },
  {
    question: "Aká je dĺžka kontraktu?",
    answer: "Štandardne pracujeme na mesačnej báze s 30-dňovou výpovednou lehotou. Veríme, že výsledky hovoria samy za seba."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Často kladené otázky
          </h2>
          <p className="text-lg text-muted-foreground">
            Odpovede na najčastejšie otázky o našej spolupráci
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
