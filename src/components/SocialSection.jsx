function SocialSection() {
  const socialLinks = [
    { href: 'https://github.com/AlvesHamabily', label: 'GitHub' },
    { href: 'https://www.instagram.com/alveshamabily/', label: 'Instagram' },
    { href: 'https://wa.me/qr/5RWMGBIHCTXRD1', label: 'WhatsApp' },
    { href: 'https://www.linkedin.com/in/ham%C3%A1bily-alves-7a3311289/', label: 'LinkedIn' },
    { href: 'http://lattes.cnpq.br/6471367840660365', label: 'Lattes' },
  ];

  return (
    <section id="mais_info" className="py-16 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-200 mb-8">Onde me encontrar</h2>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-4 py-2 rounded hover:bg-teal-200 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialSection;