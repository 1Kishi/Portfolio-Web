import { useState, useEffect } from 'react';
import CVSection from '../components/CV/CVSection';
import ScrollNav from "../components/ScrollNav";
import { certificates } from "../data/certificates";
import CertificateBadge from "../components/CV/CertificateBadge";
import CertificateSection from './Certificates';
import { projects } from "../data/projects";
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();

  const statusMessages = lang === 'cz'
    ? ['Scháním spolupráci', 'Remote vítán']
    : ['Looking for opportunities', 'Remote welcome'];

  const [statusIndex, setStatusIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jacobworkgreen@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [statusMessages]);

  return (
    <main className="text-black dark:text-white transition-colors duration-500 space-y-32">

      <section id="intro" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight">
            {t('home_title')}
          </h1>

          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
              {t('home_subtitle')}
            </h2>
            <p className="text-base sm:text-lg text-black dark:text-white max-w-xl mx-auto">
              {t('home_intro')}
            </p>
          </div>

          <div className="relative group w-fit mx-auto text-sm text-neutral-800 dark:text-neutral-100 transition-colors">
            <div className="flex items-center gap-2 cursor-help">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>

              <span className={`px-3 py-1 rounded-full bg-green-600/10 border border-green-500 text-green-700 dark:text-green-400 font-semibold text-xs tracking-wide shadow-sm group-hover:shadow-lg transition-all duration-700 ease-in-out`}>
                {statusMessages[statusIndex]}
              </span>

              <span className="text-xs text-muted ml-1 animate-pulse">ⓘ</span>
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-center bg-white/80 dark:bg-black/70 text-xs px-3 py-2 rounded-lg shadow backdrop-blur">
              {t('home_status_detail')}
            </div>
          </div>

          <section className="pt-12 space-y-8 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">{t('home_github_title')}</h2>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto">
              {t('home_github_desc')}
            </p>

            <div className="flex flex-col items-center gap-6">
              <img
                src="https://github-readme-stats-gamma-virid.vercel.app/api?username=1kishi&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Stats"
                className="rounded-xl shadow"
              />
              <img
                src="https://github-readme-stats-gamma-virid.vercel.app/api/top-langs/?username=1kishi&layout=compact&theme=tokyonight&hide_border=true"
                alt="Top Languages"
                className="rounded-xl shadow"
              />
            </div>

            <div>
              <p>{t('home_github_footer')}</p>
            </div>
          </section>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{t('home_about_title')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300">{t('home_about_sub')}</p>
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
                {copied ? t('btn_copied') : t('btn_copy')}
              </button>
            </div>
          </div>

          <CVSection />
          <CertificateSection />
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full px-6 py-10 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 space-y-8 text-center">
          <div className="pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">{t('home_projects_title')}</h2>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.slug}
                  className="flex flex-col justify-between h-full bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
                >
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{project.title[lang]}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{project.short[lang]}</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={`/deep-dive/${project.slug}`}
                      className="inline-block text-sm text-neutral-800 dark:text-pink-200 hover:underline"
                    >
                      {t('home_project_detail')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/portfolio"
              className="inline-block mt-4 px-4 py-2 rounded-md text-sm bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition text-black dark:text-white"
            >
              {t('home_show_all')}
            </a>
          </div>
        </div>
      </section>

      <ScrollNav />
    </main>
  );
}
