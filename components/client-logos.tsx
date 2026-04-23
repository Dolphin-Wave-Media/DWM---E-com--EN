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
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-container {
          display: flex;
          width: max-content;
          animation: scroll 10s linear infinite;
        }
      `}</style>
      
      {/* White background strip for logos */}
      <div className="relative py-6 bg-white overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Scrolling logos container */}
        <div className="scroll-container">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
          {/* Second set (duplicate for seamless loop) */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
