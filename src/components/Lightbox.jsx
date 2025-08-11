import { useEffect } from "react";

export default function Lightbox({ open, src, alt, onClose, closeLabel = "Close" }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute top-4 right-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 px-3 py-1 text-white hover:bg-white/20"
      >
        {closeLabel}
      </button>
      <div className="max-w-6xl max-h-[85vh] w-full">
        <img src={src} alt={alt} className="w-full h-full object-contain rounded-2xl ring-1 ring-white/20" />
      </div>
      <button className="absolute inset-0" onClick={onClose} aria-hidden="true" />
    </div>
  );
}
