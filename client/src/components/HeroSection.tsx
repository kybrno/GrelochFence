/**
 * HeroSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Full-bleed hero image with dark gradient overlay
 * - Oversized Barlow Condensed headline
 * - Amber accent bar and stat counters
 * - Diagonal bottom cut
 */
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-waterfront-vinyl.webp')" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.01_60)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label animate-fade-up mb-4">
            Professional Fence Installation
          </div>

          {/* Headline */}
          <h1 className="font-display font-black uppercase leading-none text-white animate-fade-up-delay-1">
            <span className="block text-6xl sm:text-7xl lg:text-9xl tracking-tight">
              YOUR
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl tracking-tight text-[oklch(0.72_0.15_65)]">
              PROPERTY.
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl tracking-tight">
              PROPERLY
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl tracking-tight">
              PROTECTED.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed animate-fade-up-delay-2 font-body">
            Greloch Fence installs residential and commercial fencing with precision craftsmanship and materials built to last. Wood, vinyl, chain link, aluminum — we do it right the first time.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-3">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-base tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-amber-900/30"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white/40 text-white font-display font-bold text-base tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:border-[oklch(0.72_0.15_65)] hover:text-[oklch(0.72_0.15_65)] active:scale-[0.97]"
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 animate-fade-up-delay-3">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "2,400+", label: "Projects Completed" },
              { value: "100%", label: "Licensed & Insured" },
              { value: "5★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="amber-bar">
                <div className="font-display font-black text-3xl text-[oklch(0.72_0.15_65)] leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1 font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[oklch(0.14_0.01_60)]"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
