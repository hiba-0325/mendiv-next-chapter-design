import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { 
  GiDna1, 
  GiNetworkBars, 
  GiMicroscope, 
  GiPathDistance,
  GiMeditation 
} from "react-icons/gi";
import { 
  MdNightlightRound 
} from "react-icons/md";
import { 
  FaCity, 
  FaBrain 
} from "react-icons/fa";
import { 
  BiChip 
} from "react-icons/bi";

const Programmes = () => {
  const programs = [
    {
      icon: GiDna1,
      title: "Mendiv LifeScript",
      description: "Comprehensive DNA analysis and personalized health optimization",
      price: "$2,999",
      originalPrice: "$3,999",
      features: ["Full genetic analysis", "Epigenetic testing", "Personalized protocols", "90-day support"]
    },
    {
      icon: MdNightlightRound,
      title: "NeuroSleep™",
      description: "Advanced sleep optimization with brainwave analysis",
      price: "$1,499",
      features: ["Brainwave monitoring", "Smart environment control", "Sleep coaching", "Tech integration"]
    },
    {
      icon: FaCity,
      title: "Xpanzone",
      description: "Environmental optimization for peak performance",
      price: "$999",
      features: ["Environment assessment", "Air quality optimization", "Light therapy", "Space design"]
    },
    {
      icon: BiChip,
      title: "Digital Twin",
      description: "AI-powered health prediction and optimization",
      price: "$1,799",
      features: ["Real-time monitoring", "Predictive analytics", "Health simulation", "AI recommendations"]
    },
    {
      icon: GiMeditation,
      title: "Mind Refreshment Studios",
      description: "Immersive wellness retreats and mental optimization",
      price: "$2,499",
      features: ["7-day retreats", "Mindfulness training", "Stress optimization", "Mental clarity protocols"]
    }
  ];

  const edges = [
    {
      icon: GiNetworkBars,
      title: "Integrated Approach",
      description: "Science-backed, personalized methodology"
    },
    {
      icon: GiMicroscope,
      title: "Advanced Genetics",
      description: "Cutting-edge genetic & epigenetic analysis"
    },
    {
      icon: FaBrain,
      title: "AI-Powered Systems",
      description: "Global experts & intelligent health optimization"
    },
    {
      icon: GiPathDistance,
      title: "Continuous Support",
      description: "Sustainable change through ongoing guidance"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background DNA Animation */}
      <motion.div 
        className="fixed inset-0 pointer-events-none opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          <GiDna1 className="w-full h-full text-primary" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24">
          <GiDna1 className="w-full h-full text-primary" />
        </div>
      </motion.div>

      <main className="relative">
        {/* Page Header */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Our Flagship Program:{" "}
                <span className="gradient-text">BioAlign</span>
              </h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Align Your Biology, Mind, and Environment through our comprehensive suite of 
                science-backed programs designed to optimize every aspect of your health and performance.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                  }}
                  className="group"
                >
                  <Card className="glass-card h-full border-white/10 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mx-auto mb-4 w-16 h-16 flex items-center justify-center"
                      >
                        <program.icon className="w-12 h-12 text-primary group-hover:text-green-400 transition-colors" />
                      </motion.div>
                      <CardTitle className="text-2xl font-serif">{program.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {program.price}
                        </div>
                        {program.originalPrice && (
                          <div className="text-lg text-muted-foreground line-through">
                            {program.originalPrice}
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-2 text-sm">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="w-full bg-gradient-to-r from-primary to-green-400 hover:from-green-400 hover:to-primary transition-all duration-300"
                          size="lg"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Mendiv Edge Section */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                The <span className="gradient-text">Mendiv Edge</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What sets our approach apart from traditional wellness programs
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {edges.map((edge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <Card className="glass-card text-center border-white/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="pt-8 pb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="mx-auto mb-4 w-12 h-12 flex items-center justify-center"
                      >
                        <edge.icon className="w-8 h-8 text-primary group-hover:text-green-400 transition-colors" />
                      </motion.div>
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {edge.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {edge.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Ready to <span className="gradient-text">Align Your Biology?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Start your transformation today with our comprehensive BioAlign program suite
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.5)",
                    "0 0 0px rgba(34, 197, 94, 0.5)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 }
                }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-green-400 hover:from-green-400 hover:to-primary text-lg px-8 py-6 rounded-xl"
                >
                  Start Your LifeMap360™ Journey
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl"
                >
                  Book a Discovery Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programmes;