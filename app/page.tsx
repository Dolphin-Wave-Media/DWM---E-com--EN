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

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Founder />
        <Services />
        <WhyUs />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <WhoItsFor />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
