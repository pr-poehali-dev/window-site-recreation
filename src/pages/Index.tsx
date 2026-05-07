import NavHeader from "@/components/windows/NavHeader";
import HeroSection from "@/components/windows/HeroSection";
import CalculatorSection from "@/components/windows/CalculatorSection";
import BottomSections from "@/components/windows/BottomSections";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-golos overflow-x-hidden">
      <NavHeader />
      <HeroSection />
      <CalculatorSection />
      <BottomSections />
    </div>
  );
}
