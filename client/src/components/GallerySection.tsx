/**
 * GallerySection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Category filters + uniform image grid with hover overlay
 * - Amber accent on hover
 * - View More / View Less expansion
 * - Lightbox on click
 */
import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";

type Category = "wood" | "vinyl" | "aluminum-iron" | "pool" | "chain-link";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  location: string;
  category: Category;
}

const CATEGORY_LABELS: Record<Category, string> = {
  wood: "Wood",
  vinyl: "Vinyl",
  "aluminum-iron": "Aluminum & Iron",
  pool: "Pool",
  "chain-link": "Chain Link",
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/photos/img_0019.jpg", title: "White Vinyl Privacy Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 2, src: "/photos/img_0020.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 3, src: "/photos/img_0116.jpg", title: "Horizontal Wood Slat Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 4, src: "/photos/img_0124.jpg", title: "White Vinyl Lattice Enclosure", location: "Residential — Backyard", category: "vinyl" },
  { id: 5, src: "/photos/img_0125.jpg", title: "Cedar Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 6, src: "/photos/img_0128.jpg", title: "Cedar Privacy Fence on Retaining Wall", location: "Residential — Backyard", category: "wood" },
  { id: 7, src: "/photos/img_0131.jpg", title: "Cedar Privacy Fence on Slope", location: "Residential — Backyard", category: "wood" },
  { id: 8, src: "/photos/img_0341.jpg", title: "Black Aluminum Pool Safety Fence", location: "Residential — Pool Area", category: "pool" },
  { id: 9, src: "/photos/img_0343.jpg", title: "Black Aluminum Mesh Pool Enclosure", location: "Residential — Pool Area", category: "pool" },
  { id: 10, src: "/photos/img_0344.jpg", title: "Black Aluminum Pool Fence & Gate", location: "Residential — Pool Area", category: "pool" },
  { id: 11, src: "/photos/img_0361.jpg", title: "White Vinyl Picket Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 12, src: "/photos/img_0363.jpg", title: "White Vinyl Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 13, src: "/photos/img_0520.jpg", title: "White Vinyl Picket Fence & Gate", location: "Residential — Front Yard", category: "vinyl" },
  { id: 14, src: "/photos/img_0525.jpg", title: "White Vinyl Lattice Gate", location: "Residential — Side Yard", category: "vinyl" },
  { id: 15, src: "/photos/img_0526.jpg", title: "White Vinyl Picket & Lattice Fence", location: "Residential", category: "vinyl" },
  { id: 16, src: "/photos/img_0527.jpg", title: "White Vinyl Lattice Fence & Gate", location: "Residential — Side Yard", category: "vinyl" },
  { id: 17, src: "/photos/img_0528.jpg", title: "White Vinyl Lattice Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 18, src: "/photos/img_0599.jpg", title: "Horizontal Wood Slat Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 19, src: "/photos/img_0600.jpg", title: "Horizontal Wood Fence with Rolling Gate", location: "Residential — Backyard", category: "wood" },
  { id: 20, src: "/photos/img_0601.jpg", title: "Horizontal Wood Fence with Sliding Gate", location: "Residential — Backyard", category: "wood" },
  { id: 21, src: "/photos/img_0602.jpg", title: "Horizontal Wood Privacy Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 22, src: "/photos/img_0903.jpg", title: "White Vinyl Privacy Fence", location: "Commercial", category: "vinyl" },
  { id: 23, src: "/photos/img_0948.jpg", title: "Wood Split-Rail Fence with Wire Mesh", location: "Residential", category: "wood" },
  { id: 24, src: "/photos/img_1065.jpg", title: "Wood-Grain Vinyl Double Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 25, src: "/photos/img_1066.jpg", title: "Wood-Grain Vinyl Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 26, src: "/photos/img_1180.jpg", title: "Black Iron Estate Driveway Gate", location: "Residential — Driveway", category: "aluminum-iron" },
  { id: 27, src: "/photos/img_1181.jpg", title: "Black Iron Estate Driveway Gate", location: "Residential — Driveway", category: "aluminum-iron" },
  { id: 28, src: "/photos/img_1202.jpg", title: "Gray Vinyl Privacy Fence & Gate", location: "Residential — Side Yard", category: "vinyl" },
  { id: 29, src: "/photos/img_1203.jpg", title: "Gray Vinyl Privacy Fence", location: "Residential — Side Yard", category: "vinyl" },
  { id: 30, src: "/photos/img_1209.jpg", title: "Black Aluminum Estate Gate", location: "Residential — Front Yard", category: "aluminum-iron" },
  { id: 31, src: "/photos/img_1238.jpg", title: "Horizontal Cedar Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 32, src: "/photos/img_1239.jpg", title: "Horizontal Cedar Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 33, src: "/photos/img_1370.jpg", title: "Cedar Picket Fence & Wire Gate", location: "Residential — Backyard", category: "wood" },
  { id: 34, src: "/photos/img_1373.jpg", title: "Mesh Pool Safety Fence", location: "Residential — Pool Area", category: "pool" },
  { id: 35, src: "/photos/img_1407.jpg", title: "White Vinyl Fence & Double Gate", location: "Residential — Driveway", category: "vinyl" },
  { id: 36, src: "/photos/img_1474.jpg", title: "Cedar Picket Gate", location: "Residential — Backyard", category: "wood" },
  { id: 37, src: "/photos/img_1477.jpg", title: "Board & Picket Wood Fence", location: "Residential — Driveway", category: "wood" },
  { id: 38, src: "/photos/img_1970.jpg", title: "Split Rail Fence with Wire Mesh", location: "Residential — Backyard", category: "wood" },
  { id: 39, src: "/photos/img_2054.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 40, src: "/photos/img_2119.jpg", title: "Mahogany Vinyl Privacy Fence & Gate", location: "Residential — Side Yard", category: "vinyl" },
  { id: 41, src: "/photos/img_2128.jpg", title: "Cedar Privacy Fence with Lattice Top", location: "Residential — Backyard", category: "wood" },
  { id: 42, src: "/photos/img_2131.jpg", title: "Cedar Privacy Fence with Lattice Top", location: "Residential — Backyard", category: "wood" },
  { id: 43, src: "/photos/img_2135.jpg", title: "Horizontal Slat Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 44, src: "/photos/img_2137.jpg", title: "Horizontal Slat Privacy Fence", location: "Residential — Backyard", category: "wood" },
  { id: 45, src: "/photos/img_2138.jpg", title: "Horizontal Slat Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 46, src: "/photos/img_2139.jpg", title: "Horizontal Slat Privacy Fence", location: "Residential — Backyard", category: "wood" },
  { id: 47, src: "/photos/img_2146.jpg", title: "Cedar Privacy Fence with Picket Top", location: "Residential — Backyard", category: "wood" },
  { id: 48, src: "/photos/img_2148.jpg", title: "Cedar Privacy Fence with Picket Top", location: "Residential — Backyard", category: "wood" },
  { id: 49, src: "/photos/img_2153.jpg", title: "White & Gray Vinyl Fence with Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 50, src: "/photos/img_2162.jpg", title: "White Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 51, src: "/photos/img_2164.jpg", title: "White Vinyl Fence with Pergola Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 52, src: "/photos/img_2169.jpg", title: "White Vinyl Fence with Pergola Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 53, src: "/photos/img_2170.jpg", title: "White Vinyl Double Gate with Pergola", location: "Residential — Backyard", category: "vinyl" },
  { id: 54, src: "/photos/img_2451.jpg", title: "Black Aluminum Picket Fence", location: "Residential — Side Yard", category: "aluminum-iron" },
  { id: 55, src: "/photos/img_2453.jpg", title: "Black Aluminum Picket Fence", location: "Residential — Front Yard", category: "aluminum-iron" },
  { id: 56, src: "/photos/img_2498.jpg", title: "White Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 57, src: "/photos/img_2500.jpg", title: "White Vinyl Picket Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 58, src: "/photos/img_2529.jpg", title: "Black Aluminum Arched Gate", location: "Residential — Backyard", category: "aluminum-iron" },
  { id: 59, src: "/photos/img_2655.jpg", title: "White Vinyl Privacy Double Gate", location: "Residential — Driveway", category: "vinyl" },
  { id: 60, src: "/photos/img_2749.jpg", title: "White Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 61, src: "/photos/img_2796.jpg", title: "Cedar Privacy Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 62, src: "/photos/img_2860.jpg", title: "White Vinyl Picket Fence", location: "Residential", category: "vinyl" },
  { id: 63, src: "/photos/img_2884.jpg", title: "Black Aluminum Estate Fencing", location: "Residential — Driveway", category: "aluminum-iron" },
  { id: 64, src: "/photos/img_2960.jpg", title: "Black Aluminum Estate Fencing", location: "Residential — Driveway", category: "aluminum-iron" },
  { id: 65, src: "/photos/img_2963.jpg", title: "Black Aluminum Pool Fence", location: "Residential — Pool Area", category: "pool" },
  { id: 66, src: "/photos/img_2965.jpg", title: "Black Aluminum Pool Fence", location: "Residential — Pool Area", category: "pool" },
  { id: 67, src: "/photos/img_3025.jpg", title: "Cedar Picket Gate", location: "Residential — Driveway", category: "wood" },
  { id: 68, src: "/photos/img_3026.jpg", title: "Cedar Picket Double Gate", location: "Residential — Driveway", category: "wood" },
  { id: 69, src: "/photos/img_3096.jpg", title: "Chain Link Fence with Privacy Slats", location: "Commercial", category: "chain-link" },
  { id: 70, src: "/photos/img_3098.jpg", title: "Chain Link Fence with Privacy Slats", location: "Commercial", category: "chain-link" },
  { id: 71, src: "/photos/img_3100.jpg", title: "White Vinyl Privacy Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 72, src: "/photos/img_3310.jpg", title: "Cedar Picket Fence", location: "Residential — Front Yard", category: "wood" },
  { id: 73, src: "/photos/img_3311.jpg", title: "Cedar Picket Fence", location: "Residential — Front Yard", category: "wood" },
  { id: 74, src: "/photos/img_3687.jpg", title: "White Vinyl Privacy Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 75, src: "/photos/img_3689.jpg", title: "White Vinyl Privacy Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 76, src: "/photos/img_3762.jpg", title: "White Vinyl Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 77, src: "/photos/img_3770.jpg", title: "Cedar Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 78, src: "/photos/img_3787.jpg", title: "Cedar Privacy Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 79, src: "/photos/img_3789.jpg", title: "Cedar Privacy Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 80, src: "/photos/img_3791.jpg", title: "White Vinyl Picket Fence & Gate", location: "Residential — Front Yard", category: "vinyl" },
  { id: 81, src: "/photos/img_3808.jpg", title: "White Vinyl Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 82, src: "/photos/img_3810.jpg", title: "White Vinyl Fence with Lattice Top", location: "Commercial", category: "vinyl" },
  { id: 83, src: "/photos/img_3811.jpg", title: "White Vinyl Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 84, src: "/photos/img_3937.jpg", title: "White Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 85, src: "/photos/img_3945.jpg", title: "Cedar Privacy Fence with Spindle Top", location: "Residential — Backyard", category: "wood" },
  { id: 86, src: "/photos/img_3947.jpg", title: "Cedar Privacy Fence with Spindle Top", location: "Residential — Backyard", category: "wood" },
  { id: 87, src: "/photos/img_4153.jpg", title: "Weathered Wood-Grain Vinyl Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 88, src: "/photos/img_4815.jpg", title: "Wood Picket Gate & Rail Fence", location: "Residential", category: "wood" },
  { id: 89, src: "/photos/img_1420.jpg", title: "Horizontal Cedar Privacy Fence", location: "Commercial", category: "wood" },
  { id: 90, src: "/photos/img_1424.jpg", title: "Horizontal Cedar Fence Corner Detail", location: "Commercial", category: "wood" },
  { id: 91, src: "/photos/img_1425.jpg", title: "Horizontal Wood Slat Fence", location: "Commercial", category: "wood" },
  { id: 92, src: "/photos/img_1768.jpg", title: "White Vinyl Picket Gate & Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 93, src: "/photos/img_1770.jpg", title: "White Vinyl Double Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 94, src: "/photos/img_1849.jpg", title: "White Vinyl Scalloped Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 95, src: "/photos/img_2032.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Side Yard", category: "vinyl" },
  { id: 96, src: "/photos/img_2113.jpg", title: "Cream Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 97, src: "/photos/img_2114.jpg", title: "Cream Vinyl Picket Fence & Driveway", location: "Residential — Front Yard", category: "vinyl" },
  { id: 98, src: "/photos/img_2115.jpg", title: "Vinyl Fence Joinery Detail", location: "Residential", category: "vinyl" },
  { id: 99, src: "/photos/img_2116.jpg", title: "White Vinyl Picket Corner Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 100, src: "/photos/img_2118.jpg", title: "Cream Vinyl Picket Fence", location: "Residential — Front Yard", category: "vinyl" },
  { id: 101, src: "/photos/img_2145.jpg", title: "Cedar Privacy Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 102, src: "/photos/img_2551.jpg", title: "Split Rail Fence", location: "Residential", category: "wood" },
  { id: 103, src: "/photos/img_2968.jpg", title: "Cedar Privacy Fence with Picket Top", location: "Residential — Backyard", category: "wood" },
  { id: 104, src: "/photos/img_4194.jpg", title: "Black Aluminum Estate Fencing", location: "Residential — Backyard", category: "aluminum-iron" },
  { id: 105, src: "/photos/img_4198.jpg", title: "Black Aluminum Estate Fence", location: "Residential — Backyard", category: "aluminum-iron" },
  { id: 106, src: "/photos/img_4199.jpg", title: "White Aluminum Arched Fence", location: "Residential — Front Yard", category: "aluminum-iron" },
  { id: 107, src: "/photos/img_4200.jpg", title: "Black Aluminum Estate Gate", location: "Residential — Side Yard", category: "aluminum-iron" },
  { id: 108, src: "/photos/img_4202.jpg", title: "Cedar Privacy Fence with Double Gate", location: "Residential — Backyard", category: "wood" },
  { id: 109, src: "/photos/img_4203.jpg", title: "Green Painted Wood Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 110, src: "/photos/img_4204.jpg", title: "Green Painted Wood Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 111, src: "/photos/img_4205.jpg", title: "Green Painted Wood Fence", location: "Residential — Side Yard", category: "wood" },
  { id: 112, src: "/photos/img_4206.jpg", title: "Cedar Privacy Fence with Lattice Top", location: "Residential — Backyard", category: "wood" },
  { id: 113, src: "/photos/img_4207.jpg", title: "Cedar Privacy Fence", location: "Residential — Backyard", category: "wood" },
  { id: 114, src: "/photos/img_4208.jpg", title: "Cedar Privacy Fence & Gate", location: "Residential — Backyard", category: "wood" },
  { id: 115, src: "/photos/img_4209.jpg", title: "Cedar Double Gate", location: "Residential — Backyard", category: "wood" },
  { id: 116, src: "/photos/img_4210.jpg", title: "Cedar Split-Rail Fence", location: "Residential — Front Yard", category: "wood" },
  { id: 117, src: "/photos/img_4211.jpg", title: "White Vinyl Picket Fence & Gate", location: "Residential — Front Yard", category: "vinyl" },
  { id: 118, src: "/photos/img_4212.jpg", title: "White Vinyl Picket Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 119, src: "/photos/img_4213.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 120, src: "/photos/img_4214.jpg", title: "White Vinyl Privacy Fence & Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 121, src: "/photos/img_4215.jpg", title: "White Vinyl Fence with Arbor Gate", location: "Residential — Backyard", category: "vinyl" },
  { id: 122, src: "/photos/img_4216.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 123, src: "/photos/img_4217.jpg", title: "White Vinyl Privacy Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 124, src: "/photos/img_4218.jpg", title: "White Vinyl Privacy Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 125, src: "/photos/img_4219.jpg", title: "Tan Vinyl Privacy Fence with Lattice Top", location: "Residential — Backyard", category: "vinyl" },
  { id: 126, src: "/photos/img_4220.jpg", title: "Two-Tone Vinyl Privacy Fence", location: "Residential — Backyard", category: "vinyl" },
  { id: 127, src: "/photos/img_4221.jpg", title: "Tan Vinyl Privacy Fence & Gate", location: "Residential — Side Yard", category: "vinyl" },
  { id: 128, src: "/photos/img_4228.jpg", title: "White Vinyl Pool Safety Fence & Gate", location: "Residential — Pool Area", category: "pool" },
];

const INITIAL_VISIBLE_COUNT = 12;

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [expanded, setExpanded] = useState(false);
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

  const availableCategories = (Object.keys(CATEGORY_LABELS) as Category[]).filter((cat) =>
    galleryItems.some((item) => item.category === cat)
  );

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const hasMore = filteredItems.length > INITIAL_VISIBLE_COUNT;
  const visibleItems = expanded ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT);

  const handleCategoryChange = (cat: Category | "all") => {
    setActiveCategory(cat);
    setExpanded(false);
  };

  return (
    <section id="gallery" className="relative py-28 bg-[oklch(0.14_0.01_60)] overflow-hidden">
      {/* Diagonal top cut */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[oklch(0.17_0.01_60)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-10">
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
              Browse {galleryItems.length}+ completed fence installations across residential, commercial, and pool properties.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}
        >
          {(["all", ...availableCategories] as (Category | "all")[]).map((cat) => {
            const label = cat === "all" ? "All Projects" : CATEGORY_LABELS[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-display font-bold text-xs uppercase tracking-widest px-4 py-2.5 border transition-all duration-200 ${
                  isActive
                    ? "bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] border-[oklch(0.72_0.15_65)]"
                    : "bg-transparent text-[oklch(0.60_0.01_60)] border-[oklch(0.30_0.01_60)] hover:border-[oklch(0.72_0.15_65)] hover:text-[oklch(0.72_0.15_65)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.97)",
                transition: `opacity 0.5s ease ${Math.min(i, 11) * 0.05}s, transform 0.5s ease ${Math.min(i, 11) * 0.05}s`,
              }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
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

        {/* View more / view less */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 border border-[oklch(0.72_0.15_65)]/40 text-[oklch(0.72_0.15_65)] font-display font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:border-[oklch(0.72_0.15_65)] hover:bg-[oklch(0.72_0.15_65)]/10"
            >
              {expanded ? (
                <>
                  View Less
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  View More ({filteredItems.length - INITIAL_VISIBLE_COUNT} more)
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
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
