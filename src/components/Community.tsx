
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="w-full py-12 md:py-24 bg-[#0a1122]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Poznaj naszą społeczność
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl">
            Polish AI Breakfasts łączy pasjonatów sztucznej inteligencji z całej Polski, tworząc przestrzeń do wymiany wiedzy, nawiązywania kontaktów i wspólnego rozwoju.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/338a67e3-8d08-42b3-aef4-9a0a87fc218c.png" 
              alt="AI community discussion" 
              className="rounded-lg w-full h-auto object-cover shadow-lg" 
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#56FF8F]">Jesteśmy w całej Polsce</h3>
                <p className="text-gray-300">
                  Nasze community skupia entuzjastów AI z różnych miast Polski - od Warszawy przez Poznań, Kraków, Gdańsk, po Wrocław, Katowice i Rzeszów. Razem tworzymy silną sieć ekspertów, entuzjastów i firm działających w obszarze sztucznej inteligencji.
                </p>
              </div>

              <div className="flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#56FF8F]">Łączymy różnorodne perspektywy</h3>
                <p className="text-gray-300">
                  Nasze spotkania gromadzą przedstawicieli startupów, korporacji, świata nauki i entuzjastów AI, tworząc unikalną przestrzeń do wymiany doświadczeń i perspektyw na rozwój sztucznej inteligencji w Polsce.
                </p>
              </div>

              <div className="flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#56FF8F]">Budujemy ekosystem AI</h3>
                <p className="text-gray-300">
                  Poprzez regularne wydarzenia, warsztaty i inicjatywy wspieramy rozwój ekosystemu AI w Polsce, pomagając startupom w pozyskiwaniu inwestycji, ekspertom w dzieleniu się wiedzą, a firmom w znajdywaniu innowacyjnych rozwiązań.
                </p>
              </div>

              <div className="flex flex-col space-y-4 bg-[#111a2f] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#56FF8F]">Wspieramy networking</h3>
                <p className="text-gray-300">
                  Tworzymy przestrzeń do nawiązywania wartościowych kontaktów biznesowych i technologicznych. Podczas naszych spotkań inwestorzy spotykają innowacyjne startupy, eksperci dzielą się wiedzą, a entuzjaści znajdują mentorów.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="/meetup" 
            className="inline-flex items-center rounded-md bg-[#56FF8F] px-6 py-3 text-lg font-medium text-black hover:bg-[#56FF8F]/80 transition-colors"
          >
            Pierwszy meetup <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
