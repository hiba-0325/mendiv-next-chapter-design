import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import WhyMendiv from "@/components/sections/why-mendiv";
import LifeMapSection from "@/components/sections/lifemap-section";
import NeuroSleepSection from "@/components/sections/neurosleep-section";
import SuccessStories from "@/components/sections/success-stories";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/ui/footer";
import Faqs from "@/components/sections/faqs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <WhyMendiv />
        <LifeMapSection />
        <NeuroSleepSection />
        <SuccessStories />
        <Faqs />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
