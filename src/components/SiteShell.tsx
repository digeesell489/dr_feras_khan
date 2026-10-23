"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Footer, MobileBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BookingProvider, useBooking } from "@/lib/booking";
import { LanguageProvider } from "@/lib/language";

// The booking modal (and its form) only renders after the user opens it, so load it as a
// separate chunk instead of shipping it in the initial JS bundle.
const BookingModal = dynamic(() => import("@/components/BookingModal").then((m) => m.BookingModal), {
  ssr: false,
});

// next/dynamic fetches its chunk as soon as the component mounts, even if it renders null.
// Only mount it once the user opens the booking popup so the chunk is not downloaded on page load.
function LazyBookingModal() {
  const { open } = useBooking();
  return open ? <BookingModal /> : null;
}

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
          <LazyBookingModal />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}
