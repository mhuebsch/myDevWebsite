import { NextResponse } from 'next/server';

export function middleware(request) {
  const authenticated = request.cookies.get('authenticated');

  if (authenticated !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/app/projects/interactive-presentations',
};
