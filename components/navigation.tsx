"use client"

import { useState } from "react"
import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Case Studies" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      {/* Desktop Navigation - Pill style */}
      <div className="hidden md:flex items-center justify-between bg-[#1a1525]/90 backdrop-blur-lg rounded-full px-2 py-2 border border-[#2d2440]">
        {/* Logo text */}
        <div className="flex items-center px-4 py-2 bg-[#0d0a1f] rounded-full">
          <span className="text-sm font-semibold text-foreground">Dolphin Wave Media</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get a Quote
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-[#1a1525]/90 backdrop-blur-lg rounded-2xl px-4 py-3 border border-[#2d2440]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Dolphin Wave Media</span>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="pt-4 mt-4 border-t border-[#2d2440] flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors mt-2"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
