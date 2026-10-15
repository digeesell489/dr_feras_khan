import Image from "next/image";

export function Technique() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-8 pt-20 md:px-8 md:pt-28">
      <h2 className="serif mx-auto max-w-[720px] text-center text-[32px] leading-[1.2] tracking-[-0.02em] md:text-[44px]">
        How is the surgical technique chosen for your joint replacement?
      </h2>

      <div className="relative mx-auto mt-10 w-full max-w-[760px] md:mt-14">
        <div className="relative aspect-square w-full">
          <Image
            src="/images/knee-orb.webp"
            alt="Three-dimensional anatomical model of a knee joint"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 760px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
