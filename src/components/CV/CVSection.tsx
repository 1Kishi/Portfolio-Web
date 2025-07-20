import EducationCard from "./EducationCard";
import WorkTimeline from "./WorkTimeline";


const educationData = [
  {
    school: "Vyšší odborná škola, Sezimovo Ústí",
    field: "Informační technologie – správa sítí a programování",
    years: "2018 – 2022",
    completed: true,
    explanation: "Studium jsem úspěšně dokončil. Zaměřeno na praktickou správu sítí a základní programování."
  },
  {
    school: "Jihočeská univerzita v Českých Budějovicích",
    field: "Podniková informatika",
    years: "2022 – 2023",
    completed: false,
    explanation: "Přerušeno – očekával jsem hlubší propojení ekonomiky a technologií. Reálně jsem nenašel výzvu ani dostatečné tempo."
  },
  {
    school: "VŠPJ – Vysoká škola polytechnická Jihlava",
    field: "Aplikovaná informatika",
    years: "2023 – 2024",
    completed: false,
    explanation: "Studium jsem opustil kvůli rodinné situaci a potřebě pracovat. Pečoval jsem o nemocnou matku."
  }
];

export default function CVSection() {
    
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h2 className="text-2xl font-bold text-black dark:text-white">Vzdělání</h2>
      <div className="space-y-4">
        {educationData.map((entry, index) => (
          <EducationCard key={index} entry={entry} />
        ))}
      </div>

      {/* 🔜 Work experience timeline will go here */}
      <WorkTimeline />

    </section>
  );
}
