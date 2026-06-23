"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function LotusBadge() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    
    // Check if this is a page refresh/reload
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    const isRefresh = navEntries.length > 0 && navEntries[0].type === "reload"
    
    // If it's a refresh, clear the dismissed state so badge shows again
    if (isRefresh) {
      sessionStorage.removeItem("lotus-badge-dismissed")
      setIsVisible(true)
    } else {
      // Otherwise check if it was dismissed during this session
      const dismissed = sessionStorage.getItem("lotus-badge-dismissed")
      if (dismissed === "true") {
        setIsVisible(false)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("lotus-badge-dismissed", "true")
  }

  if (!isHydrated || !isVisible) return null

  return (
    <div className="fixed bottom-5 right-5 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative">
        <Link
          href="https://trylotus.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-[rgba(18,18,18,0.95)] py-3 pl-5 pr-9 font-serif text-[15px] font-medium tracking-wide text-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-md transition-opacity hover:opacity-90"
        >
          <LotusIcon className="h-7 w-7 shrink-0" />
          <span>
            Made with <span className="font-semibold">Lotus</span>
          </span>
        </Link>
        <button
          onClick={handleDismiss}
          className="absolute -right-2 -top-2 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/15 bg-[rgba(18,18,18,0.95)] text-white/70 transition-colors hover:text-white"
          aria-label="Dismiss badge"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Center petal */}
      <ellipse cx="12" cy="10" rx="3" ry="6" fill="#f472b6" />
      {/* Left petal */}
      <ellipse cx="8" cy="12" rx="2.5" ry="5" fill="#ec4899" transform="rotate(-25 8 12)" />
      {/* Right petal */}
      <ellipse cx="16" cy="12" rx="2.5" ry="5" fill="#ec4899" transform="rotate(25 16 12)" />
      {/* Outer left petal */}
      <ellipse cx="5.5" cy="13" rx="2" ry="4" fill="#f9a8d4" transform="rotate(-45 5.5 13)" />
      {/* Outer right petal */}
      <ellipse cx="18.5" cy="13" rx="2" ry="4" fill="#f9a8d4" transform="rotate(45 18.5 13)" />
    </svg>
  )
}
