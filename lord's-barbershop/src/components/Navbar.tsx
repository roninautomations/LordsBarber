import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-950/95 backdrop-blur-sm py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            {/* Logo Placeholder - Replace src with your actual logo file */}
            <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#CE2029]">
              <span className="text-black font-bold text-[8px] text-center leading-tight">
                LORD'S<br/>BARBERSHOP
              </span>
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
              LORD'S <span className="text-[#CE2029]">BARBERSHOP</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-stone-300 hover:text-[#CE2029] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contactos"
              className="px-6 py-2 border border-[#CE2029] text-[#CE2029] hover:bg-[#CE2029] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-bold"
            >
              Marcar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-300 hover:text-[#CE2029] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-stone-900 border-b border-stone-800 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif text-stone-300 hover:text-[#CE2029] transition-colors border-b border-stone-800 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contactos"
                className="mt-4 text-center py-3 bg-[#CE2029] text-white font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Marcar Corte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
