import type { ReactNode } from "react";

export function ExternalArrow({ className = "h-3.5 w-3.5 text-surgical-teal-light" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export function CallIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h12" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function LogoMark({
  className = "h-10 w-auto",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  if (variant === "mark") {
    return (
      <svg className={className} viewBox="0 0 42 44" fill="none" aria-hidden>
        <g transform="translate(4, 4)">
          <path d="M18 4L22 4C28.6274 4 34 9.37258 34 16C34 22.6274 28.6274 28 22 28L18 28" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 4L18 36" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M12 16L24 16" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="28" cy="16" r="3" fill="#FAF9F6" />
          <path d="M8 26C12 34 22 38 30 34" stroke="#C4C6CF" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 240 50" fill="none" role="img" aria-label="Dr. Feras Ya'ish">
      <g transform="translate(4, 5)">
        <path d="M18 4L22 4C28.6274 4 34 9.37258 34 16C34 22.6274 28.6274 28 22 28L18 28" stroke="#1B365D" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 4L18 36" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M12 16L24 16" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="28" cy="16" r="3" fill="#1B365D" />
        <path d="M8 26C12 34 22 38 30 34" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      </g>
      <text x="52" y="24" className="font-label-lg" fontSize="16" fontWeight="700" fill="#0F172A" letterSpacing="-0.02em">
        DR. FERAS YA&apos;ISH
      </text>
      <text x="52" y="38" className="font-label-md" fontSize="9" fontWeight="600" fill="#0D9488" letterSpacing="0.08em">
        CONSULTANT ORTHOPAEDIC SURGEON · ABU DHABI
      </text>
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.48 1a2.5 2.5 0 0 1 2.5 2.5ZM.5 8.5h4V24h-4V8.5Zm8 0h3.83v2.12h.05c.53-1.01 1.84-2.12 3.79-2.12 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.71c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DoctifyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.8 14.2 7.6l5.2.6-3.8 3.5.9 5.1L12 14.4 7.5 16.8l.9-5.1L4.6 8.2l5.2-.6L12 2.8Z" />
    </svg>
  );
}

export function HealthpointIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinejoin="round" d="M4 20.5V9.2L12 4l8 5.2v11.3" />
      <path strokeLinecap="round" d="M9.5 20.5v-5.2h5v5.2M12 9.2v4.2M9.9 11.3h4.2" />
    </svg>
  );
}

export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden>
      {name}
    </span>
  );
}

export function Badge({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "navy" | "dark" | "sand";
}) {
  const styles = {
    teal: "bg-surgical-teal-subtle text-surgical-teal border-surgical-teal/30",
    navy: "bg-sand-tint/90 text-primary border-surface-border",
    dark: "bg-white/10 text-surgical-teal-light border-white/15",
    sand: "bg-sand-tint text-primary border-surface-border",
  }[tone];

  return (
    <div
      className={`mb-space-xs inline-flex items-center gap-space-xs rounded border px-space-sm py-1 font-label-md text-label-md uppercase tracking-wider ${
        tone === "teal" ? "font-bold" : ""
      } ${styles}`}
    >
      {children}
    </div>
  );
}
