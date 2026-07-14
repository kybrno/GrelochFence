/**
 * ReviewsSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Review cards with amber left-border accent
 * - Aggregate rating display
 * - Staggered entrance animations
 */
import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE_COUNT = 6;

const reviews = [
  {
    id: 1,
    name: "John Brooker",
    location: null,
    rating: 5,
    text: "Recently had a few sections of fence come down in a storm. I was referred by a friend who had nothing but great things to say about Greloch Fence. I called and left a message and he got back to me the next day. Came down and gave me a great quote and my fences were fixed shortly after. Jack did a great job.",
    project: "Storm Damage Repair",
    avatar: "JB",
  },
  {
    id: 2,
    name: "Julian",
    location: null,
    rating: 5,
    text: "Tom was great! He was responsive, showed up when he said he would and did a great job providing and installing the new white vinyl fence + gate. The fence looks great and is nice quality. Planning a larger fence job already for the future. Highly recommend.",
    project: "Vinyl Fence & Gate",
    avatar: "J",
  },
  {
    id: 3,
    name: "Kyle K",
    location: "Rockland, MA",
    rating: 5,
    text: "Tom worked faster and more efficiently than I have ever seen anyone in the field. He installed white vinyl and black chain link fence at my home in Rockland and it looks and functions beautifully. Tom did a great job and I would highly recommend his services, as he was one of the best prices around. Great guy, great work. Can't go wrong with him.",
    project: "Vinyl & Chain Link Fence",
    avatar: "KK",
  },
  {
    id: 4,
    name: "Elizabeth G",
    location: null,
    rating: 5,
    text: "Tom did an amazing job with my fence. I obtained five quotes for a vinyl fence and he provided me with the fairest quote. His competitors told me I would have to wait four to six weeks for installation. He installed the fence within two weeks. He was polite and professional; I am pleased with my fence.",
    project: "Vinyl Fence",
    avatar: "EG",
  },
  {
    id: 5,
    name: "Stephen J.",
    location: null,
    rating: 5,
    text: "Excellent workmanship! My wife and I are extremely happy with the cedar fence that Tom recently installed for us. He was a pleasure to work with and was both professional and responsive throughout the entire process. Very reasonably priced and quick turnaround as well. I would certainly hire him again and fully recommend his services to anyone looking for a quality product at a fair price - thank you Tom!",
    project: "Cedar Fence",
    avatar: "SJ",
  },
  {
    id: 6,
    name: "J Brandon W.",
    location: "Somerville, MA",
    rating: 5,
    text: "Replaced a wood fence along rear of our backyard summer of 2022. Was very happy with his overall professionalism, work quality, amazing speed, and very competitive pricing! Checked out his references from many former clients, as well as several local jobs & fully impressed.",
    project: "Wood Fence Replacement",
    avatar: "JW",
  },
  {
    id: 7,
    name: "Emily P.",
    location: null,
    rating: 5,
    text: "Tom is wonderful!! Highly recommend Greloch Fence, they were fast, hard working, pricing was the best around and so friendly! Highly recommend if you are in the market for a new fence!",
    project: null,
    avatar: "EP",
  },
  {
    id: 8,
    name: "Lamont Collins",
    location: null,
    rating: 5,
    text: "Great price. The fence was very satisfying.",
    project: null,
    avatar: "LC",
  },
  {
    id: 9,
    name: "Tim Durfee",
    location: null,
    rating: 5,
    text: "Positive: Responsiveness, Punctuality, Quality, Professionalism, Value.",
    project: null,
    avatar: "TD",
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
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const hasMore = reviews.length > INITIAL_VISIBLE_COUNT;
  const visibleReviews = expanded ? reviews : reviews.slice(0, INITIAL_VISIBLE_COUNT);

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
                <div className="text-xs text-[oklch(0.55_0.01_60)] uppercase tracking-wider">{reviews.length} verified reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleReviews.map((review, i) => (
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
              {review.project && (
                <div className="mt-4 inline-block bg-[oklch(0.72_0.15_65)]/8 border border-[oklch(0.72_0.15_65)]/20 px-2 py-0.5 text-[oklch(0.72_0.15_65)] font-display font-semibold text-[10px] uppercase tracking-wide">
                  {review.project}
                </div>
              )}

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[oklch(0.28_0.01_60)]">
                <div className="w-9 h-9 bg-[oklch(0.72_0.15_65)] flex items-center justify-center font-display font-black text-xs text-[oklch(0.14_0.01_60)] flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-sm uppercase tracking-wide text-white">
                    {review.name}
                  </div>
                  {review.location && (
                    <div className="text-xs text-[oklch(0.50_0.01_60)]">{review.location}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more / show less */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 border border-[oklch(0.72_0.15_65)]/40 text-[oklch(0.72_0.15_65)] font-display font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:border-[oklch(0.72_0.15_65)] hover:bg-[oklch(0.72_0.15_65)]/10"
            >
              {expanded ? (
                <>
                  Show Less
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  View More Reviews
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.6s" }}
        >
          <p className="text-[oklch(0.50_0.01_60)] text-sm mb-5">
            Join our growing list of satisfied homeowners across Rockland and the South Shore.
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
