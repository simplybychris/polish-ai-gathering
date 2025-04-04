
const About = () => {
  return (
    <section id="o-nas" className="py-24 relative tech-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Polish AI <span className="text-[#56FF8F]">Breakfasts Meetup</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#56FF8F]">Poznaj naszą społeczność</h3>
            <p className="text-gray-300 mb-6">
              Polish AI Breakfasts Meetup to przestrzeń dla wszystkich zainteresowanych sztuczną inteligencją - od początkujących entuzjastów po doświadczonych ekspertów. Nasze spotkania to unikalna okazja do zdobycia praktycznej wiedzy, nawiązania kontaktów i wymiany doświadczeń w przyjaznej atmosferze.
            </p>
            <p className="text-gray-300">
              Podczas każdego spotkania zapewniamy wartościowe prezentacje, inspirujące dyskusje oraz networking z przedstawicielami branży AI. Dołącz do nas, aby być na bieżąco z najnowszymi trendami i technologiami w świecie sztucznej inteligencji.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/people.jpg" 
              alt="Polish AI Breakfasts Spotkanie" 
              className="rounded-lg shadow-lg border border-[#56FF8F]/30"
            />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#56FF8F] rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Co zyskasz na <span className="text-[#56FF8F]">pierwszym meetupie</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tech-card">
              <div className="h-12 w-12 rounded-full bg-[#56FF8F]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56FF8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Innowacyjne projekty</h4>
              <p className="text-gray-400">
                Prezentacje projektów wykorzystujących najnowsze technologie AI i machine learning, realizowanych przez liderów branży.
              </p>
            </div>
            <div className="tech-card">
              <div className="h-12 w-12 rounded-full bg-[#56FF8F]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56FF8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Eksperci branżowi</h4>
              <p className="text-gray-400">
                Spotkania z doświadczonymi specjalistami, którzy dzielą się wiedzą, praktycznymi wskazówkami i analizą rynku.
              </p>
            </div>
            <div className="tech-card">
              <div className="h-12 w-12 rounded-full bg-[#56FF8F]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56FF8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Praktyczne case study</h4>
              <p className="text-gray-400">
                Rzeczywiste przykłady zastosowania sztucznej inteligencji w różnych branżach z omówieniem wyzwań i rozwiązań.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
