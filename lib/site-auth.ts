const encoder = new TextEncoder();

export const AUTH_COOKIE = "ayush_portfolio_hackathon_access";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 30;

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getSecret() {
  return process.env.AUTH_SECRET ?? "";
}

export function getSitePassword() {
  return process.env.SITE_PASSWORD ?? "dev";
}

export function isAuthConfigured() {
  return getSecret().length >= 32;
}

export async function createAuthToken() {
  const secret = getSecret();
  if (secret.length < 32) {
    throw new Error("AUTH_SECRET must be at least 32 characters long.");
  }

  const expiresAt = Math.floor(Date.now() / 1000) + AUTH_MAX_AGE;
  const payload = `authorized:${expiresAt}`;
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));

  return `${payload}.${toHex(signature)}`;
}

export async function verifyAuthToken(token?: string) {
  if (!token) return false;

  const secret = getSecret();
  if (secret.length < 32) return false;

  const separator = token.lastIndexOf(".");
  if (separator === -1) return false;

  const payload = token.slice(0, separator);
  const suppliedSignature = token.slice(separator + 1);
  const [status, expiresAtRaw] = payload.split(":");
  const expiresAt = Number(expiresAtRaw);

  if (status !== "authorized" || !Number.isFinite(expiresAt)) return false;
  if (expiresAt <= Math.floor(Date.now() / 1000)) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const expectedSignature = toHex(
    await crypto.subtle.sign("HMAC", key, encoder.encode(payload)),
  );

  if (expectedSignature.length !== suppliedSignature.length) return false;

  let difference = 0;
  for (let index = 0; index < expectedSignature.length; index += 1) {
    difference |= expectedSignature.charCodeAt(index) ^ suppliedSignature.charCodeAt(index);
  }

  return difference === 0;
}
