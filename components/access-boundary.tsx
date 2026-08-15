"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "@/app/enter/enter.module.css";

const SESSION_ACCESS_KEY = "ayush-session-access";

export function AccessBoundary({
  children,
}: {
  children: React.ReactNode;
  persistentAccess?: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const enteredThroughBypass = searchParams.get("access") === "hackathon";
    const savedSession = sessionStorage.getItem(SESSION_ACCESS_KEY) === "granted";

    if (enteredThroughBypass) {
      sessionStorage.setItem(SESSION_ACCESS_KEY, "granted");
      window.history.replaceState({}, "", pathname);
      setUnlocked(true);
      setReady(true);
      return;
    }

    setUnlocked(savedSession);
    setReady(true);
  }, [pathname, searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(result.error ?? "Unable to unlock the site.");
        return;
      }

      sessionStorage.setItem(SESSION_ACCESS_KEY, "granted");
      setUnlocked(true);
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!ready) return null;
  if (unlocked) return children;

  return (
    <main className={styles.gateway}>
      <section className={styles.card}>
        <div className={styles.meta}>
          <span>Ayush Rout</span>
          <span>Private access</span>
        </div>
        <p className="eyebrow">Password required</p>
        <h1>Enter the portfolio.</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="site-password" className={styles.srOnly}>
            Password
          </label>
          <input
            id="site-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            autoFocus
            required
            placeholder="Password"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Checking…" : "Enter"}
          </button>
          <p className={styles.error} role="alert" aria-live="polite">
            {error}
          </p>
        </form>
      </section>
    </main>
  );
}
