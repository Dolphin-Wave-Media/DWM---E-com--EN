import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Lead Generation Services | Dolphin Wave Media",
  description: "We help service businesses generate high-quality leads with Meta Ads, Google Ads & proven funnels. More leads, better clients, predictable growth.",
}

const CALENDLY_URL = "https://calendly.com/dolphinwavemedia/15min"

const services = [
  {
    icon: Target,
    title: "Meta & Google Ads",
    description: "Targeted campaigns that reach your ideal clients when they're actively looking for your services.",
  },
  {
    icon: Users,
    title: "Landing Pages",
    description: "High-converting pages designed to turn visitors into leads. Clear messaging, strong CTAs.",
  },
  {
    icon: TrendingUp,
    title: "Lead Funnels",
    description: "Complete systems that capture, nurture, and qualify leads automatically.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Email sequences, CRM integration, and follow-up systems that work 24/7.",
  },
]

const benefits = [
  "Predictable flow of qualified leads",
  "Lower cost per lead over time",
  "Automated follow-up systems",
  "Clear tracking & reporting",
  "Scalable campaigns",
  "Focus on quality, not just quantity",
]

export default function LeadGenPage() {
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
              <span className="font-semibold text-foreground">Dolphin Wave Media</span>
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Lead Generation
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              More Leads.{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Better Clients.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help service businesses generate high-quality leads with targeted ads and proven funnels. No fluff, just results.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to build a predictable lead generation system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Why Work With Us?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We focus on building systems that generate leads consistently, not just one-time campaigns. Our approach is data-driven, transparent, and built for long-term growth.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-card to-background rounded-2xl border border-border p-8">
                <p className="text-sm text-accent font-medium mb-2">Our Focus</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Quality Over Quantity
                </p>
                <p className="text-muted-foreground">
                  We don&apos;t chase vanity metrics. Our goal is to bring you leads that actually convert into paying clients - people who need what you offer and are ready to buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get More Leads?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free 15-minute call. We&apos;ll discuss your goals and see if we&apos;re a good fit.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Dolphin Wave Media"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                Dolphin Wave Media
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Performance Marketing Agency
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
