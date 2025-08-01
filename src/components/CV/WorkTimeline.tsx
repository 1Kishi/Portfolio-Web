import { motion } from "framer-motion";
import { SiJira, SiSharp, SiAudacity } from "react-icons/si";
import { MdBuild, MdViewInAr } from "react-icons/md";
import { TbChecklist, TbDeviceAnalytics } from "react-icons/tb";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkTimeline() {
  const { t, lang } = useLanguage();

  return (
    <section className="pt-12 space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">{t('work_title')}</h2>

      <div className="relative border-l-2 border-neutral-300 dark:border-neutral-600 ml-4 pl-6 space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-[17px] top-1 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black" />

          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">{t('intern_position')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">{t('intern_place')}</p>
            <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <span>{t('intern_line1')}</span><br />
              <span>{t('intern_line2')}</span><br />
              <span>{t('intern_line3')}</span><br />
              <span>{t('intern_line4')}</span><br />
              <span>{t('intern_line5')}</span><br />
              <span>{t('intern_line6')}</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["Networking", "Hardware Setup", "Remote Access", "Troubleshooting", "Helpdesk", "Part-time"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-[17px] top-1 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black" />

          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">{t('work_position')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">{t('work_place')}</p>
            <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <span>{t('work_line1')}</span><br />
              <span>{t('work_line2')}</span><br />
              <span>{t('work_line3')}</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["C#", "QA", "UX", "Bug Slayer", "Small Team Coordination", "Client Communication"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}