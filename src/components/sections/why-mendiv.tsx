import { Button } from "@/components/ui/button";
import { Dna, Target, TrendingUp } from "lucide-react";

const LifeMapSection = () => {
  return (
    <section id="programmes" className="py-20 bg-[#101214]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="space-y-10">
            {/* Header */}
            <div className="text-left mb-6 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Your DNA is talking.{" "}
                <span className="gradient-text">Are you listening?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                LifeMap360 is the world's most comprehensive biological
                optimization system, combining genetic testing, AI analysis, and
                personalized interventions.
              </p>
            </div>

            {/* Combined Narrative */}
            <div className="glass-card p-6 space-y-4 animate-fade-in">
              <p className="leading-relaxed text-muted-foreground">
                <span className="font-bold text-white flex items-center gap-2 mb-2">
                  <Dna className="h-5 w-5 text-primary" /> Test
                </span>
                Advanced DNA & epigenetic analysis reveals your genetic markers,
                biological age, and optimization opportunities.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                <span className="font-bold text-white flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" /> Decode 
                </span>
                AI-powered insights use machine learning to create your unique
                biological profile and personalized recommendations.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                <span className="font-bold text-white flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> Transform
                </span>
                Science-backed protocols designed specifically for your genetic
                blueprint help you achieve lasting health optimization.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - IMAGE */}
          <div className="relative flex justify-center items-center">
            <img
              src="/young.jpg" // replace with your actual image
              alt="DNA Visualization"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeMapSection;
