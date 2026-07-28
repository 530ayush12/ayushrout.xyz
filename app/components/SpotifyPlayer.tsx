"use client";

export default function SpotifyPlayer() {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl shadow-xl">
      <iframe
        title="Losing Interest (Sped Up) by adore and Shiloh Dynasty"
        src="https://open.spotify.com/embed/track/469kz2Vls0uvgMpFsOfRpu?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block rounded-xl"
      />
    </div>
  );
}
