import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Video, Coffee } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      type: "Webinar",
      title: "Decoding Your DNA: Introduction to Genetic Wellness",
      date: "February 28, 2024",
      time: "7:00 PM EST",
      location: "Online",
      icon: Video,
      price: "Free",
      spots: "120 spots available",
      description: "Learn how genetic testing can unlock personalized health insights. Join Dr. Elena Rodriguez for an interactive session on the science behind LifeMap360™.",
      features: ["Live Q&A session", "Genetic wellness guide download", "Exclusive discount code"]
    },
    {
      type: "Workshop", 
      title: "Biohacking for Executives: Peak Performance Protocols",
      date: "March 8, 2024",
      time: "9:00 AM - 5:00 PM EST",
      location: "NYC - Mendiv HQ",
      icon: Coffee,
      price: "$497",
      spots: "8 spots remaining",
      description: "Intensive one-day workshop designed for C-suite executives and high-performers. Learn advanced biohacking techniques for sustained energy and cognitive performance.",
      features: ["Personalized biomarker analysis", "Luxury catered meals", "Take-home optimization kit", "1:1 consultation included"]
    },
    {
      type: "Retreat",
      title: "Longevity & Vitality: 3-Day Intensive",
      date: "March 22-24, 2024", 
      time: "Check-in: 3:00 PM Friday",
      location: "Hamptons Wellness Center",
      icon: MapPin,
      price: "$2,897",
      spots: "3 spots remaining",
      description: "Exclusive 3-day retreat combining genetic testing, personalized protocols, and luxury wellness experiences. Limited to 12 participants.",
      features: ["Complete LifeMap360™ analysis", "Chef-prepared meals", "Spa treatments", "Private consultations", "Ongoing support"]
    },
    {
      type: "Virtual Series",
      title: "Sleep Optimization Masterclass Series",
      date: "Starting April 5, 2024",
      time: "8:00 PM EST (4 sessions)",
      location: "Online",
      icon: Video,
      price: "$297",
      spots: "Unlimited",
      description: "4-week virtual series with Dr. James Thompson covering advanced sleep optimization techniques. Includes NeuroSleep™ starter kit.",
      features: ["4 live sessions", "Recorded access", "Sleep tracking kit", "Private community access"]
    }
  ];

  const pastEvents = [
    {
      title: "Metabolic Reset Workshop",
      date: "January 15, 2024",
      attendees: "24 participants",
      satisfaction: "98% satisfaction"
    },
    {
      title: "Annual Longevity Summit",
      date: "November 2023", 
      attendees: "150+ attendees",
      satisfaction: "96% satisfaction"
    },
    {
      title: "Corporate Wellness Seminar",
      date: "October 2023",
      attendees: "85 executives",
      satisfaction: "99% satisfaction"
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
              Transformative <span className="gradient-text">Events & Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our exclusive events to deepen your understanding of personalized wellness, 
              connect with like-minded individuals, and accelerate your optimization journey.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Upcoming <span className="gradient-text">Events</span>
            </h2>

            <div className="space-y-8 max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="glass-card hover:scale-[1.01] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Event Details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <event.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                              {event.type}
                            </span>
                            <span className="text-primary font-bold text-lg">{event.price}</span>
                          </div>
                          <h3 className="text-2xl font-serif font-bold mb-3">{event.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Event Info */}
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span className="text-orange-500 font-medium">{event.spots}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">What's Included:</h4>
                        <div className="grid md:grid-cols-2 gap-1">
                          {event.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col justify-center space-y-4">
                      <Button size="lg" className="w-full">
                        Register Now
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        Learn More
                      </Button>
                      <div className="text-center text-xs text-muted-foreground">
                        Secure payment • Instant confirmation
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Past <span className="gradient-text">Events</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="glass-card text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-serif font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">{event.date}</div>
                    <div className="text-primary font-medium">{event.attendees}</div>
                    <div className="text-green-500 font-medium">{event.satisfaction}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Never Miss an Event
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Subscribe to our newsletter for early access to events, exclusive content, 
                and special member pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button size="lg">
                  Subscribe
                </Button>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Join 5,000+ wellness enthusiasts • Unsubscribe anytime
              </div>
            </div>
          </div>
        </section>

        {/* Custom Events */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Corporate & Private Events
              </h2>
              <p className="text-muted-foreground mb-8">
                Looking to bring Mendiv's transformative wellness programs to your organization or 
                private group? We offer customized events tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Plan Custom Event
                </Button>
                <Button size="lg" variant="outline">
                  Download Corporate Package
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

export default Events;