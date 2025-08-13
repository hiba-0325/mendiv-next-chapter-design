import { Activity, Map, Brain } from "lucide-react";

const WhyMendiv = () => {
  const pillars = [
    {
      icon: Activity,
      title: "Measure",
      description: "Advanced DNA and epigenetic testing reveals your unique biological blueprint with precision.",
      highlight: "90% accuracy"
    },
    {
      icon: Map,
      title: "Map", 
      description: "AI-powered analysis creates your personalized LifeMap360™ optimization strategy.",
      highlight: "360° view"
    },
    {
      icon: Brain,
      title: "Master",
      description: "Science-backed interventions help you achieve peak performance and longevity.",
      highlight: "Proven results"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Most wellness plans guess.{" "}
            <span className="gradient-text">We measure first.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The BioAlign™ system combines cutting-edge science with personalized care 
            to unlock your optimal health potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 glow-primary group-hover:animate-glow">
                <pillar.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-4">{pillar.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMendiv;