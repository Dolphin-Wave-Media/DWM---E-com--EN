import Image from "next/image"

export function Founder() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <Image
                src="/founder.jpg"
                alt="Damián - Founder of Dolphin Wave Media"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Meet the Founder
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Growth Systems,{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Not Just Ads
              </span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I started Dolphin Wave Media because I saw too many e-commerce brands 
                burning budget on agencies that only knew how to &quot;run ads.&quot; They 
                ignored creatives, funnels, landing pages, and the entire customer journey.
              </p>
              <p>
                We do things differently. We build complete marketing systems that 
                actually convert. From Meta Ads to creative strategy, from hooks to 
                landing pages — everything works together as one growth engine.
              </p>
              <p>
                Our approach is simple: understand your brand deeply, build a strategy 
                that makes sense, and execute with precision. No fluff. No generic 
                templates. Just real results.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-2 border-primary">
              <p className="text-lg text-foreground italic">
                &quot;We don&apos;t just manage ads — we engineer growth. Every creative, 
                every funnel step, every landing page is designed to move the needle.&quot;
              </p>
              <footer className="mt-4">
                <p className="text-foreground font-semibold">Damián</p>
                <p className="text-sm text-muted-foreground">Founder, Dolphin Wave Media</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
