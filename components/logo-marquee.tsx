const clients = [
  "Pánska Elegancia",
  "Tentation",
  "Habala",
  "Bubbe",
  "Ammyla",
]

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          Trusted by growing e-commerce brands
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12"
            >
              <span className="text-xl font-semibold text-muted-foreground/60 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
