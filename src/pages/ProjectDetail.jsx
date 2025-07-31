import { useParams } from "react-router-dom";

const projectData = {
  "portfolio-website": {
  title: "Portfolio Website",
  description: "Moje osobní portfolio postavené pomocí React, Tailwind a Vite.",
  github: "https://github.com/1Kishi/Portfolio-Web",
  tech: ["React", "Tailwind", "Vite"],
  image: "/images/portfolio_website-screenshot.png",
  goals: [
    "Vytvořit responzivní portfolio s moderním designem.",
    "Zobrazit projekty, zkušenosti a interaktivní životopis.",
    "Podporovat světlý i tmavý režim automaticky.",
    "Filtrování podle tagů a deep dive podstránky.",
    "Minimalistický, čitelný design s hover efekty a neon prvky."
  ],
  challenges: [
    "Tailwind třídy jako `text-neonPink` nefungovaly > způsobeno tree-shakingem.",
    "VSCode nepodporoval správně PostCSS syntax > neukazoval chyby.",
    "Globální npx přestal fungovat > reinstalace Node.js a oprava CLI linků.",
    "Zobrazovalo se overlay tlačítko i při hoveru na jiné části > špatná hierarchie.",
    "Glow efekt na kartách projektů nefungoval správně > rozpadával se."
  ],
  reflection: [
    "Začátek projektu byl zmatený - hlavně s konfigurací Tailwindu. Bylo těžké odhalit proč některé třídy nefungují. Nakonec jsem zjistil, že šlo o tree-shaking a musel jsem je přidat na safelist nebo testovat natvrdo.",
    "Nastavení tmavého/světlého režimu bylo překvapivě jednoduché díky dark: prefixu v Tailwindu a detekci systémového nastavení přes useEffect.",
    "Design se ladil delší dobu. Glow efekty jsem ladil ručně, dělal testy s blur, mix-blend, z-index a pozicí elementů.",
    "Původně jsem neplánoval přidávat filtr projektů podle technologií, ale nápad přišel v průběhu a myslím si, že výrazně zlepšil UX."
  ],
  highlights: [
    "Všechno je napsané od nuly: čistý React + Tailwind, bez šablon nebo UI knihoven.",
    "Použití Vite zrychlilo vývoj.",
    "Deep Dive je více než jen popis projektu. je to menší deník vývoje a zrcadlo chyb na které jsem narazil.",
  ],
extraImages: [
  "/images/Projects/Portfolio-web/Progress1.png",
  "/images/Projects/Portfolio-web/Progress2.png",
  "/images/Projects/Portfolio-web/Progress3.png",
  "/images/Projects/Portfolio-web/Progress4.png",
  "/images/Projects/Portfolio-web/Progress5.png",
  "/images/Projects/Portfolio-web/Progress6.png"
],
imageCaptions: [
  "První pokus o vykreslení textu bez jakýchkoliv stylů.",
  "Počáteční návrh rozložení stránky a struktury sekcí.",
  "Vyřešení problémů s Tailwindem a první vizuální úpravy.",
  "Přidání automatického přepínání mezi světlým a tmavým režimem.",
  "Testování neonového glow efektu, animací a práce s kontejnery.",
  "Aktuální finální verze se sticky navigací a přehledným rozvržením."
],
PhotosAdditionalInfo: [
  "Bohužel jsem neudělal fotky při postupu, jelikož se jedná o můj první projekt pro mé portfolio, nejsem zvyklý fotit postup.",
  "Celý kód je samozřejmě k dispozici na GitHubu společně s dřívějšími pushes.",
],
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
        <div className="max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg border border-white/20 dark:border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
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

          
      {project.extraImages && (
        <div className="grid md:grid-cols-2 gap-4 pt-4">
          {project.extraImages.map((img, idx) => (
            <div key={idx} className="space-y-2">
              <img
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-xl border border-white/10 shadow-md"
              />
              {project.imageCaptions?.[idx] && (
                <p className="text-sm text-neutral-800 dark:text-neutral-300 text-center">{project.imageCaptions[idx]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {project.PhotosAdditionalInfo && (
        <div className="space-y-4">
          <div className="space-y-1 text-sm italic text-neutral-600 dark:text-neutral-300">
            {project.PhotosAdditionalInfo.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}


      {project.reflection && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Reflexe a poznatky</h2>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
            {project.reflection.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      {project.highlights && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Co se povedlo</h2>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}

      <h1 className="text-xl font-semibold text-[26px] text-neutral-900 dark:text-white">Snippety kódu</h1>
      <h3 className="text-lg font-semibold text-[15px] text-neutral-900 dark:text-white mt-8 mb-2"> Struktura dat projektu</h3>
      <pre className="bg-zinc-900 text-green-400 text-sm p-4 rounded-xl overflow-auto whitespace-pre-wrap leading-relaxed">
        <code>
      {`const projectData = {
        "portfolio-website": {
          title: "Portfolio Website",
          description: "Moje osobní portfolio postavené pomocí React, Tailwind a Vite.",
          github: "https://github.com/1Kishi/Portfolio-Web",
          tech: ["React", "Tailwind", "Vite"],
          image: "/images/portfolio_website-screenshot.png",
          goals: [
            "Vytvořit responzivní portfolio s moderním designem.",
            "Zobrazit projekty, zkušenosti a interaktivní životopis.",
            "Podporovat světlý i tmavý režim automaticky.",
            "Filtrování podle tagů a deep dive podstránky.",
            "Minimalistický, čitelný design s hover efekty a neon prvky."
          ],
          challenges: [
            "Tailwind třídy jako \`text-neonPink\` nefungovaly > způsobeno tree-shakingem.",
            "VSCode nepodporoval správně PostCSS syntax > neukazoval chyby.",
            "Globální npx přestal fungovat > reinstalace Node.js a oprava CLI linků.",
            "Zobrazovalo se overlay tlačítko i při hoveru na jiné části > špatná hierarchie.",
            "Glow efekt na kartách projektů nefungoval správně > rozpadával se."
          ]
        }
      };`}
        </code>
      </pre>

      <h4 className="text-lg font-semibold text-[15px] text-neutral-900 dark:text-white mt-8 mb-2">Filtrování projektů podle tagů</h4>

      <pre className="bg-zinc-900 text-green-400 text-sm p-4 rounded-xl overflow-auto whitespace-pre-wrap leading-relaxed">
          <code>
        {`const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
        const [selectedTag, setSelectedTag] = useState("All");

        const filteredProjects = projects.filter(project =>
          selectedTag === "All" ? true : project.tags.includes(selectedTag)
        );`}
          </code>
      </pre>

      <h3 className="text-lg font-semibold text-[15px] text-neutral-900 dark:text-white mt-8 mb-2"> Hook pro tmavý/světlý režim (automatický a přepínatelný)</h3>
      <pre className="bg-zinc-900 text-green-400 text-sm p-4 rounded-xl overflow-auto whitespace-pre-wrap leading-relaxed">
        <code>
      {`import { useEffect, useState } from "react";

      export default function useDarkMode() {
        const [isDark, setIsDark] = useState(() => {
          const saved = localStorage.getItem("theme");
          if (saved === "dark") return true;
          if (saved === "light") return false;
          return window.matchMedia("(prefers-color-scheme: dark)").matches;
        });

        useEffect(() => {
          document.documentElement.classList.toggle("dark", isDark);
          localStorage.setItem("theme", isDark ? "dark" : "light");
        }, [isDark]);

        return [isDark, setIsDark];
      }`}
        </code>
      </pre>

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



