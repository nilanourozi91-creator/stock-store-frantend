
// import { NextResponse } from 'next/server'
// import type { NextRequest} from 'next/server'
// import React from 'react'

//  export function middleware(r:NextRequest) {
//   const token =r.cookies.get("token");
//   if (!token) {
//     console.log('cookie not found');
//     return NextResponse.redirect(new URL("/login",r.url));
//   }
//   return NextRequest.next();
// }



// export const config={
//   matcher:["/admin/:path*"],
// }



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.log("cookie not found");

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  console.log("token found");

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

