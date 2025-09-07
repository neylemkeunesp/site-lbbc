
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre Nós' },
    { href: '#research', label: 'Pesquisa' },
    { href: '#team', label: 'Equipe' },
    { href: '#contact', label: 'Contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className={`text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            LBBC
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile menu can be added here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
