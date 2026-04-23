"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Founder() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-16 sm:py-24 scroll-mt-16 overflow-hidden">
      {/* Subtle diagonal lines background */}
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
        {/* White card container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Founder Image - Bigger */}
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
                {t("founder.title")}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {t("founder.quote")}
              </p>
              <p className="mt-4 text-gray-900 font-semibold">{t("founder.name")}</p>
              <p className="text-sm text-gray-500">{t("founder.role")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
