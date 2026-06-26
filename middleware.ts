import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname
  
  // Set language cookie based on pathname first, then domain
  const response = NextResponse.next()
  let locale = 'en' // default
  
  // Check pathname for explicit language
  if (pathname.startsWith('/sk/') || pathname === '/sk') {
    locale = 'sk'
  } else if (pathname.startsWith('/en/') || pathname === '/en') {
    locale = 'en'
  } else if (host.includes('dolphinwave-media.sk')) {
    // Fall back to domain-based detection
    locale = 'sk'
  }
  
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 31536000, // 1 year
    path: '/',
  })
  
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|apple-icon.png|icon.png).*)'],
}
