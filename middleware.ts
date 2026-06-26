import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const response = NextResponse.next()
  
  // Set language cookie based ONLY on domain
  let locale = 'en' // default for .com
  
  if (host.includes('dolphinwave-media.sk')) {
    locale = 'sk'
  } else if (host.includes('dolphinwave-media.com')) {
    locale = 'en'
  } else if (host.includes('localhost')) {
    // For localhost development, default to Slovak
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
