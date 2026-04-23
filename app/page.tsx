import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Founder } from "@/components/founder"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { WhoItsFor } from "@/components/who-its-for"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { BackgroundPattern } from "@/components/background-pattern"

export default function Home() {
  return (
    <>
      <BackgroundPattern />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <WhoItsFor />
        <Founder />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
