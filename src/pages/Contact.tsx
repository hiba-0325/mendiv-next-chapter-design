import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@mendiv.com",
      subtext: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-MENDIV",
      subtext: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Wellness Plaza, NYC",
      subtext: "By appointment only"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support",
      contact: "Available on website",
      subtext: "Mon-Fri, 9AM-9PM EST"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to get my LifeMap360™ results?",
      answer: "Your comprehensive genetic analysis and personalized protocol typically takes 3-4 weeks from the time we receive your samples. Rush processing is available for an additional fee."
    },
    {
      question: "Is the DNA testing safe and private?",
      answer: "Absolutely. We use CLIA-certified labs and maintain the highest standards for data security. Your genetic information is encrypted and never shared with third parties."
    },
    {
      question: "Do you accept insurance?",
      answer: "Currently, our programs are not covered by insurance as they are considered preventive and optimization-focused rather than treatment-based. However, we offer flexible payment plans."
    },
    {
      question: "Can I do the program remotely?",
      answer: "Yes! Most of our programs can be completed remotely with virtual consultations and at-home testing kits. Some components like retreats require in-person attendance."
    },
    {
      question: "What makes Mendiv different from other wellness companies?",
      answer: "Our approach is uniquely personalized based on your genetic makeup, backed by rigorous science, and focused on measurable biomarker improvements rather than just subjective feelings."
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
              Let's Start Your <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to unlock your optimal health? Our team of experts is here to guide you 
              through your personalized wellness journey.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="glass-card text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-primary">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-primary font-medium mb-1">{method.contact}</p>
                  <p className="text-xs text-muted-foreground">{method.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Actions */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="glass-card">
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">I'm interested in...</label>
                    <select className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Select a program</option>
                      <option>LifeMap360™</option>
                      <option>NeuroSleep™</option>
                      <option>Mind Refreshment Studio</option>
                      <option>Corporate Wellness</option>
                      <option>General Information</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about your wellness goals and how we can help..."
                    />
                  </div>
                  
                  <Button size="lg" className="w-full animate-glow">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="glass-card">
                  <h3 className="text-2xl font-serif font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div className="flex-grow">
                        <h4 className="font-semibold">Book Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">Free 30-minute consultation</p>
                      </div>
                      <Button size="sm">Book Now</Button>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                      <Clock className="h-6 w-6 text-secondary" />
                      <div className="flex-grow">
                        <h4 className="font-semibold">Schedule Lab Visit</h4>
                        <p className="text-sm text-muted-foreground">For testing and consultations</p>
                      </div>
                      <Button size="sm" variant="outline">Schedule</Button>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <MessageCircle className="h-6 w-6 text-accent" />
                      <div className="flex-grow">
                        <h4 className="font-semibold">Chat with Expert</h4>
                        <p className="text-sm text-muted-foreground">Instant answers to your questions</p>
                      </div>
                      <Button size="sm" variant="secondary">Chat Now</Button>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="glass-card">
                  <h3 className="text-xl font-serif font-bold mb-4">Office Hours</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-3">
                      <span className="text-muted-foreground">Emergency Support</span>
                      <span className="text-primary">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card hover:scale-[1.01] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-serif font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see your question answered?
              </p>
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-muted-foreground mb-6">
                For existing clients experiencing urgent health concerns or needing immediate 
                support with your wellness program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Emergency Support: (555) 911-HELP
                </Button>
                <Button size="lg" variant="outline">
                  Client Portal Login
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

export default Contact;