import { useState, useEffect } from 'react';
import CVSection from '../components/CV/CVSection';

export default function Home() {
  const statusMessages = ['Scháním spolupráci', 'Remote vítán'];
  const [statusIndex, setStatusIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jacobworkgreen@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="text-black dark:text-white transition-colors duration-500 space-y-32">
      
      <section id="intro" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight">
            Jacob Green
          </h1>

          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
              Tester VR aplikací a softwaru z České republiky
            </h2>
            <p className="text-base sm:text-lg text-black dark:text-white max-w-xl mx-auto">
              Vítejte na mém portfoliu. Najdete zde mé projekty, zkušenosti a další informace o tom na jakých projektech pracuji a jaké jsou mé schopnosti, nebo budoucí
            </p>
          </div>

          <div className="relative group w-fit mx-auto text-sm text-neutral-800 dark:text-neutral-100 transition-colors">
            <div className="flex items-center gap-2 cursor-help">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>

              <span
                className={`px-3 py-1 rounded-full bg-green-600/10 border border-green-500 text-green-700 dark:text-green-400 font-semibold text-xs tracking-wide shadow-sm group-hover:shadow-lg transition-all duration-700 ease-in-out`}
              >
                {statusMessages[statusIndex]}
              </span>

              <span className="text-xs text-muted ml-1 animate-pulse">ⓘ</span>
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-center bg-white/80 dark:bg-black/70 text-xs px-3 py-2 rounded-lg shadow backdrop-blur">
              Otevřený pozicím na <strong>plný nebo zkrácený úvazek</strong> – <strong>remote</strong> nebo <strong>hybridně</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">O mně</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Interaktivní životopis</p>
            <div className="flex items-center justify-center gap-3 text-sm">
              <a
                href="mailto:jacobworkgreen@gmail.com"
                className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition"
              >
                jacobworkgreen@gmail.com
              </a>
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 rounded-md bg-white/20 dark:bg-white/5 border-2 border-white/30 dark:border-white/10 backdrop-blur-sm text-black dark:text-white hover:shadow-md transition-all duration-300"
              >
                {copied ? "Zkopírováno!" : "Kopírovat"}
              </button>


            </div>
            
          </div>

          <CVSection />

          
        </div>
        
      </section>

    </main>
  );
}
