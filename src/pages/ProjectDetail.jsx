import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const projectData = {
  "portfolio-website": {
    title: {
      cz: "Portfolio Website",
      en: "Portfolio Website"
    },
    description: {
      cz: "Moje osobní portfolio postavené pomocí React, Tailwind a Vite.",
      en: "My personal portfolio built with React, Tailwind, and Vite."
    },
    github: "https://github.com/1Kishi/Portfolio-Web",
    tech: ["React", "Tailwind", "Vite", "JavaScript"],
    image: "/images/portfolio_website-screenshot.png",
    goals: {
      cz: [
        "Vytvořit responzivní portfolio s moderním designem.",
        "Zobrazit projekty, zkušenosti a interaktivní životopis.",
        "Podporovat světlý i tmavý režim automaticky.",
        "Filtrování podle tagů a deep dive podstránky.",
        "Minimalistický, čitelný design s hover efekty a neon prvky."
      ],
      en: [
        "Create a responsive portfolio with modern design.",
        "Showcase projects, experience, and an interactive CV.",
        "Automatically support both light and dark mode.",
        "Tag-based filtering and deep-dive subpages.",
        "Minimalist, readable design with hover effects and neon highlights."
      ]
    },
    challenges: {
      cz: [
        "Tailwind třídy jako `text-neonPink` nefungovaly > způsobeno tree-shakingem.",
        "VSCode nepodporoval správně PostCSS syntax > neukazoval chyby.",
        "Globální npx přestal fungovat > reinstalace Node.js a oprava CLI linků.",
        "Zobrazovalo se overlay tlačítko i při hoveru na jiné části > špatná hierarchie.",
        "Glow efekt na kartách projektů nefungoval správně > rozpadával se.",
        "Měl jsem problémy s deploymentem na Vercel, neuvědomil jsem si, že je Vercel case sensitive při importaci souborů + Jsem zapomněl přidat fallback pro SPA > Způsobeno neznalostí. "
      ],
      en: [
        "Tailwind classes like `text-neonPink` didn't work > caused by tree-shaking.",
        "VSCode didn't properly support PostCSS syntax > errors were hidden.",
        "Global npx stopped working > fixed by reinstalling Node.js and CLI links.",
        "Overlay button appeared incorrectly on unrelated hover targets > wrong hierarchy.",
        "Glow effects on project cards didn't work properly > layout broke.",
        "Deployment on Vercel failed due to case-sensitive import + missing SPA fallback > lack of experience."        
      ]
    },
    reflection: {
      cz: [
      "Začátek projektu byl zmatený - hlavně s konfigurací Tailwindu. Bylo těžké odhalit proč některé třídy nefungují. Nakonec jsem zjistil, že šlo o tree-shaking a musel jsem je přidat na safelist nebo testovat natvrdo.",
      "Nastavení tmavého/světlého režimu bylo překvapivě jednoduché díky dark: prefixu v Tailwindu a detekci systémového nastavení přes 'useEffect'.",
      "Design se ladil delší dobu. Glow efekty jsem ladil ručně, dělal testy s blur, mix-blend, z-index a pozicí elementů.",
      "Rozhodl jsem se pro přidání všeho contentu na hlavní stránku, ale přesto zanechání navigace na jiné stránky. Někomu může vyhovovat mít na jedné stránce jen jeden předmět pozornosti, někdo může mít rád, že tam má vše a jen sjíždí nahoru a dolů.",
      "Původně jsem neplánoval přidávat filtr projektů podle technologií, ale nápad přišel v průběhu a myslím si, že výrazně zlepší do budoucna UX.",
      "Pozdní přidání plné responzivity > po původním 'dokončení' jsem zjistil, že navigace a projekty nefungují dobře na mobilech. Opraveno později pomocí skrytí navigace, která je bezpředmětná na této stránce pro mobilních zařízení.",
      "Neměl jsem nechat AI rozházet celý můj projekt, nebo spíš slepě důvěřovat. Rozhodl jsem se při seknutí s nastavením druhého jazyka pro využití jeho pomoci a poté jsem dlouhou dobu opravoval celý projekt. >> Na části a jednoduchý kód je skvělý, na větší kousky nebo těžší úkoly ne. Stále si ale myslím, že je to skvělý nástroj v moment, kdy se na delší dobu zaseknete. Pokud se používá správně, dokáže vás líp zorientovat a vysvětlit postup/řešení. Díky tomu je učení mnohem efektivnější. Upřímně si myslím, že bych překlád jinak bez knihovny vůbec neudělal."
      ],
      en: [
      "The start of the project was chaotic - mainly with configuring Tailwind. It was hard to figure out why some classes weren't working. I eventually discovered it was due to tree-shaking and had to safelist them or hardcode test cases.",
      "Setting up dark/light mode turned out surprisingly simple thanks to Tailwind's `dark:` prefix and system preference detection via 'useEffect'.",
      "The design took a while to refine. I manually adjusted glow effects, experimenting with blur, mix-blend, z-index, and element positioning.",
      "I decided to place all content on the main page while still keeping navigation to other pages. Some people prefer focusing on one topic per page, others like having everything in one place they can scroll through.",
      "Originally, I didn't plan to add tech-based filtering for projects, but the idea came mid-way - and I think it greatly improves UX moving forward.",
      "Full responsiveness was added late > after the 'final' version I realized the navigation and projects didn't work well on mobile. Fixed later by hiding navigation elements that are irrelevant for this page on mobile devices.",
      "I shouldn't have let AI corrupt my entire code, or rather, I shouldn't blindly trust it. I decided to use its help when I was stuck with setting up a second language, and then spent a long time fixing the entire project. >> It's great for little parts and simple code, but not for larger pieces or more difficult tasks. But I still think its great tool when you are stuck for a longer period of time, he can navigate and explain if used correctly. It makes it much more efficient to learn. I honestly think I wouldn't have done the translation at all without the library if the AI didn't help."
    ]
    },
    highlights: {
      cz: [
      "Všechno je napsané od nuly: čistý React + Tailwind, bez šablon nebo UI knihoven.",
      "Použití Vite zrychlilo vývoj.",
      "Deep Dive je více než jen popis projektu. je to menší deník vývoje a zrcadlo chyb na které jsem narazil."
    ],
      en: [
      "Everything is written from scratch: plain React + Tailwind, no templates or UI libraries.",
      "Using Vite sped up development.",
      "The Deep Dive is more than just a project description - it's a mini development diary and a reflection of the mistakes I encountered."
    ],    },
    extraImages: [
      "/images/Projects/Portfolio-web/Progress1.png",
      "/images/Projects/Portfolio-web/Progress2.png",
      "/images/Projects/Portfolio-web/Progress3.png",
      "/images/Projects/Portfolio-web/Progress4.png",
      "/images/Projects/Portfolio-web/Progress5.png",
      "/images/Projects/Portfolio-web/Progress6.png"
    ],

      imageCaptions: {
        cz: [
      "První pokus o vykreslení textu bez jakýchkoliv stylů.",
      "Počáteční návrh rozložení stránky a struktury sekcí.",
      "Vyřešení problémů s Tailwindem a první vizuální úpravy.",
      "Přidání automatického přepínání mezi světlým a tmavým režimem.",
      "Testování neonového glow efektu, animací a práce s kontejnery.",
      "Aktuální finální verze se sticky navigací a přehledným rozvržením."
    ],
        en: [
      "First attempt at rendering text without any styling.",
      "Initial layout design and section structure planning.",
      "Fixing Tailwind issues and starting visual adjustments.",
      "Added automatic switching between light and dark mode.",
      "Testing neon glow effects, animations, and container behavior.",
      "Current final version with sticky navigation and clean layout."
    ],
      },
      PhotosAdditionalInfo: {
        cz:["Bohužel jsem neudělal fotky při postupu, jelikož se jedná o můj první projekt pro mé portfolio, nejsem zvyklý fotit postup.",
        "Celý kód je samozřejmě k dispozici na GitHubu společně s dřívějšími pushes."
      ],
        en:  [
        "Unfortunately, I didn't take progress screenshots, as this is my first portfolio project and I wasn't in the habit of capturing the process.",
        "The full code is, of course, available on GitHub along with earlier pushes."
      ]
      },
  snippets: [
  {
    title: {
      cz: "Struktura dat Projektu",
      en: "Project Data Structure"
    },
    code: `const projectData = {
          "portfolio-website": {
            title: "Portfolio Website",
            description: "Moje osobní portfolio postavené pomocí React, Tailwind a Vite.",
            github: "https://github.com/1Kishi/Portfolio-Web"
          }
          };`
  },
  {
    title: {
      cz: "Hook pro tmavý/světlý režim",
      en: "Dark/Light Mode Hook"
    },
    code: `import { useEffect, useState } from "react";

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
          }`
  },
  {
    title: {
      cz: "Filtrování projektů podle tagů",
      en: "Filtering Projects by Tags"
    },
    code: `const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
          const [selectedTag, setSelectedTag] = useState("All");

          const filteredProjects = projects.filter(project =>
          selectedTag === "All" ? true : project.tags.includes(selectedTag)
          );`
  }
]

  },
  "mini-network-threat-analyzer": {
    title: {
      cz: "Mini Network Threat Analyzer",
      en: "Mini Network Threat Analyzer"
    },
    description: {
      cz: "Webový nástroj, který simuluje analýzu hrozeb pomocí jednoduchých logů.",
      en: "A web-based tool that simulates early-stage threat analysis using simple logs."
    },
    github: "https://github.com/1Kishi/Mini-Network-Threat-Analyzer",
    tech: ["React", "Tailwind", "JavaScript", "Network", "Cybersecurity", "LAN"],
    image: "/images/webbased_minithreat_analyzer-screenshot.png",
    goals: {
      cz: [
        "Simulovat ranou fázi threat analýzy pomocí jednoduchého nástroje.",
        "Zobrazit síťové spojení mezi IP adresami, porty a protokoly.",
        "Zvýraznit podezřelé spojení podle předdefinovaných pravidel (porty, externí IP, opakování).",
        "Zobrazit souhrn počtu a typů spojení a detekovaných problémů.",
        "Použít React a Tailwind pro responzivní, přehledné UI."
          ],
      en: [
        "Simulate the early stage of threat analysis using a simple tool.",
        "Visualize network connections between IP addresses, ports, and protocols.",
        "Highlight suspicious connections based on predefined rules (ports, external IPs, repetition).",
        "Display a summary of the number and types of connections and detected issues.",
        "Use React and Tailwind for a responsive and well-structured UI."
      ]
    },
    challenges: {
      cz: ["Dummy for now."],
      en: ["Dummy for now."]
    },
          snippets: {
        cz: [{ title: "...", code: "..." }],
        en: [{ title: "...", code: "..." }]
      }
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const project = projectData[slug];
  if (!project) return <p className="text-center mt-20">{t("project_not_found")}</p>;

  return (
    <main className="min-h-screen px-6 py-16 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl px-8 py-12">

        <h1 className="text-3xl font-bold text-center">{project.title[lang]}</h1>
        <p className="text-neutral-800 dark:text-neutral-300 text-center max-w-xl mx-auto">
          {project.description[lang]}
        </p>

        {project.image && (
          <div className="max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg border border-white/20 dark:border-white/10">
            <img
              src={project.image}
              alt={project.title[lang]}
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
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t("project_goals")}</h2>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
            {project.goals[lang].map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t("project_challenges")}</h2>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
            {project.challenges[lang].map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t("project_photos_title")}</h2>
        {project.extraImages && project.extraImages.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 mt-8">
            {project.extraImages.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md border border-white/20 dark:border-white/10">
                <img
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                {project.imageCaptions && project.imageCaptions[lang] && project.imageCaptions[lang][index] && (
                  <p className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {project.imageCaptions[lang][index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {project.PhotosAdditionalInfo && project.PhotosAdditionalInfo[lang] && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {t("project_photos_info") ?? "Notes About Images"}
            </h2>
            <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
              {project.PhotosAdditionalInfo[lang].map((note, i) => (
                <p key={i}>{note}</p>
              ))}
            </ul>
          </div>
        )}

        {project.reflection && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t("project_reflection")}</h2>
            <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
              {project.reflection[lang].map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}

        {project.highlights && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t("project_highlights")}</h2>
            <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-300 space-y-1">
              {project.highlights[lang].map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}

        {project.snippets && project.snippets.length > 0 && (
          <>
            <h1 className="text-xl font-semibold text-[26px] text-neutral-900 dark:text-white">{t("project_snippets")}</h1>
            {project.snippets.map((snippet, idx) => (
              <div key={idx} className="mt-8">
                <h3 className="text-lg font-semibold text-[15px] text-neutral-900 dark:text-white mb-2">
                  {snippet.title[lang]}
                </h3>
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
            {t("project_github")}
          </a>
        </div>
      </div>
    </main>
  );
}