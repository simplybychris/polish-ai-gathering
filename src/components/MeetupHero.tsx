
import { Button } from "@/components/ui/button";
import CountdownTimer from './CountdownTimer';

const MeetupHero = () => {
  // Ustawienie daty wydarzenia na 23 kwietnia 2025, godzina 16:00
  const eventDate = new Date('2025-04-23T16:00:00');

  return (
    <section className="relative min-h-[80vh] flex items-center tech-pattern">
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
          <div className="inline-block px-4 py-1 bg-[#56FF8F]/20 rounded-full text-[#56FF8F] mb-4">
            23 kwietnia 2025 | Warszawa
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white block mb-2">Pierwszy Meetup</span>
            <span className="text-[#56FF8F] neon-glow">Polish AI Breakfasts</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Odkryj przyszłość AI razem z nami!
          </p>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl mb-10">
            <h3 className="text-lg font-medium mb-3">Do wydarzenia pozostało:</h3>
            <CountdownTimer targetDate={eventDate} className="mb-0" />
          </div>
          
          <Button 
            className="bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80 px-8 py-6 text-lg font-medium rounded-md"
            onClick={() => window.open('https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068', '_blank')}
          >
            Kup bilet teraz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetupHero;
