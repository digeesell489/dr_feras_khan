"use client";

import { useEffect } from "react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CloseIcon } from "@/components/ui/Icons";
import { useBooking } from "@/lib/booking";
import { useLanguage } from "@/lib/language";

export function BookingModal() {
  const { open, closeBooking } = useBooking();
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeBooking]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button type="button" className="absolute inset-0 bg-clinical-slate-deep/55 backdrop-blur-[2px]" aria-label={t.closePopup} onClick={closeBooking} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-surface-border bg-white p-5 shadow-[0_24px_80px_rgba(15,32,39,0.28)] sm:p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">{t.enquiry}</p>
            <h2 id="booking-title" className="font-headline-sm text-[1.35rem] text-primary">
              {t.book}
            </h2>
            <p className="mt-1 text-sm text-text-secondary">{t.bookPopupLead}</p>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border text-clinical-navy hover:bg-sand-tint"
            aria-label={t.closePopup}
            onClick={closeBooking}
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
        <EnquiryForm key="booking-form" />
      </div>
    </div>
  );
}
