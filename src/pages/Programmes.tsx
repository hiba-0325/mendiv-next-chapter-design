import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Dna, Brain, Heart, Zap, Clock, Users } from "lucide-react";

const Programmes = () => {
  const programmes = [
    {
      icon: Dna,
      name: "LifeMap360™",
      tagline: "Complete Biological Optimization",
      duration: "6 months",
      price: "From $4,500",
      description: "Our flagship program combining genetic testing, epigenetic analysis, and personalized interventions for total health transformation.",
      features: [
        "Comprehensive DNA & epigenetic testing",
        "AI-powered personalized protocols",
        "Monthly biomarker tracking",
        "24/7 digital twin monitoring",
        "Personal optimization coach",
        "Custom supplement formulations"
      ],
      popular: true
    },
    {
      icon: Brain,
      name: "NeuroSleep™",
      tagline: "Sleep Architecture Optimization",
      duration: "3 months", 
      price: "From $2,200",
      description: "Advanced sleep optimization using brainwave analysis, environmental controls, and personalized protocols.",
      features: [
        "EEG brainwave monitoring",
        "Smart environment integration",
        "Circadian rhythm optimization",
        "Recovery tracking",
        "Sleep coach support",
        "Tech device integration"
      ]
    },
    {
      icon: Heart,
      name: "CardioVital™",
      tagline: "Cardiovascular Performance",
      duration: "4 months",
      price: "From $3,100",
      description: "Comprehensive heart health optimization with advanced diagnostics and personalized interventions.",
      features: [
        "Advanced cardiac imaging",
        "HRV optimization protocols",
        "Personalized exercise plans",
        "Nutrition optimization",
        "Stress management training",
        "Continuous monitoring"
      ]
    },
    {
      icon: Zap,
      name: "MetaBoost™",
      tagline: "Metabolic Optimization",
      duration: "3 months",
      price: "From $2,800",
      description: "Transform your metabolism with genetic-based nutrition, supplementation, and lifestyle interventions.",
      features: [
        "Metabolic testing suite",
        "Genetic nutrition analysis",
        "Custom meal planning",
        "Supplement optimization",
        "Energy tracking",
        "Metabolic coaching"
      ]
    },
    {
      icon: Clock,
      name: "LongeVita™",
      tagline: "Longevity Acceleration",
      duration: "12 months",
      price: "From $8,900",
      description: "Ultimate longevity program focusing on biological age reversal and healthspan extension.",
      features: [
        "Comprehensive aging markers",
        "Telomere length analysis",
        "Senescence cell targeting",
        "Hormone optimization",
        "Advanced biohacking protocols",
        "Longevity specialist team"
      ]
    },
    {
      icon: Users,
      name: "Corporate Wellness",
      tagline: "Team Optimization",
      duration: "Flexible",
      price: "Custom pricing",
      description: "Transform your workforce with science-backed wellness programs designed for high-performing teams.",
      features: [
        "Team health assessments",
        "Group optimization plans",
        "Executive health programs",
        "Productivity enhancement",
        "Stress reduction protocols",
        "ROI tracking & analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Premium <span className="gradient-text">Wellness Programmes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Science-backed optimization programs designed for health-conscious professionals 
              seeking measurable improvements in performance, longevity, and vitality.
            </p>
          </div>
        </section>

        {/* Programmes Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {programmes.map((programme, index) => (
                <div
                  key={programme.name}
                  className={`glass-card relative ${
                    programme.popular ? "ring-2 ring-primary/50" : ""
                  } hover:scale-[1.02] transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {programme.popular && (
                    <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center glow-primary">
                      <programme.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-serif font-bold mb-2">{programme.name}</h3>
                      <p className="text-primary text-lg mb-2">{programme.tagline}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Duration: {programme.duration}</span>
                        <span>•</span>
                        <span className="text-primary font-medium">{programme.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {programme.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {programme.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      Learn More
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Not Sure Which Programme Is Right for You?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Book a free discovery call with our wellness experts to find the perfect 
                optimization path for your unique biology and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Book Free Discovery Call
                </Button>
                <Button size="lg" variant="outline">
                  Take Assessment Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programmes;