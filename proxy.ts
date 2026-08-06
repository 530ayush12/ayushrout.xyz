import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  AUTH_MAX_AGE,
  createAuthToken,
  isAuthConfigured,
} from "@/lib/site-auth";

export async function proxy(request: NextRequest) {
  if (!isAuthConfigured()) {
    return new NextResponse("Authentication is not configured.", { status: 500 });
  }

  const destination = request.nextUrl.clone();
  destination.pathname = "/home";
  destination.search = "";

  const response = NextResponse.redirect(destination);
  response.cookies.set({
    name: AUTH_COOKIE,
    value: await createAuthToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: AUTH_MAX_AGE,
  });

  return response;
}

export const config = {
  matcher: ["/enter"],
};
