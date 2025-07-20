import { useState, useEffect } from 'react';

export default function Home() {
  const statusMessages = [
    'Hledám práci',
    'Remote vítán',
  ];

  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 flex flex-col items-center justify-center space-y-8 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
          Jacob Green
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
          Tester VR aplikací a softwaru z České republiky
        </h2>
        <p className="text-base sm:text-lg text-black dark:text-white max-w-xl">
          Vítejte na mém portfoliu. Najdete zde mé projekty, zkušenosti a další informace o tom, co dělám.
        </p>
      </div>

      <div className="mt-6 relative group w-fit mx-auto text-sm text-neutral-800 dark:text-neutral-100 transition-colors">
        <div className="flex items-center gap-2 cursor-help">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>

          {/* 🔄 Animated rotating text */}
          <span
            className={`px-3 py-1 rounded-full bg-green-600/10 border border-green-500 text-green-400 font-semibold text-xs tracking-wide shadow-sm group-hover:shadow-lg transition-all duration-700 ease-in-out`}
          >
            {statusMessages[statusIndex]}
          </span>



          <span className="text-xs text-muted ml-1 animate-pulse">ⓘ</span>
        </div>

        {/* Hover detail */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-center bg-white/80 dark:bg-black/70 text-xs px-3 py-2 rounded-lg shadow backdrop-blur">
          Otevřený pozicím na <strong>plný nebo zkrácený úvazek</strong> - <strong>remote</strong> nebo <strong>hybridně</strong><br />
        </div>
      </div>
    </section>
  );
}
