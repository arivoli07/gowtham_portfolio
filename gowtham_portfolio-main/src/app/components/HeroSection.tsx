import imgPortrait from "../../assets/98683e79f2668f9bdc7eef225e5ecc6d29f4d7b2.png";
const highlights = [
  "UI/UX Design",
  "Design Systems",
  "Motion Content",
  "Graphic Design",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-6 pt-2 md:px-6 lg:px-8">
      <style>{`
        @keyframes objectFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.18; }
          50% { transform: translateY(-10px) rotate(3deg); opacity: 0.34; }
        }
        @keyframes objectSlide {
          0%, 100% { transform: translateX(0px) rotate(-10deg); opacity: 0.14; }
          50% { transform: translateX(12px) rotate(-4deg); opacity: 0.28; }
        }
        @keyframes objectPulse {
          0%, 100% { transform: scale(1); opacity: 0.16; }
          50% { transform: scale(1.12); opacity: 0.32; }
        }
      `}</style>
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(253,133,58,0.18),transparent_48%),linear-gradient(180deg,#fffdf8_0%,#ffffff_72%)]" />
      <div className="absolute left-1/2 top-[80px] -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fd853a]/10 blur-3xl" />

      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative z-10 md:pl-10 lg:pl-16">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#f3d2bc] bg-white/90 px-4 py-2.5 shadow-[0_16px_40px_rgba(20,20,20,0.06)] backdrop-blur">
              <span className="inline-flex size-2.5 rounded-full bg-[#fd853a]" />
              <span className="font-['Poppins',sans-serif] text-sm font-medium tracking-[0.18em] text-[#7a4a24] uppercase">
                Available for freelance and full-time roles
              </span>
            </div>

            <div className="max-w-[760px]">
              <p className="mb-3 font-['Poppins',sans-serif] text-xs font-semibold uppercase tracking-[0.24em] text-[#fd853a] md:text-sm">
                Gowtham Nallamuthu
              </p>
              <h1 className="font-['Poppins',sans-serif] text-[2.1rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#181818] sm:text-[2.9rem] lg:text-[3.85rem]">
                Product-minded
                <br />
                <span className="text-[#fd853a]">UI/UX designer</span>
                <br />
                for digital brands
              </h1>
              <p className="mt-4 max-w-[580px] font-['Poppins',sans-serif] text-[15px] leading-7 text-[#4d5761] md:text-[17px]">
                I design interfaces that feel sharp, human, and easy to use, then support them with motion and visual storytelling so the final product looks as strong as it works.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ead9ca] bg-[#fffaf5] px-3.5 py-1.5 font-['Poppins',sans-serif] text-xs font-medium text-[#344054] shadow-[0_10px_25px_rgba(20,20,20,0.04)] md:px-4 md:py-2 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#fd853a] px-7 py-3.5 font-['Poppins',sans-serif] text-base font-semibold text-white shadow-[0_20px_45px_rgba(253,133,58,0.28)] transition-transform hover:-translate-y-0.5 md:px-8 md:py-4 md:text-lg"
              >
                View Portfolio
                <ArrowUpRight />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-[#d9dfe5] bg-white px-7 py-3.5 font-['Poppins',sans-serif] text-base font-medium text-[#17212b] transition-colors hover:border-[#fd853a] hover:text-[#fd853a] md:px-8 md:py-4 md:text-lg"
              >
                Let&apos;s Talk
              </button>
            </div>

          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-[560px]">
              <div className="group relative flex min-h-[340px] items-end justify-center sm:min-h-[460px] lg:min-h-[560px]">
                <div
                  className="pointer-events-none absolute inset-[4%_-2%_2%_-2%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    maskImage: "radial-gradient(ellipse at center, black 52%, transparent 88%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 52%, transparent 88%)",
                  }}
                >
                  <ComicBurst className="size-full" />
                </div>
                <img
                  src={imgPortrait}
                  alt="Gowtham - UI/UX Designer"
                  className="relative z-10 w-full max-w-[270px] object-contain drop-shadow-[0_28px_60px_rgba(26,26,26,0.18)] sm:max-w-[360px] lg:max-w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ComicBurst({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 520 620">
      <g style={{ animation: "objectFloat 3.4s ease-in-out infinite" }}>
        <rect x="186" y="136" width="150" height="150" rx="28" fill="#FD853A" fillOpacity="0.22" transform="rotate(-8 186 136)" />
        <rect x="166" y="302" width="188" height="116" rx="24" fill="#FFF4E8" fillOpacity="0.84" transform="rotate(6 166 302)" />
      </g>
      <g style={{ animation: "objectSlide 3.1s ease-in-out infinite" }}>
        <rect x="110" y="184" width="94" height="18" rx="9" fill="#FDB022" transform="rotate(-16 110 184)" />
        <rect x="332" y="178" width="106" height="20" rx="10" fill="#FD853A" transform="rotate(18 332 178)" />
        <rect x="104" y="448" width="110" height="20" rx="10" fill="#FD853A" transform="rotate(12 104 448)" />
        <rect x="330" y="446" width="98" height="18" rx="9" fill="#FDB022" transform="rotate(-15 330 446)" />
      </g>
      <g style={{ animation: "objectPulse 2.7s ease-in-out infinite" }} opacity="0.24">
        <circle cx="148" cy="230" r="14" fill="#FD853A" />
        <circle cx="194" cy="212" r="10" fill="#FDB022" />
        <circle cx="372" cy="224" r="14" fill="#FD853A" />
        <circle cx="330" cy="208" r="10" fill="#FFF4E8" />
        <circle cx="144" cy="430" r="14" fill="#FD853A" />
        <circle cx="190" cy="456" r="10" fill="#FDB022" />
        <circle cx="372" cy="454" r="14" fill="#FD853A" />
        <circle cx="330" cy="478" r="10" fill="#FFF4E8" />
      </g>
      <g opacity="0.28">
        <path d="M148 286L186 248" stroke="#1F2937" strokeLinecap="round" strokeWidth="3" />
        <path d="M334 250L386 302" stroke="#1F2937" strokeLinecap="round" strokeWidth="3" />
        <path d="M142 390L198 430" stroke="#1F2937" strokeLinecap="round" strokeWidth="3" />
        <path d="M330 430L382 376" stroke="#1F2937" strokeLinecap="round" strokeWidth="3" />
        <rect x="232" y="154" width="58" height="58" rx="14" fill="#FFF4E8" fillOpacity="0.9" />
        <rect x="222" y="328" width="76" height="32" rx="12" fill="#FDB022" fillOpacity="0.82" />
      </g>
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24">
      <path d="M7 17L17 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 7H17V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
