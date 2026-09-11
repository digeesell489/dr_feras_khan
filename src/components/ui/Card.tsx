type CardProps = {
  title: string;
  body: string;
  arrow?: boolean;
  largeTitle?: boolean;
};

export function Card({ title, body, arrow = false, largeTitle = false }: CardProps) {
  return (
    <article className="flex h-full flex-col border border-line bg-cream-soft/40 p-7 md:p-8">
      <h3
        className={
          largeTitle
            ? "serif text-[26px] leading-[1.2] tracking-tight"
            : "text-[17px] font-medium tracking-tight"
        }
      >
        {title}
      </h3>
      <p className="mt-4 flex-1 text-[14px] leading-7 text-muted">{body}</p>
      {arrow ? (
        <span className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </article>
  );
}
