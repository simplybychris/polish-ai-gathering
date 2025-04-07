import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const MeetupHero = () => {
  // Ustawienie daty wydarzenia na 23 kwietnia 2025, godzina 16:00
  const eventDate = new Date('2025-04-23T16:00:00');

  return (
    <section className='relative tech-pattern pt-20 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Pierwszy Meetup Polish AI Breakfasts</h1>
            <p className="text-white mb-8">Odkryj przyszłość AI razem z nami!</p>
            <div className='inline-block px-4 py-1 bg-[#3FAC78] rounded-full text-white mb-4'>
            23 kwietnia | Warszawa | Uczelnia Łazarskiego
            </div>
          </div>

          <div className='relative rounded-xl overflow-hidden'>
            <img
              src='/images/meetup-hero.jpg'
              alt='Polish AI Breakfasts Spotkanie'
              className='rounded-xl shadow-lg border border-[#56FF8F]/30 scale-[1.05]'
            />
            <div className='absolute -bottom-3 -right-3 w-full h-full border-2 border-[#56FF8F] rounded-lg -z-10'></div>
          </div>
        </div>
      </div>
      {/* Background animated shapes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <img src="/lovable-uploads/6beb4116-3a8a-4498-955c-de8087cfeefe.png" className="absolute bottom-40 left-20 w-16 h-16 animate-float opacity-30" style={{
          animationDelay: "1s"
        }} alt="Shape" />
        <img src="/lovable-uploads/04764754-6841-447e-bc33-ecc8f67dbd2d.png" className="absolute top-40 left-[10%] w-20 h-20 animate-float opacity-20" style={{
          animationDelay: "2s"
        }} alt="Shape" />
      </div> */}
    </section>
  );
};

export default MeetupHero;
