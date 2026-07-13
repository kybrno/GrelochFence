/**
 * Home — Greloch Fence Company
 * Design: Bold Industrial Contractor
 * Assembles all sections in order
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.01_60)]">
      <Navbar />
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
