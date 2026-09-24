import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="relative overflow-x-clip font-sans bg-hero-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
