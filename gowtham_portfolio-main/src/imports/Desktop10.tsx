import imgMaskGroup from "figma:asset/f34da46c332ee93a28bc0ecea72039c2967d722e.png";

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

function Frame() {
  return (
    <div className="content-stretch flex h-[600px] items-center justify-between relative shrink-0 w-[1299px]">
      <Frame2 />
      <div className="h-[706px] relative shrink-0 w-[575px]">
        <div className="absolute left-[145px] size-[314px] top-[143px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="157" cy="157" id="Ellipse 9" opacity="0" r="156.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[145px] size-[314px] top-[143px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="157" cy="157" id="Ellipse 9" opacity="0" r="156.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[155px] size-[294px] top-[153px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="147" cy="147" id="Ellipse 8" opacity="0" r="146.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[167px] size-[270px] top-[165px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="135" cy="135" id="Ellipse 4" opacity="0" r="134.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[180px] size-[244px] top-[178px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="122" cy="122" id="Ellipse 5" opacity="0" r="121.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[193px] size-[218px] top-[191px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="109" cy="109" id="Ellipse 6" opacity="0" r="108.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute left-[206px] size-[192px] top-[204px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="96" cy="96" id="Ellipse 7" opacity="0" r="95.5" stroke="var(--stroke-0, #FD853A)" />
          </svg>
        </div>
        <div className="absolute h-[761px] left-0 top-0 w-[603px]" data-name="Mask group">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[118.08%] left-[-8.75%] max-w-none top-[-18.05%] w-[99.34%]" src={imgMaskGroup} />
          </div>
        </div>
      </div>
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
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop - 10">
      <Frame3 />
    </div>
  );
}