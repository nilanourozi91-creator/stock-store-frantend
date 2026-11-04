// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// type ApiOptions = {
//   method?: string;
//   body?: BodyInit | null;
//   token?: string;
// };

// export async function api<T>(
//   endpoint: string,
//   options: ApiOptions = {}
// ): Promise<T> {
//   const response = await fetch(`${API_URL}${endpoint}`, {
//     method: options.method ?? "GET",

//     headers: {
//       Accept: "application/json",

//       ...(options.body
//         ? {
//             "Content-Type": "application/json",
//           }
//         : {}),

//       ...(options.token
//         ? {
//             Authorization: `Bearer ${options.token}`,
//           }
//         : {}),
//     },

//     body: options.body ?? null,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(
//       data.message || "Something went wrong"
//     );
//   }

//   return data;
// }


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // No login
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    const response = await fetch(
      "http://localhost:8000/api/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    const data = await response.json();

    // Only admin can access dashboard
    if (data.user?.role !== "admin") {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    // Admin is allowed
    return NextResponse.next();

  } catch (error) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};