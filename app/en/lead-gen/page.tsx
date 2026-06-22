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
    description: "We build, launch, and optimize Meta campaigns designed to generate quality leads, reduce wasted spend, and improve the quality of incoming inquiries.",
  },
  {
    icon: MessageSquare,
    title: "Creative Strategy & Messaging",
    description: "We develop better hooks, stronger messaging, clearer angles, and ad concepts created to stop attention and attract the right type of prospect.",
  },
  {
    icon: Layers,
    title: "Funnel Strategy",
    description: "We help structure the path from first click to a booked call or submitted form, giving your traffic a better chance of becoming a real opportunity.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Optimization",
    description: "We improve how your offer is presented, how your page communicates trust, and how clearly it guides visitors to take action.",
  },
  {
    icon: Search,
    title: "Google Ads Support",
    description: "For businesses that need high-intent traffic, we support Google Ads strategies that capture people already searching for your service.",
  },
  {
    icon: Compass,
    title: "Overall Growth Strategy",
    description: "We don't believe in random tactics. We help build a more complete marketing direction around your business, audience, and goals.",
  },
]

const systemProblems = [
  { text: "Your messaging is unclear." },
  { text: "Your creative doesn't build trust." },
  { text: "Your funnel loses attention." },
  { text: "Your landing page doesn't convert." },
  { text: "Your offer isn't positioned right." },
  { text: "Your follow-up isn't strong enough." },
]

const goodFit = [
  "Service businesses that want more quality leads",
  "Brands that already have demand but need better marketing execution",
  "Businesses that want a stronger funnel, not just more traffic",
  "Founders that want a growth partner, not a generic agency",
]

const notFit = [
  "Businesses looking for immediate results without testing",
  "Companies without a clear offer or weak service positioning",
  "Brands that just want the cheapest possible option",
  "Businesses not ready to improve their funnel or sales process",
]

const faqs = [
  {
    question: "What happens after I book a free strategy call?",
    answer: "We start with a quick 30-minute call. We'll look at your current situation, goals, offer, and lead generation process. If there's a strong fit, we'll prepare a custom strategy in presentation format and walk you through it.",
  },
  {
    question: "Is the strategy really free?",
    answer: "Yes. If we believe we can truly help your business, we prepare the strategy for free.",
  },
  {
    question: "Do you only work with e-commerce brands?",
    answer: "No. We also work with lead generation businesses and service brands that want better marketing systems, stronger funnels, and higher-quality inquiries.",
  },
  {
    question: "Do you only manage Meta ads?",
    answer: "No. Meta is one of our primary channels, but we also help with messaging, creative strategy, funnels, landing pages, Google Ads support, and broader performance strategy.",
  },
  {
    question: "Do you help with landing pages too?",
    answer: "Yes. We look at how your page communicates value, builds trust, and guides visitors to take action. In many cases, a better landing page structure can significantly improve lead generation.",
  },
  {
    question: "How long until I see results?",
    answer: "It depends on your market, offer, budget, current setup, and sales process. We typically look at the first 90 days as the initial performance period.",
  },
]

