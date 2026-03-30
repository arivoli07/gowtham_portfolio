import React from "react";
import imgHyderbadiBiryani1 from "../../assets/083c0bef280d9aa6abdc6da8f8295e6c79ec6b81.png";
import img0QBbtmFgl149TPwMvmI1UU6GHe1 from "../../assets/2c8cab39aa250342fb2a792b93b6cfa826708bdf.png";
import imgSpeakers1 from "../../assets/302bce4d497d6e32e29e0aa3d42bba13da9cf906.png";
import imgWatd0Rm7EfXMxTrZsS9VqlX8QKu1 from "../../assets/bafe047053a96363c05aa0626fcc2d36855608bb.png";
import imgVdart31 from "../../assets/373126aa8ef000a7125a22ac27aa8dd3c92ee668.png";
import imgAppleWatch1 from "../../assets/f57033399ceff057a2eda0a06605a9b5266e6df4.png";
import imgChristmas1 from "../../assets/ac7b48a229ad20d2797656394cc45b6105b6d45e.png";
import imgVdart21 from "../../assets/39bbd2d2036e1d027c7bd0d8df8e96cff437bd6f.png";
import imgBurger1 from "../../assets/157cbe3fbceba3863c040fe31b2cad06c2ab30a8.png";
import imgTeachersDayInvitation1 from "../../assets/3814baa1de42e542ee7423ed9c4088994995cc9e.png";
import imgChristmas21 from "../../assets/5b23a7ee7086285d2d44802cfec59f50c53cdf25.png";
import imgCodexBlitz1 from "../../assets/5bf626b17f5c23a1c2cb2a260fd201651b451951.png";
import imgShortFilmPoster1 from "../../assets/66e74b131240beb041e9d49d898014dfdfab58e6.png";
import imgVDart11 from "../../assets/194667be4a7a6e07ec2f8a91a684360f365e6ce8.png";
import imgAppleWatchP1 from "../../assets/b1e0186b641708b5452abb5ab5ce589caa6ce4a6.png";
import imgHeadphones21 from "../../assets/ea7ab4a3447ebdb61ac2df5875c7c1f348bcbbce.png";
import imgDindigulBiryani1 from "../../assets/d6137405581dc275c862aea136fd4c723c5cf1e4.png";
import imgAirpods1 from "../../assets/83dbd56a3a4d4afae7ea7ec779e31c07f8076923.png";

