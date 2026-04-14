"use client";

import { useState } from "react";

const CORRECT_PASSWORD = "Ayush@2012USA";

export function PasskeyGateway({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsUnlocked(true);
      }, 400);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
    }
  };

  if (isUnlocked) {
    return (
      <div className="animate-fade-in">
        {children}
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-background px-6 transition-opacity duration-400 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <div className="w-full max-w-xs">
        <h1 className="mb-2 text-center text-lg font-medium text-foreground">
          ayush rout
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          enter password to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div
            className={`relative transition-transform ${
              shake ? "animate-shake" : ""
            }`}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoFocus
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-center text-base tracking-widest text-foreground placeholder:text-muted-foreground/50 placeholder:tracking-normal focus:border-foreground/30 focus:outline-none focus:ring-0"
              style={{
                WebkitTextSecurity: "disc",
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            enter
          </button>
        </form>
      </div>
    </div>
  );
}
