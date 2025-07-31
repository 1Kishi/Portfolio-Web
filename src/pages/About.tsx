import { useState } from "react";
import CVSection from "../components/CV/CVSection";
import CertificateBadge from "../components/CV/CertificateBadge";
import CertificateSection from "./Certificates";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jacobworkgreen@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

return (
  <main className="min-h-screen text-black dark:text-white transition-colors duration-500 flex items-center justify-center py-12 px-4">

    <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-charcoal/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">


      <div className="space-y-2">
        <h1 className="text-3xl font-bold">O mně</h1>
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

      <CertificateSection />

    </div>
  </main>
);

}
