import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
        Diseñadora Gráfica  <br className="hidden md:block" />
        conectando diseño, tecnología y negocio
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          Diseñadora Gráfica con base técnica en JavaScript y Python, hoy conecto diseño, tecnología y negocio en proyectos ágiles. He liderado equipos multidisciplinarios en programas de formación tech y escalado roles de UX/UI hacia gestión de proyectos, siempre como puente entre TI y producto
        </p>
      </motion.div>
    </div>
  );
}
