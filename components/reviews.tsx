const reviews = [
  {
    quote: "Working with Dolphin Wave Media completely changed how we approach paid ads. Our ROAS went from 3x to 9x in two months.",
    author: "Pánska Elegancia",
  },
  {
    quote: "Professional, data-driven team. They understood our brand immediately and delivered results fast.",
    author: "Tentation",
  },
  {
    quote: "Finally an agency that treats our budget like their own. Highly recommend.",
    author: "Habala",
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 scroll-mt-16 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6"
            >
              <StarRating />

              {/* Quote */}
              <blockquote className="text-foreground mb-4">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <p className="text-sm font-medium text-primary">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
