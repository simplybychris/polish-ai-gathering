
const Stats = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#56FF8F_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Społeczność AI w liczbach</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">2000+</div>
            <p className="text-gray-300">Uczestników</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">20+</div>
            <p className="text-gray-300">Spotkań</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">50+</div>
            <p className="text-gray-300">Prelegentów</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">100+</div>
            <p className="text-gray-300">Firm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
