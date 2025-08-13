import { Button } from "@/components/ui/button";
import { Dna, Target, TrendingUp } from "lucide-react";

const LifeMapSection = () => {
  const steps = [
    {
      icon: Dna,
      title: "Test",
      description: "Comprehensive DNA & epigenetic analysis",
      detail: "Advanced testing reveals genetic markers, biological age, and optimization opportunities"
    },
    {
      icon: Target,
      title: "Decode", 
      description: "AI-powered personalized insights",
      detail: "Machine learning algorithms create your unique biological profile and recommendations"
    },
    {
      icon: TrendingUp,
      title: "Transform",
      description: "Targeted interventions for optimal health",
      detail: "Science-backed protocols designed specifically for your genetic blueprint"
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Your DNA is talking.{" "}
            <span className="gradient-text">Are you listening?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LifeMap360™ is the world's most comprehensive biological optimization system, 
            combining genetic testing, AI analysis, and personalized interventions.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                {/* Step Card */}
                <div className="glass-card relative z-10 hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 glow-primary">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-primary mb-3">{step.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="glass-card max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-6">What You'll Receive</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Comprehensive genetic analysis report</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Biological age assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Personalized nutrition protocol</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Custom supplement recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Exercise optimization plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Quarterly progress tracking</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="mt-8 animate-glow">
            Book Your DNA & Epigenetic Test Kit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifeMapSection;