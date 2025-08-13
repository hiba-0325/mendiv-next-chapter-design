import { ChevronLeft, ChevronRight, TrendingDown } from "lucide-react";
import { useState } from "react";

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Sarah Chen",
      age: "Executive, 45",
      image: "👩‍💼",
      biologicalAge: { before: 52, after: 41 },
      timeframe: "90 days",
      quote: "I went from feeling exhausted every afternoon to having energy that lasts all day. The precision of Mendiv's approach made all the difference.",
      improvements: ["Energy +40%", "Sleep Quality +35%", "Recovery Time -50%"]
    },
    {
      name: "Marcus Rodriguez", 
      age: "Entrepreneur, 38",
      image: "👨‍💼",
      biologicalAge: { before: 44, after: 35 },
      timeframe: "120 days",
      quote: "The DNA insights revealed why traditional diets never worked for me. My personalized protocol transformed everything.",
      improvements: ["Focus +60%", "Muscle Mass +15%", "Inflammation -45%"]
    },
    {
      name: "Dr. Amanda Foster",
      age: "Physician, 42", 
      image: "👩‍⚕️",
      biologicalAge: { before: 48, after: 38 },
      timeframe: "6 months",
      quote: "As a doctor, I was skeptical. But the science behind Mendiv's approach is irrefutable. The results speak for themselves.",
      improvements: ["Cognitive Function +30%", "Joint Health +25%", "Stress Levels -55%"]
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Real People, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our clients have transformed their health and unlocked their optimal potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Card */}
          <div className="glass-card relative">
            {/* Navigation */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <button
                onClick={prevStory}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextStory}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Story Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{story.image}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">{story.name}</h3>
                    <p className="text-muted-foreground">{story.age}</p>
                  </div>
                </div>

                <blockquote className="text-lg italic leading-relaxed">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Improvements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.improvements.map((improvement, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary"
                      >
                        {improvement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Biological Age Visual */}
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-6">Biological Age Transformation</h4>
                
                <div className="space-y-6">
                  {/* Before */}
                  <div className="glass bg-red-500/10 border-red-500/20 p-4 rounded-xl">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {story.biologicalAge.before}
                    </div>
                    <div className="text-sm text-muted-foreground">Before</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <TrendingDown className="h-8 w-8 text-primary" />
                  </div>

                  {/* After */}
                  <div className="glass bg-primary/10 border-primary/20 p-4 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {story.biologicalAge.after}
                    </div>
                    <div className="text-sm text-muted-foreground">After</div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    in {story.timeframe}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? "bg-primary" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;