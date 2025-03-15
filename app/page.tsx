import BgGradient from "@/components/common/br-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowitWorkSection from "@/components/home/how-it-work-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />

      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowitWorkSection />
      </div>

      {/* <PricingSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}
