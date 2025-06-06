'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Quién Soy', href: '/quien-soy' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Mi Filosofía', href: '/mi-filosofia' },
  { name: 'Contacto', href: '/contacto' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-brand-blue-deep text-brand-white-pure shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif-display font-bold">
            <Link href="/" className="hover:text-brand-gold-warm transition-colors">
              JLA | The Coach
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-brand-gold-warm transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Link href="/contacto">
              <Button variant="primary">Agendar Sesión</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-brand-gold-warm/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-gold-warm transition-colors font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Agendar Sesión
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;