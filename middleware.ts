import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // Set language cookie based on domain
  const response = NextResponse.next()
  
  if (host.includes('dolphinwave-media.sk')) {
    response.cookies.set('NEXT_LOCALE', 'sk', {
      maxAge: 31536000, // 1 year
      path: '/',
    })
  } else {
    response.cookies.set('NEXT_LOCALE', 'en', {
      maxAge: 31536000, // 1 year
      path: '/',
    })
  }
  
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|apple-icon.png|icon.png).*)'],
}
