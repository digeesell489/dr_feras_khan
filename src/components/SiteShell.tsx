"use client";

import type { ReactNode } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Footer, MobileBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BookingProvider } from "@/lib/booking";
import { LanguageProvider } from "@/lib/language";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <BookingProvider>
        <div className="min-h-full bg-alabaster-warm">
          <Header />
          <main className="w-full bg-alabaster-warm pt-20 pb-20 sm:pb-0">{children}</main>
          <Footer />
          <MobileBar />
          <WhatsAppFloat />
          <BookingModal />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}
