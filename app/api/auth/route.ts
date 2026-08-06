import { NextRequest, NextResponse } from "next/server";
import { getSitePassword } from "@/lib/site-auth";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | { password?: unknown }
    | null;
  const password = typeof body?.password === "string" ? body.password : "";

  if (password !== getSitePassword()) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  // Normal password entry unlocks only the current client-side session.
  // A refresh intentionally returns the visitor to the gateway.
  return NextResponse.json({ ok: true });
}
