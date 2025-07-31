import { useState } from "react";

const projects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Frontend",
    tech: ["React", "Tailwind", "Vite"],
    cover: "Portfolio",
    tags: ["React", "Tailwind", "Vite"],
    image: "/images/portfolio_website-screenshot.png",
    short: "Portfolio website with animations, filters, and deep dive pages."
  },
  {
    slug: "network-config",
    title: "Network Config",
    category: "Networking",
    tech: ["Network", "Routing", "LAN"],
    cover: "Networking",
    tags: ["Network", "Routing", "LAN"],
    image: "/network-screenshot.png",
    short: "Network App which configures ports."
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <main id="portfolio" className="text-black dark:text-white transition-colors duration-500 px-4 py-20 space-y-24">

      <section className="max-w-5xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Zde naleznete mé projekty. Jak byly tvořeny, popis, fotky a odkaz na GitHub s projektem.
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold text-center">Pravidla Projektů</h3>
        <div className="space-y-4 border-l-2 border-white/20 dark:border-white/10 pl-6">
          <div className="relative"><p>Každý projekt je samostatně pojmenovaný a má svůj účel.</p></div>
          <div className="relative"><p>Popisuji cíle projektu, výzvy a technická rozhodnutí.</p></div>
          <div className="relative"><p>Použité technologie jsou vždy uvedeny pomocí tagů, nebo jsou zmíněny v textu.</p></div>
          <div className="relative"><p>Každý projekt má vlastní stránku s podrobnostmi a odkazem na GitHub.</p></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">Moje projekty</h1>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/10 text-neutral-800 dark:text-neutral-100 hover:bg-pink-500/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

      </section>
              <div className="grid md:grid-cols-2 gap-10">
          {projects
            .filter((project) =>
              selectedTag === "All" ? true : project.tags.includes(selectedTag)
            )
            .map((project) => (
              <div key={project.slug} className="relative group rounded-2xl project-glow">
                <a
                  href={`/deep-dive/${project.slug}`}
                  className="relative z-10 block rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white transition duration-300 group-hover:text-pink-400 drop-shadow-[0_0_4px_rgba(255,105,240,0.6)]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-sm text-neutral-300">{project.short}</p>
                    <p className="text-xs text-neutral-500">{project.tech.join(", ")}</p>
                  </div>
                </a>
              </div>
            ))}
        </div>

    </main>
  );
}