import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dna-transformation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Decode Your Biology,{" "}
            <span className="gradient-text">Design Your Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium science-backed wellness programs that measure first, 
            then create your personalized path to optimal health and longevity.
          </p>

          {/* Glassmorphic CTA Panel */}
          <div className="glass-card max-w-lg mx-auto">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full animate-glow text-lg py-6"
              >
                Start Your LifeMap360™ Journey
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full border border-white/20 hover:bg-white/5 text-lg py-6"
              >
                Discover Your Biological Age →
              </Button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;