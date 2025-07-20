import { motion } from "framer-motion";
import { SiJira, SiSharp, SiAudacity } from "react-icons/si";
import { MdBuild, MdViewInAr } from "react-icons/md";
import { TbChecklist, TbDeviceAnalytics } from "react-icons/tb";


export default function WorkTimeline() {
  return (
    <section className="pt-12 space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">Pracovní zkušenosti</h2>

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
            <h3 className="text-lg font-semibold text-black dark:text-white">Software & VR Tester</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">Virtual Lab • Srpen 2023 – současnost</p>
            <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">
              <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
                <span>
                  V rámci své pozice testuji VR aplikace a softwarové projekty nejen z pohledu funkčnosti, ale také UX. Zodpovídám za vytváření changelogů a komunikaci s klienty (e-maily, zpětná vazba).
                </span>
                <br />
                <span>
                  Podílím se na opravách drobných chyb v C# a zajišťuji postprodukční úpravy hlasových stop v Audacity za využití AI nástrojů, aby zněly přirozeněji a profesionálně.
                </span>
                <br />
                <span>
                  Současně vedu dva částečně úvazkové testery - přesto většinu klíčových nebo nejkomplexnějších úkolů řeším osobně.
                </span>
              </p>
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["C#", "QA", "UX", "Bug Slayer", "Automation", "Small Team Coordination", "Client Communication"].map((tag) => (
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
