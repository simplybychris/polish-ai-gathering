
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Agenda from '../components/Agenda';
import ForWho from '../components/ForWho';
import Community from '../components/Community';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BottomCTA from '../components/BottomCTA';

export default function Index() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#0a1122] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Community />
        <ForWho />
        <Stats />
        <Gallery />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
