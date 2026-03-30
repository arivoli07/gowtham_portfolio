import imgMaskGroup from "figma:asset/ed95cd164ebed3d5811f4cd08117c4ec1cbe6e1d.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#344054] text-[0px] tracking-[-0.96px] w-full">
        <span className="leading-none text-[64px]">{`Why `}</span>
        <span className="leading-none text-[#fd853a] text-[64px]">Hire me</span>
        <span className="leading-none text-[64px]">?</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[47px] items-center justify-end min-h-px min-w-px relative">
      <Frame1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#344054] text-[20px] tracking-[-0.3px] w-[min-content]">I combine creative design, technical clarity, and reliability—delivering high-quality UI/UX, videos, and graphics on time while understanding real user and business needs.</p>
      <a className="content-stretch cursor-pointer flex items-center justify-center px-[59px] py-[33px] relative rounded-[32px] shrink-0" href="https://www.behance.net/ngowtham">
        <div aria-hidden="true" className="absolute border border-[#151515] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151515] text-[32px] text-left tracking-[-0.48px] whitespace-nowrap">Hire me</p>
      </a>
    </div>
  );
}

function Frame382Variant({ className }: { className?: string }) {
  return (
    <div className={className || "h-[761px] relative shrink-0 w-[578px]"} data-name="Frame 382/Variant2">
      <div className="absolute left-[-20px] size-[624px] top-[69px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 624 624">
          <circle cx="312" cy="312" id="Ellipse 9" r="311.5" stroke="var(--stroke-0, #FD853A)" />
        </svg>
      </div>
      <div className="absolute left-[-3px] size-[590px] top-[86px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 590">
          <circle cx="295" cy="295" id="Ellipse 10" r="294" stroke="var(--stroke-0, #FD853A)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute left-[16px] size-[552px] top-[105px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 552 552">
          <circle cx="276" cy="276" id="Ellipse 8" r="274.5" stroke="var(--stroke-0, #FD853A)" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute left-[39px] size-[506px] top-[128px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 506 506">
          <circle cx="253" cy="253" id="Ellipse 4" r="251" stroke="var(--stroke-0, #FD853A)" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute left-[62px] size-[460px] top-[151px]">
        <div className="absolute inset-[-0.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 465 465">
            <circle cx="232.5" cy="232.5" id="Ellipse 5" r="230" stroke="var(--stroke-0, #FD853A)" strokeWidth="5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[87px] size-[410px] top-[176px]">
        <div className="absolute inset-[-0.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 416">
            <circle cx="208" cy="208" id="Ellipse 6" r="205" stroke="var(--stroke-0, #FD853A)" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[761px] left-px top-0 w-[603px]" data-name="Mask group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.08%] left-[-8.75%] max-w-none top-[-18.05%] w-[99.34%]" src={imgMaskGroup} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[600px] items-center justify-between relative shrink-0 w-[1299px]">
      <Frame2 />
      <Frame382Variant />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f2f4f7] content-stretch flex flex-col h-[806px] items-center justify-center overflow-clip px-[71px] py-[122px] relative rounded-[50px] shrink-0 w-[1440px]">
      <Frame />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop - 11">
      <Frame3 />
    </div>
  );
}