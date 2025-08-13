import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Calendar, MapPin, Clock, Star } from "lucide-react";

const Studio = () => {
  const programs = [
    {
      name: "7-Day Mind Reset",
      duration: "1 week",
      location: "Swiss Alps Retreat Center",
      price: "From $3,500",
      description: "Intensive week-long program combining meditation, breathwork, and nature immersion for complete mental refreshment.",
      features: [
        "Daily guided meditation sessions",
        "Breathwork & cold therapy",
        "Forest bathing experiences", 
        "Mindfulness coaching",
        "Digital detox protocols",
        "Luxury accommodation"
      ],
      nextDate: "March 15-22, 2024",
      spots: "8 spots remaining"
    },
    {
      name: "21-Day Transformation",
      duration: "3 weeks",
      location: "Bali Wellness Sanctuary",
      price: "From $8,900",
      description: "Comprehensive transformation program integrating ancient wisdom with modern neuroscience for lasting change.",
      features: [
        "Personalized meditation training",
        "Yoga & movement therapy",
        "Nutritional reset program",
        "Emotional release work",
        "Life coaching sessions",
        "Integration planning"
      ],
      nextDate: "April 1-21, 2024",
      spots: "3 spots remaining"
    }
  ];

  const testimonials = [
    {
      name: "James Chen",
      role: "Tech CEO",
      image: "👨‍💼",
      quote: "The 7-day program gave me tools I use daily. My stress levels decreased by 60% and my team noticed the difference immediately.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Investment Director", 
      image: "👩‍💼",
      quote: "Life-changing experience. The 21-day program helped me break patterns I'd carried for decades. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background via-green-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mountain className="h-12 w-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold">
                Mind Refreshment <span className="gradient-text">Studio</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transformative retreat experiences that combine ancient wisdom with cutting-edge neuroscience 
              to refresh your mind, restore your energy, and realign your purpose.
            </p>
            <Button size="lg" className="animate-glow">
              Explore Programs
            </Button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">
                Where Science Meets <span className="gradient-text">Serenity</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Mind Refreshment Studio programs are designed for high-performing professionals who understand 
                that peak performance requires not just physical optimization, but mental and emotional mastery. 
                Each retreat combines luxury accommodation with transformative practices in stunning natural settings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🧘‍♀️</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Ancient Wisdom</h3>
                <p className="text-muted-foreground text-sm">
                  Time-tested practices from meditation masters, adapted for modern life and backed by neuroscience.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Modern Science</h3>
                <p className="text-muted-foreground text-sm">
                  Cutting-edge neurofeedback, biometrics, and research-based interventions for measurable results.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Natural Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully selected locations that enhance healing and provide the perfect environment for transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Transformation <span className="gradient-text">Programs</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div
                  key={program.name}
                  className="glass-card hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-2">{program.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{program.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold text-lg">{program.price}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Program Includes:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">Next Program:</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{program.nextDate}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">{program.spots}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      Reserve Spot
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Life-Changing <span className="gradient-text">Experiences</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="glass-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to Transform Your Mind?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join our exclusive community of high-performers who prioritize mental wellness 
                as the foundation of success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Apply for Next Retreat
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Call
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

export default Studio;