const organizers = [
  { id: 1, src: '/images/logos/organizators/infoshare.svg', alt: 'Infoshare' },
  { id: 2, src: '/images/logos/organizators/wm.svg', alt: 'Webmakers' },
  { id: 3, src: '/images/logos/organizators/cee-ai-hub.svg', alt: 'CEE AI Hub' },
  { id: 4, src: '/images/logos/organizators/lazarski.svg', alt: 'Uczelnia Łazarskiego' },
  { id: 5, src: '/images/logos/organizators/Dp_vision.svg', alt: 'DP Vision' },
  { id: 6, src: '/images/logos/organizators/wait.svg', alt: 'WAIT' },
  { id: 7, src: '/images/logos/organizators/liki.svg', alt: 'Liki' },
];

const partners = [
    { id: 1, src: '/images/logos/partners/aiba.svg', alt: 'AIBA' },
    { id: 2, src: '/images/logos/partners/benchy.svg', alt: 'Benchy.it' },
    { id: 3, src: '/images/logos/partners/bielik.svg', alt: 'Bielik' },
    { id: 4, src: '/images/logos/partners/concordia.svg', alt: 'Concordia Design' },
    { id: 6, src: '/images/logos/partners/huge-thing.svg', alt: 'Huge Thing' },
    { id: 7, src: '/images/logos/partners/inqube.svg', alt: 'inQUBE' },
    { id: 8, src: '/images/logos/partners/no_fluff_jobs.svg', alt: 'No Fluff Jobs' },
    { id: 9, src: '/images/logos/partners/polski_fundusz_rozwoju.svg', alt: 'Polski Fundusz Rozwoju' },
    { id: 10, src: '/images/logos/partners/pmb.svg', alt: 'Pitch me Baby' },
    { id: 11, src: '/images/logos/partners/soda.svg', alt: 'SoDA' },
    { id: 12, src: '/images/logos/partners/ssf.svg', alt: 'silesian startap foundation' },
    { id: 13, src: '/images/logos/partners/startup_harbour.svg', alt: 'STARTUP HARBOUR' },
    { id: 14, src: '/images/logos/partners/startup_wroclaw.svg', alt: 'Startup Wrocław' },
    { id: 15, src: '/images/logos/partners/lbkp.svg', alt: 'LBKP' },
    { id: 17, src: '/images/logos/partners/campusai.svg',   alt: 'Campus AI' },
    { id: 16, src: '/images/logos/partners/hugething.svg',  alt: 'Huge Thing' },
    { id: 17, src: '/images/logos/partners/mcsc.svg',       alt: 'MCSC' },
    { id: 18, src: '/images/logos/partners/movenscapital.svg', alt: 'Movens Capital' },
    { id: 19, src: '/images/logos/partners/personitit.svg', alt: 'Personit IT' },
    { id: 20, src: '/images/logos/partners/evento.svg',     alt: 'Evento' }
]

const sponsors = [
  { id: 1, src: '/images/logos/sponsors/aiba.svg', alt: 'AIBA' },
  { id: 2, src: '/images/logos/sponsors/benchy.svg', alt: 'Benchy.it' },
  { id: 3, src: '/images/logos/sponsors/no_fluff_jobs.svg', alt: 'No Fluff Jobs' },
  { id: 4, src: '/images/logos/sponsors/concordia.svg', alt: 'Concordia Design' },
  { id: 5, src: '/images/logos/sponsors/buyermind.svg', alt: 'BuyerMind' },
  { id: 6, src: '/images/logos/sponsors/aimlapi.svg', alt: 'AI/ML API' },
]

const OrganizersAndPartners = () => {
  return (
    <section className='py-24 relative tech-pattern'>
      <div className='container mx-auto px-4'>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#56FF8F]">Organizatorzy</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 place-items-center'>
          {organizers.map((logo) => (
            <div
              key={logo.id}
              className='flex justify-center items-center p-4'
            >
              <img src={logo.src} alt={logo.alt} className='max-h-20' />
            </div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mt-24 mb-12 text-[#56FF8F]">Partnerzy ekosystemowi</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 place-items-center'>
          {partners.map((logo) => (
            <div
              key={logo.id}
              className='flex justify-center items-center p-4'
            >
              <img src={logo.src} alt={logo.alt} className='max-h-20' />
            </div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mt-24 mb-12 text-[#56FF8F]">Sponsorzy konkursu</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 place-items-center'>
          {sponsors.map((logo) => (
            <div
              key={logo.id}
              className='flex justify-center items-center p-4'
            >
              <img src={logo.src} alt={logo.alt} className='max-h-20' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersAndPartners;
