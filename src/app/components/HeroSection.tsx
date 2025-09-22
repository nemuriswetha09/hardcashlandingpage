"use client";

export default function HeroSection() {
  const handleTalkToUs = () => {
    const email = "contact@thehardcash.com";
    const subject = encodeURIComponent("Inquiry about Debt Management Services");
    const body = encodeURIComponent("Hello,\n\nI would like to learn more about your debt management and recovery services.\n\nPlease contact me at your earliest convenience.\n\nThank you!");
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative w-full min-h-screen hero-section flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "var(--hero-overlay-opacity)" }}
      ></div>

      <div className="relative z-10 text-center text-foreground max-w-4xl mx-auto">

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleTalkToUs}
            className="group relative border-2 border-accent hover:bg-accent text-accent hover:text-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
          >
            <span className="relative z-10 transition-colors duration-300">
              Talk to Us
            </span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}