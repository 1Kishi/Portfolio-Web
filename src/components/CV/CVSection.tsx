import EducationCard from "./EducationCard";
import WorkTimeline from "./WorkTimeline";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const educationDataRaw = {
  cz: [
    {
      school: "Vyšší odborná škola a Střední škola, Sezimovo Ústí",
      field: "Informační technologie - správa sítí a programování",
      years: "2018 - 2022",
      completed: true,
      explanation: "Studium jsem úspěšně dokončil. Zaměřeno na praktickou správu sítí a základní programování."
    },
    {
      school: "Jihočeská univerzita v Českých Budějovicích",
      field: "Podniková informatika",
      years: "2022 - 2023",
      completed: false,
      explanation: "Přerušeno - očekával jsem hlubší propojení technologií s ekonomikou. Reálně jsem nenašel výzvu ani dostatečné tempo."
    },
    {
      school: "VŠPJ - Vysoká škola polytechnická Jihlava",
      field: "Aplikovaná informatika",
      years: "2023 - 2024",
      completed: false,
      explanation: "Studium jsem opustil kvůli rodinné situaci a potřebě pracovat."
    }
  ],
  en: [
    {
      school: "Vyšší odborná škola a Střední škola, Sezimovo Ústí",
      field: "Information Technology - Network Administration and Programming",
      years: "2018 - 2022",
      completed: true,
      explanation: "Successfully completed. Focused on practical network administration and basic programming."
    },
    {
      school: "University of South Bohemia in České Budějovice",
      field: "Business Informatics",
      years: "2022 - 2023",
      completed: false,
      explanation: "Left after finding the connection between tech and economics too shallow. The pace and challenge were not sufficient."
    },
    {
      school: "Polytechnic University Jihlava (VŠPJ)",
      field: "Applied Informatics",
      years: "2023 - 2024",
      completed: false,
      explanation: "Left due to a family situation and the need to work."
    }
  ]
};

export default function CVSection() {
  const { lang, t } = useLanguage();
  const educationData = educationDataRaw[lang];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h2 className="text-2xl font-bold text-black dark:text-white">{t('cv_education_title')}</h2>
      <div className="space-y-4">
        {educationData.map((entry, index) => (
          <EducationCard key={index} entry={entry} />
        ))}
      </div>

      <WorkTimeline />

      <section className="pt-12 space-y-4">
        <h2 className="text-2xl font-bold text-black dark:text-white">{t('cv_interests_title')}</h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-200">
          {t('cv_interests_text')}
        </p>
      </section>

      <a
        href="/green-jacob_cv.pdf"
        download
        className="inline-block mt-4 px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white transition"
      >
        {t('cv_download')}
      </a>
    </section>
  );
}