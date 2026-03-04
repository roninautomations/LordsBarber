import { motion } from 'motion/react';
import { Scissors, Clock, Award, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#CE2029]/10 rounded-lg blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
              alt="Barbeiro a trabalhar"
              className="relative w-full h-[600px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-900 border border-stone-800 p-6 flex flex-col justify-center items-center text-center shadow-xl hidden md:flex">
              <span className="text-4xl font-serif font-bold text-[#CE2029]">10+</span>
              <span className="text-stone-400 text-sm uppercase tracking-widest mt-2">Anos de<br/>Experiência</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#CE2029] font-serif tracking-[0.2em] uppercase text-sm font-bold mb-4 block">
              Sobre a Lord's Barbershop
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Arte do Corte Clássico em <span className="text-stone-500 italic">Mem Martins</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light">
              Na Lord's Barbershop, acreditamos que um corte de cabelo é mais do que apenas estética — é um ritual. Inspirados nas barbearias clássicas dos anos 20, criámos um espaço onde o tempo abranda e a atenção ao detalhe é a nossa prioridade.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 font-light">
              Combinamos técnicas tradicionais de navalha com estilos modernos para oferecer um serviço personalizado a cada cliente. O nosso compromisso é simples: que saia da nossa cadeira a sentir-se a sua melhor versão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-lg text-[#CE2029]">
                  <Scissors size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Precisão</h4>
                  <p className="text-stone-500 text-sm">Cortes executados com mestria e atenção ao detalhe.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-lg text-[#CE2029]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Pontualidade</h4>
                  <p className="text-stone-500 text-sm">Respeitamos o seu tempo com agendamentos precisos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-lg text-[#CE2029]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Qualidade</h4>
                  <p className="text-stone-500 text-sm">Produtos premium para o melhor cuidado da sua barba e cabelo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-lg text-[#CE2029]">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Ambiente</h4>
                  <p className="text-stone-500 text-sm">Um espaço clássico, confortável e acolhedor.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
