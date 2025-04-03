
import React from 'react';
import { Button } from './ui/button';
import CountdownTimer from './CountdownTimer';

interface CTAProps {
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {
  // Ustawienie daty wydarzenia na 23 kwietnia 2025, godzina 16:00
  const eventDate = new Date('2025-04-23T16:00:00');
  
  return (
    <section className={`w-full py-12 md:py-24 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dołącz do największej społeczności AI w Polsce
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Pierwszy meetup odbędzie się 23 kwietnia 2025 o godzinie 16:00 w Warszawie. Liczba miejsc ograniczona!
          </p>
          
          <CountdownTimer targetDate={eventDate} className="my-8" />
          
          <Button 
            className="bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80 transition-colors px-8 py-6 text-lg font-medium rounded-md"
            onClick={() => window.open('https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068', '_blank')}
          >
            Kup bilet teraz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
