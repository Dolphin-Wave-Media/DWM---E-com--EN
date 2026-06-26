"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, MessageSquare, Layers, MousePointerClick, Search, Compass, X } from "lucide-react"
import { useMetaPixel } from "@/hooks/useMetaPixel"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const services = [
  {
    icon: Target,
    title: "Meta Ads for Lead Generation",
    description: "We build, launch, and optimize Meta campaigns designed to generate quality leads, reduce wasted spend, and improve incoming inquiry quality.",
  },
  {
    icon: MessageSquare,
    title: "Creative Strategy & Messaging",
    description: "We develop better hooks, stronger messaging, clearer angles and ad concepts designed to stop attention and attract the right type of prospect.",
  },
  {
    icon: Layers,
    title: "Funnel Strategy",
    description: "We help structure the journey from first click to booked call or submitted form, giving your traffic a better chance of becoming real opportunity.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Optimization",
    description: "We improve how your offer is presented, how your page builds trust, and how clearly it guides visitors to action.",
  },
  {
    icon: Search,
    title: "Google Ads Support",
    description: "For businesses needing high-intent demand, we support Google Ads strategies that capture people already searching for your service.",
  },
  {
    icon: Compass,
    title: "Overall Growth Strategy",
    description: "We don't believe in random tactics. We help build a more complete marketing direction around your business, audience, and goals.",
  },
]

const systemProblems = [
  { text: "Messaging is unclear." },
  { text: "Creative doesn't build trust." },
  { text: "Funnel loses attention." },
  { text: "Landing page doesn't convert." },
  { text: "Offer isn't positioned correctly." },
  { text: "Follow-up isn't strong enough." },
]

const goodFit = [
  "Service businesses wanting more quality leads",
  "Brands already have demand, but need better marketing execution",
  "Businesses wanting stronger funnel, not just more traffic",
  "Founders wanting growth partner, not generic agency",
]

const notFit = [
  "Businesses seeking immediate results without testing",
  "Companies without clear offer or weak service positioning",
  "Brands wanting only the cheapest possible option",
  "Businesses not ready to improve their funnel or sales process",
]

const faqs = [
  {
    question: "What happens after I book a free strategy?",
    answer: "We start with a quick 15-minute call. We'll look at your current situation, goals, offer, and lead gen process. If it's a strong fit, we'll prepare a custom strategy in presentation format and walk you through it.",
  },
  {
    question: "Is the strategy really free?",
    answer: "Yes. If we believe we can truly help your business, we'll prepare the strategy for free.",
  },
  {
    question: "Do you work only with e-commerce brands?",
    answer: "No. We work with lead generation businesses and service-based brands that want better marketing systems, stronger funnels, and higher-quality leads.",
  },
  {
    question: "Do you manage only Meta ads?",
    answer: "No. Meta is one of our primary channels, but we also support messaging, creative strategy, funnels, landing pages, Google Ads support, and broader performance strategy.",
  },
  {
    question: "Do you help with landing pages too?",
    answer: "Yes. We look at how your page communicates value, builds trust, and guides visitors to action. In many cases, better landing page structure can significantly improve lead generation.",
  },
  {
    question: "How long until I see results?",
    answer: "It depends on your market, offer, budget, current setup, and sales process. We typically look at the first 90 days as the initial performance period.",
  },
]

export default function LeadGenPageEN() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { trackLead } = useMetaPixel()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Diagonal Lines Throughout */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#c9388c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="1440" y2="900" stroke="url(#bgGradient)" strokeWidth="1" />
        <line x1="0" y1="450" x2="1440" y2="1350" stroke="url(#bgGradient)" strokeWidth="1" />
        <line x1="1440" y1="0" x2="0" y2="900" stroke="url(#bgGradient)" strokeWidth="1" />
      </svg>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm mb-6">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-foreground font-medium underline decoration-green-500 decoration-2 underline-offset-4">
                Verified by 10+ lead gen brands
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-balance">
              <span className="text-foreground">We help lead generation brands get more </span>
              <span className="bg-gradient-to-r from-accent via-primary to-[#9b4dca] bg-clip-text text-transparent">qualified leads</span>
              <span className="text-foreground"> through </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meta ads, creative strategy and better funnels.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
              Dolphin Wave Media builds marketing systems that help service businesses generate attention, capture demand, and turn traffic into real leads, calls, and clients.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLead}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Book My Free Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#how-we-work"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-4 text-base font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
              >
                How We Work
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground mb-16 text-balance">
              15-minute call. Strategy in presentation. Tailored for your brand.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">12+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5 342+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Leads Generated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Active Partners</p>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 text-center">Real Numbers</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What results can we deliver for you?</h3>
              
              {/* Analytics Dashboard Image */}
              <div className="w-full flex justify-center">
                <img
                  src="/images/leadgen-analytics.png"
                  alt="Campaign analytics dashboard showing results"
                  className="rounded-lg border border-border max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              The Real Problem
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              This is 99% why your{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                lead gen isn&apos;t working
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Many businesses think the problem is simple: they just need more ads, more clicks, or a bigger budget. In reality, most lead gen failures come from a weak system underlying it all.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 mb-12 sm:mb-16">
            {systemProblems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-base text-foreground">{problem.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Get My Free Consultation
              <svg className="ml-2 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              What We Help With
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Build a{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Complete Lead Gen System
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We lead with paid traffic, but real performance comes from how the whole system works together.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 hover:border-primary/30 hover:bg-card/80 transition-all group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Get My Free Consultation
              <svg className="ml-2 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent italic">
                Collaborate
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We start with a quick 15-minute call to understand your business, current lead gen setup, and goals.",
              },
              {
                step: "02",
                title: "Custom Strategy",
                description: "If it's a strong fit, we'll prepare a custom marketing strategy in presentation format tailored to your specific situation.",
              },
              {
                step: "03",
                title: "Implementation & Growth",
                description: "After approval, we implement the strategy, launch campaigns, and continuously optimize for better quality and volume of leads.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden sm:block absolute top-12 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This For You Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Is This For You?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
              We&apos;re not{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent italic">
                for everyone
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We work best with businesses ready to build a real lead generation system.
            </p>
          </div>

          {/* Good Fit vs Not a Fit */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Good Fit */}
            <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Good Fit</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Not a Fit</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Who&apos;s Behind It
            </p>
          </div>

          {/* Founder Card */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-12 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-bold text-primary">DD</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  Founder
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed italic">
                  &quot;I started with paid media, but quickly realized real growth never comes from ads alone. The businesses that grow best usually have the right message, right funnel, right creative, and right system behind it all. That&apos;s why we focus on the bigger picture—not just setting up campaigns.&quot;
                </p>
                <p className="mt-6 text-gray-900 dark:text-white font-semibold text-lg">Damian Drahovsky</p>
                <p className="text-base text-gray-500 dark:text-gray-400">Founder, Dolphin Wave Media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-foreground">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 14l-7-7-7 7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-border/50 text-sm sm:text-base text-muted-foreground leading-relaxed bg-card/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
              Ready for more{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                qualified leads?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Free 15-minute call. We&apos;ll look at your current setup and show you where your growth opportunities are.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Book My Free Strategy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
