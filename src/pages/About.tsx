import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "2,500+", label: "Lives Transformed" },
    { icon: TrendingUp, number: "87%", label: "Avg. Biological Age Reduction" },
    { icon: Heart, number: "10+", label: "Years of Research" },
    { icon: Award, number: "25+", label: "Scientific Publications" }
  ];

  const team = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Founder & Chief Scientific Officer",
      image: "👩‍⚕️",
      credentials: "MD, PhD Longevity Medicine",
      bio: "Former Harvard researcher with 15+ years in genetic medicine and longevity science. Pioneer in personalized wellness protocols."
    },
    {
      name: "Dr. Marcus Chen",
      role: "Head of Genetic Research", 
      image: "👨‍🔬",
      credentials: "PhD Genetics, Stanford",
      bio: "Leading expert in epigenetic analysis and personalized nutrition. Published researcher with 50+ peer-reviewed papers."
    },
    {
      name: "Sarah Kim",
      role: "Director of Wellness Programs",
      image: "👩‍💼",
      credentials: "MSc Nutrition, Certified Health Coach",
      bio: "Former executive turned wellness expert. Specializes in high-performance optimization for busy professionals."
    },
    {
      name: "Dr. James Thompson",
      role: "Sleep & Neuroscience Specialist",
      image: "👨‍⚕️", 
      credentials: "MD Sleep Medicine, PhD Neuroscience",
      bio: "World-renowned sleep researcher and creator of the NeuroSleep™ optimization protocols."
    }
  ];

  const values = [
    {
      title: "Science-First Approach",
      description: "Every recommendation is backed by peer-reviewed research and validated through rigorous testing.",
      icon: "🔬"
    },
    {
      title: "Personalized Precision",
      description: "No two people are alike. Our protocols are uniquely tailored to your genetic blueprint and lifestyle.",
      icon: "🎯"
    },
    {
      title: "Measurable Results",
      description: "We track biomarkers, not just feelings. Every intervention is measured for objective improvement.",
      icon: "📊"
    },
    {
      title: "Holistic Integration",
      description: "True wellness encompasses mind, body, and spirit. Our approach addresses all dimensions of health.",
      icon: "🌟"
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
              Pioneering the Future of <span className="gradient-text">Human Optimization</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Founded by world-class scientists and wellness experts, Mendiv combines cutting-edge 
              genetic research with personalized care to unlock human potential like never before.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-primary">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-center mb-16">
                Our <span className="gradient-text">Story</span>
              </h2>
              
              <div className="glass-card">
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Mendiv was born from a simple yet profound realization: despite having access to more 
                    health information than ever before, most people still struggle to achieve optimal wellness. 
                    The missing piece wasn't more knowledge—it was personalization.
                  </p>
                  
                  <p>
                    Founded in 2019 by Dr. Elena Rodriguez, a former Harvard longevity researcher, Mendiv began 
                    as a quest to bridge the gap between cutting-edge genetic science and practical, 
                    everyday wellness solutions.
                  </p>
                  
                  <p>
                    After witnessing countless patients receive generic health advice that failed to address 
                    their unique biological makeup, Dr. Rodriguez assembled a team of world-class scientists, 
                    physicians, and wellness experts to create something revolutionary: a truly personalized 
                    approach to human optimization.
                  </p>
                  
                  <p>
                    Today, Mendiv has transformed the lives of over 2,500 individuals, helping them achieve 
                    measurable improvements in energy, longevity, cognitive function, and overall vitality. 
                    Our mission remains unchanged: to help every person unlock their optimal self through 
                    the power of personalized science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="glass-card hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{member.image}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Our <span className="gradient-text">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join the thousands who have already discovered their optimal health 
                through Mendiv's science-backed approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline">
                  Meet the Team
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

export default About;