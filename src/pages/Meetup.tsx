
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Agenda from '../components/Agenda';
import Gallery from '../components/Gallery';
import MeetupHero from '../components/MeetupHero';
import BottomCTA from '../components/BottomCTA';
import Stats from '../components/Stats';
import MeetupFirstSection from '@/components/MeetupFirstSection';
import MeetupMapSection from '@/components/ui/MeetupMapSection';
import MeetupGoals from '@/components/MeetupGoals';

export default function Meetup() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#0a1122] text-white">
      <Header />
      <main className="flex-1">
        <MeetupHero />
        <MeetupFirstSection />
        <MeetupMapSection />
        <MeetupGoals />
        <Agenda />
        <Stats />
        <Gallery />
        <CTA className="bg-[#111a2f]" />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
