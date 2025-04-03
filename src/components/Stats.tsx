
const Stats = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#56FF8F_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Nie tylko liczby, to żywy ekosystem</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Za każdą cyfrą kryje się historia entuzjastów AI, którzy z nami rosną
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">2000+</div>
            <p className="text-gray-300">Innowatorów</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">20+</div>
            <p className="text-gray-300">Inspirujących spotkań</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">50+</div>
            <p className="text-gray-300">Wizjonerów AI</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-[#56FF8F] mb-2">100+</div>
            <p className="text-gray-300">Firm z przyszłością</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
