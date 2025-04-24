import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaStar, FaCalendar, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

interface ScheduleItemProps {
  time: string;
  endTime: string;
  title: string;
  location: string;
  panelists?: string[];
  presenter?: string;
}

const ScheduleItem = ({ time, endTime, title, location, panelists, presenter }: ScheduleItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="border-l-2 border-[#56FF8F]/70 pl-4 py-3">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between">
        <div>
          <h4 className="text-base font-semibold text-white">{title}</h4>
          {panelists && (
            <ul className="text-white/80 text-sm list-disc list-inside mt-2">
              {panelists.map((panelist, index) => (
                <li key={index}>{panelist}</li>
              ))}
            </ul>
          )}
          {presenter && (
            <p className="text-sm text-white/80 mt-2">
              <span className="font-medium">{t('schedule.presenter')}: </span>
              {presenter}
            </p>
          )}
          <p className="text-sm text-white/60 mt-1">
            <span className="font-medium">{t('schedule.location')}: </span>
            {location}
          </p>
        </div>
        <div className="text-sm font-medium text-[#56FF8F] whitespace-nowrap mt-2 md:mt-0">
          {time} - {endTime}
        </div>
      </div>
    </div>
  );
};

const LinkCard = ({ icon, title, description, url }: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tech-card flex items-center gap-6 p-6 hover:scale-105 transition-all duration-300"
    >
      <div className="text-[#56FF8F] text-4xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </a>
  );
};

const LinksPage = () => {
  const [language, setLanguage] = useState<'pl' | 'en'>('pl');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = language === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const scheduleItems: ScheduleItemProps[] = [
    {
      time: '15:30',
      endTime: '16:30',
      title: t('schedule.registration'),
      location: 'WEJŚCIE • PAIB_WARSAW',
    },
    {
      time: '16:30',
      endTime: '16:40',
      title: t('schedule.opening'),
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '16:40',
      endTime: '17:00',
      title: t('schedule.ecosystem'),
      panelists: [
        'Maciej Szymański (SpeakLeash/Edisonda)',
        'Szymon Baczyński (SpeakLeash)',
      ],
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '17:00',
      endTime: '17:40',
      title: t('schedule.panel'),
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
      title: t('schedule.challenge'),
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '19:10',
      endTime: '20:00',
      title: t('schedule.networking'),
      location: 'AULA • PAIB_WARSAW',
    },
    {
      time: '20:00',
      endTime: '23:59',
      title: t('schedule.afterparty'),
      location: 'WARSAW • PAIB_WARSAW',
    },
  ];

  const links = [
    {
      icon: <FaLinkedin />,
      title: t('links.linkedin'),
      description: t('links.linkedinDesc'),
      url: 'https://www.linkedin.com/company/polish-ai-breakfasts',
    },
    {
      icon: <FaWhatsapp />,
      title: t('links.whatsapp'),
      description: t('links.whatsappDesc'),
      url: 'https://2ly.link/26X7o',
    },
    {
      icon: <FaCalendar />,
      title: t('links.schedule'),
      description: t('links.scheduleDesc'),
      url: '#',
    },
    {
      icon: <FaStar />,
      title: t('links.feedback'),
      description: t('links.feedbackDesc'),
      url: 'https://airtable.com/appHmafAQFBR9f1Bp/pagry5rEPjMsq3gB9/form',
    }
    // {
    //   icon: <FaEnvelope />,
    //   title: t('links.email'),
    //   description: t('links.emailDesc'),
    //   url: 'mailto:contact@your-event.com',
    // },
  ];

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen tech-pattern">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={handleLanguageChange}
              className="px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-[#56FF8F]/30 hover:border-[#56FF8F]/80 transition-all"
            >
              {language === 'pl' ? 'EN' : 'PL'}
            </button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <img
                src="/lovable-uploads/a3ccaff4-b916-4464-aea5-e9bca9a50f4f.png"
                alt="Polish AI Breakfasts Logo"
                className="h-16"
              />
            </div>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {t('links.subtitle')}
            </p>
            
            <div className="space-y-4">
              {links.map((link, index) => {
                if (link.title === t('links.schedule')) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                        className="w-full tech-card flex items-center gap-6 p-6 hover:scale-105 transition-all duration-300"
                      >
                        <div className="text-[#56FF8F] text-4xl">{link.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-left">{link.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 text-left">{link.description}</p>
                        </div>
                        <FaChevronDown
                          className={`text-[#56FF8F] transition-transform duration-300 ${
                            isScheduleOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isScheduleOpen && (
                        <div className="mt-4 bg-black/40 backdrop-blur-sm rounded-xl border border-[#56FF8F]/30 p-6">
                          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#56FF8F]/30">
                            <h3 className="text-xl font-semibold text-white">
                              {t('schedule.title')}
                            </h3>
                            <div className="text-sm font-medium text-[#56FF8F]">
                              {t('schedule.date')}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {scheduleItems.map((item, idx) => (
                              <ScheduleItem key={idx} {...item} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return <LinkCard key={index} {...link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage; 