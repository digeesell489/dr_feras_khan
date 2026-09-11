"use client";

type BookButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export function BookButton({
  children,
  className = "",
  variant = "dark",
}: BookButtonProps) {
  const styles =
    variant === "dark"
      ? "bg-navy text-cream-soft hover:bg-navy-mid"
      : "bg-cream-soft text-navy hover:bg-white";

  return (
    <a
      href="#book"
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
