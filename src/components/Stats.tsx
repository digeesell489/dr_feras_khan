import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="mx-auto mt-10 max-w-[1180px] px-5 md:mt-6 md:px-8">
      <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`py-7 pr-6 md:py-9 ${
              index < stats.length - 1 ? "md:border-r md:border-line md:pr-8 md:pl-0" : ""
            } ${index > 0 ? "md:pl-8" : ""}`}
          >
            <p className="serif text-[28px] leading-none tracking-tight md:text-[32px]">
              {item.value}
            </p>
            <p className="mt-2 text-[13px] text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
