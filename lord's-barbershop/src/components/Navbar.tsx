import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import your logo from the local folder
import logoImg from './img/Gemini_Generated_Image_d40yuud40yuud40y-removebg-preview.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-stone-950/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logoImg}
                alt="Logo da Lord's Barbershop"
                className="w-12 h-12 object-cover rounded-full border-2 border-[#CE2029] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-[#CE2029]/20 animate-pulse -z-10"></div>
            </div>
            
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-white">
              LORD'S <span className="text-[#CE2029]">BARBERSHOP</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-[#CE2029] transition-colors duration-300 font-bold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contactos"
              className="px-6 py-2 bg-transparent border-2 border-[#CE2029] text-[#CE2029] hover:bg-[#CE2029] hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-black"
            >
              Marcar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-100 p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion
