import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, verifyAuthToken } from "@/lib/site-auth";

const PUBLIC_PATHS = new Set(["/enter", "/api/auth"]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    if (pathname === "/enter") {
      const authenticated = await verifyAuthToken(
        request.cookies.get(AUTH_COOKIE)?.value,
      );
      if (authenticated) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
    return NextResponse.next();
  }

  const authenticated = await verifyAuthToken(
    request.cookies.get(AUTH_COOKIE)?.value,
  );

  if (!authenticated) {
    return NextResponse.redirect(new URL("/enter", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
