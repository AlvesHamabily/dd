function ProfileSection() {
  return (
    <section id="topo" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left p-4">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Quem sou eu?</h2>
          <p className="text-lg">
            Muito prazer,<br />
            Hamábly Alves dos Santos 🌻<br /><br />
            <img src="/images/local.png" alt="Localização" className="inline w-5" /> Espigão d'Oeste - RO, Brasil.
          </p>
          <p className="mt-4">
            18 anos, Católica Apostólica Romana, Técnica em Informática (2023), cursando atualmente Análise e Desenvolvimento de Sistemas pela UNESC Cacoal. Possuo conhecimento básico em Python, PHP e MySQL.
          </p>
        </div>
        <div className="flex-1">
        <img src="/images/eu.jpg" alt="Foto de Hamábly Alves dos Santos" className="w-64 h-auto rounded-md mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
