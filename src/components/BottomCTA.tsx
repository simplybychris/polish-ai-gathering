
import React from 'react';
import { Button } from './ui/button';
import CountdownTimer from './CountdownTimer';

const BottomCTA = () => {
  // Ustawienie daty wydarzenia na 23 kwietnia 2025, godzina 16:00
  const eventDate = new Date('2025-04-23T16:00:00');
  
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a1122] to-[#12203a]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nie przegap pierwszego meetupu Polish AI Breakfasts!
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Zostało już niewiele czasu! Dołącz do największego wydarzenia AI w Polsce i bądź częścią dynamicznie rozwijającej się społeczności.
          </p>
          
          <div className="bg-[#111a2f] p-8 rounded-xl w-full max-w-3xl mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#56FF8F]">
              Do wydarzenia pozostało:
            </h3>
            
            <CountdownTimer targetDate={eventDate} className="mb-8" />
            
            <div className="flex flex-col items-center">
              <p className="text-lg mb-6">
                23 kwietnia 2025, godz. 16:00 | Warszawa
              </p>
              
              <Button 
                className="bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80 transition-colors px-8 py-6 text-lg font-medium rounded-md"
                onClick={() => window.open('https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068', '_blank')}
              >
                Kup bilet teraz
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            Liczba miejsc ograniczona. Zapewnij sobie miejsce już teraz!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
