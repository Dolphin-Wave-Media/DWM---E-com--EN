"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, MessageSquare, Layers, MousePointerClick, Search, Compass, X } from "lucide-react"
import { useMetaPixel } from "@/hooks/useMetaPixel"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

const getServices = (t: any) => [
  {
    icon: Target,
    title: t("leadgen.services.s1.title"),
    description: t("leadgen.services.s1.description"),
  },
  {
    icon: MessageSquare,
    title: t("leadgen.services.s2.title"),
    description: t("leadgen.services.s2.description"),
  },
  {
    icon: Layers,
    title: t("leadgen.services.s3.title"),
    description: t("leadgen.services.s3.description"),
  },
  {
    icon: MousePointerClick,
    title: t("leadgen.services.s4.title"),
    description: t("leadgen.services.s4.description"),
  },
  {
    icon: Search,
    title: t("leadgen.services.s5.title"),
    description: t("leadgen.services.s5.description"),
  },
  {
    icon: Compass,
    title: t("leadgen.services.s6.title"),
    description: t("leadgen.services.s6.description"),
  },
]

const getSystemProblems = (t: any) => [
  { text: t("leadgen.problem1") },
  { text: t("leadgen.problem2") },
  { text: t("leadgen.problem3") },
  { text: t("leadgen.problem4") },
  { text: t("leadgen.problem5") },
  { text: t("leadgen.problem6") },
]

const getGoodFit = (t: any) => [
  t("leadgen.fitSection.goodFit1"),
  t("leadgen.fitSection.goodFit2"),
  t("leadgen.fitSection.goodFit3"),
  t("leadgen.fitSection.goodFit4"),
]

const getNotFit = (t: any) => [
  t("leadgen.fitSection.notFit1"),
  t("leadgen.fitSection.notFit2"),
  t("leadgen.fitSection.notFit3"),
  t("leadgen.fitSection.notFit4"),
]

const getFaqs = (t: any) => [
  {
    question: t("leadgen.faq.q1"),
    answer: "We start with a quick 15-minute call. We'll look at your current situation, goals, offer, and lead gen process. If it's a strong fit, we'll prepare a custom strategy in presentation format and walk you through it.",
  },
  {
    question: t("leadgen.faq.q2"),
    answer: "Yes. If we believe we can truly help your business, we'll prepare the strategy for free.",
  },
  {
    question: t("leadgen.faq.q3"),
    answer: "No. We work with lead generation businesses and service-based brands that want better marketing systems, stronger funnels, and higher-quality leads.",
  },
  {
    question: t("leadgen.faq.q4"),
    answer: "No. Meta is one of our primary channels, but we also support messaging, creative strategy, funnels, landing pages, Google Ads support, and broader performance strategy.",
  },
  {
    question: t("leadgen.faq.q5"),
    answer: "Yes. We look at how your page communicates value, builds trust, and guides visitors to action. In many cases, better landing page structure can significantly improve lead generation.",
  },
  {
    question: t("leadgen.faq.q6"),
    answer: "It depends on your market, offer, budget, current setup, and sales process. We typically look at the first 90 days as the initial performance period.",
  },
]

export default function LeadGenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { trackLead } = useMetaPixel()
  const { t } = useLanguage()
  
  const services = getServices(t)
  const systemProblems = getSystemProblems(t)
  const goodFit = getGoodFit(t)
  const notFit = getNotFit(t)
  const faqs = getFaqs(t)

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
              {t("leadgen.cta.button")}
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
                  {t("leadgen.trustmetrics.experience")}
                </span>
              </div>
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
                {t("leadgen.cta.button")}
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
              
              {/* Meta Ads Manager Results */}
              <div className="w-full flex justify-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-20%20at%2015.05.17-CEBLQqatUx6DXnNPNkHbBo9Za15SfM.png" 
                  alt="Campaign analytics dashboard showing results"
                  width={1200} 
                  height={600}
                  className="rounded-lg border border-border max-w-full h-auto"
                  loading="lazy"
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
              This is 99% why your{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                lead gen isn&apos;t working
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Many businesses think the problem is simple: they just need more ads, more clicks, or a bigger budget. In reality, most lead gen failures come from a weak system underlying it all.
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
              {t("leadgen.services.intro")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Build a{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Complete Lead Gen System
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("leadgen.services.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
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

      {/* How We Work Section */}
      <section id="how-we-work" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              {t("leadgen.process.title")}
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
                description: "If it&apos;s a strong fit, we&apos;ll prepare a custom marketing strategy in presentation format tailored to your specific situation.",
              },
              {
                step: "03",
                title: "Implementation & Growth",
                description: "After approval, we implement the strategy, launch campaigns, and continuously optimize for better quality and volume of leads.",
              },
            ].map((item, index) => (
              <div key={index} className="relative p-6 sm:p-8 rounded-2xl bg-card/50 border border-border">
                <div className="absolute -top-4 left-6 sm:left-8">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
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

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
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
      <section id="about" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              {t("leadgen.founder.title")}
            </p>
          </div>

          {/* White card container */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 relative rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg">
                  <Image
                    src="/founder-photo.svg"
                    alt="Damian - Founder of Dolphin Wave Media"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  Founder
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
                  {t("leadgen.founder.quote")}
                </p>
                <p className="mt-6 text-gray-900 font-semibold text-lg">{t("leadgen.founder.name")}</p>
                <p className="text-base text-gray-500">{t("leadgen.founder.role")}</p>
                
                {/* Instagram link */}
                <a
                  href="https://www.instagram.com/damian.drahovsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-accent transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @damian.drahovsky
                </a>
              </div>
            </div>
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

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {t("leadgen.faq.title")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
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
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openFaqIndex === index && (
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

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            {t("leadgen.cta.title")}{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("leadgen.fitSection.goodFit1")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("leadgen.cta.description")}
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Chcem bezplatnú stratégiu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 sm:py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand column */}
            <div className="sm:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.svg"
                  alt="Dolphin Wave Media"
                  width={160}
                  height={40}
                  style={{ height: '40px', width: 'auto' }}
                />
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base">
                Pomáhame lead generation značkám budovať marketingové systémy, ktoré priťahujú kvalitné leady, zachytávajú dopyt a menia traffic na reálne príležitosti.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/damian.drahovsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/damian.drahovsky.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigácia</h4>
              <nav className="flex flex-col gap-3">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base">Služby</a>
                <a href="#how-we-work" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base">Ako pracujeme</a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base">O nás</a>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base">FAQ</a>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base">E-commerce služby</Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
              <div className="flex flex-col gap-3 text-sm sm:text-base">
                <a
                  href="mailto:info@dolphinwave-media.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  info@dolphinwave-media.com
                </a>
                <a
                  href="tel:+421915327052"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +421 915 327 052
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Dolphin Wave Media. Všetky práva vyhradené.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm text-muted-foreground">Ochrana súkromia</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Obchodné podmienky</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
