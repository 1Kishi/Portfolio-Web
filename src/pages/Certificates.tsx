import { useState } from "react";
import CertificateBadge from "../components/CV/CertificateBadge";
import { certificates } from "../data/certificates";

const categories = ["All", "Cybersecurity", "Frontend", "Backend", "Network"];

export default function CertificateSection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? certificates
    : certificates.filter((cert) => cert.category === filter);

  return (
    <section className="pt-12 space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">Plánované certifikace a vzdělávání</h2>
      <p className="text-sm text-neutral-800 dark:text-neutral-200">
        Mým cílem je zlepšit své schopnosti v oblasti kyberbezpečnosti, vývoje a sítí. Přístup ke kurzům nebo certifikacím je v tuto chvíli limitován hlavně financemi.
      </p>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 ${
              filter === cat
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/10 text-neutral-800 dark:text-neutral-100 hover:bg-pink-500/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((cert, i) => (
          <CertificateBadge key={i} name={cert.name} status={cert.status} />
        ))}
      </div>
      <div>
        <p>Mimo tyto plánované certifikace se vzdělávám pomocí Udemy kurzů, vlastních projektů, Youtube, čtení cizího kódu, AI vysvětlování různých snippetů a internetu (Především různá fórum).</p>
      </div>
    </section>
  );
}
