import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect unauthenticated users to the sign-in page
  if (!session) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    signInUrl.searchParams.set("error", "unauthorized");

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard/:path*", "/candidates/:path*", "/resumes/:path*"], // Apply middleware to specific routes
};
