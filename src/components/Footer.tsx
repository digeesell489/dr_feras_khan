export function Footer() {
  return (
    <footer id="book" className="bg-navy text-cream-soft">
      <div className="page-width py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="serif max-w-[520px] text-[40px] leading-[1.1] tracking-[-0.03em] md:text-[52px]">
            Book your consultation
          </h2>
          <a
            href="https://healthpoint.ae/our-doctors/dr-feras-ya-ish/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cream-soft px-5 py-2.5 text-[13px] font-medium tracking-wide text-navy transition-colors hover:bg-white"
          >
            Request appointment
          </a>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 text-[13px] text-white/50 md:grid-cols-4">
          <div>
            <p className="mb-3 text-cream-soft">Clinic</p>
            <p>Healthpoint Hospital</p>
            <p>Zayed Sports City</p>
            <p>Abu Dhabi, UAE</p>
          </div>
          <div>
            <p className="mb-3 text-cream-soft">Contact</p>
            <p>800 77</p>
            <p>healthpoint.ae</p>
          </div>
          <div>
            <p className="mb-3 text-cream-soft">Qualifications</p>
            <p>MBBS, MRCS, FRCS (Orth), CCT</p>
            <p>Arabic &amp; English</p>
          </div>
          <div>
            <p className="mb-3 text-cream-soft">Practice</p>
            <p>Hip &amp; knee arthroplasty</p>
            <p>Revision &amp; complex reconstruction</p>
          </div>
        </div>

        <p className="mt-12 text-[12px] text-white/30">
          © {new Date().getFullYear()} Dr. Feras Ya&apos;ish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
