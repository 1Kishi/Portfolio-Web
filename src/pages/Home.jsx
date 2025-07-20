export default function Home() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 flex flex-col items-center justify-center space-y-8 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-neonPink dark:text-softRose">
          Jacob Green
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
          Software and VR App Tester from Czech Republic
        </h2>
        <p className="text-base sm:text-lg text-mutedRose dark:text-mutedRose max-w-xl">
          Welcome to my portfolio website. Here you’ll find my projects, experience, and more about what I do.
        </p>
        <p className="text-base text-cocoa dark:text-softRose">
          Looking for a Job — <span className="font-semibold">Fulltime</span> / <span className="font-semibold">Remote</span>
        </p>
        <div className="bg-red-500 dark:bg-blue-900 text-white p-4 rounded">
          If this turns blue in dark mode, Tailwind works.
        </div>
      </div>

      {/* 🔍 TEST BLOCK */}
      <div className="space-y-4 text-center">
        <div className="bg-black text-white p-4 rounded">
          bg-black + text-white — should always be visible
        </div>

        <div className="text-neonPink text-xl font-bold p-2 border border-neonPink rounded">
          text-neonPink + border-neonPink — testing custom color
        </div>

        <div className="bg-white dark:bg-blue-900 text-black dark:text-white p-4 rounded transition-colors duration-500">
          This should have blue background and white text in dark mode
        </div>
        <div className="p-4" style={{ color: '#ff00f7' }}>
  Hardcoded pink via style
</div>

      </div>
    </section>
  );
}
