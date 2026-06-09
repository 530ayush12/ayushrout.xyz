"use client";

import { useState } from "react";

const CORRECT_PASSWORD = "Ayush@2012USA";

// Use a module-level variable that resets on every full page load
// This cannot be bypassed by URL changes or refresh - only persists during SPA navigation
let isAuthenticatedInMemory = false;

export function PasskeyGateway({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(isAuthenticatedInMemory);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsTransitioning(true);
      isAuthenticatedInMemory = true;
      setTimeout(() => {
        setIsUnlocked(true);
      }, 400);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
    }
  };

  // Only render children after password is entered - nothing else shows
  if (isUnlocked) {
    return (
      <div className="animate-fade-in">
        {children}
      </div>
    );
  }

  // Password screen - this is the ONLY thing that renders when locked
  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f5f5] px-6 transition-opacity duration-400 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <div className="w-full max-w-sm">
        <h1 className="mb-3 text-center font-serif text-xl font-normal text-[#1a1a1a]">
          ayush rout
        </h1>
        <p className="mb-8 text-center text-sm font-light text-[#666666]">
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
              className="w-full rounded-xl border-0 bg-white px-6 py-4 text-center text-base tracking-widest text-[#1a1a1a] shadow-sm placeholder:text-[#999999] placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/10"
              style={{
                WebkitTextSecurity: "disc",
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#1a1a1a] py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            enter
          </button>
        </form>
      </div>
    </div>
  );
}
