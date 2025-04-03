
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-[100vh] flex items-center tech-pattern">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        
        <img src="/lovable-uploads/6beb4116-3a8a-4498-955c-de8087cfeefe.png" className="absolute bottom-40 left-20 w-16 h-16 animate-float opacity-30" style={{
        animationDelay: "1s"
      }} alt="Shape" />
        <img src="/lovable-uploads/04764754-6841-447e-bc33-ecc8f67dbd2d.png" className="absolute top-40 left-[10%] w-20 h-20 animate-float opacity-20" style={{
        animationDelay: "2s"
      }} alt="Shape" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white block mb-2">Polish AI</span>
            <span className="text-[#56FF8F] neon-glow">Breakfasts Meetup</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Pierwszy meetup: <span className="text-white font-semibold">23 kwietnia, środa</span> o <span className="text-white font-semibold">16:00</span>
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Dołącz do największej społeczności osób zainteresowanych sztuczną inteligencją w Polsce. Zdobądź praktyczną wiedzę, poznaj legendy Polish świata AI i nawiąż wartościowe kontakty branżowe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80">
              <a href="https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068" target="_blank" rel="noopener noreferrer">
                Zarejestruj się
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#56FF8F] text-[#56FF8F] hover:bg-[#56FF8F]/10">
              <a href="#agenda">Zobacz agendę</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
