import { useState, useEffect } from 'react';

function HobbiesSection() {
  const images = [
    '/images/ns_aparecida.png',
    '/images/car_arduino.png',
    '/images/lendo.jpg',
    '/images/song_jiccas.png',
    '/images/ns_fatima.png',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hobbies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left p-4">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Hobbies</h2>
          <p>
            Sabe aquela pessoa que vê, ouve um pouco de tudo? Exatamente! Apesar de haver exceções (obviamente), gosto de aprender coisas novas independente do assunto, porque gosto de escutar.<br />
            Entretanto, meu top 4 passatempos são esses aqui:
          </p>
        </div>
        <div className="flex-1 relative h-80">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Hobby ${index + 1}`}
              className={`absolute w-56 rounded-md transition-opacity duration-500 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ left: 'calc(50% - 112px)' }}
            />
          ))}
          <div className="absolute bottom-0 w-full flex justify-center space-x-4">
            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HobbiesSection;