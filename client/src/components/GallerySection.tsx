/**
 * GallerySection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Masonry-style image grid with hover overlay
 * - Amber accent on hover
 * - Lightbox on click
 */
import { useState, useEffect, useRef } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/images/hero-waterfront-vinyl.webp",
    title: "Waterfront Vinyl Privacy",
    location: "Residential — Waterfront",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/wood-fence.webp",
    title: "Cedar Picket Fence",
    location: "Residential — Backyard",
    span: "",
  },
  {
    id: 3,
    src: "/images/vinyl-fence-oceanfront.webp",
    title: "White Vinyl Picket",
    location: "Residential — Oceanfront",
    span: "",
  },
  {
    id: 4,
    src: "/images/aluminum-iron-fence.webp",
    title: "Ornamental Aluminum",
    location: "Residential — Estate Gate",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "/images/vinyl-pool-fence.webp",
    title: "Vinyl Pool Enclosure",
    location: "Residential — Backyard Pool",
    span: "",
  },
  {
    id: 6,
    src: "/images/vinyl-fence.webp",
    title: "White Vinyl Fence",
    location: "Residential Installation",
    span: "",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="relative py-28 bg-[oklch(0.14_0.01_60)] overflow-hidden">
      {/* Diagonal top cut */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[oklch(0.17_0.01_60)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <div className="section-label mb-3">Our Work</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="relative">
              <div
                className="hidden lg:block absolute -left-4 -top-4 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "9rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.06)" }}
              >
                03
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-7xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Project Gallery
              </h2>
            </div>
            <p
              className="text-[oklch(0.60_0.01_60)] max-w-sm text-sm leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}
            >
              Browse completed fence installations across residential, commercial, and agricultural properties.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.97)",
                transition: `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`,
              }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110 brightness-80 group-hover:brightness-100"
                style={{ transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease" }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-[oklch(0.72_0.15_65)] font-display font-bold text-sm uppercase tracking-wide">
                  {item.title}
                </div>
                <div className="text-white/70 text-xs mt-0.5">{item.location}</div>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} className="text-white/80" />
              </div>
              {/* Amber left bar */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[oklch(0.72_0.15_65)] group-hover:h-full transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain border-l-4 border-[oklch(0.72_0.15_65)]"
            />
            <div className="mt-4 pl-4">
              <div className="font-display font-bold text-lg uppercase text-[oklch(0.72_0.15_65)] tracking-wide">
                {lightbox.title}
              </div>
              <div className="text-white/60 text-sm mt-1">{lightbox.location}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
