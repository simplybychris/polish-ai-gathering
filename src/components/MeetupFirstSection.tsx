const MeetupFirstSection = () => {
  return (
    <section className='py-24 relative tech-pattern'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='relative'>
            <img
              src='/lovable-uploads/2ce08454-ea8d-43cb-a7c8-2ade8c77d487.png'
              alt='Polish AI Breakfasts Spotkanie'
              className='rounded-lg shadow-lg border border-[#56FF8F]/30'
            />
            <div className='absolute -bottom-3 -right-3 w-full h-full border-2 border-[#56FF8F] rounded-lg -z-10'></div>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-4 text-[#56FF8F]'>
              Dlaczego warto uczestniczyć?
            </h3>
            <ol className='text-gray-300 mb-6 list-inside list-disc'>
              <li>Networking z ekspertami AI</li>
              <li>Inspirujące prezentacje i case studies</li>
              <li>Możliwość prezentacji własnych projektów</li>
              <li>Dostęp do unikalnej społeczności AI w Polsce</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupFirstSection;
