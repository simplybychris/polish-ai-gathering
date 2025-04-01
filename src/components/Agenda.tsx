import { Button } from "@/components/ui/button";
const Agenda = () => {
  const agendaItems = [{
    time: "16:00",
    endTime: "16:30",
    title: "Rejestracja uczestników & networking",
    location: "WEJŚCIE • PAIB_WARSAW"
  }, {
    time: "16:30",
    endTime: "17:30",
    title: "Moderowany networking",
    location: "WEJŚCIE • PAIB_WARSAW"
  }, {
    time: "17:30",
    endTime: "17:40",
    title: "Przywitanie gości i otwarcie części merytorycznej",
    location: "AULA • PAIB_WARSAW"
  }, {
    time: "17:40",
    endTime: "18:00",
    title: "Prelekcja wprowadzająca do debaty",
    location: "AULA • PAIB_WARSAW"
  }, {
    time: "18:00",
    endTime: "18:40",
    title: "Panel dyskusyjny - Polskie LLMy",
    location: "AULA • PAIB_WARSAW"
  }, {
    time: "18:40",
    endTime: "20:10",
    title: "PAIB First Challenge",
    location: "AULA • PAIB_WARSAW"
  }, {
    time: "20:10",
    endTime: "22:00",
    title: "Networking",
    location: "AULA • PAIB_WARSAW"
  }, {
    time: "22:00",
    endTime: "23:59",
    title: "Afterparty",
    location: "WARSAW • PAIB_WARSAW"
  }];
  return <section id="agenda" className="py-24 tech-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Agenda</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          23 kwietnia, środa - plan spotkania
        </p>
        
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl border border-[#42DCA3]/30 p-6 md:p-8">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#42DCA3]/30">
            <div className="text-xl font-semibold text-white">Harmonogram</div>
            <div className="text-sm font-medium text-[#42DCA3]">23 kwietnia 2024</div>
          </div>
          
          <div className="space-y-8">
            {agendaItems.map((item, index) => <div key={index} className="agenda-item">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.location}</p>
                  </div>
                  <div className="text-sm font-medium text-[#42DCA3]">
                    {item.time} - {item.endTime}
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-[#42DCA3] text-black hover:bg-[#42DCA3]/80">
              <a href="https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068" target="_blank" rel="noopener noreferrer">
                Zarejestruj się na wydarzenie
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Agenda;