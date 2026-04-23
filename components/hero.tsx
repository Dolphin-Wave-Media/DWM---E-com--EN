import Link from "next/link"
import Image from "next/image"

const CALENDLY_URL = "https://calendly.com/dolphinwave-media/30min"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with wave effect */}
      <div className="absolute inset-0 bg-[#0a0812]">
        {/* Wave lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9388c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f5a623" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c9388c" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Wave paths */}
          <path
            d="M0,400 Q360,300 720,400 T1440,400"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M0,420 Q360,320 720,420 T1440,420"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M0,440 Q360,340 720,440 T1440,440"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M0,460 Q360,360 720,460 T1440,460"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M0,480 Q360,380 720,480 T1440,480"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo and Brand Name */}
        <div className="flex flex-col items-center justify-center mb-8">
          <Image
            src="/logo.svg"
            alt="Dolphin Wave Media"
            width={100}
            height={100}
            className="w-24 h-24 mb-4"
            priority
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#f5a623] via-[#e85d75] to-[#c9388c] bg-clip-text text-transparent">
              DOLPHIN
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#f5a623] via-[#e85d75] to-[#c9388c] bg-clip-text text-transparent">
              WAVE MEDIA
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-10">
          Meta Ads for E-commerce Growth
        </p>

        {/* CTA Button */}
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f5a623] to-[#e85d75] px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Boost Your Sales
        </Link>
      </div>
    </section>
  )
}
