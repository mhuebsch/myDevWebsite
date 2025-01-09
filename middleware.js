import { NextResponse } from 'next/server';

export function middleware(request) {
  const authenticated = request.cookies.get('authenticated');

  if (authenticated !== 'true') {
    // Redirect to a page or show a login form if not authenticated
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow access to the page
  return NextResponse.next();
}

// Limit middleware to specific routes
export const config = {
  matcher: '/projects/interactive-presentations', // Protect this route
};
