import svgPaths from "../../imports/svg-1z2wkiwciq";
import imgPngwingCom61 from "../../assets/5ba54044d8658bbb3fe267543532844dd4d787de.png";
import imgPngwingCom91 from "../../assets/b7cee85d62298c9c7d404c9770d8c274008f295b.png";
import imgPngwingCom101 from "../../assets/c4c2d5eeb8f54339fb3f98f6f29c773c9e7d08de.png";
import imgPngwingCom111 from "../../assets/fc203a6de9db8cb57d93a380500cab88aaf0c95c.png";
import imgPngwingCom121 from "../../assets/d981284db9288a8fb26e7c6b352c773c4d7768e5.png";
import imgPngwingCom141 from "../../assets/dcf725c70fd5455e54cc83dd60ad7029a8e017d3.png";
import imgStar0041 from "../../assets/7cdc2342ae90dfeecd1f661d33d362404ef08907.png";
import imgShape0101 from "../../assets/38031fc5a7cb0d07147a12d1f90a39086b9d15ca.png";

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden px-[16px] py-[0px]">
      <div className="max-w-[1450px] mx-auto">
        {/* About Me Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Urbanist'] font-semibold text-4xl md:text-[64px] leading-none tracking-[-0.96px] px-[0px] py-[16px]">
            <span className="text-[#344054]">About </span>
            <span className="text-[#fd853a]">Me</span>
          </h2>
        </div>

        {/* Hello I'm Gowtham */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="font-['Urbanist'] font-semibold text-2xl md:text-[35px] leading-none tracking-[-0.525px] mx-[0px] my-[-45px]">
            <span className="text-[#344054]">Hello, I'm </span>
            <span className="text-[#fd853a]">Gowtham</span>
            <span className="text-[#344054]">,</span>
          </h3>
        </div>

        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto text-center mx-[244px] mt-[0px] mb-[62px]">
          <p className="font-['Poppins'] text-base md:text-[20px] text-[#344054] leading-[1.32] tracking-[-0.3px] mx-[0px] my-[59px]">I am a Junior UI/UX Designer and Computer Science Engineering graduate. I specialize in bridging the gap between technical logic and user-centered design. My goal is to help businesses grow by solving user pain points through iterative testing and clean visual storytelling.</p>
        </div>

        {/* Decorative Star - Desktop only */}
        <div className="hidden lg:block absolute right-[10%] top-[50px] w-[119px] h-[105px] rotate-[-30.03deg]">
          <img alt="" className="w-full h-full object-cover" src={imgShape0101} />
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Education & Skills */}
          <div className="space-y-8 md:space-y-12 px-[28px] py-[0px]">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="size-[59px] rounded-full bg-[#fd853a] relative flex items-center justify-center shrink-0">
                  <svg className="size-[33px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 48 48">
                    <path d={svgPaths.p1e744780} fill="white" transform="translate(-6, -6)" />
                  </svg>
                </div>
                <h3 className="font-['Poppins'] font-semibold text-xl md:text-[35px] leading-none tracking-[-0.525px]">
                  <span className="text-[#344054]">Edu</span>
                  <span className="text-[#fd853a]">cation</span>
                </h3>
              </div>
              <div className="ml-0 md:ml-[74px] font-['Poppins'] text-[#344054]">
                <p className="font-semibold text-base md:text-[19px] leading-normal mb-1">
                  Bachelor of Engineering in Computer Science & Engineering
                </p>
                <p className="font-medium text-sm md:text-[19px] leading-normal mb-0">
                  St.Joseph College
                </p>
                <p className="font-medium text-sm md:text-[19px] leading-normal">
                  2021 - 2025
                </p>
              </div>
            </div>

            {/* Decorative Star - Mobile */}
            <div className="lg:hidden flex justify-center rotate-[-15.45deg] w-[53px] h-[57px] mx-auto">
              <img alt="" className="w-full h-full object-cover" src={imgStar0041} />
            </div>

            {/* Skills Set Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="size-[59px] rounded-full bg-[#fd853a] flex items-center justify-center shrink-0">
                  <svg className="size-[33px]" fill="none" viewBox="0 0 33 33">
                    <path d={svgPaths.p125b7c00} fill="white" />
                    <path d={svgPaths.p17be200} fill="white" />
                    <path d={svgPaths.p3b581800} fill="white" />
                    <path d={svgPaths.p2dfc6000} fill="white" />
                  </svg>
                </div>
                <h3 className="font-['Poppins'] font-semibold text-xl md:text-[35px] leading-none tracking-[-0.525px]">
                  <span className="text-[#344054]">Skills</span>
                  <span className="text-[#fd853a]"> Set</span>
                </h3>
              </div>

              <div className="ml-0 md:ml-[74px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-['Poppins'] text-[#344054]">
                {/* UX Research */}
                <div>
                  <p className="font-medium text-base md:text-[18px] tracking-[0.9px] leading-normal mb-2">
                    UX Research:
                  </p>
                  <ul className="list-disc ml-6 text-sm md:text-[16px] tracking-[0.8px] space-y-1">
                    <li className="leading-normal">User Interviews,</li>
                    <li className="leading-normal">Persona Mapping,</li>
                    <li className="leading-normal">Competitive Analysis,</li>
                    <li className="leading-normal">User Journeys.</li>
                  </ul>
                </div>

                {/* UI Design */}
                <div>
                  <p className="font-medium text-base md:text-[18px] tracking-[0.9px] leading-normal mb-2">
                    UI Design:
                  </p>
                  <ul className="list-disc ml-6 text-sm md:text-[16px] tracking-[0.8px] space-y-1">
                    <li className="leading-normal">Wireframing (Lo-Fi/Hi-Fi),</li>
                    <li className="leading-normal">Prototyping,</li>
                    <li className="leading-normal">Typography,</li>
                    <li className="leading-normal">Color Theory,</li>
                    <li className="leading-normal">Design Systems.</li>
                  </ul>
                </div>

                {/* Extra Skills */}
                <div>
                  <p className="font-medium text-base md:text-[18px] tracking-[0.9px] leading-normal mb-2">
                    Extra Skills:
                  </p>
                  <ul className="list-disc ml-6 text-sm md:text-[16px] tracking-[0.8px] space-y-1">
                    <li className="leading-normal">Video Editing</li>
                    <li className="leading-normal">Graphic Designing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tools */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-[59px] rounded-full bg-[#fd853a] flex items-center justify-center shrink-0">
                <svg className="size-[33px]" fill="none" viewBox="0 0 60 60">
                  <path d={svgPaths.p26967b80} fill="white" />
                </svg>
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xl md:text-[35px] leading-none tracking-[-0.525px] text-[#344054]">
                Tools
              </h3>
            </div>

            <div className="ml-0 md:ml-[74px] bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-3 gap-8 md:gap-12">
                {/* Figma */}
                <div className="flex justify-center items-center">
                  <img alt="Figma" className="w-[70px] md:w-[89px] h-[70px] md:h-[89px] object-contain" src={imgPngwingCom61} />
                </div>

                {/* Photoshop */}
                <div className="flex justify-center items-center">
                  <img alt="Photoshop" className="w-[70px] md:w-[91px] h-[70px] md:h-[89px] object-contain" src={imgPngwingCom91} />
                </div>

                {/* Illustrator */}
                <div className="flex justify-center items-center">
                  <img alt="Illustrator" className="w-[70px] md:w-[92px] h-[75px] md:h-[97px] object-contain" src={imgPngwingCom101} />
                </div>

                {/* After Effects */}
                <div className="flex justify-center items-center">
                  <img alt="After Effects" className="w-[70px] md:w-[89px] h-[70px] md:h-[90px] object-contain" src={imgPngwingCom111} />
                </div>

                {/* Premiere Pro */}
                <div className="flex justify-center items-center">
                  <img alt="Premiere Pro" className="w-[70px] md:w-[90px] h-[70px] md:h-[90px] object-contain" src={imgPngwingCom121} />
                </div>

                {/* DaVinci Resolve */}
                <div className="flex justify-center items-center">
                  <img alt="DaVinci Resolve" className="w-[70px] md:w-[89px] h-[70px] md:h-[90px] object-contain" src={imgPngwingCom141} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Star - Desktop only */}
        <div className="hidden lg:block absolute left-[461px] top-[305px] w-[53px] h-[57px] rotate-[-15.45deg]">
          <img alt="" className="w-full h-full object-cover mx-[-110px] my-[122px]" src={imgStar0041} />
        </div>
      </div>
    </section>
  );
}
