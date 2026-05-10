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
              
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/damian.drahovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @damian.drahovsky
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
