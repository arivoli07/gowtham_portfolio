import { useState } from 'react';
import svgPaths from "../../imports/svg-8e9tgyntso";
import { imgRectangle6 } from "../../imports/svg-wxgwf";
import imgFrame58 from "../../assets/57e2221906d547fa2080873389d5cdb526033110.png";
import imgLightYellowAbstractBackground3DIllustration3DRendering1 from "../../assets/a3502b9f9561ce8c41c01f405b55222ec2ad1c89.png";
import imgRectangle7 from "../../assets/0cd06f1f55cb83a710a8593b59729ae600aacfcd.png";
import imgRectangle8 from "../../assets/44ee2990b5330450b24c9bbd78daf98b595b9cc0.png";
import imgRectangle9 from "../../assets/e3cea43937d8660b3c202834635548bcf5aaa371.png";

interface ServiceCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

function ServiceCard({ title, image, onClick }: ServiceCardProps) {
  return (
    <div className="group relative shrink-0 w-[416px] h-[508px] cursor-pointer" onClick={onClick}>
      {/* Background Mask Container with Glass Effect */}
      <div 
        className="absolute inset-0 w-full h-full backdrop-blur-[15px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
        style={{ 
          maskImage: `url('${imgRectangle6}')`,
          WebkitMaskImage: `url('${imgRectangle6}')`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%'
        }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 508">
          <g>
            <path d={svgPaths.p6e5e100} fill="#686868" fillOpacity="0.2" />
            <path d={svgPaths.p21f04b00} stroke="url(#paint0_radial_2_1277)" strokeOpacity="0.5" strokeWidth="2" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(208 254) rotate(-90) scale(254 363.68)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_1277" r="1">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Layered Images */}
      <div 
        className="absolute flex flex-col items-center left-0 top-[158px] pb-[307px] w-full pointer-events-none"
        style={{ 
          maskImage: `url('${imgRectangle6}')`,
          WebkitMaskImage: `url('${imgRectangle6}')`,
          maskPosition: '0px -158px',
          WebkitMaskPosition: '0px -158px',
          maskSize: '416px 508px',
          WebkitMaskSize: '416px 508px',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        <div className="bg-[#757575] h-[329px] mb-[-307px] opacity-50 rounded-[35px] shrink-0 w-[328px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[40px] group-hover:scale-95" />
        <div className="bg-[#9e9d9d] h-[329px] mb-[-307px] rounded-[35px] shrink-0 w-[374px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[20px] group-hover:scale-[0.98]" />
        <div className="h-[307px] mb-[-307px] relative rounded-[35px] shrink-0 w-[416px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-[5px]">
          <img alt={title} className="absolute inset-0 max-w-none object-cover rounded-[35px] size-full" src={image} />
        </div>
      </div>

      {/* Text Section */}
      <div 
        className="absolute flex flex-col gap-[23px] items-start left-0 top-[44px] w-full pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
        style={{ 
          maskImage: `url('${imgRectangle6}')`,
          WebkitMaskImage: `url('${imgRectangle6}')`,
          maskPosition: '0px -44px',
          WebkitMaskPosition: '0px -44px',
          maskSize: '416px 508px',
          WebkitMaskSize: '416px 508px',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        <div className="content-stretch flex items-start px-[37px] relative w-full">
          <p className="flex-[1_0_0] font-['Poppins'] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[32px] text-white tracking-[-0.48px] m-0">
            {title}
          </p>
        </div>
        <div className="h-0 relative shrink-0 w-[416px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 2">
              <line stroke="#F9FAFB" strokeOpacity="0.3" strokeWidth="2" x2="416" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Arrow Button */}
      <div className="absolute flex items-center justify-center left-[302px] size-[114px] top-[394px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4 group-hover:translate-x-2">
        <div className="bg-[#1d2939] content-stretch flex items-center justify-center p-[21px] relative rounded-[57px] size-[114px] transition-colors duration-500 group-hover:bg-[#fd853a]">
          <div className="flex flex-[1_0_0] h-full items-center justify-center relative">
            <div className="size-[44px] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
              <svg className="block size-full" fill="none" viewBox="0 0 34 34">
                <path d="M2 32L32 2M32 2H2M32 2V32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const services = [
    { title: "UI/UX Designing", image: imgRectangle7, targetId: "projects" },
    { title: "Video Editing", image: imgRectangle8, targetId: "videos" },
    { title: "Graphic Designing", image: imgRectangle9, targetId: "posters" },
  ];

  return (
    <div className="relative w-full flex justify-center px-4 overflow-hidden my-10">
      <div className="w-full max-w-[1440px] xl:h-[878px] overflow-clip relative rounded-[50px] shrink-0 mx-auto pb-16 xl:pb-0">
        
        {/* Background Dark Fill & Pattern */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px] z-0">
          <div className="absolute bg-[#171717] inset-0 rounded-[50px]" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 rounded-[50px] size-full" src={imgFrame58} />
        </div>

        {/* 3D Render Graphics - Desktop absolute positioned */}
        <div className="absolute hidden xl:block h-[828px] left-0 overflow-clip right-0 top-[50px] pointer-events-none z-0">
          <div className="absolute left-[954px] size-[873px] top-[146px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightYellowAbstractBackground3DIllustration3DRendering1} />
          </div>
          <div className="absolute flex items-center justify-center left-[527px] size-[250px] top-[21px]">
            <div className="flex-none rotate-[-146.4deg] blur-[2.5px] relative size-[180px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightYellowAbstractBackground3DIllustration3DRendering1} />
            </div>
          </div>
          <div className="absolute flex h-[594px] items-center justify-center left-[-184px] top-0 w-[590px]">
            <div className="flex-none rotate-[151.66deg] blur-[1.5px] h-[441px] relative w-[432px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightYellowAbstractBackground3DIllustration3DRendering1} />
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col xl:block pt-12 xl:pt-0">
          
          {/* Header Area */}
          <div className="xl:absolute flex flex-col xl:flex-row xl:items-end justify-between xl:left-[70px] xl:top-[116px] xl:w-[1299px] px-8 xl:px-0 gap-6 xl:gap-0">
            <h2 className="font-['Vast_Shadow'] font-normal text-[#fcfcfd] text-[40px] md:text-[48px] leading-none tracking-[-0.72px] m-0">
              <span className="font-['Poppins'] font-medium">My </span>
              <span className="font-['Poppins'] font-medium text-[#fd853a]">Services</span>
            </h2>
            <p className="font-['Poppins'] font-medium text-[16px] md:text-[20px] text-white tracking-[-0.3px] xl:w-[576px] leading-normal m-0 opacity-90">
              I offer UI/UX design, video editing, and graphic design services—creating intuitive experiences, engaging visuals, and impactful designs that bring ideas to life.
            </p>
          </div>

          {/* Cards Area */}
          <div className="xl:absolute flex flex-col xl:flex-row gap-[20px] xl:gap-[10px] items-center justify-center xl:justify-start xl:left-[70px] xl:top-[282px] mt-12 xl:mt-0 pb-10 xl:pb-0 px-4 xl:px-0 z-20">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                image={service.image} 
                onClick={() => document.getElementById(service.targetId)?.scrollIntoView({ behavior: 'smooth' })}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