export default function LeadGenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { trackLead } = useMetaPixel()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Diagonal Lines Throughout */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 3000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c9388c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f5a623" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {/* Top section lines */}
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="0" y1="300" x2="400" y2="0" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="0" y1="450" x2="550" y2="0" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="0" y1="600" x2="700" y2="0" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="890" y1="900" x2="1440" y2="350" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1040" y1="900" x2="1440" y2="500" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1190" y1="900" x2="1440" y2="650" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1340" y1="900" x2="1440" y2="800" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          {/* Middle section lines */}
          <line x1="0" y1="1100" x2="300" y2="900" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="0" y1="1300" x2="450" y2="1000" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="1100" y1="1500" x2="1440" y2="1100" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1200" y1="1600" x2="1440" y2="1300" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          {/* Lower middle section lines */}
          <line x1="0" y1="1800" x2="350" y2="1500" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="0" y1="2000" x2="500" y2="1650" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1000" y1="2200" x2="1440" y2="1750" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="1150" y1="2300" x2="1440" y2="1950" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          {/* Bottom section lines */}
          <line x1="0" y1="2500" x2="400" y2="2150" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="0" y1="2700" x2="550" y2="2300" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="950" y1="2900" x2="1440" y2="2400" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="1100" y1="3000" x2="1440" y2="2600" stroke="url(#lineGradient1)" strokeWidth="1.5" />
        </svg>
        {/* Gradient orbs throughout the page */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] opacity-40" />
        <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-[35%] right-[25%] w-[450px] h-[450px] bg-primary/12 rounded-full blur-[130px] opacity-35" />
        <div className="absolute top-[55%] left-[15%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] opacity-35" />
        <div className="absolute top-[75%] right-[20%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-[90%] left-[25%] w-[450px] h-[450px] bg-accent/12 rounded-full blur-[130px] opacity-35" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Dolphin Wave Media"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-semibold text-foreground hidden sm:block">Dolphin Wave Media</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#how-we-work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How We Work</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Free Strategy
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-background overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5a623" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#c9388c" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <line x1="0" y1="150" x2="250" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="0" y1="300" x2="400" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="0" y1="450" x2="550" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="0" y1="600" x2="700" y2="0" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="890" y1="900" x2="1440" y2="350" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="1040" y1="900" x2="1440" y2="500" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="1190" y1="900" x2="1440" y2="650" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
            <line x1="1340" y1="900" x2="1440" y2="800" stroke="url(#heroLineGradient)" strokeWidth="1.5" />
          </svg>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center w-full overflow-hidden">
            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground font-medium underline decoration-green-500 decoration-2 underline-offset-4">
                  Trusted by 10+ lead gen brands
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-balance">
              <span className="text-foreground">We help lead generation brands acquire more </span>
              <span className="bg-gradient-to-r from-accent via-primary to-[#9b4dca] bg-clip-text text-transparent">quality leads</span>
              <span className="text-foreground"> through </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meta ads, creative strategy, and stronger funnels.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
              Dolphin Wave Media builds marketing systems that help service businesses generate attention, capture demand, and turn traffic into real inquiries, calls, and clients.
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
                Get Free Strategy
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
              30-minute call. Strategy in presentation. Custom for your brand.
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5,342+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Leads Generated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Active Partners</p>
              </div>
            </div>

            {/* Results Section - Using Image instead of iframe */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 text-center">Real Results</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What results can we bring for you?</h3>
              
              {/* Meta Ads Manager Results - Using img tag with placeholder path */}
              <div className="w-full flex justify-center">
                <img 
                  src="/images/leadgen-hero.png" 
                  alt="Meta Ads Manager - Real metrics and results screenshot"
                  className="w-full max-w-4xl h-auto rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen System Problems Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              The Real Problem
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              In 99% of cases, here&apos;s why your{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                lead gen isn&apos;t working
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Many businesses think the problem is simple: they just need more ads, more clicks, or a bigger budget. But in reality, most lead generation problems come from a weaker system underneath it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
            {systemProblems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-card/50 border border-border hover:border-red-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-7 h-7 text-red-500" strokeWidth={3} />
                </div>
                <span className="text-sm sm:text-base text-foreground">{problem.text}</span>
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
              Get Free Consultation
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
                complete lead gen system
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We drive it through paid traffic, but real performance comes from how the whole system works together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group flex flex-col p-6 sm:p-8 rounded-2xl bg-card/60 border border-border hover:border-primary/50 transition-all hover:bg-card/80 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-grow">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/50"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between hover:bg-card/60 transition-colors"
                >
                  <span className="text-left text-base sm:text-lg font-semibold text-foreground">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 sm:px-8 pb-4 sm:pb-5 pt-0 border-t border-border/50">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Ready to get more{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              quality leads?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Free 30-minute call. We&apos;ll look at your current setup and show you where there&apos;s room to grow.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Get My Free Strategy
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border/30">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://facebook.com" className="hover:text-foreground transition-colors">Facebook</a></li>
                <li><a href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm text-muted-foreground">
            <p>© 2026 Dolphin Wave Media. All rights reserved.</p>
            <p>Performance marketing for service businesses. Meta Ads, Google Ads, strategy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
