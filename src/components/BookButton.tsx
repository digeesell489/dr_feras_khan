"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useBooking } from "@/lib/booking";

type BookButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function BookButton({ children, className = "", type = "button", onClick, ...props }: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type={type}
      className={className}
      onClick={(event) => {
        openBooking();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
