
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/2ce08454-ea8d-43cb-a7c8-2ade8c77d487.png" 
            alt="Polish AI Breakfasts Logo" 
            className="h-10 green-glow"
          />
          <span className="ml-3 text-2xl font-bold text-white">Polish AI <span className="text-[#42DCA3]">Breakfasts</span></span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#agenda" className="text-white hover:text-[#42DCA3] transition-colors">Agenda</a>
          <a href="#o-nas" className="text-white hover:text-[#42DCA3] transition-colors">O nas</a>
          <a href="#dla-kogo" className="text-white hover:text-[#42DCA3] transition-colors">Dla kogo</a>
          <a href="#galeria" className="text-white hover:text-[#42DCA3] transition-colors">Galeria</a>
          <Button asChild className="bg-[#42DCA3] text-black hover:bg-[#42DCA3]/80">
            <a href="https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068" target="_blank" rel="noopener noreferrer">
              Zarejestruj się
            </a>
          </Button>
        </nav>
        <Button className="md:hidden bg-transparent hover:bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
