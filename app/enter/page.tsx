"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function EnterPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      router.replace("/");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-gateway">
      <section className="auth-card">
        <div className="auth-meta">
          <span>Ayush Rout</span>
          <span>Private access</span>
        </div>
        <p className="eyebrow">Password required</p>
        <h1>Enter the portfolio.</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
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
          <p className="auth-error" role="alert" aria-live="polite">{error}</p>
        </form>
      </section>
    </main>
  );
}
