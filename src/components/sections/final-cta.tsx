import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-xl md:text-4xl font-serif font-bold mb-6">
              Your Next Chapter{" "}
              <span className="gradient-text">Starts Now</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't wait another day to unlock your optimal health potential.
              Join thousands who have already transformed their lives with
              Mendiv.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-primary group-hover:animate-glow">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Start LifeMap360™
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Complete genetic analysis and personalized optimization plan
              </p>
              <Button className="w-full" variant="default">
                Begin Journey
              </Button>
            </div>

            <div className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-secondary group-hover:animate-glow">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Discovery Call
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Free 30-minute consultation with our wellness experts
              </p>
              <Button className="w-full" variant="outline">
                Schedule Call
              </Button>
            </div>

            <div className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-primary group-hover:animate-glow">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Join Retreat
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                7-day intensive transformation experience
              </p>
              <Button className="w-full" variant="secondary">
                View Dates
              </Button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="glass-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-sm">✓</span>
              </div>
              <h4 className="text-lg font-semibold">
                90-Day Transformation Guarantee
              </h4>
            </div>
            <p className="text-muted-foreground text-sm">
              If you don't see measurable improvements in your biological
              markers within 90 days, we'll refund your investment completely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
