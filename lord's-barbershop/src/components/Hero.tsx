import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Barbershop Interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-[#CE2029] font-serif text-lg md:text-xl tracking-[0.2em] mb-4 uppercase">
            Est. 2018 • Mem Martins
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            TRADIÇÃO & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CE2029] to-[#991b1b]">
              PRECISÃO
            </span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Mais do que um corte, uma experiência. Onde o estilo clássico encontra a técnica moderna num ambiente exclusivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contactos"
              className="px-8 py-4 bg-[#CE2029] text-white font-bold uppercase tracking-widest hover:bg-[#991b1b] transition-all duration-300 min-w-[200px]"
            >
              Marcar Corte
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 border border-stone-500 text-stone-300 font-bold uppercase tracking-widest hover:border-[#CE2029] hover:text-[#CE2029] transition-all duration-300 min-w-[200px]"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
