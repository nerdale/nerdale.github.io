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
          Project Manager con base en diseño gráfico, JavaScript y Python. Conecto diseño, tecnología y negocio en proyectos ágiles, como puente entre TI y producto.
          <p>🚴🏻‍♀️ Fuera de la pantalla, casi siempre me encuentras arriba de una bici.</p>
        </p>
      </motion.div>
    </div>
  );
}
