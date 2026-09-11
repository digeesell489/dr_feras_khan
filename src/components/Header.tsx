"use client";

import { useState } from "react";
import { BookButton } from "./BookButton";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <div className="page-width flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-[11px] font-medium tracking-[0.12em]">
            FY
          </span>
          <span className="text-[14px] font-medium tracking-tight">
            Dr. Feras Ya&apos;ish
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookButton className="hidden sm:inline-flex">
            Book consultation
          </BookButton>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-3 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="page-width flex flex-col gap-3 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-[15px] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <BookButton className="mt-2 w-full sm:hidden">
              Book consultation
            </BookButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
