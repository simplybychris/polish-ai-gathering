import { Button } from '@/components/ui/button';
const Agenda = () => {
  const agendaItems = [
    {
      time: '15:30',
      endTime: '16:30',
      title: 'Rejestracja uczestników i networking',
      location: 'WEJŚCIE • PAIB_WARSAW',
    },
    {
      time: '16:30',
      endTime: '16:40',
      title: 'Otwarcie części merytorycznej',
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '16:40',
      endTime: '17:00',
      title: '"Polski Ekosystem AI. Fabryki, modele, projekty, ludzie"',
      panelists: [
        'Maciej Szymański (SpeakLeash/Edisonda)',
        'Szymon Baczyński (SpeakLeash)',
      ],
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '17:00',
      endTime: '17:40',
      title:
        'Panel Dyskusyjny: "Polskie LLMy. 3 Perspektywy: biznes, państwo, społeczeństwo"',
      panelists: [
        'dr Marek Kozłowski (PLLuM/OPI)',
        'Witold Wydmański (Gaius Lex)',
        'Przemysław Jurgiel-Żyła (Movens Capital)',
        'dr Agnieszka Karlińska (PLLuM/NASK)',
      ],
      presenter: 'Michał Domański (SpeakLeash/Bielik Consulting/Omniviser)',
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '17:40',
      endTime: '19:10',
      title: 'PAIB First Challenge',
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '19:10',
      endTime: '20:00',
      title: 'Networking',
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '20:00',
      endTime: '23:59',
      title: 'Afterparty',
      location: 'WARSAW • PAIB_WARSAW',
    },
  ];
  return (
    <section id='agenda' className='py-24 tech-pattern'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6'>
          Agenda
        </h2>
        <p className='text-center text-gray-300 mb-12 max-w-2xl mx-auto'>
          23 kwietnia, środa - plan pierwszego meetupu
        </p>

        <div className='max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl border border-[#56FF8F]/30 p-6 md:p-8'>
          <div className='flex justify-between items-center mb-6 pb-4 border-b border-[#56FF8F]/30'>
            <div className='text-xl font-semibold text-white'>Harmonogram</div>
            <div className='text-sm font-medium text-[#56FF8F]'>
              23 kwietnia 2025
            </div>
          </div>

          <div className='space-y-8'>
            {agendaItems.map((item, index) => (
              <div key={index} className='agenda-item'>
                <div className='flex flex-col md:flex-row md:items-baseline justify-between'>
                  <div className='mb-2 md:mb-0'>
                    <h3 className='text-lg font-semibold text-white'>
                      {item.title}
                    </h3>
                    {item.panelists ? (
                        <ul className='text-white font-normal list-disc list-inside my-3'>
                            {item.panelists.map((panelist, index) => (
                                <li key={index} className='text-sm'>
                                    {panelist}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    {item.presenter ? (
                        <p className='text-sm text-white font-normal my-3'><span className='font-semibold'>Prowadzący: </span>{item.presenter}</p>
                    ) : null}
                    <p className='text-sm text-gray-400'>{item.location}</p>
                  </div>
                  <div className='text-sm font-medium text-[#56FF8F] whitespace-nowrap'>
                    {item.time} - {item.endTime}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-10 text-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80'
            >
              <a
                href='https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068'
                target='_blank'
                rel='noopener noreferrer'
              >
                Zarejestruj się na wydarzenie
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Agenda;
