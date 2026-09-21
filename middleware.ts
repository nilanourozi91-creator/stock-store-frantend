
import { NextResponse } from 'next/server'
import type { NextRequest} from 'next/server'
import React from 'react'

 export function middleware(r:NextRequest) {
  const token =r.cookies.get("token");
  if (!token) {
    console.log('cookie not found');
    return NextResponse.redirect(new URL("/login",r.url));
  }
  return NextRequest.next();
}



export const config={
  matcher:["/admin/:path*"],
}



