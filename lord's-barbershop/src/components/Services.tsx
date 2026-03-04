import { motion } from 'motion/react';
import { Scissors, Zap, User, Star } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Corte de Cabelo",
    description: "Corte clássico ou moderno, finalizado com produtos premium.",
    price: "15€",
    duration: "45 min"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Barba",
    description: "Aparar, delinear e hidratar a barba com toalha quente.",
    price: "10€",
    duration: "30 min"
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Cabelo + Barba",
    description: "O serviço completo para o homem moderno. Inclui massagem capilar.",
    price: "22€",
    duration: "60 min"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Barba Clássica (Navalha)",
    description: "Barbear tradicional com navalha, espuma quente e after-shave.",
    price: "12€",
    duration: "40 min"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Corte Júnior (<12 anos)",
    description: "Corte especial para os mais novos, com paciência e estilo.",
    price: "12€",
    duration: "30 min"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Acabamentos",
    description: "Apenas contornos e limpeza de pescoço.",
    price: "8€",
    duration: "15 min"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-stone-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#CE2029] font-serif tracking-[0.2em] uppercase text-sm font-bold mb-4 block"
          >
            O Nosso Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Serviços & Preços
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#CE2029] mx-auto mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-950 p-8 rounded-lg border border-stone-800 hover:border-[#CE2029]/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-stone-900 rounded-full text-[#CE2029] group-hover:bg-[#CE2029] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif font-bold text-[#CE2029]">{service.price}</span>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">{service.duration}</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#CE2029] transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contactos"
            className="inline-block px-10 py-4 bg-[#CE2029] text-white font-bold uppercase tracking-widest hover:bg-[#991b1b] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#CE2029]/20"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
