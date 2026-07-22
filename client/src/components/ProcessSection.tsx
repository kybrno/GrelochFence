/**
 * ProcessSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Horizontal numbered steps with amber connector line
 * - Diagonal entry from above section
 * - Bold numbered step icons
 */
import { useState, useEffect, useRef } from "react";
import { ClipboardList, Ruler, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Free Estimate",
    description: "We visit your property, assess the terrain, and deliver a detailed written quote at zero cost.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Custom Plan",
    description: "We design a fence plan tailored to your property lines, terrain, and style. Material samples included.",
  },
  {
    num: "03",
    icon: HardHat,
    title: "Expert Installation",
    description: "Our crew handles all permits, post-setting, and panel installation. We clean up completely when done.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Final Walkthrough",
    description: "We walk the finished fence with you. Your satisfaction is guaranteed — we don't leave until you're happy.",
  },
];

export default function ProcessSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-[oklch(0.14_0.01_60)] overflow-hidden">
      {/* Amber structural bar — full width */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.72_0.15_65)] to-transparent opacity-40" />

      {/* Background numeral */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none leading-none"
        style={{ fontSize: "32rem", color: "oklch(0.72 0.15 65 / 0.025)", transform: "translateY(-50%) translateX(-10%)" }}
      >
        G
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <div className="section-label mb-3">How It Works</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="relative">
              <div
                className="hidden lg:block absolute -left-4 -top-4 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "9rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.06)" }}
              >
                03
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-6xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Our Process
              </h2>
            </div>
            <p
              className="text-[oklch(0.60_0.01_60)] max-w-sm text-sm leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}
            >
              Simple, transparent, and stress-free — from first call to final post.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[oklch(0.30_0.01_60)]">
            <div
              className="h-full bg-[oklch(0.72_0.15_65)]"
              style={{
                width: visible ? "100%" : "0%",
                transition: "width 1.2s cubic-bezier(0.23,1,0.32,1) 0.3s",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative flex flex-col items-center text-center group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                  }}
                >
                  {/* Step icon */}
                  <div className="relative z-10 w-20 h-20 bg-[oklch(0.20_0.01_60)] border-2 border-[oklch(0.72_0.15_65)]/50 flex flex-col items-center justify-center mb-6 group-hover:bg-[oklch(0.72_0.15_65)] group-hover:border-[oklch(0.72_0.15_65)] transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-[oklch(0.72_0.15_65)] group-hover:text-[oklch(0.14_0.01_60)] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                    <span className="font-display font-black text-[10px] tracking-widest text-[oklch(0.72_0.15_65)] group-hover:text-[oklch(0.14_0.01_60)] transition-colors duration-300 mt-1">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base uppercase tracking-wide text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.58_0.01_60)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.6s",
          }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97]"
          >
            Start Your Project
          </button>
          <a
            href="tel:+17816300351"
            className="font-display font-bold text-sm tracking-widest uppercase text-[oklch(0.72_0.15_65)] hover:text-white transition-colors duration-200 border border-[oklch(0.72_0.15_65)]/40 hover:border-white px-10 py-4"
          >
            Call (781) 630-0351
          </a>
        </div>
      </div>

      {/* Bottom amber bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.72_0.15_65)] to-transparent opacity-40" />
    </section>
  );
}
