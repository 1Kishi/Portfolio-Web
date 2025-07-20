import CVSection from "../components/CV/CVSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">O mně</h1>
        <p className="text-neutral-600 dark:text-neutral-300">Interaktivní životopis a moje cesta</p>
      </div>
      <CVSection />
    </main>
  );
}
