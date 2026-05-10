import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Founder } from "@/components/founder"
import { Services } from "@/components/services"
import { OtherServices } from "@/components/other-services"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { CaseStudies } from "@/components/case-studies"
import { AIWork } from "@/components/ai-work"
import { Testimonials } from "@/components/testimonials"
import { WhoItsFor } from "@/components/who-its-for"
import { FAQ } from "@/components/faq"
import { AdvertisingImportance } from "@/components/advertising-importance"
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
        <OtherServices />
        <WhyUs />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <AIWork />
        <WhoItsFor />
        <Founder />
        <AdvertisingImportance />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
