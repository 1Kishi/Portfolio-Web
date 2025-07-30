import { useParams } from "react-router-dom";

const projectData = {
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Moje osobní portfolio postavené pomocí React, Tailwind a Vite.",
    github: "https://github.com/yourusername/portfolio-website",
    tech: ["React", "Tailwind", "Vite"],
    goals: [
      "Vytvořit responzivní portfolio s moderním designem.",
      "Zobrazit projekty, zkušenosti a interaktivní životopis.",
      "Podporovat světlý i tmavý režim automaticky."
    ],
    challenges: [
      "Tailwind class names nebyly brány v potaz kvůli tree-shakingu.",
      "PostCSS syntax chyběla > VSCode neupozornil.",
      "Globální npx přestal fungovat > reinstall Node.js a ruční fix."
    ],
    image: "/portfolio-screenshot.png"
  },
  "Networking": {
    title: "Network Config",
    description: "Dummy, Dummy, Dummy Project.",
    github: "https://github.com/1kishi/",
    tech: ["Network", "Config", "LAN"]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectData[slug];
  if (!project) return <p className="text-center mt-20">Projekt nenalezen.</p>;

return (
  <main className="min-h-screen px-6 py-16 text-black dark:text-white transition-colors duration-500">
    <div className="max-w-4xl mx-auto space-y-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl px-8 py-12">

      <h1 className="text-3xl font-bold text-center">{project.title}</h1>

      <p className="text-neutral-800 dark:text-neutral-300 text-center max-w-xl mx-auto">{project.description}</p>

      {project.image && (
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={project.image} alt={project.title} className="w-full h-auto" />
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {project.tech.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Cíle projektu</h2>
        <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
          {project.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Výzvy a problémy</h2>
        <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
          {project.challenges.map((ch, i) => (
            <li key={i}>{ch}</li>
          ))}
        </ul>
      </div>

      <div className="text-center pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white transition"
        >
          Zobrazit na GitHubu
        </a>
      </div>
    </div>
  </main>
);


}



