/**
 * ReviewsSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Review cards with amber left-border accent
 * - Aggregate rating display
 * - Staggered entrance animations
 */
import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael Harrington",
    location: "Maplewood, NJ",
    rating: 5,
    date: "March 2024",
    text: "Greloch installed a 200-foot cedar privacy fence around our backyard. The crew was professional, showed up on time every day, and the finished product is absolutely beautiful. Couldn't be happier.",
    project: "Cedar Privacy Fence",
    avatar: "MH",
  },
  {
    id: 2,
    name: "Sandra & Tom Kowalski",
    location: "Lakeside, PA",
    rating: 5,
    date: "January 2024",
    text: "We got three quotes and Greloch was most competitive while also having the best reviews. The aluminum ornamental fence they installed looks like it belongs on a magazine cover. Incredible work.",
    project: "Ornamental Aluminum",
    avatar: "SK",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Sunridge, NJ",
    rating: 5,
    date: "November 2023",
    text: "Had them replace an old rotted wood fence with vinyl. The team was fast, clean, and respectful of our property. The new fence looks amazing and I'll never worry about it rotting again.",
    project: "Vinyl Privacy Fence",
    avatar: "DC",
  },
  {
    id: 4,
    name: "Patricia Okafor",
    location: "Heritage Hills, PA",
    rating: 5,
    date: "September 2023",
    text: "From the initial quote to the final walkthrough, Greloch was communicative and professional every step of the way. The wrought iron gate they installed is a showpiece. Neighbors keep asking who did it.",
    project: "Wrought Iron Gate",
    avatar: "PO",
  },
  {
    id: 5,
    name: "James Whitfield",
    location: "Valley Ranch, NJ",
    rating: 5,
    date: "August 2023",
    text: "We needed 1,500 feet of agricultural fencing. Greloch handled the whole project efficiently and the pricing was fair. The crew worked hard and the fence is solid. Highly recommend for large jobs.",
    project: "Agricultural Fencing",
    avatar: "JW",
  },
  {
    id: 6,
    name: "Renee Fontaine",
    location: "Brookfield, NJ",
    rating: 5,
    date: "June 2023",
    text: "After a storm knocked down part of our fence, Greloch came out quickly and had the repair done within a week. Reasonable price, great work. They've earned a customer for life.",
    project: "Storm Damage Repair",
    avatar: "RF",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-[oklch(0.72_0.15_65)] fill-[oklch(0.72_0.15_65)]" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
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
    <section id="reviews" className="relative py-28 bg-[oklch(0.17_0.01_60)] overflow-hidden">
      {/* Diagonal top cut */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[oklch(0.14_0.01_60)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Background brand watermark */}
      <div
        className="absolute right-0 bottom-0 font-display font-black select-none pointer-events-none leading-none"
        style={{ fontSize: "28rem", color: "oklch(0.72 0.15 65 / 0.025)", transform: "translateX(15%) translateY(20%)" }}
      >
        G
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <div className="section-label mb-3">What Clients Say</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="relative">
              <div
                className="hidden lg:block absolute -left-4 -top-4 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "9rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.06)" }}
              >
                04
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-7xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Reviews
              </h2>
            </div>

            {/* Aggregate rating */}
            <div
              className="flex items-center gap-4 bg-[oklch(0.20_0.01_60)] border-l-4 border-[oklch(0.72_0.15_65)] px-6 py-4"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}
            >
              <div className="font-display font-black text-5xl text-[oklch(0.72_0.15_65)] leading-none">5.0</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-[oklch(0.72_0.15_65)] fill-[oklch(0.72_0.15_65)]" />
                  ))}
                </div>
                <div className="text-xs text-[oklch(0.55_0.01_60)] uppercase tracking-wider">200+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="group relative bg-[oklch(0.20_0.01_60)] border-l-2 border-[oklch(0.72_0.15_65)]/20 hover:border-[oklch(0.72_0.15_65)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:bg-[oklch(0.22_0.01_60)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, box-shadow 0.3s ease, border-color 0.3s ease`,
              }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[oklch(0.72_0.15_65)]/25 mb-3" />

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="mt-3 text-sm text-[oklch(0.68_0.01_60)] leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Project tag */}
              <div className="mt-4 inline-block bg-[oklch(0.72_0.15_65)]/8 border border-[oklch(0.72_0.15_65)]/20 px-2 py-0.5 text-[oklch(0.72_0.15_65)] font-display font-semibold text-[10px] uppercase tracking-wide">
                {review.project}
              </div>

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[oklch(0.28_0.01_60)]">
                <div className="w-9 h-9 bg-[oklch(0.72_0.15_65)] flex items-center justify-center font-display font-black text-xs text-[oklch(0.14_0.01_60)] flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-sm uppercase tracking-wide text-white">
                    {review.name}
                  </div>
                  <div className="text-xs text-[oklch(0.50_0.01_60)]">
                    {review.location} · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.6s" }}
        >
          <p className="text-[oklch(0.50_0.01_60)] text-sm mb-5">
            Join hundreds of satisfied homeowners and businesses across the region.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97]"
          >
            Get Your Free Estimate
          </button>
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
