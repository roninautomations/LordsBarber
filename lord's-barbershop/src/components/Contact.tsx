import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contactos" className="py-24 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#CE2029] font-serif tracking-[0.2em] uppercase text-sm font-bold mb-4 block">
              Visite-nos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Localização & <br />
              <span className="text-stone-500 italic">Contactos</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 font-light">
              Estamos situados no coração de Mem Martins. Venha visitar-nos para uma experiência de barbearia autêntica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-stone-950 border border-stone-800 rounded-lg text-[#CE2029] group-hover:border-[#CE2029] transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-xl mb-2">Morada</h4>
                  <p className="text-stone-400">Rua de Mem Martins, 123<br />2725-390 Mem Martins, Portugal</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-stone-950 border border-stone-800 rounded-lg text-[#CE2029] group-hover:border-[#CE2029] transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-xl mb-2">Telefone</h4>
                  <a href="tel:+351210000000" className="text-stone-400 hover:text-[#CE2029] transition-colors">
                    +351 210 000 000
                  </a>
                  <p className="text-stone-500 text-sm mt-1">(Chamada para rede fixa nacional)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-stone-950 border border-stone-800 rounded-lg text-[#CE2029] group-hover:border-[#CE2029] transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-xl mb-2">Horário</h4>
                  <ul className="text-stone-400 space-y-1">
                    <li className="flex justify-between w-48"><span>Seg - Sex:</span> <span>09:00 - 19:00</span></li>
                    <li className="flex justify-between w-48"><span>Sábado:</span> <span>09:00 - 13:00</span></li>
                    <li className="flex justify-between w-48 text-stone-600"><span>Domingo:</span> <span>Fechado</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-lg overflow-hidden border border-stone-800 shadow-2xl relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.761567845684!2d-9.3566!3d38.7985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecdd000000001%3A0x0!2sMem%20Martins!5e0!3m2!1spt-PT!2spt!4v1620000000000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-[#CE2029]/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
