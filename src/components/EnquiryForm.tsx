"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/lib/language";

export function EnquiryForm({ onSent }: { onSent?: () => void }) {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    onSent?.();
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-surgical-teal/25 bg-surgical-teal-subtle p-5">
        <p className="font-semibold text-clinical-navy">{t.formThanksTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{t.formThanksBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-semibold text-clinical-navy">
          {t.formFullName}
          <input required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="name" autoComplete="name" />
        </label>
        <label className="text-sm font-semibold text-clinical-navy">
          {t.formMobile}
          <input required type="tel" className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="phone" autoComplete="tel" />
        </label>
        <label className="text-sm font-semibold text-clinical-navy">
          {t.formEmail}
          <input required type="email" className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="email" autoComplete="email" />
        </label>
        <label className="text-sm font-semibold text-clinical-navy">
          {t.formReason}
          <select required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="reason">
            <option>{t.reasonNew}</option>
            <option>{t.reasonFollow}</option>
            <option>{t.reasonSecond}</option>
            <option>{t.reasonInsurance}</option>
          </select>
        </label>
      </div>
      <label className="mt-3 block text-sm font-semibold text-clinical-navy">
        {t.formHelp}
        <textarea required rows={4} className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="message" />
      </label>
      <button className="mt-4 w-full rounded bg-clinical-navy px-5 py-2.5 text-[13px] font-semibold text-white sm:w-auto" type="submit">
        {t.submitEnquiry}
      </button>
    </form>
  );
}
