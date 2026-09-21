import { motion } from 'motion/react';
import { ExternalLink} from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import proyecto1 from '../../assets/proyecto1.jpg';
import proyecto2 from '../../assets/proyecto2.jpg';
import proyecto3 from '../../assets/proyecto3.png';
import proyecto4 from '../../assets/proyecto4.jpg';
import proyecto5 from '../../assets/proyecto5.jpg';


const projects = [
    {
    id: 1,
    title: "Gestión Taller Textil",
    description: "Gestión como Project Manager de un taller textil a medida: flujos más eficientes y seguimiento de producción en Notion.",
    image: proyecto4,
    link: "https://docs.google.com/presentation/d/e/2PACX-1vRYf4bzozxIVPT0_QoYxiXJUsNhWc_Jv9BiPYrsGpMWr7xb4Ca9xZLdbbUP12EsNJ5HkUaeOlu9Px_F/pub?start=false&loop=false&delayms=3000",
    tags: ["Gestión de procesos", "Notion", "Liderazgo de equipo", "Hitos"] 
  },
  {
    id: 2,
    title: "Onboarding Locales Conectados",
    description: "Re-diseño UX/UI del onboarding para comercios de Locales Conectados en Web y Mobile, basado en research con usuarios.",
    image: proyecto5,
    link: "https://docs.google.com/presentation/d/e/2PACX-1vS0-QRKwPQPtVZE8vbqZXJj_MadJciIznJGfm-q7QKo5MqXctiD_zwUmNQrxGJ12sbYvz50IX9eKnr5/pub?start=false&loop=false&delayms=3000",
    tags: ["UX Research", "User Journey Map", "Pruebas usabilidad", "Web", "Mobile"] 
  },
  {
    id: 3,
    title: "Pedal y Calle",
    description: "Aplicación Web desarrollada con Django que funciona como un centro de recursos para fomentar la movilidad sostenible.",
    image: proyecto1,
    link: "https://github.com/nerdale/pedal-y-calle-v2",
    tags: ["Python", "Django", "SQLite", "CRUD", "OMR"]
  },
  {
    id: 4,
    title: "Gestor de clientes",
    description: "Plataforma desarrollada en Python para digitalizar la gestión de clientes y evitar la duplicidad de datos.",
    image: proyecto3,
    link: "https://github.com/nerdale/gic_project",
    tags: ["Python", "CRUD", "POO", "Diagrama de clases"] 
  },
  {
    id: 5,
    title: "Calculadora horas extras",
    description: "Aplicación Web desarrollada con Javascript para calcular las horas extras de un trabajador según su sueldo base.",
    image: proyecto2,
    link: "https://github.com/nerdale/calculadora_horas_extras",
    tags: ["Javascript", "Git", "HTML"]
  }
];
const getSkillColor = (skill: string) => {
  return 'text-slate-500 dark:text-slate-400';
};

export default function Projects() {
  return (
    <section id="proyectos" className="space-y-4 py-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          Mis proyectos
        </motion.h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-500 ease-out h-full"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
              <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <img 
                alt={project.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-90 group-hover:opacity-100" 
                src={project.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 sm:from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex flex-col grow p-4 sm:p-5 space-y-2 justify-start">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a target="_blank" aria-label={`View ${project.title}`} href={project.link} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-1.5 flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  return (
                    <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      <Icon className={`w-3 h-3 ${getSkillColor(tag)}`} strokeWidth={1.2} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-6"
      >
        <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="https://github.com/nerdale">
          Ver más en GitHub
        </a>
      </motion.div>
    </section>
  );
}
