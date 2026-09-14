"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/lib/language";

export function PhysicianReferralForm() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="rounded-2xl border border-surface-border bg-white p-6" onSubmit={onSubmit}>
      <h3 className="mb-4 font-headline-sm text-primary">{t.referralTitle}</h3>
      {sent ? (
        <p className="text-sm leading-relaxed text-text-secondary">{t.referralThanks}</p>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm font-semibold text-clinical-navy">
              {t.referringPhysician}
              <input required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="physician" />
            </label>
            <label className="text-sm font-semibold text-clinical-navy">
              {t.hospitalClinic}
              <input required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="hospital" />
            </label>
            <label className="text-sm font-semibold text-clinical-navy">
              {t.contactEmail}
              <input required type="email" className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="email" />
            </label>
            <label className="text-sm font-semibold text-clinical-navy">
              {t.formMobile}
              <input required type="tel" className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="mobile" />
            </label>
            <label className="text-sm font-semibold text-clinical-navy">
              {t.clinicalUrgency}
              <select required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="urgency" defaultValue="urgent">
                <option value="emergent">{t.urgencyEmergent}</option>
                <option value="urgent">{t.urgencyUrgent}</option>
                <option value="elective">{t.urgencyElective}</option>
                <option value="academic">{t.urgencyAcademic}</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-clinical-navy">
              {t.primaryAnatomy}
              <select required className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="anatomy" defaultValue="hip">
                <option value="hip">{t.anatomyHip}</option>
                <option value="knee">{t.anatomyKnee}</option>
                <option value="both">{t.anatomyBoth}</option>
                <option value="trauma">{t.anatomyTrauma}</option>
              </select>
            </label>
          </div>
          <label className="mt-3 block text-sm font-semibold text-clinical-navy">
            {t.clinicalSummary}
            <textarea
              required
              rows={4}
              className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal"
              name="summary"
              placeholder={t.summaryPlaceholder}
            />
          </label>
          <label className="mt-3 block text-sm font-semibold text-clinical-navy">
            {t.imagingOptional}
            <input type="url" className="mt-1 w-full rounded border border-surface-border bg-sand-tint px-3 py-2 font-normal" name="dicom" placeholder="https://" />
          </label>
          <button className="mt-4 rounded bg-clinical-navy px-5 py-2.5 text-[13px] font-semibold text-white" type="submit">
            {t.submitTransfer}
          </button>
        </>
      )}
    </form>
  );
}
