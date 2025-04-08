import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();
  const isMeetupPage = location.pathname === '/meetup';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/'>
              <img
                src='/lovable-uploads/a3ccaff4-b916-4464-aea5-e9bca9a50f4f.png'
                alt='Polish AI Breakfasts Logo'
                className='h-10 green-glow'
              />
            </Link>
          </div>
          <nav className='hidden md:flex space-x-8 items-center'>
            <Link
              to='/'
              className='text-white hover:text-[#56FF8F] transition-colors'
            >
              Home
            </Link>
            <Link
              to='/meetup'
              className={`transition-colors ${
                isMeetupPage
                  ? 'text-[#56FF8F] font-medium'
                  : 'text-white hover:text-[#56FF8F]'
              }`}
            >
              Meetup
            </Link>
            <a
              href='#o-nas'
              className='text-white hover:text-[#56FF8F] transition-colors'
            >
              O nas
            </a>
            <a
              href='#galeria'
              className='text-white hover:text-[#56FF8F] transition-colors'
            >
              Galeria
            </a>
            <Button
              asChild
              className='bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80'
            >
              <a
                href='https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068'
                target='_blank'
                rel='noopener noreferrer'
              >
                Kup bilet
              </a>
            </Button>
          </nav>
          <Button
            className='md:hidden bg-transparent hover:bg-transparent'
            onClick={() => setIsMenuOpened(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </Button>
        </div>
      </header>
      <div className={`md:hidden ${isMenuOpened ? 'block opacity-100' : 'hidden opacity-0'} bg-black/80 backdrop-blur w-full h-screen fixed top-0 left-0 z-50`}>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/'>
              <img
                src='/lovable-uploads/a3ccaff4-b916-4464-aea5-e9bca9a50f4f.png'
                alt='Polish AI Breakfasts Logo'
                className='h-10 green-glow'
              />
            </Link>
          </div>
          <Button
            className='md:hidden bg-transparent hover:bg-transparent'
            onClick={() => setIsMenuOpened(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'
              ></path>
            </svg>
          </Button>
        </div>
        <nav className='flex flex-col items-center mt-4 gap-6'>
          <Link
            to='/'
            className='text-white hover:text-[#56FF8F] transition-colors'
            onClick={() => setIsMenuOpened(false)}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMenuOpened(false)}
            to='/meetup'
            className={`transition-colors ${
              isMeetupPage
                ? 'text-[#56FF8F] font-medium'
                : 'text-white hover:text-[#56FF8F]'
            }`}
          >
            Meetup
          </Link>
          <a
            onClick={() => setIsMenuOpened(false)}
            href='#o-nas'
            className='text-white hover:text-[#56FF8F] transition-colors'
          >
            O nas
          </a>
          <a
            onClick={() => setIsMenuOpened(false)}
            href='#galeria'
            className='text-white hover:text-[#56FF8F] transition-colors'
          >
            Galeria
          </a>
          <Button
            onClick={() => setIsMenuOpened(false)}
            asChild
            className='bg-[#56FF8F] text-black hover:bg-[#56FF8F]/80'
          >
            <a
              href='https://landing.meetingapplication.com/event/polish-ai-breakfasts-meetup11068'
              target='_blank'
              rel='noopener noreferrer'
            >
              Kup bilet
            </a>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;
