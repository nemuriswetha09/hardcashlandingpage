"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen hero-section flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "var(--hero-overlay-opacity)" }}
      ></div>

      <div className="relative z-10 text-center text-foreground max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 tracking-tight">
          The Hard Cash
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300 mb-8 italic">
          Let&apos;s Collect...
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Debt Management &<br />
          <span className="text-accent">
            Recovery Services with Tailored Solutions
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 dark:text-gray-300 mb-12 leading-relaxed">
          Helping businesses and individuals recover outstanding debts with
          integrity,
          <br />
          strategy and proven results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="border-2 border-accent hover:bg-accent text-accent hover:text-foreground font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
            Talk to Us
          </button>
        </div>
      </div>
    </section>
  );
}
