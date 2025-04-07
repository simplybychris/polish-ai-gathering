const organizers = [
  { id: 1, src: '/images/logos/organizators/infoshare.svg', alt: 'Infoshare' },
  { id: 2, src: '/images/logos/organizators/wm.svg', alt: 'Webmakers' },
  { id: 3, src: '/images/logos/organizators/cee-ai-hub.svg', alt: 'CEE AI Hub' },
  { id: 4, src: '/images/logos/organizators/lazarski.svg', alt: 'Uczelnia Łazarskiego' },
  { id: 5, src: '/images/logos/organizators/Dp_vision.svg', alt: 'DP Vision' },
  { id: 6, src: '/images/logos/organizators/wait.svg', alt: 'WAIT' },
  { id: 7, src: '/images/logos/organizators/liki.svg', alt: 'Liki' },
];

const OrganizersAndPartners = () => {
  return (
    <section id='o-nas' className='py-24 relative tech-pattern'>
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
      </div>
    </section>
  );
};

export default OrganizersAndPartners;
