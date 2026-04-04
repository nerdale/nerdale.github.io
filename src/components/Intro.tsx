import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
        Women in tech  <br className="hidden md:block" />
        Developer & Product Designer
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          Diseñadora Gráfica con experiencia en el mundo TI, liderando proyectos UX/UI y coordinación de equipos ágiles. Mi perfil integra un dominio técnico en Python y JavaScript con una visión estratégica de producto, permitiéndome desarrollar soluciones Fullstack centradas en el usuario que impulsan la transformación digital, la eficiencia y la innovación.
        </p>
      </motion.div>
    </div>
  );
}
