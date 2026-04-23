export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="globalLineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#c9388c" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="globalLineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c9388c" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        
        {/* Top left diagonal lines - repeating pattern */}
        <line x1="0" y1="5%" x2="8%" y2="0" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        <line x1="0" y1="12%" x2="15%" y2="0" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        <line x1="0" y1="19%" x2="22%" y2="0" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        <line x1="0" y1="26%" x2="29%" y2="0" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        
        {/* Bottom right diagonal lines */}
        <line x1="78%" y1="100%" x2="100%" y2="75%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        <line x1="85%" y1="100%" x2="100%" y2="82%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        <line x1="92%" y1="100%" x2="100%" y2="89%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        
        {/* Middle section - subtle accent lines */}
        <line x1="0" y1="45%" x2="12%" y2="38%" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        <line x1="0" y1="52%" x2="15%" y2="45%" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        
        <line x1="88%" y1="55%" x2="100%" y2="48%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        <line x1="85%" y1="62%" x2="100%" y2="55%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        
        {/* Lower section accents */}
        <line x1="0" y1="72%" x2="10%" y2="65%" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        <line x1="0" y1="79%" x2="14%" y2="72%" stroke="url(#globalLineGradient1)" strokeWidth="1" />
        
        <line x1="90%" y1="78%" x2="100%" y2="72%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
        <line x1="86%" y1="85%" x2="100%" y2="79%" stroke="url(#globalLineGradient2)" strokeWidth="1" />
      </svg>
    </div>
  )
}
