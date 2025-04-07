const MeetupTargetAudience = () => {
  return (
    <section className='py-12 tech-pattern'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='col-span-1 md:col-span-2'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              <span className='text-white py-2 px-8'>
                Dla kogo?
              </span>
            </h2>
            <p className='mb-8'>
              Sztuczna inteligencja spaja nas wszystkich – niezależnie od tego,
              czy tworzysz startup, prowadzisz biznes, rozwijasz technologie
              jako ekspert, czy po prostu fascynujesz się AI. Podczas Polish AI
              Breakfasts - Meetup każda grupa znajduje przestrzeń dla siebie
            </p>
            <div className='grid md:grid-cols-2 gap-12 items-center mb-12'>
              <div>
                <ol className='list-none list-inside text-white [counter-reset:custom-counter] flex flex-col gap-8'>
                    <li className="[counter-increment:custom-counter] before:tabular-nums before:float-left before:content-[counter(custom-counter)] before:pr-4 before:font-semibold before:text-xl text-left"><span className="flow-root"><span className="text-[#56FF8F]">Entuzjaści AI</span> – zdobywają nowe inspiracje, rozwijają umiejętności i poznają trendy świata sztucznej inteligencji.</span></li>
                    <li className="[counter-increment:custom-counter] before:tabular-nums before:float-left before:content-[counter(custom-counter)] before:pr-4 before:font-semibold before:text-xl text-left"><span className="flow-root"><span className="text-[#56FF8F]">Naukowcy i specjaliści</span> – wymieniają się wiedzą ekspercką, zderzają idee i budują interdyscyplinarne partnerstwa.</span></li>
                    <li className="[counter-increment:custom-counter] before:tabular-nums before:float-left before:content-[counter(custom-counter)] before:pr-4 before:font-semibold before:text-xl text-left"><span className="flow-root"><span className="text-[#56FF8F]">Startupy</span> – prezentują swoje innowacyjne rozwiązania, zdobywają widoczność, nowych klientów oraz pozyskują inwestorów.</span></li>
                    <li className="[counter-increment:custom-counter] before:tabular-nums before:float-left before:content-[counter(custom-counter)] before:pr-4 before:font-semibold before:text-xl text-left"><span className="flow-root"><span className="text-[#56FF8F]">Przedstawiciele biznesu i inwestorzy</span> – poznają innowacyjne startupy, mają bezpośredni dostęp do eksperckiej wiedzy oraz znajdują partnerów do współpracy.</span></li>
                </ol>
              </div>

              <div className='relative'>
                <img
                  src='/images/target-audience.svg'
                  alt='Polish AI Breakfasts Dla kogo'
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute w-full h-full  rounded-lg -z-10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupTargetAudience;
