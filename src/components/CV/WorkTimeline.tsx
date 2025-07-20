export default function WorkTimeline() {
  return (
    <section className="pt-12 space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">Pracovní zkušenosti</h2>

      <div className="relative border-l-2 border-neutral-300 dark:border-neutral-600 ml-4 pl-6 space-y-8">
        {/* Single Job Entry */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute -left-[17px] top-1 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black" />

          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">Software & VR Tester</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">Virtual Lab • Srpen 2023 – současnost</p>
            <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">
              Testování VR aplikací a softwarových projektů. Provádím funkční testování, UX validaci a zaznamenávám chyby do systému. Podílím se také na přípravě automatizovaných testovacích scénářů.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
