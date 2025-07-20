import { useState } from "react";


interface EducationEntry {
  school: string;
  field: string;
  years: string;
  completed: boolean;
  explanation: string;
}

export default function EducationCard({ entry }: { entry: EducationEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-xl shadow-sm bg-white/50 dark:bg-zinc-800/40 backdrop-blur hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">{entry.school}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{entry.field}</p>
        </div>
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{entry.years}</span>
      </div>

      {expanded && (
        <div className="mt-3 text-sm text-neutral-900 dark:text-neutral-100 transition-all duration-300">
          <p>{entry.explanation}</p>
          <p className="mt-1 italic text-xs text-neutral-500">
            {entry.completed ? "Studium dokončeno ✅" : "Nedokončeno ❌"}
          </p>
        </div>
      )}
    </div>
  );
}
