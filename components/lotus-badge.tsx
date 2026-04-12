"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function LotusBadge() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    const dismissed = localStorage.getItem("lotus-badge-dismissed")
    if (dismissed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("lotus-badge-dismissed", "true")
  }

  if (!isHydrated || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 rounded-full bg-foreground px-4 py-2.5 shadow-lg">
        <Link
          href="https://trylotus.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-background transition-opacity hover:opacity-80"
        >
          <LotusIcon className="h-5 w-5" />
          <span className="text-sm font-medium">
            Built with <span className="font-semibold">Lotus</span>
          </span>
        </Link>
        <button
          onClick={handleDismiss}
          className="ml-1 flex h-5 w-5 items-center justify-center rounded-full text-background/60 transition-colors hover:bg-background/10 hover:text-background"
          aria-label="Dismiss badge"
        >
          <X className="h-3.5 w-3.5" />
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
      <circle cx="12" cy="12" r="10" fill="#6b7280" />
      <path
        d="M12 6c-1.5 2-2.5 4-2.5 6s1 4 2.5 6c1.5-2 2.5-4 2.5-6s-1-4-2.5-6z"
        fill="#f5f5f5"
        opacity="0.9"
      />
      <path
        d="M6 12c2-1.5 4-2.5 6-2.5s4 1 6 2.5c-2 1.5-4 2.5-6 2.5s-4-1-6-2.5z"
        fill="#f5f5f5"
        opacity="0.7"
      />
    </svg>
  )
}
