import React, { useRef } from "react";
import svgPaths from "../../imports/svg-9vla8ivz5p";
import imgFrame371 from "/src/assets/2bf29fb650d9db6ff8d5dd603df3dcc7ca416331.png";
import imgFrame373 from "/src/assets/e6b47108b2153dc4defd5c73be613408ed2fb37c.png";
import imgFrame375 from "/src/assets/049d3cb40bcebb7d4f2bd2af623f117d7e21bd58.png";
import imgFrame372 from "/src/assets/dfc611ccc7ac3b5939164d9d2f6933d95c86da96.png";
import imgFrame374 from "/src/assets/e14952075425614429485f3cb1c5ae62c9a9817d.png";
import imgFrame377 from "/src/assets/6d46445c1c91fec1462e9da52940a5cc57082f3b.png";
import imgFrame376 from "/src/assets/1b3a8c798239163ddff8ad6235a0f5c8a7e36780.png";

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

interface VideoCardProps {
  title: string;
  imageSrc: string;
  link?: string;
}

function VideoCard({ title, imageSrc, link }: VideoCardProps) {
  const CardWrapper = link ? "a" : "div";
  return (
    <CardWrapper
      {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex flex-col justify-between w-[85vw] md:w-[633px] h-[250px] md:h-[371px] rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.7)] overflow-hidden p-6 md:p-8 shrink-0 cursor-pointer"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <img alt={title} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src={imageSrc} />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(196.754deg, rgba(0, 0, 0, 0) 47.411%, rgba(0, 0, 0, 0.36) 76.392%, rgba(0, 0, 0, 0.5) 89.227%)" }} />
      </div>
      <div className="relative z-10 flex justify-end w-full opacity-0 -translate-y-4 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
        <ArrowIcon />
      </div>
      <div className="relative z-10 flex items-end w-full mt-auto opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl lg:text-[70px] text-[#fffaf5] leading-none tracking-tight">
          {title}
        </h3>
      </div>
    </CardWrapper>
  );
}

export function EditingVideosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 685; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const videos = [
    { title: "Showreel", imageSrc: imgFrame371, link: "https://youtu.be/nmSpGlVawJc?si=OApg4a6U_x7fK-8q" },
    { title: "Samples", imageSrc: imgFrame373, link: "https://youtu.be/xwrm1iN62U0?si=CgPdL5lS5sa1eLI6" },
    { title: "Samples", imageSrc: imgFrame375 },
    { title: "Card Animation", imageSrc: imgFrame372, link: "https://youtu.be/FxegnXg2dAE?si=ALpMEPLd6KVqcdZp" },
    { title: "Samples", imageSrc: imgFrame374 },
    { title: "Samples", imageSrc: imgFrame377, link: "https://youtu.be/nmSpGlVawJc?si=OApg4a6U_x7fK-8q" },
    { title: "Logo Animation", imageSrc: imgFrame376 }
  ];

  return (
    <section className="bg-white flex flex-col items-center justify-center w-full py-16 md:py-24 overflow-hidden">
      <div className="w-full flex flex-col gap-12 md:gap-[48px]">
        
        {/* Header - Constrained width */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col font-['Lufga',sans-serif] font-bold text-[#344054]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-[64px] leading-tight">
              <span>Lets have a look at my </span>
              <span className="text-[#fd853a]">Editing Videos</span>
            </h2>
          </div>
          <a href="https://www.instagram.com/editor_gowtham_?igsh=MW4zNndtNmxwODFlNw==" target="_blank" rel="noopener noreferrer" className="bg-[#fd853a] cursor-pointer inline-flex items-center justify-center px-8 py-4 md:px-[40px] md:py-[20px] rounded-full hover:bg-[#e6732d] transition-colors shrink-0">
            <span className="font-['Poppins',sans-serif] font-bold text-lg md:text-[20px] text-white whitespace-nowrap">
              See All
            </span>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-[52px] overflow-x-auto snap-x snap-mandatory px-4 md:px-[71px] pb-8 pt-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <div key={index} className="snap-center shrink-0">
                <VideoCard {...video} />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-4 lg:left-[36px] top-1/2 -translate-y-1/2 z-20 items-center justify-center size-[60px] lg:size-[76px] bg-[#344054] rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            <div className="absolute inset-0 border-[6px] lg:border-8 border-white rounded-full pointer-events-none" />
            <div className="rotate-90 size-6 lg:size-8 relative">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 25.6215">
                <path d={svgPaths.p19a0d100} fill="#FCFCFD" />
              </svg>
            </div>
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-4 lg:right-[36px] top-1/2 -translate-y-1/2 z-20 items-center justify-center size-[60px] lg:size-[76px] bg-[#fd853a] rounded-full shadow-lg hover:bg-[#e6732d] transition-colors"
          >
            <div className="absolute inset-0 border-[6px] lg:border-8 border-white rounded-full pointer-events-none" />
            <div className="-rotate-90 size-6 lg:size-8 relative">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 25.6215">
                <path d={svgPaths.p19a0d100} fill="#FCFCFD" />
              </svg>
            </div>
          </button>
        </div>

        {/* Footer Content - Constrained width */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center gap-[48px]">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-[14px]">
            {["Cinematic Videos", "Reels Editing", "Motion graphics", "Long form videos", "Vlogs Videos"].map((tag) => (
              <div key={tag} className="bg-[#f2f4f7] flex items-center justify-center px-6 py-2 md:px-[32px] md:py-[15px] rounded-[24px]">
                <span className="font-sans font-normal text-sm md:text-[20px] text-black whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-[742px] text-center">
            <p className="font-['Poppins',sans-serif] font-normal text-[#344054] text-base md:text-[20px] leading-relaxed">
              I turn boring raw footage into high-retention Reels. Helping creators win the algorithm.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
