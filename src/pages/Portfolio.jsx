import { useState } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("All");
  const { lang, t } = useLanguage();

  return (
    <main id="portfolio" className="text-black dark:text-white transition-colors duration-500 px-4 py-20 space-y-24">

      <section className="max-w-5xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">{t('portfolio_title')}</h1>
        <p className=" text-neutral-800 dark:text-neutral-300 max-w-3xl mx-auto">
          {t('portfolio_intro')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold text-center">{t('portfolio_rules_title')}</h3>
        <div className="space-y-4 border-l-2 border-white/20 dark:border-white/10 pl-6">
          <div className="relative"><p>{t('portfolio_rule_1')}</p></div>
          <div className="relative"><p>{t('portfolio_rule_2')}</p></div>
          <div className="relative"><p>{t('portfolio_rule_3')}</p></div>
          <div className="relative"><p>{t('portfolio_rule_4')}</p></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">{t('portfolio_projects_title')}</h1>

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
              {t(`tag_${tag.toLowerCase()}`) || tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects
            .filter((project) =>
              selectedTag === "All" ? true : project.tech.includes(selectedTag)
            )
            .map((project) => (
              <div key={project.slug} className="relative group rounded-2xl project-glow">
                <a
                  href={`/deep-dive/${project.slug}`}
                  className="relative z-10 block rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white transition duration-300 group-hover:text-pink-400 drop-shadow-[0_0_4px_rgba(255,105,240,0.6)]">
                      {project.title[lang]}
                    </h3>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-sm text-neutral-800 dark:text-neutral-300">{project.short[lang]}</p>
                    <p className="text-xs text-neutral-500">{project.tech.join(", ")}</p>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
