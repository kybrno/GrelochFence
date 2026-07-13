/**
 * TrustBanner — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Amber background strip with trust badges
 * - Full-width horizontal layout
 */
import { Shield, Award, Clock, Star } from "lucide-react";

const badges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "20+ Years Experience" },
  { icon: Star, text: "5-Star Rated" },
  { icon: Clock, text: "Free Estimates" },
];

export default function TrustBanner() {
  return (
    <div className="bg-[oklch(0.72_0.15_65)] py-4 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon size={16} className="text-[oklch(0.14_0.01_60)]" strokeWidth={2.5} />
                <span className="font-display font-bold text-sm uppercase tracking-widest text-[oklch(0.14_0.01_60)]">
                  {badge.text}
                </span>
                {i < badges.length - 1 && (
                  <span className="hidden lg:block w-px h-4 bg-[oklch(0.14_0.01_60)]/30 ml-4" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
