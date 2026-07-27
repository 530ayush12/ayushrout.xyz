"use client";

import { useState, useEffect } from "react";

export default function Gateway({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("site_access") === "true";
    setAuthorized(isAuth);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "a") {
      sessionStorage.setItem("site_access", "true");
      setAuthorized(true);
    } else {
      setError(true);
    }
  };

  if (authorized === null) return null; // Avoid render layout shift

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 flex flex-col items-center justify-center p-4 lowercase font-sans">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-xs w-full">
          <label htmlFor="pwd" className="text-sm tracking-tight text-zinc-500">
            enter password to continue
          </label>
          <input
            id="pwd"
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="password"
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 transition-colors text-center"
            autoFocus
          />
          {error && <span className="text-xs text-red-500">incorrect password</span>}
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
