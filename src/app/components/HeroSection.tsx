import { useState } from "react";
import svgPaths from "../../imports/svg-mo2l413ml6";
import imgYoungPrettyWomanLookingHappyGoofyWithBroadFunLoonySmileEyesWideOpenAgainstWhiteWall2 from "/src/assets/98683e79f2668f9bdc7eef225e5ecc6d29f4d7b2.png";
import { Frame13 as HeroDoodles } from "../../imports/Desktop12-20-2424";

export function HeroSection() {
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <div className="relative w-full px-4 overflow-hidden">
      <div className="max-w-[1450px] mx-auto">
        {/* Main Content */}
        <div className={`relative z-10 pt-6 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isCenterHovered ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
          {/* Hello Badge */}
          <div className="flex justify-center">
            <div className="relative inline-grid">
              <div className="bg-[rgba(255,255,255,0.1)] border-[#171717] border-[1.275px] rounded-[38.235px] px-[25.49px] py-[12.745px]">
                <p className="font-['Poppins'] font-medium text-[#171717] text-[20px] tracking-[-0.3px] leading-normal">
                  Hello!
                </p>
              </div>
              {/* Decorative arrow */}
              <div className="absolute -right-5 -top-2 w-7 h-7">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5006 32.5005">
                  <path d={svgPaths.p36e30100} stroke="#FEB173" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mt-[10px]">
            <h1 className="font-['Urbanist'] font-semibold text-[#171717] text-4xl sm:text-5xl md:text-6xl lg:text-[95.566px] leading-none tracking-[-1.4335px] mx-[0px] my-[8px]">
              I'm <span className="text-[#fd853a]">Gowtham</span>,
              <br />
              UI/UX Designer
            </h1>
          </div>

          {/* Decorative stroke near title */}
          <div className="hidden md:block absolute left-[10%] lg:left-[20%] top-[70%] w-[86px] h-[88px] pointer-events-none">
            <div className="rotate-[-167.61deg] w-full h-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.8909 79.505">
                <path d={svgPaths.p3e7cd7c0} stroke="#FEB173" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quote Sections & Main Image Container */}
        <div className="relative mt-[67px]">
          {/* Left Quote - Desktop only */}
          <div className={`hidden xl:block absolute left-[71px] top-[141px] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isCenterHovered ? '-translate-y-[100px]' : 'translate-y-0'}`}>
            <QuoteIcon />
            <div className="font-['Poppins'] font-medium text-[#344054] text-[20px] tracking-[-0.3px] mt-[24px] leading-normal whitespace-pre">
              <p className="mb-0">Turning complex data into clean, digestible </p>
              <p className="mb-0">dashboards. Junior UI/UX Designer </p>
              <p className="mb-0">focused on high-utility designs </p>
              <p className="mb-0">that prioritize user needs.</p>
            </div>
          </div>

          {/* Right Quote - Desktop only */}
          <div className={`hidden xl:block absolute right-[71px] top-[141px] w-[429px] text-right transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isCenterHovered ? '-translate-y-[100px]' : 'translate-y-0'}`}>
            <div className="flex justify-end">
              <QuoteIcon />
            </div>
            <div className="font-['Poppins'] font-medium text-[#344054] text-[20px] tracking-[-0.3px] mt-[24px] leading-normal whitespace-pre">
              <p className="mb-0">Designing intuitive UI/UX and high-energy </p>
              <p className="mb-0">motion content. From user journeys to</p>
              <p className="mb-0"> cinematic edits—impact</p>
              <p className="mb-0">seamlessly delivered.</p>
            </div>
          </div>

          {/* Center Image with Orange Circle Background */}
          <div 
            className="group relative flex justify-center items-end min-h-[400px] md:min-h-[500px] lg:min-h-[600px] px-[0px] pb-0 mx-[0px] mt-[-130px] mb-[0px] cursor-crosshair"
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
          >
            {/* Orange circle background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[180px] sm:w-[480px] sm:h-[240px] md:w-[720px] md:h-[360px] lg:w-[960px] lg:h-[480px] bg-[#FEB273] rounded-t-full m-[0px] z-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom group-hover:scale-[1.05]" />
            
            {/* Animated Hover Doodles */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center opacity-0 scale-95 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-center group-hover:opacity-100 group-hover:scale-100 z-[5] pointer-events-none">
              <div className="relative w-[1017.915px] h-[688.479px] scale-[0.6] sm:scale-[0.8] md:scale-[1]">
                <HeroDoodles />
              </div>
            </div>

            {/* Main image */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[481px] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom group-hover:scale-[1.05]">
              <img
                src={imgYoungPrettyWomanLookingHappyGoofyWithBroadFunLoonySmileEyesWideOpenAgainstWhiteWall2}
                alt="Gowtham - UI/UX Designer"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4 flex justify-center">
              <div className="backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.1)] border border-white rounded-[50px] p-[10px] w-max">
                <div className="flex gap-[10px] flex-col sm:flex-row">
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#fd853a] rounded-[60px] px-5 py-[10px] flex items-center justify-center gap-2 flex-1 border-[0.5px] border-[#d0d5dd]"
                  >
                    <p className="font-['Poppins'] font-medium text-white text-[25.692px] tracking-[-0.3854px] leading-normal">
                      Portfolio
                    </p>
                    <div className="size-[42px] shrink-0">
                      <svg className="size-full" fill="none" viewBox="0 0 42 42">
                        <path d="M12.25 29.75L29.75 12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M12.25 12.25H29.75V29.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-[60px] px-5 py-[10px] flex items-center justify-center flex-1"
                  >
                    <p className="font-['Lufga'] font-light text-white text-[25.692px] tracking-[-0.3854px] leading-normal">
                      Hire me
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Quotes - Below image */}
          <div className="xl:hidden mt-8 space-y-6 max-w-2xl mx-auto">
            <div>
              <QuoteIcon />
              <p className="font-['Poppins'] font-medium text-[#344054] text-base md:text-lg tracking-[-0.3px] mt-4 leading-normal">
                Turning complex data into clean, digestible dashboards. Junior UI/UX Designer focused on high-utility designs that prioritize user needs.
              </p>
            </div>
            
            <div>
              <QuoteIcon />
              <p className="font-['Poppins'] font-medium text-[#344054] text-base md:text-lg tracking-[-0.3px] mt-4 leading-normal">
                Designing intuitive UI/UX and high-energy motion content. From user journeys to cinematic edits—impact seamlessly delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteIcon() {
  return (
    <div className="size-9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <path d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z" fill="#344054" />
        <path d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z" fill="#344054" />
      </svg>
    </div>
  );
}