
import React from 'react';

const ForWho = () => {
  return (
    <section id="for-who" className="py-16 bg-[#0a1122]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Dla kogo?</h2>
        
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            Sztuczna inteligencja spaja nas wszystkich – niezależnie od tego, czy tworzysz startup, prowadzisz biznes, rozwijasz technologie jako ekspert, czy po prostu fascynujesz się AI. Podczas Polish AI Breakfasts - Meetup każda grupa znajduje przestrzeń dla siebie i możliwości rozwoju.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#111a2f] p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-[#56FC8D]">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#56FC8D]">Entuzjaści AI</h3>
            <p>
              Zyskujesz dostęp do najnowszej wiedzy i praktyk w świecie AI. Poznajesz inspirujących ludzi, nawiązujesz cenne kontakty i odkrywasz nowe możliwości rozwoju kariery w dynamicznie rozwijającej się branży.
            </p>
          </div>
          
          <div className="bg-[#111a2f] p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-[#56FC8D]">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#56FC8D]">Naukowcy i specjaliści</h3>
            <p>
              Wymieniasz się wiedzą ekspercką, prezentujesz swoje badania i odkrycia oraz nawiązujesz współpracę z biznesem i startupami. Tutaj Twoje badania mogą znaleźć praktyczne zastosowanie i wsparcie do dalszego rozwoju.
            </p>
          </div>
          
          <div className="bg-[#111a2f] p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-[#56FC8D]">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#56FC8D]">Startupy</h3>
            <p>
              Prezentujesz swoje innowacyjne rozwiązania przed inwestorami i potencjalnymi klientami. Zyskujesz widoczność w branży, feedback od ekspertów, a także szansę na pozyskanie finansowania i partnerów biznesowych na dalszy rozwój.
            </p>
          </div>
          
          <div className="bg-[#111a2f] p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-[#56FC8D]">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#56FC8D]">Biznes i inwestorzy</h3>
            <p>
              Poznajesz najnowsze technologie i rozwiązania AI, które mogą przyspieszyć innowacje w Twojej firmie. Masz dostęp do talentów, startupów i ekspertów, z którymi możesz nawiązać strategiczne partnerstwa i inwestycje.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold">
            Razem budujemy silny, ogólnopolski ekosystem AI, w którym każdy zyskuje nowe możliwości rozwoju i współpracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
