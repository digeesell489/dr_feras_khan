import type { Metadata } from "next";
import type { ReactNode } from "react";
import { showForPhysicians } from "@/lib/visibility";

export const metadata: Metadata = {
  robots: showForPhysicians
    ? { index: true, follow: true }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
};

export default function PhysiciansLayout({ children }: { children: ReactNode }) {
  return children;
}
