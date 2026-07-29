import { NextResponse } from 'next/server';

export function middleware(request) {
  const visit = request.cookies.get('visit')?.value;

  const link1 = 'https://example.com/link1';
  const link2 = 'https://example.com/link2';

  if (!visit) {
    const response = NextResponse.redirect(link1);
    response.cookies.set('visit', '1', { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  if (visit === '1') {
    const response = NextResponse.redirect(link2);
    response.cookies.set('visit', '2', { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  return NextResponse.redirect(link1);
}

export const config = {
  matcher: '/',
};
