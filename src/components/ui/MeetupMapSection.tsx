import { Button } from './button';

const MeetupMapSection = () => {
  return (
    <section className='py-12 relative tech-pattern'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
          <span className='text-white'>Łączymy ludzi dzięki AI</span>
        </h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='text-gray-300 mb-12'>
              W ostatnich latach w Polsce dynamicznie rozwinęły się liczne
              lokalne społeczności skupione wokół sztucznej inteligencji.
              Spotykają się regularnie, organizują wydarzenia i rozwijają
              lokalne ekosystemy w takich miastach jak Warszawa, Gdańsk czy
              Katowice.
            </p>
            <p className='text-gray-300'>
              Do tej pory brakowało jednak przestrzeni, gdzie wszystkie te
              środowiska mogłyby się spotkać, wymienić doświadczeniami i
              nawiązać współpracę.
            </p>
          </div>

          <div className='relative'>
            <img
              src='/images/poland-map.svg'
              alt='Polish AI Breakfasts Spotkanie'
              className='rounded-lg shadow-lg'
            />
            <div className='absolute -bottom-3 -right-3 w-full h-full border-2 border-[#56FF8F] rounded-lg -z-10'></div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <Button
            className='bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80 transition-colors px-8 py-6 text-lg font-medium rounded-md'
            onClick={() =>
              window.open(
                'https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068',
                '_blank'
              )
            }
          >
            Kup bilet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetupMapSection;
