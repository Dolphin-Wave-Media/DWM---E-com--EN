"use client"

import { useState } from "react"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Target, MessageSquare, Layers, MousePointerClick, Search, Compass, AlertCircle, Users, Zap, TrendingUp, Layout, Mail } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/dolphinwavemedia/15min"

const services = [
  {
    icon: Target,
    title: "Meta Ads for Lead Generation",
    description: "We build, launch, and optimize Meta campaigns designed to generate qualified leads, lower wasted spend, and improve the quality of incoming inquiries.",
  },
  {
    icon: MessageSquare,
    title: "Creative Strategy & Ad Messaging",
    description: "We develop better hooks, stronger messaging, clearer angles, and ad concepts built to stop attention and attract the right type of prospect.",
  },
  {
    icon: Layers,
    title: "Funnel Strategy",
    description: "We help structure the path from first click to booked call or submitted form so your traffic has a better chance of becoming a real opportunity.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Optimization",
    description: "We improve the way your offer is presented, how your page communicates trust, and how clearly it leads visitors toward action.",
  },
  {
    icon: Search,
    title: "Google Ads Support",
    description: "For businesses that need high-intent demand, we support Google Ads strategies that help capture people already searching for your service.",
  },
  {
    icon: Compass,
    title: "Overall Growth Strategy",
    description: "We don't believe in random tactics. We help build a more complete marketing direction around your business, your audience, and your goals.",
  },
]

const systemProblems = [
  { icon: AlertCircle, text: "The message is unclear." },
  { icon: Users, text: "The creative does not build trust." },
  { icon: Zap, text: "The funnel leaks attention." },
  { icon: Layout, text: "The landing page does not convert." },
  { icon: TrendingUp, text: "The offer is not positioned the right way." },
  { icon: Mail, text: "The follow-up is not strong enough." },
]

const goodFit = [
  "Service-based businesses that want more qualified leads",
  "Brands that already have demand but need better marketing execution",
  "Businesses that want a stronger funnel, not just more traffic",
  "Founders who want a growth partner, not a generic agency",
]

const notFit = [
  "Businesses looking for instant results without testing",
  "Companies with no clear offer or weak service positioning",
  "Brands that only want the cheapest possible option",
  "Businesses that are not ready to improve their funnel or sales process",
]

const faqs = [
  {
    question: "What happens after I book a free marketing strategy?",
    answer: "We begin with a short 15-minute discovery call. We look at your current situation, goals, offer, and lead generation process. If there is a strong fit, we prepare a custom strategy in presentation format and walk you through it.",
  },
  {
    question: "Is the strategy really free?",
    answer: "Yes. If we believe we can genuinely help your business, we prepare the strategy for free.",
  },
  {
    question: "Do you only work with e-commerce brands?",
    answer: "No. We also work with lead generation businesses and service-based brands that want better marketing systems, stronger funnels, and more qualified inquiries.",
  },
  {
    question: "Do you only manage Meta ads?",
    answer: "No. Meta is one of our core channels, but we also help with messaging, creative strategy, funnels, landing pages, Google Ads support, and broader performance strategy.",
  },
  {
    question: "Do you help with landing pages too?",
    answer: "Yes. We look at how your page communicates value, builds trust, and moves visitors toward action. In many cases, better landing page structure can improve lead generation significantly.",
  },
  {
    question: "How long does it take to see results?",
    answer: "It depends on the market, offer, budget, current setup, and sales process. We usually look at the first 90 days as the initial performance window.",
  },
]

