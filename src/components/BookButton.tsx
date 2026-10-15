import type { MouseEventHandler, ReactNode } from "react";
import { HEALTHPOINT_APPOINTMENT } from "@/lib/links";

type BookButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function BookButton({ children, className = "", onClick }: BookButtonProps) {
  return (
    <a href={HEALTHPOINT_APPOINTMENT} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
