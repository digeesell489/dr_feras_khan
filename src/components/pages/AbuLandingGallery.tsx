"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { educationGallery } from "@/lib/education";

const gallery = educationGallery.slice(0, 8);

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 900) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function AbuLandingGallery() {
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, gallery.length - visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(goNext, 4500);
    return () => window.clearInterval(timer);
  }, [goNext, paused, maxIndex]);

  const end = Math.min(index + visible, gallery.length);

  return (
    <div className="gallery-carousel" style={{ marginTop: 28 }}>
      <div
        className="gallery-toolbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <span className="gallery-count" style={{ fontSize: 13, fontWeight: 700, color: "#617580" }}>
          {index + 1}–{end} of {gallery.length}
        </span>
        <div className="gallery-nav" style={{ display: "flex", gap: 8 }}>
          <button type="button" className="gallery-arrow" onClick={goPrev} aria-label="Previous photos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6 9 12l6 6" />
            </svg>
          </button>
          <button type="button" className="gallery-arrow" onClick={goNext} aria-label="Next photos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="gallery-viewport"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="gallery-track"
          style={{
            display: "flex",
            width: `${(gallery.length / visible) * 100}%`,
            transform: `translateX(-${index * (100 / gallery.length)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {gallery.map((item) => (
            <div
              key={item.image}
              className="gallery-slide"
              style={{
                boxSizing: "border-box",
                flexShrink: 0,
                width: `${100 / gallery.length}%`,
                padding: "0 6px",
              }}
            >
              <figure
                className="gallery-frame"
                style={{
                  position: "relative",
                  margin: 0,
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  borderRadius: 14,
                  border: "1px solid #e3ecea",
                  background: "#eef6f4",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 900px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{
                    objectFit: item.fit.includes("contain") ? "contain" : "cover",
                    objectPosition: "center 28%",
                  }}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div
        className="gallery-dots"
        role="tablist"
        aria-label="Gallery slides"
        style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 16 }}
      >
        {Array.from({ length: maxIndex + 1 }, (_, dot) => (
          <button
            key={dot}
            type="button"
            role="tab"
            aria-label={`Show photos starting at ${dot + 1}`}
            aria-selected={dot === index}
            className={`gallery-dot${dot === index ? " is-active" : ""}`}
            onClick={() => setIndex(dot)}
            style={{
              width: dot === index ? 22 : 8,
              height: 8,
              border: 0,
              borderRadius: 999,
              background: dot === index ? "#168b85" : "#12344940",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
