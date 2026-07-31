"use client";

import { FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/app/enter/enter.module.css";

// Intentionally lives only in this browser tab's JavaScript memory.
// A full refresh creates a fresh module and locks the site again, while
// App Router navigation keeps the unlocked state alive.
let unlockedInThisTab = false;

export function AccessBoundary({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(unlockedInThisTab);

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
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "Unable to unlock the site.");
        return;
      }

      unlockedInThisTab = true;
      setUnlocked(true);

      if (pathname === "/enter") {
        const requestedPath = new URLSearchParams(window.location.search).get("next");
        const safePath = requestedPath?.startsWith("/") && !requestedPath.startsWith("//")
          ? requestedPath
          : "/";
        router.replace(safePath);
      }
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
          <label htmlFor="site-password" className={styles.srOnly}>Password</label>
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
          <p className={styles.error} role="alert" aria-live="polite">{error}</p>
        </form>
      </section>
    </main>
  );
}
