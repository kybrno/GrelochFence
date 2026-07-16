/**
 * Footer — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Deep dark background, amber accents
 * - Links, contact info, copyright
 */
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const serviceLinks = [
  "Chain Link Fence Installation",
  "Custom Fabrication",
  "Custom Fence Construction",
  "Fence Design",
  "Fence Installation",
  "Iron Fence Installation",
  "Ornamental Iron Fence Design & Installation",
  "Pool Fence Installation",
  "Privacy Fence Installation",
  "Vinyl Fence Installation",
  "Wood Fence Installation",
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "Free Quote", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.10_0.01_60)] border-t border-[oklch(0.22_0.01_60)]">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/photos/logo.png"
                alt="J&K Greloch Fence Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-extrabold text-xl tracking-widest uppercase text-white">
                J&K GRELOCH
              </span>
            </div>
            <p className="text-sm text-[oklch(0.55_0.01_60)] leading-relaxed mb-6">
              Professional fence installation for residential and commercial properties. Built tough, installed right — since 2004.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 border border-[oklch(0.30_0.01_60)] flex items-center justify-center text-[oklch(0.55_0.01_60)] hover:border-[oklch(0.72_0.15_65)] hover:text-[oklch(0.72_0.15_65)] transition-all duration-200"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-sm text-[oklch(0.55_0.01_60)] hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-[oklch(0.55_0.01_60)] hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+17816300351" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-[oklch(0.72_0.15_65)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-[oklch(0.80_0.01_60)] group-hover:text-[oklch(0.72_0.15_65)] transition-colors">
                      (781) 630-0351
                    </div>
                    <div className="text-xs text-[oklch(0.45_0.01_60)]">Mon–Sat, 7am–7pm · Closed Sunday</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:jacekgreloch781@gmail.com" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-[oklch(0.72_0.15_65)] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-[oklch(0.80_0.01_60)] group-hover:text-[oklch(0.72_0.15_65)] transition-colors break-all">
                    jacekgreloch781@gmail.com
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[oklch(0.72_0.15_65)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-[oklch(0.80_0.01_60)]">64 Oregon Ave, Rockland, MA 02370</div>
                    <div className="text-xs text-[oklch(0.45_0.01_60)]">Serving Rockland & the South Shore</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.18_0.01_60)]">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(0.40_0.01_60)]">
            © {new Date().getFullYear()} J&K Greloch Fence. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <button
                key={item}
                className="text-xs text-[oklch(0.40_0.01_60)] hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
