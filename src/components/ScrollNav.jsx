import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Domů" },
  { id: "about", label: "O mně" },
  { id: "portfolio", label: "Portfolio" },
];

export default function ScrollNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-1/2 left-6 transform -translate-y-1/2 hidden lg:flex  flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm font-medium px-9 py-2 rounded-full transition-colors duration-300 ${
            active === id
              ? "bg-pink-600 text-neutral-100"
              : "text-neutral-100 hover:text-pink-400"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
