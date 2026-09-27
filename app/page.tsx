import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AgenciesSection from "@/components/landing/AgenciesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="relative overflow-x-clip font-sans bg-hero-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AgenciesSection />
      <TestimonialsSection />
    </div>
  );
}
