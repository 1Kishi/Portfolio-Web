import { createContext, useContext, useState } from 'react';

const translations = {
  cz: {
    home_title: "Jacob Green",
    home_subtitle: "Tester Softwaru z České republiky",
    home_intro: "Vítejte na mém portfoliu. Najdete zde mé projekty, zkušenosti a další informace o tom na jakých projektech pracuji a jaké jsou mé schopnosti, nebo mé budoucí plány.",
    home_status_detail: "Otevřený pozicím na zkrácený úvazek > remote, hybridně nebo on-site.",
    home_github_title: "GitHub Statistiky",
    home_github_desc: "Zde jsou mé veřejně dostupné GitHub statistiky - aktivita, oblíbené jazyky a obecná přítomnost v open-source projektech.",
    home_github_footer: "Bohužel jsou mé statistiky zatím nízké, jsem ale teprve na začátku své cesty. Git se aktivně učím pracuji na svých vlastních projektech. Když mě nějaký open-source projekt zaujme, snažím se ho aspoň pročíst a zorientovat se v něm. Pochopit proč lidi volí řešení a postup který volí.",
    home_about_title: "O mně",
    home_about_sub: "Interaktivní životopis",
    home_projects_title: "Ukázka posledních dvou projektů",
    home_project_detail: "Detail projektu",
    home_show_all: "Zobrazit všechny",
    btn_copy: "Kopírovat",
    nav_home: "Domů",
    nav_about: "O mně",
    nav_portfolio: "Portfolio",
    work_title: "Pracovní zkušenosti",
    work_position: "Software & VR Tester",
    work_place: "Virtual Lab • Srpen 2023 - současnost",
    work_line1: "V rámci své pozice testuji VR aplikace a softwarové projekty nejen z pohledu funkčnosti, ale také UX. Zodpovídám za vytváření changelogů a komunikaci s klienty (e-maily, zpětná vazba).",
    work_line2: "Podílím se na opravách drobných chyb v C# a zajišťuji postprodukční úpravy hlasových stop v Audacity za využití AI nástrojů, aby zněly přirozeněji a profesionálně.",
    work_line3: "Současně vedu dva testery na částečný úvazek, přesto drtivou většinu úkolů řeším sám.",
    intern_position: "IT Intern - Správa systému (částečný úvazek)",
    intern_place: "Leden - Březen 2025",
    intern_line1: "Pomáhal jsem s instalací hardwaru, nastavováním malých sítí a konfigurací vzdáleného přístupu pro školy a menší organizace.",
    intern_line2: "Řešil jsem základní problémy s konektivitou, instaloval nové vybavení a pomáhal s technickými potížemi.",
    intern_line3: "Úvazek jsem po dvou měsících dobrovolně ukončil - práce byla rutinní, ale poskytla mi důležitý vhled do provozu IT na místě.",
    intern_line4: "Pozici jsem si zvolil záměrně, abych si prakticky vyzkoušel oblast správy IT infrastruktury.",
    intern_line5: "Získal jsem lepší přehled o každodenní práci v tomto prostředí.",
    intern_line6: "Po této zkušenosti jsem se rozhodl zaměřit zpět na svou hlavní dráhu v softwaru.",
    cv_education_title: "Vzdělání",
    cv_interests_title: "Zájmy",
    cv_interests_text: "Rád objevují nové věci a často zkouším různé koníčky. Od tvorby hudby přes vaření až po programování nebo kreslení (Pixel Art). Nejvíc mě baví věci, které propojují kreativitu s logikou. Ve hrách mě přitahují hlavně strategie a řešení problémů, protože mě baví přemýšlet v souvislostech. Umím být vážný, když je to potřeba, ale rád věci dělám i s nadsázkou a úsměvem.",
    cv_download: "Stáhnout životopis (PDF)",
    education_completed: "Studium dokončeno",
    education_not_completed: "Studium nedokončeno",
    cert_planned: "Plánováno",
    cert_inprogress: "Probíhá",
    cert_completed: "Dokončeno",
    portfolio_title: "Portfolio",
    portfolio_intro: "Zde naleznete mé projekty. Jak byly tvořeny, popis, fotky a odkaz na GitHub s projektem.",
    portfolio_rules_title: "Pravidla Projektů",
    portfolio_rule_1: "Každý projekt je samostatně pojmenovaný a má svůj účel.",
    portfolio_rule_2: "Popisuji cíle projektu, výzvy a technická rozhodnutí.",
    portfolio_rule_3: "Použité technologie jsou vždy uvedeny pomocí tagů, nebo jsou zmíněny v textu.",
    portfolio_rule_4: "Každý projekt má vlastní stránku s podrobnostmi a odkazem na GitHub.",
    portfolio_projects_title: "Moje projekty",
    tag_all: "Vše",
    tag_react: "React",
    tag_tailwind: "Tailwind",
    tag_vite: "Vite",
    tag_cybersecurity: "Kyberbezpečnost",
    tag_network: "Sítě",
    tag_lan: "LAN",
    tag_javascript: "JavaScript",
    project_not_found: "Projekt nenalezen.",
    project_goals: "Cíle projektu",
    project_challenges: "Výzvy a problémy",
    project_reflection: "Reflexe a poznatky",
    project_highlights: "Co se povedlo",
    project_snippets: "Snippety kódu",
    project_github: "Zobrazit na GitHubu",
    project_photos_info: " ",
    project_photos_title: "Fotky",
    cert_title: "Plánované certifikace a vzdělávání",
    cert_intro: "Mým cílem je zlepšit své schopnosti v oblasti webového vývoje a kyberbezpečnosti. Níže jsou certifikace, které mám v plánu absolvovat.",
    cert_closing: "Mimo tyto plánované certifikace se vzdělávám pomocí kurzů, vlastních projektů, Youtube, čtení cizího kódu, AI vysvětlování různých snippetů a internetu (Především různá fórum).",
    cert_category_cybersecurity: "Kyberbezpečnost",
    cert_category_network: "Sítě",





  },
  en: {
    home_title: "Jacob Green",
    home_subtitle: "Software Tester from the Czech Republic",
    home_intro: "Welcome to my portfolio. You'll find my projects, experience, and more info about what I'm working on and my future plans.",
    home_status_detail: "Open to part-time positions > remote, hybrid, or on-site.",
    home_github_title: "GitHub Statistics",
    home_github_desc: "Here are my publicly available GitHub stats - activity, favorite languages, and open-source involvement.",
    home_github_footer: "My stats are still low, but I'm just at the beginning of my journey. I'm actively learning Git and working on my own projects. When an open-source project catches my interest, I try to read through it and understand its structure >> why people make the decisions they do.",
    home_about_title: "About Me",
    home_about_sub: "Interactive CV",
    home_projects_title: "Preview of My Latest Two Projects",
    home_project_detail: "Project Details",
    home_show_all: "View All",
    btn_copy: "Copy",
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    work_title: "Work Experience",
    work_position: "Software & VR Tester",
    work_place: "Virtual Lab • August 2023 - Present",
    work_line1: "In this role, I test VR and software projects not only for functionality but also for UX. I create changelogs and communicate with clients (emails, feedback).",
    work_line2: "I help fix minor bugs in C# and handle post-processing of voice tracks in Audacity using AI tools to improve quality and naturalness.",
    work_line3: "I currently lead two part-time testers, but I still handle the vast majority of tasks myself.",
    intern_position: "IT Intern - System Administration (Part-time)",
    intern_place: "January - March 2025",
    intern_line1: "I assisted with hardware installation, small network setup, and remote desktop configuration for schools and small organizations.",
    intern_line2: "I handled basic connectivity issues, deployed new equipment, and supported users with technical problems.",
    intern_line3: "I ended the role after two months - the tasks were routine, but the experience gave me a valuable look into on-site IT operations.",
    intern_line4: "I deliberately took this role to explore IT infrastructure hands-on and better understand the environment.",
    intern_line5: "It gave me clarity on what day-to-day system administration work looks like and helped me evaluate its fit.",
    intern_line6: "After this experience, I chose to refocus on my primary direction in software.",
    cv_education_title: "Education",
    cv_interests_title: "Interests",
    cv_interests_text: "I love discovering new things and frequently try different hobbies, from music production to cooking, programming, or pixel art drawing. I enjoy things that combine creativity and logic. In games, I'm drawn to strategy and problem-solving, because I like thinking in context. I can be serious when needed, but I also enjoy doing things with humor and a smile.",
    cv_download: "Download CV (PDF)",
    education_completed: "Completed",
    education_not_completed: "Not completed",
    cert_planned: "Planned",
    cert_inprogress: "In Progress",
    cert_completed: "Completed",
    portfolio_title: "Portfolio",
    portfolio_intro: "Here you'll find my projects, their purpose, descriptions, screenshots, and GitHub links.",
    portfolio_rules_title: "Project Guidelines",
    portfolio_rule_1: "Each project is individually named and has its own purpose.",
    portfolio_rule_2: "I describe the project's goals, challenges, and technical decisions.",
    portfolio_rule_3: "Used technologies are always tagged or mentioned directly.",
    portfolio_rule_4: "Every project links to a dedicated detail page and GitHub.",
    portfolio_projects_title: "My Projects",
    tag_all: "All",
    tag_react: "React",
    tag_tailwind: "Tailwind",
    tag_vite: "Vite",
    tag_cybersecurity: "Cybersecurity",
    tag_network: "Network",
    tag_lan: "LAN",
    tag_javascript: "JavaScript",
    project_not_found: "Project not found.",
    project_goals: "Project Goals",
    project_challenges: "Challenges",
    project_reflection: "Reflection and Takeaways",
    project_highlights: "What Went Well",
    project_snippets: "Code Snippets",
    project_github: "View on GitHub",
    project_photos_info: " ",
    project_photos_title: "Photos",
    cert_title: "Planned Certifications and Learning",
    cert_intro: "My goal is to improve my skills in web development and cybersecurity. Below are certifications I plan to pursue.",
    cert_closing: "In addition to these planned certifications, I am learning through courses, personal projects, YouTube, reading other people's code, AI explanations of various snippets, and the internet (mainly different forums).",
    cert_category_cybersecurity: "Cybersecurity",
    cert_category_network: "Network",







  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('cz');

  const toggleLang = () => {
    setLang(prev => (prev === 'cz' ? 'en' : 'cz'));
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
