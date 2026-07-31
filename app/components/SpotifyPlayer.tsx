"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const TRACK_DURATION = 64;

function formatTime(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  return `${Math.floor(safeValue / 60)}:${Math.floor(safeValue % 60).toString().padStart(2, "0")}`;
}

export default function SpotifyPlayer() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [minimized, setMinimized] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(TRACK_DURATION);

  const sendCommand = useCallback((func: string, args: unknown[] = []) => {
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  }, []);

  useEffect(() => {
    const receivePlayerState = (event: MessageEvent) => {
      if (!event.origin.includes("youtube.com")) return;
      let message: { event?: string; info?: { currentTime?: number; duration?: number; playerState?: number } };
      try {
        message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      if (message.event !== "infoDelivery" || !message.info) return;
      if (typeof message.info.currentTime === "number") setCurrentTime(message.info.currentTime);
      if (typeof message.info.duration === "number" && message.info.duration > 0) setDuration(message.info.duration);
      if (typeof message.info.playerState === "number") setPlaying(message.info.playerState === 1);
    };

    window.addEventListener("message", receivePlayerState);
    return () => window.removeEventListener("message", receivePlayerState);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      sendCommand("getCurrentTime");
      sendCommand("getDuration");
    }, 500);
    return () => window.clearInterval(timer);
  }, [playing, sendCommand]);

  const togglePlayback = () => sendCommand(playing ? "pauseVideo" : "playVideo");
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <aside className={`sp-player ${minimized ? "is-minimized" : ""}`} aria-label="spotify player">
      <button type="button" className="sp-fab" aria-label="open spotify player" onClick={() => setMinimized(false)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.4.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" /></svg>
        <span className="sp-fab-ring" aria-hidden="true" />
      </button>

      <div className="sp-panel">
        <div className="sp-top">
          <a className="sp-art-link" href="https://open.spotify.com/track/2f3xoAouZoP08h9jSRgf6O" target="_blank" rel="noreferrer" title="open in spotify">
            <Image className="sp-art" src="/losing-interest.jpg" alt="" width={64} height={64} />
          </a>
          <div className="sp-meta">
            <span className="sp-kicker">now playing</span>
            <strong className="sp-title">Losing Interest (Sped Up)</strong>
            <span className="sp-artist">Shiloh Dynasty, Lit Cosmo</span>
          </div>
          <button type="button" className="sp-min" aria-label="minimize player" title="minimize" onClick={() => setMinimized(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" /></svg>
          </button>
        </div>
        <div className="sp-controls">
          <button type="button" className="sp-toggle" aria-label={playing ? "pause" : "play"} onClick={togglePlayback}>
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86z" /></svg>
            )}
          </button>
          <div className="sp-progress">
            <span>{formatTime(currentTime)}</span>
            <div className="sp-bar">
              <span className="sp-bar-fill" style={{ width: `${progress}%` }} />
              <input
                className="sp-range"
                type="range"
                min="0"
                max={duration || TRACK_DURATION}
                value={Math.min(currentTime, duration || TRACK_DURATION)}
                step="0.1"
                aria-label="seek"
                onChange={(event) => {
                  const nextTime = Number(event.target.value);
                  setCurrentTime(nextTime);
                  sendCommand("seekTo", [nextTime, true]);
                }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <iframe
        ref={frameRef}
        className="sp-youtube"
        title="Losing Interest (Sped Up)"
        src="https://www.youtube.com/embed/U0PoE5_jmDA?autoplay=0&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
        onLoad={() => {
          frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening" }), "*");
          sendCommand("getDuration");
        }}
      />
    </aside>
  );
}
