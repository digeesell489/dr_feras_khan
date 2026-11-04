import type { ReactNode } from "react";

/**
 * Pass-through root layout. `<html>` / `<body>` live in `app/[locale]/layout.tsx`
 * so each locale can set server `lang` / `dir` on the document element.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
