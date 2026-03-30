import React from "react";
import imgMaskGroup from "/src/assets/f34da46c332ee93a28bc0ecea72039c2967d722e.png";

export function HireMeSection() {
  return (
    <section className="bg-white flex flex-col items-center justify-center w-full py-16 md:py-24 px-4 md:px-[71px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto bg-[#f2f4f7] rounded-[30px] md:rounded-[50px] flex flex-col lg:flex-row items-stretch justify-between relative group overflow-hidden">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center p-8 md:p-12 lg:py-[122px] lg:pl-[71px] lg:pr-8 z-10 w-full lg:w-1/2">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-[#344054] tracking-[-0.96px] mb-8 md:mb-[47px]">
            <span>Why </span>
            <span className="text-[#fd853a]">Hire me</span>
            <span>?</span>
          </h2>
          
          <p className="font-['Poppins',sans-serif] font-normal text-base md:text-[20px] text-[#344054] leading-relaxed tracking-[-0.3px] mb-10 md:mb-[47px] max-w-[550px]">
            I combine creative design, technical clarity, and reliability—delivering high-quality UI/UX, videos, and graphics on time while understanding real user and business needs.
          </p>
          
          <a 
            href="https://www.behance.net/ngowtham" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center px-8 py-4 md:px-[59px] md:py-[33px] rounded-[32px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="absolute inset-0 border border-[#151515] rounded-[32px] transition-colors duration-300 group-hover/btn:bg-[#151515]" />
            <span className="relative font-['Poppins',sans-serif] font-semibold text-xl md:text-[32px] text-[#151515] tracking-[-0.48px] transition-colors duration-300 group-hover/btn:text-white whitespace-nowrap">
              Hire me
            </span>
          </a>
        </div>

        {/* Right Content / Image */}
        <div className="relative w-full lg:w-[50%] h-[400px] md:h-[500px] lg:h-[806px] flex items-end justify-center lg:justify-end shrink-0 pointer-events-none">
          {/* Animated Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[60px] pointer-events-none z-0">
            <svg 
              className="w-[300px] md:w-[450px] lg:w-[624px] aspect-square opacity-0 scale-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100" 
              fill="none" 
              viewBox="0 0 624 624"
            >
              <circle cx="312" cy="312" r="311.5" stroke="#FD853A" strokeWidth="1" />
              <circle cx="312" cy="312" r="294" stroke="#FD853A" strokeWidth="2" />
              <circle cx="312" cy="312" r="274.5" stroke="#FD853A" strokeWidth="3" />
              <circle cx="312" cy="312" r="251" stroke="#FD853A" strokeWidth="4" />
              <circle cx="312" cy="312" r="230" stroke="#FD853A" strokeWidth="5" />
              <circle cx="312" cy="312" r="205" stroke="#FD853A" strokeWidth="6" />
            </svg>
          </div>

          <img 
            src={imgMaskGroup} 
            alt="Hire me portrait" 
            className="absolute bottom-0 lg:right-[50px] h-[100%] md:h-[110%] lg:h-[111%] w-auto object-contain object-bottom z-10"
          />
        </div>
      </div>
    </section>
  );
}
