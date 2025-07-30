const projects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Frontend",
    tech: ["React", "Tailwind", "Vite"],
    cover: "Portfolio",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    slug: "network-config",
    title: "Network Config",
    category: "Networking",
    tech: ["Network", "Routing", "LAN"],
    cover: "Networking",
    tags: ["Network", "Routing", "LAN"],
  },
];


export default function Portfolio() {
  return (
    



    <main className="text-black dark:text-white transition-colors duration-500 px-4 py-20 space-y-24">

      <section className="max-w-5xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Zde naleznete mé projekty. Jak byly tvořeny, popis, fotky a odkaz na GitHub s projektem.
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold text-center">Pravidla Projektů</h3>
        <div className="space-y-4 border-l-2 border-white/20 dark:border-white/10 pl-6">
          <div className="relative">
            <p>Každý projekt je samostatně pojmenovaný a má svůj účel.</p>
          </div>
          <div className="relative">
            <p> Popisuji cíle projektu, výzvy a technická rozhodnutí.</p>
          </div>
          <div className="relative">
            <p>Použité technologie jsou vždy uvedeny pomocí tagů, nebo jsou zmíněny v textu.</p>
          </div>
          <div className="relative">
            <p>Každý projekt má vlastní stránku s podrobnostmi a odkazem na GitHub.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-12">Moje projekty</h1>
        <div className="grid md:grid-cols-2 gap-10">
            
      {projects.map((project) => (
        <a
          key={project.slug}
          href={`/deep-dive/${project.slug}`}
          className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] overflow-hidden transition-all duration-300 group"
        >
          <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] dark:from-[#101010] dark:to-[#1f1f1f] flex items-center justify-center text-3xl font-bold text-white group-hover:text-pink-400 transition">
            {project.cover}
          </div>
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-neutral-400">{project.tech.join(", ")}</p>
          </div>
        </a>
      ))}



        </div>
      </section>

    </main>
  );
}



