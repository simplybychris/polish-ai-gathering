const MeetupFirstChallenge = () => {
  return (
    <section className='py-12 relative tech-pattern'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
          <span className='text-white border-[#56FF8F] py-2 border-b px-8'>
            PAIB First Challange
          </span>
        </h2>
        <div className='grid md:grid-cols-2 gap-12 items-center pb-20'>
          <div>
            <p>
              Celem konkursu jest identyfikacja i wsparcie najbardziej
              obiecujących startupów działających  w obszarze sztucznej
              inteligencji oraz umożliwienie im zaprezentowania się przed
              inwestorami, ekspertami oraz społecznością AI.
            </p>

            <div className='flex items-center mt-4 gap-8'>
              <p className='text-[#56FF8F]'>Powered by</p>
              <img
                src='/images/pmb-logo.png'
                alt='Pitch Me Baby'
                className='rounded-lg shadow-lg h-16'
              />
            </div>
          </div>

          <div className='relative'>
            <img
              src='/images/paib-challenge.png'
              alt='PAIB Challange'
              className='rounded-lg shadow-lg'
            />
            <div className='absolute -bottom-3 -right-3 w-full h-full border-2 border-[#56FF8F] rounded-lg -z-10'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupFirstChallenge;
