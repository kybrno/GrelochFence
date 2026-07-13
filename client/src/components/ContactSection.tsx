/**
 * ContactSection — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * - Diagonal top entry
 * - Two-column: contact info left, form right
 * - Amber accent on form focus states and info cards
 * - Background brand watermark
 */
import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    sub: "Mon–Sat, 7am–6pm",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@grelochfence.com",
    sub: "We respond within 24 hours",
    href: "mailto:info@grelochfence.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Northern NJ & Eastern PA",
    sub: "Free estimates within 50 miles",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 7am–6pm",
    sub: "Emergency repairs available",
    href: undefined,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full bg-[oklch(0.17_0.01_60)] border border-[oklch(0.28_0.01_60)] text-white placeholder-[oklch(0.42_0.01_60)] px-4 py-3 text-sm font-body focus:outline-none focus:border-[oklch(0.72_0.15_65)] focus:ring-1 focus:ring-[oklch(0.72_0.15_65)]/20 transition-all duration-200";

  return (
    <section id="contact" className="relative py-28 bg-[oklch(0.14_0.01_60)] overflow-hidden">
      {/* Amber structural bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.72_0.15_65)] to-transparent opacity-40" />

      {/* Background brand watermark */}
      <div
        className="absolute left-1/2 top-1/2 font-display font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: "32rem",
          color: "oklch(0.72 0.15 65 / 0.025)",
          transform: "translate(-50%, -50%)",
        }}
      >
        G
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <div className="section-label mb-3">Get In Touch</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="relative">
              <div
                className="hidden lg:block absolute -left-4 -top-4 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "9rem", lineHeight: 1, color: "oklch(0.72 0.15 65 / 0.06)" }}
              >
                05
              </div>
              <h2
                className="font-display font-black text-5xl lg:text-7xl uppercase text-white leading-none relative z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Free Quote
              </h2>
            </div>
            <p
              className="text-[oklch(0.60_0.01_60)] max-w-sm text-sm leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}
            >
              Tell us about your project and we'll get back to you within one business day with a free, no-obligation estimate.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div
            className="lg:col-span-2 space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-4 bg-[oklch(0.20_0.01_60)] border-l-2 border-[oklch(0.72_0.15_65)]/30 hover:border-[oklch(0.72_0.15_65)] hover:bg-[oklch(0.22_0.01_60)] transition-all duration-300 group">
                  <div className="w-9 h-9 bg-[oklch(0.72_0.15_65)]/10 border border-[oklch(0.72_0.15_65)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.15_65)] group-hover:border-transparent transition-all duration-300">
                    <Icon size={16} className="text-[oklch(0.72_0.15_65)] group-hover:text-[oklch(0.14_0.01_60)] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="section-label text-[0.6rem] mb-0.5">{item.label}</div>
                    <div className="font-display font-bold text-sm text-white group-hover:text-[oklch(0.72_0.15_65)] transition-colors duration-200">
                      {item.value}
                    </div>
                    <div className="text-xs text-[oklch(0.50_0.01_60)] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>{content}</a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Service area note */}
            <div className="mt-4 p-4 border-l-4 border-[oklch(0.72_0.15_65)] bg-[oklch(0.72_0.15_65)]/5">
              <p className="text-xs text-[oklch(0.60_0.01_60)] leading-relaxed">
                <span className="text-[oklch(0.72_0.15_65)] font-display font-bold uppercase tracking-wide">Free On-Site Estimates — </span>
                Our team will assess your property and provide a detailed written quote at no cost.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[oklch(0.20_0.01_60)] border-l-4 border-[oklch(0.72_0.15_65)]">
                <CheckCircle2 size={48} className="text-[oklch(0.72_0.15_65)] mb-4" />
                <h3 className="font-display font-black text-2xl uppercase text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-[oklch(0.60_0.01_60)] max-w-sm text-sm">
                  Thank you, <span className="text-white font-semibold">{form.name}</span>. We'll reach out within one business day to schedule your free estimate.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 text-[oklch(0.72_0.15_65)] font-display font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[oklch(0.20_0.01_60)] border-l-4 border-[oklch(0.72_0.15_65)]/30 hover:border-[oklch(0.72_0.15_65)] transition-colors duration-300 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[0.6rem] block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="section-label text-[0.6rem] block mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[0.6rem] block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="section-label text-[0.6rem] block mb-1.5">Service Type</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass + " appearance-none"}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="wood">Wood Fencing</option>
                      <option value="vinyl">Vinyl Fencing</option>
                      <option value="chain-link">Chain Link</option>
                      <option value="aluminum">Aluminum / Iron</option>
                      <option value="farm">Farm & Ranch</option>
                      <option value="repair">Fence Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="section-label text-[0.6rem] block mb-1.5">Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project — approximate footage, fence type, location, timeline, etc."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-none"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[oklch(0.72_0.15_65)] text-[oklch(0.14_0.01_60)] font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-white hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[oklch(0.14_0.01_60)]/30 border-t-[oklch(0.14_0.01_60)] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} strokeWidth={2.5} />
                      Request Free Quote
                    </>
                  )}
                </button>
                <p className="text-xs text-[oklch(0.40_0.01_60)] text-center">
                  No spam, no obligation. We'll contact you to schedule a free on-site estimate.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
