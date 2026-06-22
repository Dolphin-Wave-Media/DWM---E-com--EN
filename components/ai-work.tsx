"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AIWork() {
  const { t } = useLanguage()
  const videos = [
    {
      src: "https://drive.google.com/file/d/1OZCWc--ZILXFD4899ZPI6HYvJ6HOWOxY/preview",
      title: "AI Video Ad 1"
    },
    {
      src: "https://drive.google.com/file/d/1wvXgSL03i02wj6Si3Yk5uyEM6-kPslo4/preview",
      title: "AI Video Ad 2"
    },
    {
      src: "https://drive.google.com/file/d/1uhbjPa08zUU_-IxjAVjUGQWeJq9VRUk9/preview",
      title: "AI Video Ad 3"
    }
  ]

  const banners = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-XqpAbPUxKWhTrXcQ1hpkkgvw24cc3n.png",
      alt: "Joda Organika Oil Product Banner"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-h1Gp9lgZD5NGm5VWT3uoNCONs5zbrq.png",
      alt: "Joda Organika Capsules Product Banner"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-WEAglGzM1TGpzTC7bBeg6XMfU9fTfV.png",
      alt: "Joda Organika Minimal Product Banner"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aiWorkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="0" y1="200" x2="300" y2="0" stroke="url(#aiWorkGradient)" strokeWidth="1.5" />
        <line x1="0" y1="400" x2="500" y2="0" stroke="url(#aiWorkGradient)" strokeWidth="1.5" />
        <line x1="1140" y1="800" x2="1440" y2="500" stroke="url(#aiWorkGradient)" strokeWidth="1.5" />
        <line x1="1040" y1="800" x2="1440" y2="400" stroke="url(#aiWorkGradient)" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            {t("aiWork.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {t("aiWork.headline")}{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t("aiWork.subtitle")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("aiWork.subtitle")}
          </p>
          {/* Client logo */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">{t("aiWork.createdFor")}</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jo%CC%81da%20organika%20logo-o2MsZEohEiVpAA6HSiZ155qfSEsKWf.png"
              alt="Joda Organika"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* Banner images grid */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">{t("aiWork.bannerTitle")}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video grid */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">AI Video reklamy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card/30 hover:border-primary/30 transition-all"
              >
                <div className="aspect-[9/16] relative bg-gradient-to-br from-card to-background overflow-hidden">
                  <iframe
                    src={video.src}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    className="absolute inset-[-1px] w-[calc(100%+2px)] h-[calc(100%+2px)] scale-[1.02]"
                    title={video.title}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Všetok obsah vytvorený pomocou AI nástrojov, prispôsobený hlasu a publiku značky.
          </p>
        </div>
      </div>
    </section>
  )
}
