"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; alt: string };

export function Lightbox({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-border"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ‹
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
