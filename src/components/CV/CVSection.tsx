import EducationCard from "./EducationCard";
import WorkTimeline from "./WorkTimeline";
import { motion } from "framer-motion";


const educationData = [
  {
    school: "Vyšší odborná škola a Střední škola, Sezimovo Ústí",
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
      <WorkTimeline />

        <section className="pt-12 space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">Zájmy</h2>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Rád objevují nové věci a často zkouším různé koníčky. Od tvorby hudby přes vaření až po programování nebo kreslení (Pixel Art). Nejvíc mě baví věci, které propojují kreativitu s logikou. 
            Ve hrách mě přitahují hlavně strategie a řešení problémů, protože mě baví přemýšlet v souvislostech. Umím být vážný, když je to potřeba, ale někdy věci dělám i s nadsázkou a úsměvem.
          </p>
        </section>
    </section>


  );
}
