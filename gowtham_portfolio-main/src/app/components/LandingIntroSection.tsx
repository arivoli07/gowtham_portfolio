export function LandingIntroSection() {
  return (
    <section className="bg-[#fff8f2] px-4 pb-10 pt-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-[#f0ddcf] bg-white px-5 py-6 shadow-[0_20px_50px_rgba(28,22,18,0.08)] md:px-8 md:py-8 lg:px-10 lg:py-10">
        <div className="grid gap-6 text-[#2b211b] md:grid-cols-3 md:items-start">
          <div className="font-['Poppins',sans-serif] text-sm leading-6 md:text-base">
            <p className="font-medium uppercase tracking-[0.14em] text-[#fd853a]">Gowtham Nallamuthu</p>
            <p className="mt-1 max-w-[220px] text-[#4f5968]">UI/UX Designer / Visual Storyteller</p>
          </div>
          <div className="font-['Poppins',sans-serif] text-sm leading-6 text-[#4f5968] md:text-center md:text-base">
            <p>+91 8220078976</p>
            <p>Instagram: @editor_gowtham_</p>
          </div>
          <div className="font-['Poppins',sans-serif] text-sm leading-6 text-[#4f5968] md:text-right md:text-base">
            <p className="font-medium uppercase tracking-[0.14em] text-[#fd853a]">Say Hello</p>
            <p>gowthamn1012@gmail.com</p>
          </div>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#f4e3d8] bg-[linear-gradient(180deg,#fffdfa_0%,#fff7f0_100%)] px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
          <p className="font-['Poppins',sans-serif] text-[1.05rem] font-medium leading-none text-[#fd853a] md:text-[1.3rem]">
            welcome to my
          </p>

          <div className="mt-3 relative">
            <h1 className="font-['Georgia',serif] text-[4.4rem] leading-[0.84] tracking-[-0.08em] text-[#fd853a] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              port
              <span className="relative inline-block">
                f
                <span className="absolute left-[36%] top-[-16%] text-[0.22em]">*</span>
              </span>
              olio
            </h1>
          </div>

          <div className="mt-10 grid gap-6 font-['Poppins',sans-serif] text-[#2b211b] md:grid-cols-3 md:items-end">
            <div>
              <p className="text-[1.5rem] font-semibold leading-none md:text-[2rem]">PORTFOLIO</p>
              <p className="mt-1 text-[1.05rem] leading-none text-[#4f5968] md:text-[1.3rem]">2025 UPDATE</p>
            </div>
            <div className="max-w-[320px] text-sm leading-6 text-[#4f5968] md:mx-auto md:text-base">
              Translating ideas into structured visual outcomes.
            </div>
            <div className="md:text-right">
              <p className="text-[1.5rem] font-semibold leading-none md:text-[2rem]">BEHANCE</p>
              <p className="mt-1 text-sm text-[#4f5968] md:text-base">behance.net/ngowtham</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById("hero-showcase")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-full bg-[#fd853a] px-8 py-4 font-['Poppins',sans-serif] text-base font-semibold text-white"
            >
              Enter Portfolio
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-full border border-[#ded6cf] bg-white px-8 py-4 font-['Poppins',sans-serif] text-base font-medium text-[#2b211b]"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
