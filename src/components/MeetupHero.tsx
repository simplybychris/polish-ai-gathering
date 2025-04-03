
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
            <div className="bg-[#111a2f] p-6 rounded-xl text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#56FF8F] flex items-center justify-center text-black font-bold mr-3">
                  🏆
                </div>
                <h3 className="text-xl font-bold text-[#56FF8F]">Konkurs dla startupów</h3>
              </div>
              <p className="text-gray-300">
                Podczas pierwszego meetupu odbędzie się wyjątkowy konkurs dla startupów AI. Najlepsze projekty będą miały szansę na nagrody, mentoring i potencjalne inwestycje. Szczegóły konkursu zostaną ogłoszone podczas wydarzenia.
              </p>
            </div>
            
            <div className="bg-[#111a2f] p-6 rounded-xl text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#56FF8F] flex items-center justify-center text-black font-bold mr-3">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-[#56FF8F]">Dlaczego warto uczestniczyć?</h3>
              </div>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Networking z ekspertami AI</li>
                <li>Inspirujące prezentacje i case studies</li>
                <li>Możliwość prezentacji własnych projektów</li>
                <li>Dostęp do unikalnej społeczności AI w Polsce</li>
              </ul>
            </div>
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
