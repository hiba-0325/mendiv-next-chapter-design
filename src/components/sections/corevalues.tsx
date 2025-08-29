import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br bg-[#121417] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About <span className="text-[#21c45d]">Mendiv</span>
        </motion.h2>

        {/* Article Style Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-200 mb-8"
        >
          Mendiv is more than a wellness brand it is a science-driven movement
          dedicated to reshaping the future of human longevity. Our foundation
          rests on the understanding that biology, environment, and mindset are
          deeply interconnected. By decoding genetics, analyzing epigenetic
          markers, and integrating holistic lifestyle practices, we empower
          individuals to align with their true biological potential.
          <br />
          <br />
          From <span className="font-semibold">LifeMap360™</span> that maps your
          genetic blueprint, to{" "}
          <span className="font-semibold">NeuroSleep™</span>
          programs optimizing rest and recovery, and
          <span className="font-semibold"> BeautyMap</span> designed to redefine
          skin longevity and vitality Mendiv blends advanced research with
          timeless wisdom. Our goal is not only to add years to life but to add
          life to years, helping people thrive with clarity, strength, and
          balance.
          <br />
          <br />
          With collaborations spanning leading scientists, wellness innovators,
          and luxury retreats worldwide, Mendiv offers more than solutions it
          offers a new chapter. Every program, every consultation, and every
          environment we create is rooted in measurable science while elevating
          the human experience with care and purpose.
        </motion.p>
      </div>

      {/* Core Values Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-10"
        >
          Our Core Values
        </motion.h3>

        <div className="relative">
          <ul className="space-y-8">
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <Heart className="w-8 h-8 text-[#21c45d] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="font-semibold">Wellness First:</span> Every
                program is designed with human well-being at the center —
                nurturing mind, body, and spirit.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start space-x-4"
            >
              <Sparkles className="w-8 h-8 text-[#21c45d] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="font-semibold">Innovation:</span> Merging
                genetic science with transformative environments for
                forward-looking wellness solutions.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-4"
            >
              <Leaf className="w-8 h-8 text-[#21c45d] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="font-semibold">Sustainability:</span> Creating
                eco-conscious solutions that honor both people and planet.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <Globe className="w-8 h-8 text-[#21c45d] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="font-semibold">Global Growth:</span> Empowering
                individuals across the world with accessible and scalable
                longevity solutions.
              </p>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
