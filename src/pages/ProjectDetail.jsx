import { useParams } from "react-router-dom";

const projectData = {
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Moje osobní portfolio postavené pomocí React a Tailwind.",
    github: "https://github.com/1Kishi/Portfolio-Web",
    tech: ["React", "Tailwind", "Vite"]
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
      <div className="max-w-4xl mx-auto space-y-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl px-8 py-12">
        <h1 className="text-3xl font-bold text-center">Deep Dive: {project.title}</h1>

        <p className="text-neutral-600 dark:text-neutral-300 text-center">
          {project.description}
        </p>

        <div className="text-center mt-10">
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



