import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              LORD'S <span className="text-[#CE2029]">BARBERSHOP</span>
            </h3>
            <p className="text-stone-500 text-sm">
              Tradição e estilo desde 2018.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-stone-500 hover:text-[#CE2029] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-stone-500 hover:text-[#CE2029] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-stone-500 hover:text-[#CE2029] transition-colors">
              <Twitter size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-stone-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Lord's Barbershop.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
