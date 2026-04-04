import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';


const titles = [
  "React & React Native Engineer",
  "AI Integration Specialist",
  "Mobile App Expert",
  "Full Stack Developer"
];

const navItems = ['Experiencia', 'Proyectos', 'Contacto'];

export default function Navbar() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full md:max-w-5xl px-4 sm:px-4 rounded-2xl py-3 mx-auto sticky top-2 flex items-center justify-between z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sm:mt-8"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="flex flex-col min-w-0">
          <h5 className="leading-tight font-medium font-dancing-script text-base sm:text-lg whitespace-nowrap truncate">Alexandra Neira</h5>
        </div>
      </div>

      <div className="items-center gap-2 sm:gap-6 flex shrink-0">
        <nav className="items-center gap-4 sm:flex hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="capitalize text-[11px] font-semibold tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="sm:hidden flex items-center justify-center cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+0.5rem)] left-0 right-0 w-full sm:hidden bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl py-4 flex flex-col gap-2 origin-top"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className="px-4 py-3 text-[14px] font-semibold tracking-wide text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800/50 transition-colors mx-2 rounded-xl"
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.1 }}
              className="px-2 mt-2"
            >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
