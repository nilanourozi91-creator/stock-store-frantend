// import { NextRequest, NextResponse } from "next/server";

// export function proxy(request: NextRequest) {
//   console.log("🔥 PROXY RUNNING:", request.nextUrl.pathname);

//   const token = request.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/register", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };


import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  console.log("TOKEN:", token);

  if (!token) {
    return NextResponse.redirect(
      new URL("/register", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};