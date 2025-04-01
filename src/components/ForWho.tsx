
import { Button } from "@/components/ui/button";

const ForWho = () => {
  return (
    <section id="dla-kogo" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dla kogo?</h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Nasze spotkania są skierowane do szerokiego grona osób zainteresowanych rozwojem w obszarze AI - niezależnie od poziomu zaawansowania i branży.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="tech-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#42DCA3]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#42DCA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Początkujący w AI</h3>
              <p className="text-gray-400">
                Osoby stawiające pierwsze kroki w AI, które chcą zrozumieć podstawy i możliwości tej technologii.
              </p>
            </div>
          </div>
          
          <div className="tech-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#42DCA3]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#42DCA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Programiści</h3>
              <p className="text-gray-400">
                Deweloperzy chcący poszerzyć swoje umiejętności o technologie AI oraz zdobyć praktyczną wiedzę.
              </p>
            </div>
          </div>
          
          <div className="tech-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#42DCA3]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#42DCA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Biznes i zarządzanie</h3>
              <p className="text-gray-400">
                Liderzy biznesu poszukujący sposobów wdrożenia AI w swoich organizacjach i zwiększenia efektywności.
              </p>
            </div>
          </div>
          
          <div className="tech-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#42DCA3]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#42DCA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Naukowcy i badacze</h3>
              <p className="text-gray-400">
                Specjaliści pracujący nad zaawansowanymi rozwiązaniami AI, szukający inspiracji i współpracy.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-[#42DCA3] text-black hover:bg-[#42DCA3]/80">
            <a href="https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068" target="_blank" rel="noopener noreferrer">
              Dołącz do społeczności
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
