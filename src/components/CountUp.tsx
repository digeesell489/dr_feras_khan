"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
  grouped: boolean;
};

function parseStat(value: string): Parsed | null {
  const match = value.match(/^(.*?)(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, raw, suffix] = match;
  const grouped = raw.includes(",");
  const decimals = raw.includes(".") ? (raw.split(".")[1]?.length ?? 0) : 0;
  const target = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix, target, suffix, decimals, grouped };
}

function formatValue(n: number, parsed: Parsed) {
  const rounded = parsed.decimals > 0 ? n.toFixed(parsed.decimals) : String(Math.round(n));
  const numeric = parsed.grouped
    ? Number(parsed.decimals > 0 ? rounded : Math.round(n)).toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : rounded;
  return `${parsed.prefix}${numeric}${parsed.suffix}`;
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const parsed = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  // SSR / first paint must emit final numbers (content.counter.zero).
  const [display, setDisplay] = useState(() =>
    parsed ? formatValue(parsed.target, parsed) : value,
  );

  useEffect(() => {
    const next = parseStat(value);
    if (!next) {
      setDisplay(value);
      return;
    }

    // Keep final visible immediately. Do not reset to zero before intersection.
    setDisplay(formatValue(next.target, next));

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let started = false;

    const animate = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(formatValue(next.target, next));
        return;
      }
      const duration = next.target >= 1000 ? 1800 : 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        setDisplay(formatValue(next.target * eased, next));
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDisplay(formatValue(next.target, next));
      };
      // Progressive enhancement: count from 0 only after the section is in view.
      // First HTML / non-intersecting state already showed the final.
      setDisplay(formatValue(0, next));
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        animate();
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!parsed) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
