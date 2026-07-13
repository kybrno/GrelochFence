/**
 * ServicesSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Asymmetric offset grid layout
 * - Diagonal section entry with amber structural bars
 * - Oversized section numeral behind heading
 * - Service cards with bold image headers and hover amber glow
 */
import { useState, useEffect, useRef } from "react";
import { ArrowRight, TreePine, Layers, Link2, Shield, Fence, Wrench } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Wood Fencing",
    description: "Cedar, pine, and pressure-treated wood fences custom-built for privacy, beauty, and durability. Stained or natural finish available.",
    image: "/images/wood-fence.webp",
    icon: TreePine,
    features: ["Privacy Panels", "Picket Styles", "Custom Heights", "Staining & Sealing"],
    tag: "Most Popular",
  },
  {
    id: "02",
    title: "Vinyl Fencing",
    description: "Low-maintenance PVC vinyl fencing that resists rot, rust, and fading. Looks great for decades with minimal upkeep.",
    image: "/images/vinyl-fence.webp",
    icon: Layers,
    features: ["Privacy & Picket", "Ranch Rail", "Semi-Privacy", "Custom Colors"],
    tag: null,
  },
  {
    id: "03",
    title: "Chain Link",
    description: "Cost-effective, durable chain link fencing for residential yards, commercial lots, and industrial perimeters.",
    image: "https://images.unsplash.com/photo-1606075920539-565e9f1de54c?w=800&q=80",
    icon: Link2,
    features: ["Galvanized & Vinyl-Coated", "Security Heights", "Gates & Access", "Commercial Grade"],
    tag: null,
  },
  {
    id: "04",
    title: "Aluminum & Iron",
    description: "Elegant ornamental aluminum and wrought iron fencing that adds curb appeal and lasting security to any property.",
    image: "/images/aluminum-iron-fence.webp",
    icon: Shield,
    features: ["Decorative Styles", "Powder Coating", "Custom Heights", "Pool-Safe Options"],
    tag: null,
  },
  {
    id: "05",
    title: "Farm & Ranch",
    description: "Heavy-duty agricultural fencing including split rail, board fence, and high-tensile wire for livestock and land management.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    icon: Fence,
    features: ["Split Rail", "Board Fence", "High-Tensile Wire", "Electric Options"],
    tag: null,
  },
  {
    id: "06",
    title: "Fence Repair",
    description: "Fast, reliable repair service for damaged, leaning, or aging fences. We restore your fence to like-new condition.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    icon: Wrench,
    features: ["Post Replacement", "Panel Repair", "Gate Adjustment", "Storm Damage"],
    tag: "Fast Turnaround",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-[oklch(0.18_0.01_60)] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${index * 0.08}s, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${index * 0.08}s, box-shadow 0.3s ease, translate 0.3s ease`,
        borderLeft: "3px solid oklch(0.72 0.15 65 / 0)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "oklch(0.72 0.15 65)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "oklch(0.72 0.15 65 / 0)"; }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108 brightness-75 group-hover:brightness-90"
          style={{ transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease" }}
        />
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-[oklch(0.72_0.15_65)]/10" />
        {/* ID number watermark */}
        <div className="absolute top-2 left-3 font-display font-black text-6xl text-white/10 leading-none select-none">
          {service.id}
        </div>
        {/* Tag */}
        {service.tag && (
          <div className="absolute top-3 right-3 bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-[10px] uppercase tracking-widest px-2 py-1">
            {service.tag}
          </div>
        )}
        {/* Icon */}
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-[oklch(0.14_0.01_60)]/80 border border-[oklch(0.72_0.15_65)]/40 flex items-center justify-center group-hover:bg-[oklch(0.72_0.15_65)] group-hover:border-transparent transition-all duration-300">
          <Icon size={15} className="text-[oklch(0.72_0.15_65)] group-hover:text-[oklch(0.14_0.01_60)] transition-colors duration-300" strokeWidth={2.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-extrabold text-xl uppercase tracking-wide text-white mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-[oklch(0.60_0.01_60)] leading-relaxed mb-4">
          {service.description}
        </p>
        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.features.map((f) => (
            <span key={f} className="bg-[oklch(0.72_0.15_65)]/8 border border-[oklch(0.72_0.15_65)]/20 text-[oklch(0.72_0.15_65)] font-display font-semibold text-[10px] uppercase tracking-wide px-2 py-0.5">
              {f}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[oklch(0.72_0.15_65)] hover:text-white transition-colors duration-200 group/btn"
        >
          Request Quote
          <ArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 bg-[oklch(0.14_0.01_60)]">
      {/* Top diagonal cut from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[oklch(0.14_0.01_60)]"
        style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }}
      />

      <div className="container mx-auto">
        {/* Header — asymmetric offset */}
        <div ref={ref} className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="section-label mb-3">What We Do</div>
            <div className="relative">
              <div
                className="hidden lg:block absolute -left-4 -top-6 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "10rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.05)" }}
              >
                01
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-7xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Our Services
              </h2>
            </div>
          </div>
          <div
            className="lg:max-w-sm"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease 0.15s",
            }}
          >
            <div className="w-12 h-0.5 bg-[oklch(0.72_0.15_65)] mb-4" />
            <p className="text-[oklch(0.60_0.01_60)] leading-relaxed text-sm">
              From residential privacy fences to commercial security perimeters, Greloch delivers expert installation across all fence types and materials.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[oklch(0.25_0.01_60)] pt-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <p className="text-[oklch(0.55_0.01_60)] text-sm">
            Not sure which fence type is right for you?{" "}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[oklch(0.72_0.15_65)] hover:text-white transition-colors underline underline-offset-2"
            >
              Ask our experts.
            </button>
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-7 py-3 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97] flex-shrink-0"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
