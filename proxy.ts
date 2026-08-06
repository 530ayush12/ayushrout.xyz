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

function redirectToHome(request: NextRequest, accessGranted = false) {
  const destination = request.nextUrl.clone();
  destination.pathname = "/home";
  destination.search = accessGranted ? "?access=hackathon" : "";
  return destination;
}

function clearAccessCookie(response: NextResponse) {
  const baseCookie = {
    name: AUTH_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: 0,
  };

  response.cookies.set(baseCookie);
  if (process.env.NODE_ENV === "production") {
    response.cookies.set({ ...baseCookie, domain: ".ayushrout.xyz" });
  }
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

    const response = NextResponse.redirect(redirectToHome(request, true));
    clearAccessCookie(response);
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
    clearAccessCookie(response);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/enter", "/lock"],
};
