"use client";

import { useState } from "react";

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl p-3 flex items-center gap-3 w-80 text-xs lowercase text-zinc-400 shadow-xl z-50">
      {/* Album Cover */}
      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02b1c6a2cf5b6d7df9a4e0e0d5"
          alt="Losing Interest"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-medium tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          now playing
        </div>

        <div className="text-zinc-200 font-medium truncate mt-0.5">
          losing interest (sped up)
        </div>

        <div className="text-zinc-500 truncate">
          shiloh dynasty, lit cosmo
        </div>
      </div>

      {/* Play Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-900 flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
