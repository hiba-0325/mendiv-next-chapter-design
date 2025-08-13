import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import WhyMendiv from "@/components/sections/why-mendiv";
import LifeMapSection from "@/components/sections/lifemap-section";
import NeuroSleepSection from "@/components/sections/neurosleep-section";
import SuccessStories from "@/components/sections/success-stories";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhyMendiv />
        <LifeMapSection />
        <NeuroSleepSection />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
