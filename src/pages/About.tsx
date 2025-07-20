import { useState } from "react";
import CVSection from "../components/CV/CVSection";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jacobworkgreen@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

return (
  <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 flex items-center justify-center py-12 px-4">
    <div className="max-w-4xl w-full px-6 py-10 rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-md border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">O mně</h1>
        <p className="text-neutral-600 dark:text-neutral-300">Interaktivní životopis a moje cesta</p>
        <div className="flex items-center justify-center gap-3 text-sm">
          <a
            href="mailto:jacobworkgreen@gmail.com"
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition"
          >
            jacobworkgreen@gmail.com
          </a>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
          >
            {copied ? "Zkopírováno!" : "Kopírovat"}
          </button>
        </div>
      </div>

      <CVSection />
    </div>
  </main>
);

}