export default function LeadGenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects - Same as main page */}
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
              <span className="text-foreground">We help lead generation brands get more </span>
              <span className="bg-gradient-to-r from-accent via-primary to-[#9b4dca] bg-clip-text text-transparent">qualified leads</span>
              <span className="text-foreground"> through </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meta ads, creative strategy, and better funnels.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
              Dolphin Wave Media builds marketing systems that help service-based businesses generate attention, capture demand, and turn traffic into real inquiries, calls, and clients.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-6 sm:px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Book a Free Marketing Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#how-we-work"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-4 text-base font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
              >
                See How We Work
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground mb-16 text-balance">
              15-minute discovery call. Custom strategy in presentation format. Built around your brand.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">12+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years Combined Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Clients Helped</p>
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
          </div>
        </div>
      </section>

      {/* Lead Gen System Problems Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="systemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#systemGradient)" strokeWidth="1" />
          <line x1="0" y1="250" x2="350" y2="0" stroke="url(#systemGradient)" strokeWidth="1" />
          <line x1="1190" y1="700" x2="1440" y2="550" stroke="url(#systemGradient)" strokeWidth="1" />
          <line x1="1090" y1="700" x2="1440" y2="450" stroke="url(#systemGradient)" strokeWidth="1" />
        </svg>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              The Real Problem
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Lead generation is{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                not just about getting traffic
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A lot of businesses think the problem is simple: they just need more ads, more clicks, or a bigger budget. In reality, most lead generation problems come from a weaker system underneath it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
            {systemProblems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-foreground">{problem.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              That is why we do more than launch campaigns.
            </p>
            <p className="text-foreground font-medium max-w-3xl mx-auto">
              At Dolphin Wave Media, we help businesses build a lead generation system that actually makes sense - from the ads and creatives to the funnel, landing page, and overall strategy behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 sm:py-24 bg-card/30 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="servicesGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="1200" y1="0" x2="1440" y2="240" stroke="url(#servicesGradient)" strokeWidth="1" />
          <line x1="1100" y1="0" x2="1440" y2="340" stroke="url(#servicesGradient)" strokeWidth="1" />
          <line x1="0" y1="560" x2="240" y2="800" stroke="url(#servicesGradient)" strokeWidth="1" />
          <line x1="0" y1="460" x2="340" y2="800" stroke="url(#servicesGradient)" strokeWidth="1" />
        </svg>

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
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="relative py-16 sm:py-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="howGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#howGradient)" strokeWidth="1.5" />
          <line x1="0" y1="300" x2="400" y2="0" stroke="url(#howGradient)" strokeWidth="1.5" />
          <line x1="1140" y1="600" x2="1440" y2="300" stroke="url(#howGradient)" strokeWidth="1.5" />
          <line x1="1040" y1="600" x2="1440" y2="200" stroke="url(#howGradient)" strokeWidth="1.5" />
        </svg>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Work With You
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We start with a short 15-minute call to understand your business, your current lead generation setup, and your goals.",
              },
              {
                step: "02",
                title: "Custom Strategy",
                description: "If there's a strong fit, we prepare a tailored marketing strategy in presentation format - built around your specific situation.",
              },
              {
                step: "03",
                title: "Execution & Growth",
                description: "Once approved, we execute the strategy, launch campaigns, and continuously optimize for better lead quality and volume.",
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
      <section className="relative py-16 sm:py-24 bg-card/30 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="whoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#whoGradient)" strokeWidth="1" />
          <line x1="0" y1="250" x2="350" y2="0" stroke="url(#whoGradient)" strokeWidth="1" />
          <line x1="1190" y1="700" x2="1440" y2="550" stroke="url(#whoGradient)" strokeWidth="1" />
          <line x1="1090" y1="700" x2="1440" y2="450" stroke="url(#whoGradient)" strokeWidth="1" />
        </svg>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Is This Right For You?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
              We&apos;re{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Not for Everyone
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We work best with businesses that are ready to build a real lead generation system.
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
      <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="founderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <line x1="0" y1="150" x2="250" y2="0" stroke="url(#founderGradient)" strokeWidth="1.5" />
          <line x1="0" y1="300" x2="400" y2="0" stroke="url(#founderGradient)" strokeWidth="1.5" />
          <line x1="1140" y1="600" x2="1440" y2="300" stroke="url(#founderGradient)" strokeWidth="1.5" />
          <line x1="1040" y1="600" x2="1440" y2="200" stroke="url(#founderGradient)" strokeWidth="1.5" />
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Meet The Founder
            </p>
          </div>

          {/* White card container - Same as main page */}
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
              <div className="text-center sm:text-left">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  Founder
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                  &quot;I started with paid media, but quickly realized that real growth never comes from ads alone. The businesses that grow best usually have the right message, the right funnel, the right creative, and the right system behind it all. That&apos;s why we focus on the bigger picture - not just campaign setup.&quot;
                </p>
                <p className="mt-4 text-gray-900 font-semibold">Damian Drahovsky</p>
                <p className="text-sm text-gray-500">Founder, Dolphin Wave Media</p>
                
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-16 sm:py-24 bg-card/30 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="faqGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="1200" y1="0" x2="1440" y2="240" stroke="url(#faqGradient)" strokeWidth="1" />
          <line x1="1100" y1="0" x2="1440" y2="340" stroke="url(#faqGradient)" strokeWidth="1" />
          <line x1="0" y1="560" x2="240" y2="800" stroke="url(#faqGradient)" strokeWidth="1" />
          <line x1="0" y1="460" x2="340" y2="800" stroke="url(#faqGradient)" strokeWidth="1" />
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Got{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Questions?
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
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="0" y1="100" x2="200" y2="0" stroke="url(#ctaGradient)" strokeWidth="1.5" />
          <line x1="0" y1="200" x2="350" y2="0" stroke="url(#ctaGradient)" strokeWidth="1.5" />
          <line x1="1090" y1="400" x2="1440" y2="100" stroke="url(#ctaGradient)" strokeWidth="1.5" />
          <line x1="1240" y1="400" x2="1440" y2="200" stroke="url(#ctaGradient)" strokeWidth="1.5" />
        </svg>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Ready to Get More{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Qualified Leads?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free 15-minute discovery call. We&apos;ll review your current setup and show you where there&apos;s room for growth.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Dolphin Wave Media"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Dolphin Wave Media. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                E-commerce Services
              </Link>
              <a
                href="https://www.instagram.com/dolphinwave.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
