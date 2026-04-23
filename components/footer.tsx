"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  {
    href: "https://www.instagram.com/damian.drahovsky/",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/1CR7q9BBRM/?mibextid=wwXIfr",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: "#services", labelKey: "nav.services" },
    { href: "#case-studies", labelKey: "nav.caseStudies" },
    { href: "#about", labelKey: "nav.about" },
    { href: "#testimonials", labelKey: "nav.testimonials" },
  ]

  return (
    <footer id="contact" className="py-12 sm:py-16 border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Dolphin Wave Media"
                width={160}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base">
              {t("footer.description")}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.navigation")}</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <a
                href="mailto:info@dolphinwave-media.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                info@dolphinwave-media.com
              </a>
              <a
                href="tel:+421915327052"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +421 915 327 052
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-muted-foreground">
              {t("footer.privacy")}
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {t("footer.terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
