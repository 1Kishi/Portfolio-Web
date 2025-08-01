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
      "Glow efekt na kartách projektů nefungoval správně > rozpadával se.",
      "Měl jsem problémy s deploymentem na Vercel, neuvědomil jsem si, že je Vercel case sensitive při importaci souborů + Jsem zapomněl přidat fallback pro SPA > Způsobeno neznalostí. "
    ],
    reflection: [
      "Začátek projektu byl zmatený - hlavně s konfigurací Tailwindu. Bylo těžké odhalit proč některé třídy nefungují. Nakonec jsem zjistil, že šlo o tree-shaking a musel jsem je přidat na safelist nebo testovat natvrdo.",
      "Nastavení tmavého/světlého režimu bylo překvapivě jednoduché díky dark: prefixu v Tailwindu a detekci systémového nastavení přes useEffect.",
      "Design se ladil delší dobu. Glow efekty jsem ladil ručně, dělal testy s blur, mix-blend, z-index a pozicí elementů.",
      "Původně jsem neplánoval přidávat filtr projektů podle technologií, ale nápad přišel v průběhu a myslím si, že výrazně zlepší do budoucna UX."
    ],
    highlights: [
      "Všechno je napsané od nuly: čistý React + Tailwind, bez šablon nebo UI knihoven.",
      "Použití Vite zrychlilo vývoj.",
      "Deep Dive je více než jen popis projektu. je to menší deník vývoje a zrcadlo chyb na které jsem narazil."
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
      "Celý kód je samozřejmě k dispozici na GitHubu společně s dřívějšími pushes."
    ],
    snippets: [
      {
        title: "Struktura dat Projektu",
        code: `const projectData = {\n  \"portfolio-website\": {\n    title: \"Portfolio Website\",\n    description: \"Moje osobní portfolio postavené pomocí React, Tailwind a Vite.\",\n    github: \"https://github.com/1Kishi/Portfolio-Web\"\n  }\n};`
      },
      {
        title: "Hook pro tmavý/světlý režim (automatický a přepínatelný)",
        code: `import { useEffect, useState } from \"react\";\n\nexport default function useDarkMode() {\n  const [isDark, setIsDark] = useState(() => {\n    const saved = localStorage.getItem(\"theme\");\n    if (saved === \"dark\") return true;\n    if (saved === \"light\") return false;\n    return window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n  });\n\n  useEffect(() => {\n    document.documentElement.classList.toggle(\"dark\", isDark);\n    localStorage.setItem(\"theme\", isDark ? \"dark\" : \"light\");\n  }, [isDark]);\n\n  return [isDark, setIsDark];\n}`
      },
      {
        title: "Filtrování projektů podle tagů",
        code: `const allTags = [\"All\", ...Array.from(new Set(projects.flatMap(p => p.tags)))];\nconst [selectedTag, setSelectedTag] = useState(\"All\");\n\nconst filteredProjects = projects.filter(project =>\n  selectedTag === \"All\" ? true : project.tags.includes(selectedTag)\n);`
      }
    ]
  },

  "mini-network-threat-analyzer": {
    title: "Mini Network Threat Analyzer",
    description: "Web-based tool that simulates early-stage threat analysis by inspecting network traffic logs.",
    github: "https://github.com/1Kishi/Mini-Network-Threat-Analyzer",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/images/webbased_minithreat_analyzer-screenshot.png",
    goals: [
      "Simulovat ranou fázi threat analýzy pomocí jednoduchého nástroje.",
      "Zobrazit síťové spojení mezi IP adresami, porty a protokoly.",
      "Zvýraznit podezřelé spojení podle předdefinovaných pravidel (porty, externí IP, opakování).",
      "Zobrazit souhrn počtu a typů spojení a detekovaných problémů.",
      "Použít React a Tailwind pro responzivní, přehledné UI."
    ],
    challenges: [
      "Dummy for now.",
    ],
    snippets: [
      {
        title: "Dummy Title :>",
        code: `Warhammer Figures should be cheaper. Coloring should be easier. My fingers shouldn't shake so much, omggg.`
      },
      {
        title: "Filtrování projektů podle tagů",
        code: `Dummy Code.\nDon't forget to periodically save progress and reflect on problems you solved.`
      }
    ]
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

      {project.snippets && project.snippets.length > 0 && (
        <>
          <h1 className="text-xl font-semibold text-[26px] text-neutral-900 dark:text-white">Snippety kódu</h1>

          {project.snippets.map((snippet, idx) => (
            <div key={idx} className="mt-8">
              <h3 className="text-lg font-semibold text-[15px] text-neutral-900 dark:text-white mb-2">{snippet.title}</h3>
              <pre className="bg-zinc-900 text-green-400 text-sm p-4 rounded-xl overflow-auto whitespace-pre-wrap leading-relaxed">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
        </>
      )}

      <div className="text-center pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white transition">
          Zobrazit na GitHubu
        </a>
      </div>
    </div>

      

  </main>
);


}



