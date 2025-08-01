import { useState } from "react";
import CertificateBadge from "../components/CV/CertificateBadge";
import { useLanguage } from "../context/LanguageContext";

const data = [
  {
    title: "OSCP",
    organization: "Offensive Security",
    status: "Planned",
    category: "Cybersecurity"
  },
  {
    title: "CompTIA Security+",
    organization: "CompTIA",
    status: "Planned",
    category: "Cybersecurity"
  },
  {
    title: "TryHackMe Complete Path",
    organization: "TryHackMe",
    status: "Planned",
    category: "Cybersecurity"
  },
  {
    title: "Meta Front-End Developer",
    organization: "Coursera",
    status: "Planned",
    category: "Frontend"
  },
  {
    title: "Node.js, Express, MongoDB",
    organization: "MongoDB University",
    status: "Planned",
    category: "Backend"
  },
  {
    title: "Cisco CCNA",
    organization: "Cisco",
    status: "Planned",
    category: "Network"
  }
];

export default function Certificates() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    t("cert_category_cybersecurity"),
    "Frontend",
    "Backend",
    t("cert_category_network")
  ];

  const filtered =
    selectedCategory === "All"
      ? data
      : data.filter(
          (item) =>
            item.category === "Frontend" ||
            item.category === "Backend"
              ? item.category === selectedCategory
              : t(
                  item.category === "Cybersecurity"
                    ? "cert_category_cybersecurity"
                    : "cert_category_network"
                ) === selectedCategory
        );

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("cert_title")}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          {t("cert_intro")}
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-pink-500/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <CertificateBadge key={idx} {...item} />
        ))}
      </div>

      <p className="mt-16 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-2xl mx-auto">
        {t("cert_closing")}
      </p>
    </section>
  );
}
