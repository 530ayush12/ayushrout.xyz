import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  AUTH_MAX_AGE,
  createAuthToken,
  isAuthConfigured,
} from "@/lib/site-auth";

function cookieDomain() {
  return process.env.NODE_ENV === "production" ? ".ayushrout.xyz" : undefined;
}

function redirectToHome(request: NextRequest) {
  const destination = request.nextUrl.clone();
  destination.pathname = "/home";
  destination.search = "";
  return destination;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(redirectToHome(request));
  }

  if (pathname === "/enter") {
    if (!isAuthConfigured()) {
      return new NextResponse("Authentication is not configured.", { status: 500 });
    }

    const response = NextResponse.redirect(redirectToHome(request));
    response.cookies.set({
      name: AUTH_COOKIE,
      value: await createAuthToken(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      domain: cookieDomain(),
      maxAge: AUTH_MAX_AGE,
    });
    return response;
  }

  if (pathname === "/lock") {
    const response = NextResponse.redirect(redirectToHome(request));
    response.cookies.set({
      name: AUTH_COOKIE,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      domain: cookieDomain(),
      maxAge: 0,
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/enter", "/lock"],
};
