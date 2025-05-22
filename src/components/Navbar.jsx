import { Link } from 'react-scroll';

function Navbar() {
  const navLinks = [
    { to: 'topo', label: 'Início' },
    { to: 'estudos', label: 'Estudos' },
    { to: 'hobbies', label: 'Hobbies' },
    { to: 'mais_info', label: 'Mais informações' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-teal-600 text-teal-200 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">Bem Vindo(a)!</div>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="hover:text-white hover:font-bold transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
