import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/site-auth";

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
    // /enter grants access only for the current browser-tab session.
    // Do not create a persistent auth cookie here.
    const response = NextResponse.redirect(redirectToHome(request, true));
    clearAccessCookie(response);
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
