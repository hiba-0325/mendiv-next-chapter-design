import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  GiDna1,
  GiNetworkBars,
  GiMicroscope,
  GiPathDistance,
  GiMeditation,
  GiBrain,
} from "react-icons/gi";
import {
  MdNightlightRound,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import { FaCity, FaBrain, FaUsers, FaLeaf, FaHeartbeat } from "react-icons/fa";
import { BiChip } from "react-icons/bi";

const Programmes = () => {
  const programs = [
    {
      icon: GiDna1,
      title: "Mendiv LifeScript",
      description: "Genetic & Epigenetic Testing",
      // price: "₹54,999",
      // originalPrice: "₹49,999",
      features: [],
    },
    {
      icon: MdNightlightRound,
      title: "NeuroSleep",
      description: "Precision Sleep Wellness",
      features: [],
    },
    {
      icon: FaCity,
      title: "Xpanzone",
      description: "Optimized Living & Work Environments",
      features: [],
    },
    {
      icon: BiChip,
      title: "Digital Twin",
      description: "Data-driven health monitoring",
      features: [],
    },
    {
      icon: GiMeditation,
      title: "Mind Refreshment Studios",
      description: "Offline transformation hubs",
      features: [],
    },
  ];

  const edges = [
    {
      icon: FaHeartbeat,
      title: "Preventive Wellness",
      description:
        "Proactive health insights to prevent issues before they arise.",
    },
    {
      icon: GiBrain,
      title: "Cognitive Enhancement",
      description: "Boost memory, focus, and overall brain performance.",
    },
    {
      icon: FaLeaf,
      title: "Sustainable Living",
      description: "Eco-conscious choices for long-term wellness.",
    },
    {
      icon: MdOutlinePrecisionManufacturing,
      title: "Precision Medicine",
      description:
        "Personalized health solutions based on your unique biology.",
    },
    {
      icon: FaUsers,
      title: "Community & Support",
      description:
        "Access to expert guidance and like-minded wellness seekers.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* DNA Background Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "20%", y: "25%", size: "w-32 h-32", delay: 0 },
          { x: "70%", y: "15%", size: "w-24 h-24", delay: 2 },
          { x: "80%", y: "60%", size: "w-28 h-28", delay: 4 },
          { x: "40%", y: "75%", size: "w-20 h-20", delay: 6 },
          { x: "15%", y: "50%", size: "w-28 h-28", delay: 8 },
          { x: "60%", y: "35%", size: "w-32 h-32", delay: 10 },
        ].map((dna, i) => (
          <motion.div
            className="fixed inset-0 pointer-events-none opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32">
              <GiDna1 className="w-full h-full text-primary" />
            </div>
            <div className="absolute bottom-1/4 right-3/4 w-24 h-24">
              <GiDna1 className="w-full h-full text-primary" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24">
              <GiDna1 className="w-full h-full text-primary" />
            </div>
          </motion.div>
        ))}
      </div>

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
                Align Your Biology, Mind, and Environment through our
                comprehensive suite of science-backed programs designed to
                optimize every aspect of your health and performance.
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
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
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
                      <CardTitle className="text-2xl font-serif">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {program.price}
                        </div>
                        {program.originalPrice && (
                          <div className="text-lg text-muted-foreground line-through">
                            {program.originalPrice}
                          </div>
                        )}
                      </div> */}

                      <ul className="space-y-2 text-sm">
                        {program.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-muted-foreground"
                          >
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
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <Card className="glass-card text-center border-white/10 hover:border-primary/30 transition-all duration-300 h-64 flex flex-col justify-center">
                    <CardContent className="flex flex-col items-center justify-center text-center h-full p-6">
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

        <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Background Blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-brosta text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Mind Refreshment Studio
            </h2>

            <p className="font-lato text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Immersive wellness retreats that combine cutting-edge neuroscience
              with mindful restoration. Reset your mind, optimize your neural
              pathways, and emerge with enhanced clarity and focus.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-brosta text-xl font-bold text-white mb-3">
                  Neurofeedback Sessions
                </h3>
                <p className="font-lato text-green-100 text-sm">
                  Real-time brain training to optimize cognitive performance and
                  emotional regulation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-brosta text-xl font-bold text-white mb-3">
                  Mindfulness Integration
                </h3>
                <p className="font-lato text-green-100 text-sm">
                  Science-backed meditation and mindfulness practices tailored
                  to your neural patterns.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-brosta text-xl font-bold text-white mb-3">
                  Stress Optimization
                </h3>
                <p className="font-lato text-green-100 text-sm">
                  Transform your relationship with stress through personalized
                  resilience training.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="rounded-full bg-white text-green-800 hover:bg-green-50 px-8 py-3 font-lato transition-all duration-300 hover:scale-105">
                Book Your Retreat
              </button>

              <button className="rounded-full border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 font-lato transition-all duration-300 hover:scale-105 bg-transparent">
                Virtual Studio Tour
              </button>
            </div>
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
              Ready to{" "}
              <span className="gradient-text">Align Your Biology?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Start your transformation today with our comprehensive BioAlign
              program suite
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.5)",
                    "0 0 0px rgba(34, 197, 94, 0.5)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 },
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
    </div>
  );
};

export default Programmes;
