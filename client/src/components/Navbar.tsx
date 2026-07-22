/**
 * Navbar — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Transparent on hero, transitions to dark charcoal on scroll
 * - Amber accent on active/hover links
 * - Barlow Condensed display font for brand name
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.14_0.01_60)]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src="/photos/GrelochFenceLogo.png"
            alt="J&K Greloch Fence Logo"
            className="w-9 h-9 object-contain"
          />
          <span
            className="font-display font-extrabold text-2xl tracking-widest uppercase text-white group-hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200"
          >
            J&K GRELOCH
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display font-semibold text-sm tracking-widest uppercase text-white/80 hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+17816300351"
            className="hidden md:flex items-center gap-2 text-[oklch(0.72_0.15_65)] font-display font-bold text-sm tracking-wider uppercase hover:text-white transition-colors duration-200"
          >
            <Phone size={15} strokeWidth={2.5} />
            (781) 630-0351
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden lg:block bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.97]"
          >
            Free Quote
          </button>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.14_0.01_60)]/98 backdrop-blur-md`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display font-bold text-base tracking-widest uppercase text-white/80 hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200 text-left py-3 border-b border-white/10"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+17816300351"
            className="flex items-center gap-2 text-[oklch(0.72_0.15_65)] font-display font-bold text-sm tracking-wider uppercase mt-3"
          >
            <Phone size={15} />
            (781) 630-0351
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-3 bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-5 py-3 w-full"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
