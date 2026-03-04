import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635273051937-93c4d3063ceb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#CE2029] font-serif tracking-[0.2em] uppercase text-sm font-bold mb-4 block"
          >
            O Nosso Espaço
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Galeria
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#CE2029] mx-auto mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm aspect-square"
            >
              <img
                src={src}
                alt={`Galeria ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#CE2029] font-serif text-lg tracking-widest uppercase border border-[#CE2029] px-4 py-2 bg-stone-950/80">
                  Ver
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
