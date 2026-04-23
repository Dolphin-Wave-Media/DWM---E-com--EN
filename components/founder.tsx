import Image from "next/image"

export function Founder() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* White card container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Founder Image - Small in frame */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative rounded-xl overflow-hidden border-2 border-gray-100">
                <Image
                  src="/founder.jpg"
                  alt="Damian - Founder of Dolphin Wave Media"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                Meet the Founder
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                &quot;I started this because I saw that many e-commerce brands simply don&apos;t have enough time to create content and manage their marketing properly. I believe we can really help with that.&quot;
              </p>
              <p className="mt-4 text-gray-900 font-semibold">Damian</p>
              <p className="text-sm text-gray-500">Founder, Dolphin Wave Media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
