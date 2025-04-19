import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        translation: {
          'links.title': '',
          'links.subtitle': 'Tajne dostępy dla wtajemniczonych - wszystko, czego potrzebujesz w jednym miejscu',
          'links.linkedin': 'LinkedIn',
          'links.linkedinDesc': 'Dołącz do naszej sieci innowatorów i pionierów AI',
          'links.whatsapp': 'Grupa WhatsApp',
          'links.whatsappDesc': 'Bądź z nami na żywo w grupie kontaktowej WhatsApp',
          'links.feedback': 'Oceń Event',
          'links.feedbackDesc': 'Pomóż nam tworzyć jeszcze lepsze spotkania - podziel się swoją opinią',
          'links.contact': 'Kontakt',
          'links.contactDesc': 'Numer do organizatorów w razie problemu - jesteśmy tu dla Ciebie',
          'links.email': 'Email',
          'links.emailDesc': 'Skontaktuj się z organizatorami - odpowiemy na każde pytanie',
          'links.schedule': 'Harmonogram',
          'links.scheduleDesc': 'Zobacz plan wydarzenia - co, gdzie i kiedy',
          'schedule.title': 'Harmonogram wydarzenia',
          'schedule.date': '23 kwietnia 2025',
          'schedule.registration': 'Rejestracja uczestników i networking',
          'schedule.opening': 'Otwarcie części merytorycznej',
          'schedule.ecosystem': 'Polski Ekosystem AI. Fabryki, modele, projekty, ludzie',
          'schedule.panel': 'Panel Dyskusyjny: Polskie LLMy. 3 Perspektywy: biznes, państwo, społeczeństwo',
          'schedule.challenge': 'PAIB First Challenge',
          'schedule.networking': 'Networking',
          'schedule.afterparty': 'Afterparty',
          'schedule.location': 'Lokalizacja',
          'schedule.presenter': 'Prowadzący',
        }
      },
      en: {
        translation: {
          'links.title': '',
          'links.subtitle': 'Secret access for the initiated - everything you need in one place',
          'links.linkedin': 'LinkedIn',
          'links.linkedinDesc': 'Join our network of AI innovators and pioneers',
          'links.whatsapp': 'WhatsApp Group',
          'links.whatsappDesc': 'Join our live community on WhatsApp',
          'links.feedback': 'Rate Event',
          'links.feedbackDesc': 'Help us create even better gatherings - share your thoughts',
          'links.contact': 'Contact',
          'links.contactDesc': 'Organizers\' number for emergencies - we\'re here for you',
          'links.email': 'Email',
          'links.emailDesc': 'Reach out to organizers - we\'ll answer all your questions',
          'links.schedule': 'Schedule',
          'links.scheduleDesc': 'See the event timeline - what, where and when',
          'schedule.title': 'Event Schedule',
          'schedule.date': 'April 23, 2025',
          'schedule.registration': 'Registration and Networking',
          'schedule.opening': 'Opening of the Main Program',
          'schedule.ecosystem': 'Polish AI Ecosystem: Factories, Models, Projects, People',
          'schedule.panel': 'Discussion Panel: Polish LLMs. 3 Perspectives: Business, Government, Society',
          'schedule.challenge': 'PAIB First Challenge',
          'schedule.networking': 'Networking',
          'schedule.afterparty': 'Afterparty',
          'schedule.location': 'Location',
          'schedule.presenter': 'Host',
        }
      }
    },
    lng: 'pl',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 