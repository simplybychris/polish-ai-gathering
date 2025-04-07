import { Button } from './ui/button';

const MeetupGoals = () => {
  return (
    <section className='py-12 tech-pattern'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='col-span-1 md:col-span-2'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              <span className='text-white border-[#56FF8F] py-2 border-b px-8'>
                Główne cele
              </span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 h-full'>
              <div className='flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg'>
                <p className='text-gray-300'>
                  <span className='text-[#56FF8F]'>Łączymy</span> ekspertów AI,
                  naukowców i praktyków technologicznych – by{' '}
                  <span className='text-[#56FF8F]'>wymieniać się wiedzą</span>,
                  najnowszymi odkryciami i najlepszymi praktykami.
                </p>
              </div>
              <div className='flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg'>
                <p className='text-gray-300'>
                  Tworzymy{' '}
                  <span className='text-[#56FF8F]'>efektywny networking</span> –
                  dajemy możliwość nawiązywania współpracy między startupami,
                  inwestorami, specjalistami oraz liderami biznesu.
                </p>
              </div>
              <div className='flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg'>
                <p className='text-gray-300'>
                  <span className='text-[#56FF8F]'>Wspieramy</span> rozwój
                  innowacji AI –{' '}
                  <span className='text-[#56FF8F]'>pomagamy startupom</span>{' '}
                  zdobyć inwestorów, klientów oraz rozpoznawalność w skali
                  kraju.
                </p>
              </div>
              <div className='flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg'>
                <p className='text-gray-300'>
                  Angażujemy społeczności lokalne –{' '}
                  <span className='text-[#56FF8F]'>łączymy</span> dotychczas
                  osobne inicjatywy z różnych miast, tworząc jedno silne
                  środowisko AI w Polsce.
                </p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-16'>
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
        </div>
      </div>
    </section>
  );
};

export default MeetupGoals;
