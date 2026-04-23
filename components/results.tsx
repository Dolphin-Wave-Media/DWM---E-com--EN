"use client"

import { useState } from "react"

const successStories = [
  {
    category: "E-commerce Shop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    rating: 5,
    roas: "82.7%",
    roasLabel: "Average",
    revenue: "205K",
    revenueLabel: "Eur Rčts",
  },
  {
    category: "E-commerce Lifestyle Store",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    rating: 5,
    roas: "3.96%",
    roasLabel: "Average",
    revenue: "102%",
    revenueLabel: "Eur Rčts",
  },
  {
    category: "E-commerce Fashion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    rating: 4,
    roas: "5.93%",
    roasLabel: "Average",
    revenue: "133%",
    revenueLabel: "Eur Rčts",
  },
  {
    category: "Beauty Brand",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    rating: 5,
    roas: "9.4x",
    roasLabel: "ROAS",
    revenue: "€40K",
    revenueLabel: "Revenue",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          className={i < count ? "text-accent" : "text-accent/30"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function Results() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCards = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= successStories.length - visibleCards + 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? successStories.length - visibleCards : prev - 1
    )
  }

  return (
    <section id="results" className="py-16 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Recent Success Stories
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full border border-[#2d2440] bg-[#12101f] flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full border border-[#2d2440] bg-[#12101f] flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {successStories.map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] rounded-2xl bg-gradient-to-br from-[#f5a623] via-[#e85d75] to-[#c9388c] p-6 relative overflow-hidden"
              >
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon and category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80">
                      {story.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/70 mb-1">{story.category}</p>
                      <StarRating count={story.rating} />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6 mt-8">
                    <div>
                      <p className="text-2xl font-bold text-white">{story.roas}</p>
                      <p className="text-xs text-white/60">{story.roasLabel}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{story.revenue}</p>
                      <p className="text-xs text-white/60">{story.revenueLabel}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel arrow indicator */}
        <div className="flex justify-end mt-6">
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#1a1525] border border-[#2d2440] flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
