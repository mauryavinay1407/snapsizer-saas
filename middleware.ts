import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest,NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/home',
]);

const isPublicApiRoute = createRouteMatcher(['/api/videos(.*)']);

export default clerkMiddleware((auth, request) => {
  const { userId } = auth();
  const currentUrl = new URL(request.url);
  const isAccessingDashboard = currentUrl.pathname === '/home';
  const isApiRequest = currentUrl.pathname.startsWith('/api');


  // If user is logged in and accessing a public route but not the dashboard
  if (userId && isPublicRoute(request) && !isAccessingDashboard) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // If not logged in
  if (!userId) {
    // If user is trying to access a protected route
    if (!isPublicRoute(request) && !isPublicApiRoute(request)) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // If the request is for a protected API and the user is not logged in
    if (isApiRequest && !isPublicApiRoute(request)) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next|_oauth).*)', '/', '/(api|trpc)(.*)'],
};
