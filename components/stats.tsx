"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "200K+", label: "Revenue generated for clients", suffix: "" },
  { value: "8-12x", label: "Average ROAS on Meta Ads", suffix: "" },
  { value: "12", label: "Years combined team experience", suffix: " Years" },
  { value: "20+", label: "Brands helped to grow", suffix: "" },
]

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Extract numeric part
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const numericValue = parseFloat(numericMatch[0])
    const prefix = value.slice(0, value.indexOf(numericMatch[0]))
    const valueSuffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length)

    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(numericValue * easeOutQuart)
      
      if (numericValue < 100) {
        setDisplayValue(`${prefix}${currentValue}${valueSuffix}`)
      } else {
        setDisplayValue(`${prefix}${currentValue.toLocaleString()}${valueSuffix}`)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-foreground">
      {displayValue}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group rounded-xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
