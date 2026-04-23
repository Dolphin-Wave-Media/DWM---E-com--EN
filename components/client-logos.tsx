"use client"

const clients = [
  { name: "Habala", logo: "/clients/habala.png" },
  { name: "Pánska Elegancia", logo: "/clients/panska-elegancia.png" },
  { name: "Elegantní Mytí", logo: "/clients/elegantni-myti.png" },
  { name: "Dendy", logo: "/clients/dendy.png" },
  { name: "Naša Bublinka", logo: "/clients/nasa-bublinka.png" },
  { name: "Bomba Zľava", logo: "/clients/bomba-zlava.png" },
  { name: "Barfi.sk", logo: "/clients/barfi.png" },
  { name: "Joda Organika", logo: "/clients/joda-organika.png" },
  { name: "Feel the Silk", logo: "/clients/feel-the-silk.png" },
  { name: "Fullgas.shop", logo: "/clients/fullgas.png" },
  { name: "Prosalon", logo: "/clients/prosalon.png" },
]

export function ClientLogos() {
  return (
    <div className="mt-16 w-full">
      {/* Gradient background strip */}
      <div className="relative py-8 bg-gradient-to-r from-accent via-primary to-accent overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-accent to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-accent to-transparent z-10" />
        
        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
