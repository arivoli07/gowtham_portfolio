import React from "react";
import svgPaths from "../../imports/svg-w2h0xn8h4j";
import imgFrame346 from "/src/assets/a68de72d3127343ebd218855924fc61bd4d05869.png";
import imgFrame347 from "/src/assets/43e83a1de3ed8f088c5eb902fb90917ddbade8a3.png";
import imgFrame348 from "/src/assets/67e663810b8d0d055bb277777e96f1ae61195d31.png";
import imgFrame351 from "/src/assets/38abfc12f56279b6d3262688cffb6a02b946a8cd.png";
import imgFrame349 from "/src/assets/d8e37b0cf8a8ec2b540e72addceabde657b1f036.png";

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-12 md:size-16">
      <div className="-rotate-90 flex-none">
        <div className="flex items-center justify-center p-3 md:p-[15px] relative rounded-full size-12 md:size-[64px]">
          <div aria-hidden="true" className="absolute border border-[#fd853a] border-solid inset-0 pointer-events-none rounded-full" />
          <div className="flex-1 h-full min-h-px min-w-px overflow-clip relative">
            <div className="absolute inset-[12.5%_18.75%_12.14%_18.75%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 25.6215">
                <path d={svgPaths.p19a0d100} fill="#FD853A" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-white flex flex-col items-center justify-center w-full py-16 md:py-24 px-4 md:px-12">
      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
          <div className="flex flex-col font-['Lufga',sans-serif] font-bold text-[#344054]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span>Lets have a look at my </span>
              <span className="text-[#fd853a]">Projects</span>
            </h2>
          </div>
          <a href="https://www.behance.net/ngowtham" target="_blank" rel="noopener noreferrer" className="bg-[#fd853a] cursor-pointer inline-flex items-center justify-center px-8 py-4 md:px-[40px] md:py-[20px] rounded-full hover:bg-[#e6732d] transition-colors">
            <span className="font-['Poppins',sans-serif] font-bold text-lg md:text-[20px] text-white whitespace-nowrap">
              See All
            </span>
          </a>
        </div>

        {/* Projects Layout */}
        <div className="flex flex-col gap-12 w-full items-center">
          
          {/* Top 4 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-[105px] gap-x-6 w-full">
            
            {/* Project 1 */}
            <a href="https://www.behance.net/gallery/241700787/DealDock-CRM-App" className="group relative flex flex-col justify-between w-full aspect-[4/3] md:aspect-[1.7] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
                <img alt="Deal Dock CRM App" className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imgFrame346} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
              </div>
              <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowIcon />
              </div>
              <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl lg:text-[70px] text-[#fffaf5] leading-none tracking-tight">
                  Deal Dock
                </h3>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://www.behance.net/gallery/241700109/Skill-Hive-Freelancing-App" className="group relative flex flex-col justify-between w-full aspect-[4/3] md:aspect-[1.7] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
                <img alt="Skill Hive Freelancing App" className="absolute w-full h-[113.76%] left-[0.09%] top-[-14.11%] max-w-none object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imgFrame347} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
              </div>
              <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowIcon />
              </div>
              <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl lg:text-[70px] text-[#fffaf5] leading-none tracking-tight">
                  Skill Hive
                </h3>
              </div>
            </a>

            {/* Project 3 */}
            <a href="https://www.behance.net/gallery/244000985/Pulppy-Fresh-Juice-E-commerce-Landing-Page" className="group relative flex flex-col justify-between w-full aspect-[4/3] md:aspect-[1.7] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
                <img alt="Paradise Perfume" className="absolute w-full h-[113.76%] left-[0.09%] top-[-14.11%] max-w-none object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imgFrame348} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
              </div>
              <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowIcon />
              </div>
              <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl lg:text-[65px] text-[#fffaf5] leading-none tracking-tight">
                  Paradise Perfume
                </h3>
              </div>
            </a>

            {/* Project 4 */}
            <a href="https://www.behance.net/gallery/244000245/Pulppy-Fresh-Juice-E-commerce-Landing-Page" className="group relative flex flex-col justify-between w-full aspect-[4/3] md:aspect-[1.7] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
                <img alt="Juice Website" className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imgFrame351} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
              </div>
              <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowIcon />
              </div>
              <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl lg:text-[70px] text-[#fffaf5] leading-none tracking-tight">
                  Juice Website
                </h3>
              </div>
            </a>

          </div>

          {/* Project 5 (Centered Full Width or Same Width as others) */}
          <a href="https://www.behance.net/gallery/243999579/IT-Solutions" className="group relative flex flex-col justify-between w-full md:w-[calc(50%-12px)] aspect-[4/3] md:aspect-[1.7] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-white" />
              <img alt="IT Solution Website" className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imgFrame349} />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
            </div>
            <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
              <ArrowIcon />
            </div>
            <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl lg:text-[60px] text-[#fffaf5] leading-none tracking-tight">
                IT Solution Website
              </h3>
            </div>
          </a>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 w-full max-w-4xl">
            {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map((tag) => (
              <div key={tag} className="bg-[#f2f4f7] flex items-center justify-center px-6 py-2 md:px-[32px] md:py-[15px] rounded-full">
                <span className="font-sans font-normal text-sm md:text-[20px] text-black whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-8 w-full max-w-3xl px-4 text-center">
            <p className="font-['Poppins',sans-serif] font-normal text-[#344054] text-base md:text-[20px] leading-relaxed">
              I work on diverse projects across UI/UX design, video editing, and graphic design, focusing on clean visuals, smooth interactions, and meaningful user experiences that deliver real impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
