import image_0ef5d9fab626e9ddf6e708faf60db6a3bce568d3 from '/src/assets/0ef5d9fab626e9ddf6e708faf60db6a3bce568d3.png'
import React from "react";
import svgPaths from "../../imports/svg-loxo03u1og";
import imgFrame56 from "/src/assets/0ef5d9fab626e9ddf6e708faf60db6a3bce568d3.png";

// Reusable SVG Components based on exact Figma paths
function StarIcon() {
  return (
    <div className="relative shrink-0 size-[24px] md:size-[34px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.pf2f200} fill="#FD853A" />
      </svg>
    </div>
  );
}

function SmsIcon() {
  return (
    <svg className="block size-8" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={svgPaths.p296a700} fill="#FD853A" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="block size-[32px] md:size-[42px]" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
      <path d="M12.25 29.75L29.75 12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12.25 12.25H29.75V29.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function SendMiniIcon() {
  return (
    <svg className="block size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8089 18.7572">
      <path d={svgPaths.p23860230} fill="#FCFCFD" />
    </svg>
  );
}

// Social Icons
function SocialWhatsapp() {
  return (
    <a href="https://wa.me/qr/LRMOXVTMILF3E1" className="block relative size-6 hover:scale-110 transition-transform">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p3adb3370} fill="white" />
      </svg>
    </a>
  );
}

function SocialInstagram() {
  return (
    <a href="https://www.instagram.com/editor_gowtham_?igsh=MW4zNndtNmxwODFlNw==" className="block relative size-6 hover:scale-110 transition-transform">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p21f20f80} fill="white" />
      </svg>
    </a>
  );
}

function SocialEmail() {
  return (
    <a href="mailto:gowthamn1012@gmail.com" className="block relative size-[23px] hover:scale-110 transition-transform">
      <div className="absolute inset-[11.46%_5.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6042 17.7292">
          <path clipRule="evenodd" d={svgPaths.p21eec00} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </a>
  );
}

function SocialLinkedin() {
  return (
    <a href="https://www.linkedin.com/in/gowtham-nallamuthu-79b399321/" className="block relative size-[22px] hover:scale-110 transition-transform">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <path d={svgPaths.p155cb600} fill="white" />
      </svg>
    </a>
  );
}

function SocialBehance() {
  return (
    <a href="https://www.behance.net/ngowtham" className="block relative size-[24px] hover:scale-110 transition-transform">
      <div className="absolute inset-[6.25%_6.24%_6.24%_6.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0027 21.0027">
          <path d={svgPaths.p29eda580} fill="white" />
        </svg>
      </div>
    </a>
  );
}

