
const Gallery = () => {
  const images = [
    "/lovable-uploads/f7f9b771-455f-4b70-8de6-1c1c5471e21a.png",
    "/lovable-uploads/29e96310-1b0d-42be-8888-a5e67547aded.png",
    "/lovable-uploads/908b8bca-48f9-48e6-93e7-5db8467de1d5.png",
    "/lovable-uploads/8430cfa6-f630-4e5d-a7ae-d337124477f7.png",
  ];

  return (
    <section id="galeria" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Tak spędzamy czas kodując AI</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Zobacz zdjęcia z naszych poprzednich spotkań
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-[#42DCA3]/20 hover:border-[#42DCA3] transition-all group">
              <img
                src={image}
                alt={`Polish AI Breakfasts - zdjęcie ${index + 1}`}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <h3 className="text-2xl font-bold">Dołącz na kolejnym spotkaniu!</h3>
          <p className="text-gray-300 text-center max-w-2xl">
            Nie przegap szansy na spotkanie z ekspertami AI i nawiązanie nowych kontaktów branżowych. Zarejestruj się już dziś!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
