export default function CertificateBadge({ name, status }: { name: string; status: "Planned" | "In Progress" | "Completed" }) {
  const statusColors = {
    Planned: "bg-yellow-500",
    "In Progress": "bg-blue-500",
    Completed: "bg-green-500",
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 dark:border-white/10 text-white">
      <span className={`w-3 h-3 rounded-full ${statusColors[status]}`}></span>
      <span className="text-sm">{name}</span>
      <span className="text-xs italic text-neutral-300 ml-auto">{status === "Planned" ? "Plánováno" : status === "In Progress" ? "Probíhá" : "Dokončeno"}</span>
    </div>
  );
}
