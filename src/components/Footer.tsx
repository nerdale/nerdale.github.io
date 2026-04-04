


export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="w-full max-w-5xl mx-auto pb-4">
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
        <span>© {year} Alexandra Neira Quiroz. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p>Template creado con ❤️ by <a target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2" href="https://www.linkedin.com/in/roshankrsoni/">Roshan Kr Soni</a></p>
        </div>
      </div>
      </footer>
    </>
  );
}
