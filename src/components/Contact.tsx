import { motion } from 'motion/react';
import { Briefcase, Code, Coffee, ArrowRight } from 'lucide-react';

const contactCards = [
  {
    title: "Proyectos Full-time",
    description: "¿Buscas una Project Manager que sea el puente entre TI, producto y negocio para hacer avanzar tus proyectos?.",
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    title: "Proyectos Freelance",
    description: "¿Necesitas ordenar procesos o coordinar un proyecto de punta a punta? Puedo sumar diseño UX/UI o desarrollo web si lo requieres.",
    icon: Code,
    color: "text-emerald-500"
  },
  {
    title: "Colaboraciones",
    description: "¿Tienes una idea o un proyecto por armar? Conversemos cómo llevarlo a la práctica con un buen equipo y un plan claro.",
    icon: Coffee,
    color: "text-amber-500"
  }
];

export default function Contact() {
  return (
    <section id="contacto" className="w-full pt-8 mt-4 border-t border-slate-200 dark:border-slate-800/50">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50"
        >
          ¿Conversemos?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs sm:text-sm max-w-lg text-slate-500 dark:text-slate-400 font-inter leading-relaxed"
        >
          Si buscas a alguien que coordine proyectos y conecte a los equipos de diseño, tecnología y negocio, o simplemente quieres charlar sobre cómo trabajar mejor juntos, conversemos. Estoy a solo un mensaje de distancia.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {contactCards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className={`p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
