import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Reviews } from "@/components/reviews"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <About />
        <Services />
        <Results />
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
