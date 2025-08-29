import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "The Future of Longevity: Decoding Your DNA",
      date: "Aug 20, 2025",
      excerpt:
        "How LifeMap360™ is revolutionizing health by integrating genetic, epigenetic, and microbiome data into one personalized roadmap.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "NeuroSleep™: Unlocking Restorative Sleep",
      date: "Aug 10, 2025",
      excerpt:
        "Discover how circadian rhythm reset and genetic sleep profiling can help you achieve deeper, more restorative sleep.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Beauty & Regeneration: Inside the Beauty Map",
      date: "Jul 30, 2025",
      excerpt:
        "Explore how skin longevity, hormonal mapping, and metabolic optimization converge for ageless beauty.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="relative py-20 bg-[#101214] text-white">
      {/* Glow accents */}
      <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-green-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-green-400/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          Latest <span className="text-green-500">Insights</span>
        </motion.h2>
        <p className="text-center text-foreground-muted mb-12 max-w-2xl mx-auto">
          Stay updated with the latest research, strategies, and innovations in
          longevity, sleep, and beauty regeneration.
        </p>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/40 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-sm text-foreground-muted mb-3">
                  <Calendar size={16} className="mr-2 text-green-400" />
                  {post.date}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground-muted text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-auto inline-flex items-center text-green-400 font-medium"
                >
                  Read More <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