export function FooterSection() {
  const marqueeItems = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];

  return (
    <section className="bg-white flex flex-col items-center w-full pt-10 md:pt-[40px]">
      
      {/* 1. Marquee Banner */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 mb-16 md:mb-[98px]">
        <div className="bg-[#fb6514] w-full h-[100px] md:h-[147px] relative rounded-br-[24px] rounded-tl-[24px] overflow-hidden flex items-center justify-center shadow-lg group">
          <style>{`
            @keyframes marquee-linear {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-banner {
              animation: marquee-linear 25s linear infinite;
            }
          `}</style>
          
          {/* Angled White Strip */}
          <div className="absolute w-[150%] md:w-[120%] h-[50px] md:h-[75px] bg-white -rotate-2 flex items-center overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <div className="flex w-max animate-marquee-banner group-hover:[animation-play-state:paused] items-center">
              {/* Double array for seamless loop */}
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[10px] md:gap-[15px] px-[10px] md:px-[15px] shrink-0">
                  <span className="font-['Poppins',sans-serif] text-[28px] md:text-[48px] text-black tracking-[-0.72px] whitespace-nowrap">
                    {item}
                  </span>
                  <StarIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Prompt */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-[40px] mb-16 md:mb-[98px]">
        <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-[64px] text-center text-[#344054] tracking-[-0.96px] leading-[1.2] max-w-[800px]">
          <span>Have an Awsome Project Idea? </span>
          <span className="text-[#fd853a]">Let’s Discuss</span>
        </h2>
        
        <div className="w-full max-w-[832px] border border-[#e4e7ec] rounded-[30px] md:rounded-[50px] p-2 md:p-[14px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 w-full sm:w-auto pl-2 md:pl-0">
            <div className="bg-[#ffead5] w-[50px] h-[50px] md:w-[64px] md:h-[58px] rounded-[50px] flex items-center justify-center shrink-0">
              <SmsIcon />
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="flex-1 bg-transparent border-none outline-none font-['Urbanist',sans-serif] font-medium text-[16px] md:text-[20px] text-black tracking-[-0.3px] placeholder:text-gray-400 min-w-[200px]"
            />
          </div>
          <button className="bg-[#fd853a] hover:bg-[#e6732d] transition-colors w-full sm:w-auto px-8 py-3 md:px-[40px] md:py-[20px] rounded-[60px] flex items-center justify-center shrink-0">
            <span className="font-['Urbanist',sans-serif] font-medium text-[18px] md:text-[20px] text-white tracking-[-0.3px]">
              Send
            </span>
          </button>
        </div>
      </div>

      {/* 3. Dark Footer Main */}
      <footer className="w-full bg-[#272727] rounded-t-[24px] md:rounded-t-[40px] px-6 md:px-[40px] lg:px-[71px] pt-12 md:pt-[60px] pb-8 flex flex-col">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-4xl md:text-5xl lg:text-[64px] text-[#fcfcfd] tracking-[-0.96px] leading-[1.1]">
            Lets Connect there
          </h2>
          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-[#fd853a] hover:bg-[#e6732d] transition-transform hover:scale-105 flex items-center justify-center gap-2 px-[20px] py-[10px] rounded-[60px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] font-medium text-[20px] md:text-[25.69px] text-white tracking-[-0.38px]">
              Hire me
            </span>
            <ArrowUpRight />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#475467] mb-12 md:mb-[50px]" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-[60px] mb-12 md:mb-[50px]">
          
          {/* Col 1: Profile */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-[56px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-[9px]">
                <div className="bg-gradient-to-r from-[#fd853a] to-[#fd853a] p-[2px] rounded-[50px] shrink-0">
                  <div className="rounded-[50px] overflow-hidden size-[44px]">
                    <img src={image_0ef5d9fab626e9ddf6e708faf60db6a3bce568d3} alt="Gowtham" className="w-full h-full object-cover scale-[1.75] origin-top" />
                  </div>
                </div>
                <span className="font-['Poppins',sans-serif] font-medium text-[20px] text-white tracking-[-0.3px]">
                  Gowtham
                </span>
              </div>
              <p className="font-['Poppins',sans-serif] text-[16px] md:text-[20px] text-[#fcfcfd] tracking-[-0.3px] leading-relaxed max-w-[635px]">
                Have a project, idea, or role in mind?<br />
                Feel free to reach out—I'm always open to collaborations, freelance work, and new opportunities. Let’s build something meaningful together.
              </p>
            </div>
            <div className="flex items-center gap-[11px]">
              <SocialWhatsapp />
              <SocialInstagram />
              <SocialEmail />
              <SocialLinkedin />
              <SocialBehance />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-[28px]">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#fd853a] tracking-[-0.3px]">
              Navigation
            </h3>
            <div className="flex flex-col gap-[20px] font-['Poppins',sans-serif] text-[16px] text-[#fcfcfd] tracking-[-0.24px]">
              <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#fd853a] transition-colors">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#fd853a] transition-colors">About Us</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#fd853a] transition-colors">Service</a>
              <a href="https://drive.google.com/file/d/1v2jUoGQZCjjWCCprGsCjLl1i7r4mo1In/view" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd853a] transition-colors">Resume</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#fd853a] transition-colors">Project</a>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3 flex flex-col gap-[28px]">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#fd853a] tracking-[-0.3px]">
              Contact
            </h3>
            <div className="flex flex-col gap-[20px] font-['Roboto',sans-serif] text-[16px] text-[#fcfcfd] tracking-[-0.24px]">
              <a href="tel:+918220078976" className="hover:text-[#fd853a] transition-colors">+91 8220078976</a>
              <a href="mailto:gowthamn1012@gmail.com" className="hover:text-[#fd853a] transition-colors">gowthamn1012@gmail.com</a>
              <a href="https://www.instagram.com/editor_gowtham_?igsh=MW4zNndtNmxwODFlNw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd853a] transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/gowtham-nallamuthu-79b399321/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd853a] transition-colors">LinkedIn</a>
              <a href="https://www.behance.net/ngowtham" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd853a] transition-colors">Behance</a>
            </div>
          </div>

          {/* Col 4: Mini Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-[28px]">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#fd853a] tracking-[-0.3px]">
              Get the latest information
            </h3>
            <div className="flex w-full max-w-[304px] group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white h-[51px] flex-1 rounded-l-[14px] px-[14px] text-[16px] text-black tracking-[-0.24px] font-['Poppins',sans-serif] outline-none"
              />
              <button className="bg-[#fd853a] hover:bg-[#e6732d] transition-colors h-[51px] w-[46px] rounded-r-[14px] flex items-center justify-center shrink-0">
                <SendMiniIcon />
              </button>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#475467] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#fcfcfd] opacity-80">
          <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[20px] tracking-[-0.3px]">
            Copyright© 2026. All Rights Reserved.
          </p>
          <p className="font-['Poppins',sans-serif] text-[14px] md:text-[20px] tracking-[-0.3px]">
            User Terms & Conditions | Privacy Policy
          </p>
        </div>

      </footer>
    </section>
  );
}
