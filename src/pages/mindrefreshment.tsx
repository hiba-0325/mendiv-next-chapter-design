import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Moon, Heart, Users } from "lucide-react";

export default function MindRefreshPage() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      desc: "Reset your focus and quiet the noise of daily life.",
    },
    {
      icon: Moon,
      title: "Deep Relaxation",
      desc: "Experience guided practices for profound relaxation.",
    },
    {
      icon: Heart,
      title: "Emotional Balance",
      desc: "Recenter emotions and boost inner resilience.",
    },
    {
      icon: Users,
      title: "Connection",
      desc: "Engage with a community focused on holistic growth.",
    },
  ];

  const activities = [
    "Breathwork & Meditation Sessions",
    "Mindful Movement & Gentle Yoga",
    "Nature-inspired Visualization",
    "Digital Detox & Reflection Time",
    "Personalized Wellness Coaching",
  ];

  return (
    <div className="bg-[#101214] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-green-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Mind Refreshment Studio
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          A sanctuary where science meets stillness. Recharge your mind, body,
          and spirit through immersive experiences crafted for modern lives.
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#101214] to-[#1a1d22]">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12 text-green-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Mind Refreshment?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-[#181b20] p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <b.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-green-300">
                {b.title}
              </h3>
              <p className="text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12 text-green-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Transformative Experiences
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-[#181b20] p-4 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="w-6 h-6 text-green-400" />
              <p className="text-lg text-gray-300">{act}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#1a1d22] to-[#101214]">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12 text-green-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What People Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Aarav P.",
              text: "I felt like I reset my mind completely. The balance I gained still lasts.",
            },
            {
              name: "Sophia L.",
              text: "The guided breathwork was transformational. I’ve never slept this well.",
            },
            {
              name: "David K.",
              text: "A space where science and serenity truly meet. Worth every moment.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#181b20] p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-gray-300 italic mb-4">“{t.text}”</p>
              <h4 className="text-green-400 font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-green-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to Refresh Your Mind?
        </motion.h2>
        <motion.button
          className="px-8 py-4 bg-green-500 text-black rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Experience
        </motion.button>
      </section>
    </div>
  );
}
