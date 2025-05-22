export function StudiesSection() {
  const studyLinks = [
    { href: 'https://youtu.be/77pG2rellUk?si=djCGRLGaTO_upW6D', label: 'Curso em Vídeo (Youtube)' },
    { href: 'https://www.instagram.com/brasilcode_/', label: 'Brasil Code (Instagram)' },
    { href: 'https://www.youtube.com/@fabricioveronez', label: 'Fabrício Queiroz' },
    { href: 'https://www.youtube.com/@MatheusBattisti', label: 'Hora de Codar' },
  ];

  return (
    <section id="estudos" className="py-16 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/77pG2rellUk?si=WTqoStAy0R7ioiQ3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
        <div className="flex-1 text-center md:text-left p-4">
          <h2 className="text-3xl font-bold text-teal-200 mb-8">Estudos e Pesquisas</h2>
          <p>
            Dentre os canais e perfis que gosto de acompanhar em se tratando de assuntos voltados à tecnologia, estão os seguintes:
          </p>
          <ul className="mt-4 space-y-2">
            {studyLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:bg-white hover:text-teal-600 rounded px-2 py-1 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Fora estes canais, sempre que surge alguma dúvida ou novidade, não é difícil dar aquela olhadinha na internet, não é mesmo? 😜
          </p>
        </div>
      </div>
    </section>
  );
}

 ;