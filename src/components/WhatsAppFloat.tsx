"use client";

import { useLanguage } from "@/lib/language";

export const WHATSAPP_NUMBER = "97124929000";

export function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.86 9.86 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.22-8.23 8.22Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.49.64 1.84.7 2.5.59.4-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton({ className }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappHref(t.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 ${className ?? ""}`}
      aria-label={t.whatsapp}
    >
      <WhatsAppIcon className="h-[18px] w-[18px]" />
      <span>{t.whatsapp}</span>
    </a>
  );
}

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const href = whatsappHref(t.whatsappMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsapp}
      className="fixed right-4 bottom-[5.75rem] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe5b] sm:right-5 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
