/**
 * WhyUsSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Asymmetric two-column with amber structural bars
 * - Feature cards with left amber border accent
 * - Oversized background brand mark
 */
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Clock, Award, ThumbsUp, Users, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed in all states we operate, with comprehensive liability and workers' comp insurance for your peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We show up when we say we will and finish on schedule. Your time matters — we respect it.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Materials Only",
    description: "We source premium-grade lumber, steel, and vinyl from trusted suppliers. No shortcuts, no substandard materials.",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description: "Every post is plumb, every panel is level. Our crews have decades of combined installation experience.",
  },
  {
    icon: Users,
    title: "Local & Family-Owned",
    description: "J&K Greloch Fence is a local, family-owned business with roots in this community. We treat every property like it's our own.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a written workmanship warranty. If something isn't right, we make it right.",
  },
];

export default function WhyUsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 bg-[oklch(0.17_0.01_60)] overflow-hidden">
      {/* Diagonal top cut */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[oklch(0.14_0.01_60)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      {/* Background brand watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none leading-none"
        style={{ fontSize: "28rem", color: "oklch(0.72 0.15 65 / 0.025)", transform: "translateY(-50%) translateX(15%)" }}
      >
        G
      </div>

      <div className="container mx-auto relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text column */}
          <div>
            <div className="section-label mb-3">Why Greloch</div>
            <div className="relative mb-6">
              <div
                className="hidden lg:block absolute -left-6 -top-4 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "9rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.06)" }}
              >
                02
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-6xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Built Tough.<br />
                <span className="text-[oklch(0.72_0.15_65)]">Installed Right.</span>
              </h2>
            </div>

            <div
              className="w-16 h-1 bg-[oklch(0.72_0.15_65)] mb-6"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}
            />

            <p
              className="text-[oklch(0.65_0.01_60)] leading-relaxed max-w-lg mb-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
              }}
            >
              For over 20 years, J&K Greloch Fence has been the trusted choice for homeowners and contractors across the region. We combine old-school work ethic with modern installation techniques to deliver fences that last.
            </p>

            {/* Stats row */}
            <div
              className="grid grid-cols-2 gap-4 mb-8"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.2s",
              }}
            >
              {[
                { val: "20+", label: "Years in Business" },
                { val: "2,400+", label: "Projects Completed" },
                { val: "50mi", label: "Service Radius" },
                { val: "100%", label: "Licensed & Insured" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[oklch(0.72_0.15_65)] pl-4 py-1">
                  <div className="font-display font-black text-2xl text-[oklch(0.72_0.15_65)] leading-none">{s.val}</div>
                  <div className="text-xs text-[oklch(0.55_0.01_60)] uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97]"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.3s",
              }}
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Right: Feature list */}
          <div className="space-y-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group flex items-start gap-4 p-4 bg-[oklch(0.20_0.01_60)] border-l-2 border-[oklch(0.72_0.15_65)]/30 hover:border-[oklch(0.72_0.15_65)] hover:bg-[oklch(0.22_0.01_60)] transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s, border-color 0.3s ease, background-color 0.3s ease`,
                  }}
                >
                  <div className="w-9 h-9 bg-[oklch(0.72_0.15_65)]/10 border border-[oklch(0.72_0.15_65)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.15_65)] group-hover:border-transparent transition-all duration-300 mt-0.5">
                    <Icon size={16} className="text-[oklch(0.72_0.15_65)] group-hover:text-[oklch(0.14_0.01_60)] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm uppercase tracking-wide text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-[oklch(0.58_0.01_60)] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[oklch(0.14_0.01_60)]"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
