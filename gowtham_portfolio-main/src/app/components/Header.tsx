import imgFrame56 from "../../assets/0ef5d9fab626e9ddf6e708faf60db6a3bce568d3.png";
import { useState, useEffect } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const leftLinks = [
    { text: "Home", targetId: "home" },
    { text: "About", targetId: "about" },
    { text: "Service", targetId: "services" },
  ];
  const rightLinks = [
    { text: "Resume", href: "https://drive.google.com/file/d/1v2jUoGQZCjjWCCprGsCjLl1i7r4mo1In/view?usp=sharing" },
    { text: "Project", targetId: "projects" },
    { text: "Contact", targetId: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      let currentSection = 'home';
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full flex justify-center pt-8 sticky top-0 z-50">
      <nav className="backdrop-blur-[7.5px] bg-[#171717] border border-white rounded-[50px] w-full max-w-[1298px] mx-4 shadow-lg relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-[10px] h-[72px]">
          <div className="flex items-center justify-start gap-1 min-w-0">
            {leftLinks.map((link) => (
              <NavLink
                key={link.text}
                text={link.text}
                targetId={link.targetId}
                isActive={activeSection === link.targetId}
              />
            ))}
          </div>

          <div className="flex items-center justify-center px-5 py-2 rounded-[60px]">
            <div className="flex items-center gap-[9px]">
              <div className="bg-gradient-to-r from-[#fd853a] to-[#fd853a] p-[2px] rounded-[50px] size-[48px] shrink-0">
                <div className="rounded-[50px] size-[44px] overflow-hidden">
                  <img alt="Gowtham" className="h-[175%] w-full object-cover -mt-[37.5%]" src={imgFrame56} />
                </div>
              </div>
              <p className="font-['Poppins'] font-medium text-[20px] text-white tracking-[-0.3px] whitespace-nowrap leading-normal">
                Gowtham
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-1 min-w-0">
            {rightLinks.map((link) => (
              link.href ? (
                <a
                  key={link.text}
                  className="px-8 py-5 rounded-[60px] hover:bg-white/5 transition-colors"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-['Poppins'] text-[20px] text-white tracking-[-0.3px] whitespace-nowrap leading-normal">
                    {link.text}
                  </p>
                </a>
              ) : (
                <NavLink
                  key={link.text}
                  text={link.text}
                  targetId={link.targetId}
                  isActive={activeSection === link.targetId}
                />
              )
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <NavLink text="Home" targetId="home" isActive={activeSection === 'home'} isMobileHeader />
          
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#fd853a] to-[#fd853a] p-[2px] rounded-full size-10">
              <div className="rounded-full size-9 overflow-hidden">
                <img alt="Gowtham" className="h-full w-full object-cover" src={imgFrame56} />
              </div>
            </div>
            <p className="font-['Poppins'] font-medium text-base text-white hidden sm:block leading-normal">
              Gowtham
            </p>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#171717] border border-white rounded-[24px] p-4 flex flex-col gap-2 shadow-xl">
            <MobileNavLink text="About" targetId="about" isActive={activeSection === 'about'} setIsOpen={setIsMobileMenuOpen} />
            <MobileNavLink text="Service" targetId="services" isActive={activeSection === 'services'} setIsOpen={setIsMobileMenuOpen} />
            <a 
              className="px-6 py-2.5 rounded-[60px] text-white font-['Poppins'] text-lg hover:bg-white/10 transition-colors" 
              href="https://drive.google.com/file/d/1v2jUoGQZCjjWCCprGsCjLl1i7r4mo1In/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
            <MobileNavLink text="Project" targetId="projects" isActive={activeSection === 'projects'} setIsOpen={setIsMobileMenuOpen} />
            <MobileNavLink text="Contact" targetId="contact" isActive={activeSection === 'contact'} setIsOpen={setIsMobileMenuOpen} />
          </div>
        )}
      </nav>
    </header>
  );
}

function MobileNavLink({ text, targetId, isActive, setIsOpen }: { text: string; targetId?: string; isActive?: boolean; setIsOpen: (val: boolean) => void }) {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <button 
      onClick={handleClick}
      className={`text-left px-6 py-3 rounded-[60px] font-['Poppins'] text-lg transition-colors ${
        isActive ? "bg-[#fd853a] text-white font-bold" : "text-white hover:bg-white/10"
      }`}
    >
      {text}
    </button>
  );
}

function NavLink({ text, targetId, isActive, isMobileHeader }: { text: string; targetId?: string; isActive?: boolean; isMobileHeader?: boolean }) {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`cursor-pointer transition-colors ${
        isActive ? "bg-[#fd853a]" : "hover:bg-white/5"
      } ${isMobileHeader ? "px-6 py-2 rounded-[60px]" : "px-[32px] py-[14px] rounded-[60px]"}`}
    >
      <p className={`font-['Poppins'] text-white tracking-[-0.3px] whitespace-nowrap leading-normal ${
        isMobileHeader ? "text-base" : "text-[20px]"
      } ${isActive ? "font-bold" : ""}`}>
        {text}
      </p>
    </div>
  );
}
