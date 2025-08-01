import { useLanguage } from "../../context/LanguageContext";

export default function CertificateBadge({ title, organization, status }) {
  const { t } = useLanguage();

  return (
    <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 dark:border-white/10">
      <h3 className="font-semibold text-base text-black dark:text-white">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 italic mb-2">{organization}</p>
      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="italic">{t(`cert_${status.toLowerCase()}`)}</span>
      </div>
    </div>
  );
}
