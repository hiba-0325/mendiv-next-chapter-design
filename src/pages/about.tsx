import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Brain, Heart, Users } from "lucide-react";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef } from "react";
import CoreValues from "@/components/sections/corevalues";

const About = () => {
  const values = [
    {
      icon: Microscope,
      title: "Science-First",
      description:
        "Every recommendation is powered by cutting-edge genomic, epigenetic, and microbiome research.",
    },
    {
      icon: Brain,
      title: "Precision Medicine",
      description:
        "Tailored health strategies built on your unique biology, not one size fits all advice.",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "We put people first technology is a tool, not the destination. We believe in the power of human connection.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We’re building a global movement of individuals committed to living longer, healthier, and stronger.",
    },
  ];

  const team = [
    {
      name: "Dr. Muhammed Hussain KM",
      role: "Co-Founder & Visionary Leader",
      credentials:
        "MD, PhD – Expert in Longevity Medicine & Integrative Wellness",
      specialty:
        "Pioneering science-driven approaches to extend healthspan and vitality",
    },
    {
      name: "Er. Saleeque Khan",
      role: "Co-Founder & Chief Architect",
      credentials:
        "Engineer, Entrepreneur – Specialist in Transformative Environments",
      specialty:
        "Designing adaptive systems that align environment, health, and human potential",
    },
  ];

  const achievements = [
    { number: 10000, label: "Lives Transformed" },
    { number: 50, label: "Research Partners" },
    { number: 95, label: "Client Satisfaction (%)" },
    { number: 25, label: "Published Studies" },
  ];

  // Custom counter component
  const Counter = ({ target }: { target: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);

    useEffect(() => {
      if (inView) {
        animate(count, target, { duration: 2, ease: "easeOut" });
      }
    }, [inView, target, count]);

    return (
      <motion.span ref={ref}>
        {Math.floor(count.get())}
        {target > 100 ? "+" : ""}
      </motion.span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-5xl font-heading font-bold mb-8">
            Redefining Longevity, <br />
            Empowering Human <span className="text-green-500">Potential</span>
          </h1>
          <p className="text-xl text-foreground-muted mb-12 max-w-3xl mx-auto text-gray-400">
            At <strong>Mendiv</strong>, we merge genomics, epigenetics,
            microbiome science, and precision health into one seamless
            ecosystem. Our mission is to help you live not only longer, but
            stronger with vitality, clarity, and purpose.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-18 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-bold rounded-3xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Text */}
              <div>
                <h2 className="text-4xl md:text-3xl font-heading font-bold mb-8">
                  Our <span className="text-green-500">Mission</span>
                </h2>
                <p className="text-lg text-foreground-muted mb-6">
                  To democratize precision medicine by making genomic insights
                  accessible, actionable, and transformative for every
                  individual.
                </p>
                <p className="text-lg text-foreground-muted">
                  We believe health is not just about adding years to life, but
                  life to years. By decoding your biology and designing
                  personalized roadmaps, we empower you to unlock your full
                  potential.
                </p>
              </div>

              {/* RIGHT: Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/dnastrand.jpg" // replace with your actual image
                  alt="DNA Strand"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Values Section */}
      <CoreValues />

      {/* Founders Section */}
      <section className="py-20 px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            Meet the <span className="text-green-500">Founders</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-strong border-card-border hover-lift">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-green rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary text-center font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-foreground-muted text-center mb-4">
                      {member.credentials}
                    </p>
                    <p className="text-sm text-foreground-muted text-center">
                      <strong>Specialty:</strong> {member.specialty}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Ready to Redefine Your{" "}
            <span className="text-green-500">Future?</span>
          </h2>
          <p className="text-xl text-foreground-muted mb-12">
            Begin your Mendiv journey today and unlock a personalized blueprint
            for health, vitality, and longevity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Start Your LifeMap360 Journey
            </Button>
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
