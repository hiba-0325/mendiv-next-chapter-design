import { Button } from "@/components/ui/button";
import {
  Moon,
  Brain,
  Zap,
  Watch,
  Smartphone,
  Home,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const NeuroSleepSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0c10] to-[#101214] relative overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-green-500/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-24 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Moon className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-serif font-bold">NeuroSleep™</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sleep Optimization{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced sleep architecture analysis and personalized optimization
              protocols for peak cognitive performance and cellular restoration.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">
                      Brainwave Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Real-time EEG monitoring identifies optimal sleep phases
                      and disruption patterns for targeted intervention.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">
                      Smart Environment
                    </h3>
                    <p className="text-muted-foreground">
                      Automated temperature, light, and sound optimization based
                      on your circadian rhythm and sleep architecture.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 w-full md:w-auto"
                >
                  Optimize Your Sleep
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Tech Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">
                Tech Integration
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto flex items-center justify-center">
                    <Watch className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Oura Ring</h4>
                  <p className="text-sm text-muted-foreground">
                    HRV & Temperature
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto flex items-center justify-center">
                    <Activity className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold">Muse Headband</h4>
                  <p className="text-sm text-muted-foreground">
                    Brainwave Monitoring
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto flex items-center justify-center">
                    <Home className="w-8 h-8 text-lime-400" />
                  </div>
                  <h4 className="font-semibold">Smart Home</h4>
                  <p className="text-sm text-muted-foreground">
                    Environment Control
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold">Mobile App</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time Insights
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroSleepSection;
