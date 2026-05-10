import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, X, Target, Sparkles, LayoutTemplate, TrendingUp, Search, Compass, MessageSquare, Layers, MousePointerClick, Cog } from "lucide-react"

export const metadata: Metadata = {
  title: "Lead Generation Services | Dolphin Wave Media",
  description: "We help lead generation brands get more qualified leads through Meta ads, creative strategy, and better funnels. Build marketing systems that generate real inquiries.",
}

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

const goodFit = [
  "Service-based businesses that want more qualified leads",
  "Brands that already have demand but need better marketing execution",
  "Businesses that want a stronger funnel, not just more traffic",
  "Founders who want a growth partner, not a generic agency",
  "Companies that want help with strategy, messaging, and conversion - not only ads",
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
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-card/50 border-b border-border py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Performance-driven marketing for brands that want more qualified leads
          </p>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              We help lead generation brands get more qualified leads through{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Meta ads, creative strategy, and better funnels.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Dolphin Wave Media builds marketing systems that help service-based businesses generate attention, capture demand, and turn traffic into real inquiries, calls, and clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Book a Free Marketing Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-card transition-colors"
              >
                See How We Work
              </a>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              On a 15-minute discovery call, we&apos;ll understand your current situation, identify your biggest opportunities, and prepare a custom marketing strategy in presentation format tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-8 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-foreground font-semibold">12+ years</p>
              <p className="text-sm text-muted-foreground">Combined team experience</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">Modern approach</p>
              <p className="text-sm text-muted-foreground">Performance-first mindset</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">Lead focused</p>
              <p className="text-sm text-muted-foreground">Funnels & growth systems</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">Trusted</p>
              <p className="text-sm text-muted-foreground">By brands across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Note */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just run ads. We help build the system behind better lead generation.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Lead generation is not just about getting traffic
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A lot of businesses think the problem is simple: they just need more ads, more clicks, or a bigger budget.
              </p>
              <p>
                In reality, most lead generation problems come from a weaker system underneath it all.
              </p>
              <ul className="space-y-2 my-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The message is unclear.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The creative does not build trust.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The funnel leaks attention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The landing page does not convert.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The offer is not positioned the right way.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  <span>The follow-up is not strong enough.</span>
                </li>
              </ul>
              <p>
                That is why we do more than launch campaigns.
              </p>
              <p className="text-foreground font-medium">
                At Dolphin Wave Media, we help businesses build a lead generation system that actually makes sense - from the ads and creatives to the funnel, landing page, and overall strategy behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What we help with
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We lead with paid traffic, but real performance comes from how the whole system works together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              More leads do not always mean better growth
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-center">
                Bad leads waste time. Weak funnels waste budget. Generic marketing attracts the wrong people.
              </p>
              <p className="text-center">
                What most service businesses actually need is not just more traffic - but a better system for attracting, filtering, and converting the right prospects.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Better ad messaging", "Stronger trust signals", "More relevant creative", "Clearer landing pages", "Better positioning", "A more intentional customer journey"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground font-medium">
              The goal is not to generate noise. The goal is to generate real business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Why businesses work with Dolphin Wave Media
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              We bring a modern, performance-focused mindset into lead generation. What matters to us is not just launching campaigns. It is understanding what makes a prospect convert, what creates trust, what improves lead quality, and what helps a business grow with more clarity.
            </p>
            <div className="bg-card/50 rounded-2xl border border-border p-8">
              <p className="text-muted-foreground mb-6">
                When clients work with us, they are not just getting someone to manage ads. They are getting a team that thinks about:
              </p>
              <ul className="space-y-3">
                {[
                  "Lead quality, not just lead volume",
                  "Strategy, not just campaign setup",
                  "Funnels, not just traffic",
                  "Conversion, not just clicks",
                  "Long-term growth, not just short-term activity"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-medium mt-6">
                We care about the result, and we care about building the system behind it properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Built around modern marketing, not outdated agency thinking
            </h2>
            <div className="bg-card/50 rounded-2xl border border-border p-8 mb-8">
              <blockquote className="text-lg text-foreground italic mb-4">
                &quot;I started with paid media, but quickly realized that real growth never comes from ads alone. The businesses that grow best usually have the right message, the right funnel, the right creative, and the right system behind it all. That&apos;s why we focus on the bigger picture - not just campaign setup.&quot;
              </blockquote>
              <p className="text-muted-foreground">
                - Damian Drahovsky, Founder of Dolphin Wave Media
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dolphin Wave Media was built with a clear mindset: marketing should be practical, modern, and focused on real outcomes.
              </p>
              <p>
                We care about performance, but we also care about how the entire lead generation process works - from the first impression to the final conversion.
              </p>
              <p>
                Our approach is hands-on, strategic, and built around constant learning, better execution, and real partnership.
              </p>
              <p className="text-foreground font-medium">
                We are driven, we move fast, and we take the work seriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-we-work" className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How we work
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We start with a short 15-minute call to understand your business, your current marketing, and where the biggest gaps or opportunities are."
                },
                {
                  step: "02",
                  title: "Custom Strategy Presentation",
                  description: "If we see a strong fit, we prepare a tailored lead generation strategy in presentation format, showing how we'd approach your growth, what we'd improve, and where we see the most leverage."
                },
                {
                  step: "03",
                  title: "Build, Launch, Optimize",
                  description: "From there, we help build and improve the system - campaigns, messaging, funnel structure, landing pages, and performance optimization."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 p-6 bg-card/50 rounded-xl border border-border">
              We prefer long-term collaboration, but the first real test phase is usually the first 90 days, where we focus on building clarity, momentum, and measurable improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Who this is for
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Fit */}
              <div className="bg-card/50 rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Great fit for:
                </h3>
                <ul className="space-y-4">
                  {goodFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Not Fit */}
              <div className="bg-card/50 rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  Not the right fit for:
                </h3>
                <ul className="space-y-4">
                  {notFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              What actually improves lead generation
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Better lead generation usually comes from getting a few key things right at the same time:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Stronger messaging", description: "People need to quickly understand what you do, why it matters, and why they should trust you." },
                { title: "Better creative", description: "The right ad creative helps stop attention, explain the offer, and attract more relevant prospects." },
                { title: "Smarter funnels", description: "A lead gen funnel should guide people clearly from interest to action without friction or confusion." },
                { title: "Higher-converting landing pages", description: "The page must make the next step easy, clear, and trustworthy." },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-card/50 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">A better overall system</h3>
              <p className="text-muted-foreground">
                The best results usually come when ads, funnel, message, and offer all work together. That is the difference between &quot;running ads&quot; and building a marketing system that generates opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ads Matter Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              A great service still needs distribution
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-center">
                Even if you offer something valuable, the right people still need to see it.
              </p>
              <p className="text-center">
                Paid ads help service businesses create reach, test messaging faster, and generate consistent inbound demand. Instead of waiting for referrals or relying only on organic content, you create a more active path to growth.
              </p>
            </div>
            <div className="bg-card/50 rounded-2xl border border-border p-8">
              <p className="text-foreground font-medium mb-4">When done properly, ads help you:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reach new prospects",
                  "Validate what messaging works",
                  "Create predictable lead flow",
                  "Build a more scalable acquisition system"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground font-medium mt-6">
                For many businesses, that is the difference between random growth and controlled growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-card/50 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want a clearer lead generation strategy for your business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free strategy call and let&apos;s break down your current marketing, where the biggest opportunities are, and how we&apos;d build a stronger system around your business.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Free Marketing Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              15-minute discovery call. Custom strategy in presentation format. Built around your business, funnel, and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Dolphin Wave Media"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <div>
                <p className="font-semibold text-foreground">Dolphin Wave Media</p>
                <p className="text-sm text-muted-foreground">
                  Meta ads, creative strategy, funnels, landing pages, and growth systems
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/damian.drahovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/421917123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