function PosterImage({ src, width, height, alt }: { src: string, width: number, height: number, alt: string }) {
  return (
    <div 
      className="relative rounded-[20px] md:rounded-[35px] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.65)] shrink-0 overflow-hidden group cursor-pointer"
      style={{
        aspectRatio: `${width}/${height}`,
        height: '100%',
        maxHeight: '504px'
      }}
    >
      <img 
        alt={alt} 
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" 
        src={src} 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

export function PosterDesigningSection() {
  const row1 = [
    { src: imgHyderbadiBiryani1, width: 504, height: 504, alt: "Hyderbadi Biryani" },
    { src: img0QBbtmFgl149TPwMvmI1UU6GHe1, width: 359, height: 504, alt: "0QBbtm" },
    { src: imgSpeakers1, width: 404, height: 504, alt: "Speakers" },
    { src: imgWatd0Rm7EfXMxTrZsS9VqlX8QKu1, width: 504, height: 504, alt: "WATD" },
    { src: imgVdart31, width: 403, height: 504, alt: "Vdart 3" },
    { src: imgAppleWatch1, width: 404, height: 504, alt: "Apple Watch" },
    { src: imgChristmas1, width: 404, height: 504, alt: "Christmas" },
    { src: imgVdart21, width: 404, height: 504, alt: "Vdart 2" },
    { src: imgBurger1, width: 504, height: 504, alt: "Burger" },
    { src: imgTeachersDayInvitation1, width: 356, height: 504, alt: "Teachers Day" },
  ];

  const row2 = [
    { src: imgChristmas21, width: 896, height: 504, alt: "Christmas 2" },
    { src: imgCodexBlitz1, width: 711, height: 504, alt: "Codex Blitz" },
    { src: imgShortFilmPoster1, width: 357, height: 504, alt: "Short Film" },
    { src: imgVDart11, width: 403, height: 504, alt: "VDart 1" },
    { src: imgAppleWatchP1, width: 404, height: 504, alt: "Apple Watch P" },
    { src: imgHeadphones21, width: 403, height: 504, alt: "Headphones 2" },
    { src: imgDindigulBiryani1, width: 896, height: 504, alt: "Dindigul Biryani" },
    { src: imgAirpods1, width: 403, height: 504, alt: "Airpods" },
  ];

  return (
    <section className="bg-white flex flex-col items-center justify-center w-full py-16 md:py-24 overflow-hidden">
      <div className="w-full flex flex-col gap-12 md:gap-[53px]">
        
        {/* Header - Constrained width */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-[71px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col font-['Lufga',sans-serif] font-bold text-[#344054]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-[64px] leading-tight">
              <span>Lets have a look at my </span>
              <span className="text-[#fd853a]">Poster Designing</span>
            </h2>
          </div>
          <a href="https://www.behance.net/ngowtham" target="_blank" rel="noopener noreferrer" className="bg-[#fd853a] cursor-pointer inline-flex items-center justify-center px-8 py-4 md:px-[40px] md:py-[20px] rounded-full hover:bg-[#e6732d] transition-colors shrink-0">
            <span className="font-['Poppins',sans-serif] font-bold text-lg md:text-[20px] text-white whitespace-nowrap">
              See All
            </span>
          </a>
        </div>

        {/* Rows Container */}
        <div className="w-full flex flex-col gap-8 md:gap-[20px] group overflow-hidden relative py-4">
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              animation: marquee-left 60s linear infinite;
            }
            .animate-marquee-right {
              animation: marquee-right 60s linear infinite;
            }
          `}</style>

          {/* Row 1 - Left to Right */}
          <div className="flex w-max animate-marquee-right [animation-play-state:paused] group-hover:[animation-play-state:running]">
            <div className="flex gap-4 md:gap-[32px] shrink-0 pr-4 md:pr-[32px]">
              {row1.map((item, idx) => (
                <div key={`r1-a-${idx}`} className="shrink-0 h-[250px] md:h-[350px] lg:h-[504px]">
                  <PosterImage {...item} />
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-[32px] shrink-0 pr-4 md:pr-[32px]">
              {row1.map((item, idx) => (
                <div key={`r1-b-${idx}`} className="shrink-0 h-[250px] md:h-[350px] lg:h-[504px]">
                  <PosterImage {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex w-max animate-marquee-left [animation-play-state:paused] group-hover:[animation-play-state:running]">
            <div className="flex gap-6 md:gap-[85px] shrink-0 pr-6 md:pr-[85px]">
              {row2.map((item, idx) => (
                <div key={`r2-a-${idx}`} className="shrink-0 h-[250px] md:h-[350px] lg:h-[504px]">
                  <PosterImage {...item} />
                </div>
              ))}
            </div>
            <div className="flex gap-6 md:gap-[85px] shrink-0 pr-6 md:pr-[85px]">
              {row2.map((item, idx) => (
                <div key={`r2-b-${idx}`} className="shrink-0 h-[250px] md:h-[350px] lg:h-[504px]">
                  <PosterImage {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-[71px] flex flex-col items-center gap-[48px] mt-4 md:mt-0">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-[14px]">
            {["Posters", "Thumbnails", "Certificates", "Banners", "Invitation card"].map((tag) => (
              <div key={tag} className="bg-[#f2f4f7] flex items-center justify-center px-6 py-2 md:px-[32px] md:py-[15px] rounded-[24px]">
                <span className="font-sans font-normal text-sm md:text-[20px] text-black whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-[752px] text-center">
            <p className="font-['Poppins',sans-serif] font-normal text-[#344054] text-base md:text-[20px] leading-relaxed tracking-[-0.3px]">
              Crafting cohesive visuals that bridge the gap between creative storytelling and functional design.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
