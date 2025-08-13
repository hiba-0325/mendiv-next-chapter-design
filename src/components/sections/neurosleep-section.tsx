import { Button } from "@/components/ui/button";
import { Moon, Brain, Zap } from "lucide-react";

const NeuroSleepSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Moon className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-serif font-bold">NeuroSleep™</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sleep Optimization{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced sleep architecture analysis and personalized optimization protocols 
              for peak cognitive performance and cellular restoration.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="glass-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Brainwave Analysis</h3>
                    <p className="text-muted-foreground">
                      Real-time EEG monitoring identifies optimal sleep phases and 
                      disruption patterns for targeted intervention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Smart Environment</h3>
                    <p className="text-muted-foreground">
                      Automated temperature, light, and sound optimization based on 
                      your circadian rhythm and sleep architecture.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Optimize Your Sleep
              </Button>
            </div>

            {/* Right Content - Tech Integration */}
            <div className="glass-card text-center">
              <h3 className="text-2xl font-serif font-bold mb-6">Tech Integration</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl">⌚</span>
                  </div>
                  <h4 className="font-semibold">Oura Ring</h4>
                  <p className="text-sm text-muted-foreground">HRV & Temperature</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="font-semibold">Muse Headband</h4>
                  <p className="text-sm text-muted-foreground">Brainwave Monitoring</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h4 className="font-semibold">Smart Home</h4>
                  <p className="text-sm text-muted-foreground">Environment Control</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="font-semibold">Mobile App</h4>
                  <p className="text-sm text-muted-foreground">Real-time Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroSleepSection;