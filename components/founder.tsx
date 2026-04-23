import Image from "next/image"

export function Founder() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Founder Image - Smaller */}
          <div className="relative mx-auto lg:mx-0 max-w-[280px] sm:max-w-sm lg:max-w-md">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <Image
                src="/founder.jpg"
                alt="Damian - Founder of Dolphin Wave Media"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Meet the Founder
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Growth Systems,{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Not Just Ads
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                We build complete marketing systems that actually convert. From Meta Ads 
                to creative strategy, from hooks to landing pages — everything works 
                together as one growth engine.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-6 sm:mt-8 pl-4 sm:pl-6 border-l-2 border-primary">
              <p className="text-base sm:text-lg text-foreground italic">
                &quot;We don&apos;t just manage ads — we engineer growth. Every creative, 
                every funnel step, every landing page is designed to move the needle.&quot;
              </p>
              <footer className="mt-4">
                <p className="text-foreground font-semibold">Damian</p>
                <p className="text-sm text-muted-foreground">Founder, Dolphin Wave Media</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
