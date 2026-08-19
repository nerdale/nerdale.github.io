import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronDown } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';

import logoConectados from '../../assets/logo_conectados.jpeg';
import logoLaboratoria from '../../assets/logo_laboratoria.jpeg';
import logoUnholster from '../../assets/loogo_unholsterchile.jpeg';
import logoTaller from '../../assets/logo_taller.png';

const experiences = [
    {
    id: 1,
    role: "Project Manager Freelance",
    company: "Taller Textil Antonia Abarzúa",
    date: "Jul. 2024 - Presente",
    location: "Presencial / Chile",
    current: false,
    logo: logoTaller,
    description: [
      "Reduje los tiempos de entrega hasta en un 50% según tipo de pedido, mediante la implementación de flujos de trabajo más eficientes.",
      "Re diseñé el proceso de atención a clientes personalizados, pasando de múltiples días de coordinación vía WhatsApp a un flujo estructurado de 3 etapas (consulta inicial, visita en terreno, entrega con instalación), reduciendo tiempos de decisión y mejorando la experiencia del cliente.",
      "Diseñé e implementé desde cero un sistema de seguimiento en Notion para centralizar documentación y visibilizar el estado de producción, inexistente previamente en el taller.",
      "Coordino un equipo de 3 a 7 personas entre staff interno y proveedores externos, asegurando calidad y cumplimiento de hitos."
    ],
    skills: ["Gestión de proyectos", "Startup", "Diseño experiencia de usuario (UX)"]
  },
  {
    id: 2,
    role: "UX/UI Designer",
    company: "Conectados / Con Carnet",
    date: "May. 2023 - Mar. 2024",
    location: "Remoto / Chile",
    current: false,
    logo: logoConectados,
    description: [
      "Lideré el diseño UX end-to-end del producto, incluyendo investigación con usuarios (entrevistas y tests con <10 usuarios) hasta la entrega final de especificaciones.",
      "Facilité ~15 workshops de co-creación y validación con equipos multidisciplinarios de la organización (TI, producto, comercial y marketing), promoviendo la mejora continua del producto desde una mirada integral.",
      "Coordiné de forma continua el roadmap de diseño junto a TI y Product Owner, asumiendo progresivamente responsabilidades de gestión de proyecto más allá del rol de diseño, actuando como puente entre el equipo técnico y el área comercial.",
      "Centralicé en Notion la documentación de producto, minutas de workshops y especificaciones de diseño, facilitando el traspaso técnico y la alineación del equipo.",
      "Integré criterios de accesibilidad y usabilidad en el proceso de diseño para optimizar la experiencia del producto."
    ],
    skills: ["FinTech", "Figma", "Startup", "Diseño experiencia de usuario (UX)", "Diseño interfaces (UI)", "Gestión de proyectos"]
  },
  {
    id: 3,
    role: "Program Manager & Data Coach",
    company: "Laboratoria",
    date: "Jun. 2022 - May. 2023",
    location: "Remoto / Chile",
    current: false,
    logo: logoLaboratoria,
    description: [
      "Lideré un equipo multidisciplinario de 5 personas, asegurando la alineación pedagógica y operativa del programa.",
      "Diseñé y gestioné la estrategia de contenidos y talleres técnicos para el programa piloto, que alcanzó a más de 50 mujeres.",
      "Implementé un sistema de mejora continua basado en feedback semanal de las estudiantes, ajustando la ejecución del programa en tiempo real.",
      "Diseñé y co-facilité talleres técnicos de análisis y visualización de datos para más de 50 mujeres, alineados con objetivos curriculares del programa.",
      "Colaboré con equipos pedagógicos y técnicos, iterando y mejorando contenidos del programa."
    ],
    skills: ["Gestión de programas", "Startup", "Metodologías ágiles", "Coaching"]
  },
  {
    id: 4,
    role: "Bootcamp Manager",
    company: "Laboratoria",
    date: "Ago. 2019 - May. 2022",
    location: "Hibrido / Chile",
    current: false,
    logo: logoLaboratoria,
    description: [
      "Gestioné la planificación académica y operativa de 20 generaciones de bootcamp, liderando un equipo de 10 personas.",
      "Articulé alianzas con stakeholders externos (empresas empleadoras, aliados) e internos, asegurando el cumplimiento de objetivos del programa.",
      "Acompañé a más de 300 mujeres en su transición a roles técnicos, logrando una tasa de empleabilidad superior al 85%.",
      "Fomenté una cultura de aprendizaje y mejora continua aplicando metodologías ágiles en la gestión del programa."
    ],
    skills: ["Gestión de programas", "Startup", "Metodologías ágiles", "Liderazgo equipos multidisciplinarios"]
  },
  {
    id: 5,
    role: "Coach Desarrollo front-end",
    company: "Laboratoria",
    date: "Feb. 2017 - Jul. 2019",
    location: "Presencial / Chile",
    current: false,
    logo: logoLaboratoria,
    description: [
      "Diseñé y facilité talleres técnicos en HTML, CSS, JavaScript, Git y GitHub para más de 360 mujeres a lo largo de 6 generaciones del bootcamp.",
      "Realicé acompañamiento individualizado en clases intensivas (lunes a viernes, 5 horas diarias), asegurando el aprendizaje efectivo de cada estudiante."
    ],
    skills: ["Startup", "Coaching", "Desarrollo front-end", "JavaScript", "Git", "Github"]
  },
    {
    id: 6,
    role: "Desarrollo Front End",
    company: "Unholster",
    date: "Oct. 2016 - Mar. 2017",
    location: "Presencial / Chile",
    current: false,
    logo: logoUnholster,
    description: [
      "Rediseñé y desarrollé el sitio web corporativo alineado con los objetivos estratégicos de la empresa.",
      "Implementé control de versiones con Git/GitHub para garantizar calidad y colaboración en el desarrollo."
    ],
    skills: ["Javascript", "Github", "Git", "Diseño web", "UI"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);
  const expandedIndex = experiences.findIndex(exp => exp.id === expandedId);

  return (
    <section id="experiencia" className="w-full relative mt-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          Experiencia
        </motion.h2>
      </div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative pl-8 border-l-2 border-transparent ml-4 sm:ml-6 ${index !== experiences.length - 1 ? 'pb-6' : ''}`}
          >
            <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
            <motion.div 
              initial={false}
              animate={{
                height: expandedIndex === -1 ? '0%' : (index < expandedIndex ? '100%' : index === expandedIndex ? '20px' : '0%')
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute -left-[2px] top-0 w-[2px] bg-blue-500 origin-top"
            />
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-950 transition-colors duration-300 ${index <= expandedIndex ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
            
            <div className="group -ml-2">
              <div 
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedId(expandedId === exp.id ? 0 : exp.id)}
              >
                <div className="flex items-start gap-3">
                  <img alt={exp.company} loading="lazy" className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 object-cover mt-0.5" src={exp.logo} />
                  <div>
                    <h3 className="text-base font-medium font-inter text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-2 leading-tight">
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex gap-1 items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 border-emerald-200 border text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-xs mt-1 flex items-center gap-1">
                      {exp.company}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto text-[11px] text-slate-600 dark:text-slate-400 font-mono gap-1 mt-2 sm:mt-0">
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      📍
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 mt-1 sm:mt-1.5"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 sm:ml-14 pt-1">
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-outside ml-4 mb-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">{skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
