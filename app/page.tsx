'use client'

import { Navigation } from "@/components/navigation"
import { HeroSK } from "@/components/hero-sk"
import { HeroEN } from "@/components/hero-en"
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
import { useEffect, useState } from "react"

export default function Home() {
  const [locale, setLocale] = useState<'sk' | 'en'>('sk')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read language from cookie set by middleware
    const cookies = document.cookie.split('; ')
    const localeCookie = cookies.find(c => c.startsWith('NEXT_LOCALE='))
    const cookieLocale = localeCookie ? localeCookie.split('=')[1] : 'sk'
    setLocale((cookieLocale as 'sk' | 'en') || 'sk')
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Avoid hydration mismatch by not rendering until client confirms locale
  }

  const HeroComponent = locale === 'sk' ? HeroSK : HeroEN

  return (
    <>
      <BackgroundPattern />
      <Navigation />
      <main className="relative z-10">
        <HeroComponent />
        <Services />
        <OtherServices />
        <WhyUs />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <AIWork />
        <AdvertisingImportance />
        <WhoItsFor />
        <Founder />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
