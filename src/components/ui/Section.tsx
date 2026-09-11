type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div
        className={`page-width py-16 md:py-24 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

type HeaderProps = {
  badge: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export function SectionHeader({ badge, title, subtitle, dark = false }: HeaderProps) {
  return (
    <div className="mx-auto max-w-[680px] text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${
          dark
            ? "border border-white/15 bg-white/5 text-white/70"
            : "bg-[#e7f3ee] text-[#3d7a64]"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-[#7dba9e]" : "bg-[#3d7a64]"}`}
        />
        {badge}
      </span>
      <h2 className="serif mt-5 text-[32px] leading-[1.2] tracking-[-0.02em] md:text-[44px]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mx-auto mt-4 max-w-[620px] text-[15px] leading-7 ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
