"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What's the minimum ad budget?",
    answer: "We recommend a minimum monthly ad spend of €2,000 for effective testing and optimization. With lower budgets, it's difficult to gather enough data for proper decision-making."
  },
  {
    question: "How long until I see results?",
    answer: "You'll typically see first results within 2-4 weeks. Stable and scalable results are achieved after 2-3 months of intensive optimization and testing."
  },
  {
    question: "Which platforms do you use?",
    answer: "We specialize in Meta Ads (Facebook & Instagram), Google Ads, and TikTok Ads. We choose the platform based on your product and target audience."
  },
  {
    question: "Do I need to have my own creatives?",
    answer: "Not necessarily. We help with creative strategy and can recommend proven partners for UGC and advertising materials."
  },
  {
    question: "What does reporting look like?",
    answer: "You receive weekly reports with key metrics and monthly strategic review calls. You also have access to a live dashboard with real-time data."
  },
  {
    question: "What's the contract length?",
    answer: "We typically work on a monthly basis with a 30-day notice period. We believe results speak for themselves."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Answers to the most common questions about working with us
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4 text-sm sm:text-base">
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
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
