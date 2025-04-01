
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import ForWho from "@/components/ForWho";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Agenda />
      <ForWho />
      <Stats />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
