import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Results } from "@/components/results"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Reviews } from "@/components/reviews"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Results />
        <Services />
        <About />
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
