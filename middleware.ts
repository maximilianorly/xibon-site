import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
  
    const themeCookie = request.cookies.get('xibon_theme')?.value;
    const prefersDark = request.headers.get('sec-ch-prefers-color-scheme') === 'dark';
  
    response.headers.set('x-theme', themeCookie ?? (prefersDark ? 'dark' : 'light'));
  
    return response;
  }
  
  export const config = {
    matcher: ['/', '/(app|api)(.*)'],
  };