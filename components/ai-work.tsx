"use client"

export function AIWork() {
  const videos = [
    {
      src: "https://drive.google.com/file/d/1ExHb7rM5D9BErByZoNuUO8UdPfdKTc3g/preview",
      title: "AI Video Ad 1"
    },
    {
      src: "https://drive.google.com/file/d/1wvXgSL03i02wj6Si3Yk5uyEM6-kPslo4/preview",
      title: "AI Video Ad 2"
    },
    {
      src: "https://drive.google.com/file/d/1uhO0hrv2jHBxMGt2Kt2uXlt36Jb0N2su/preview",
      title: "AI Video Ad 3"
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
            Our AI Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            AI-Generated Content{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              That Converts
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real examples from our work with a local food supplement brand. They wanted to delegate content creation - here&apos;s what we delivered.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/30 hover:border-primary/30 transition-all"
            >
              <div className="aspect-[9/16] relative">
                <iframe
                  src={video.src}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  className="absolute inset-0 w-full h-full"
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All content created using AI tools, customized for the brand&apos;s voice and audience.
          </p>
        </div>
      </div>
    </section>
  )
}
