import React, { useState } from "react";
import { motion } from "motion/react";
import { Clock, BookOpen, HelpCircle } from "lucide-react";
import { problems } from "@/data/mock";

const iconMap = {
  Clock,
  BookOpen,
  HelpCircle,
};

const FlipCard = ({ front, back, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = iconMap[front.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="perspective-1000 w-full h-64"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full h-full preserve-3d cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-4">
            <IconComponent className="w-8 h-8 text-violet-400" />
          </div>
          <p className="text-xl font-semibold text-white">{front.text}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-xl font-semibold text-white leading-relaxed">
            {back}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemSection = () => {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            We Know Studying Sucks.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Here's Why:
            </span>
          </h2>
        </motion.div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <FlipCard
              key={index}
              front={problem.front}
              back={problem.back}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-400"
        >
          You're not lazy.{" "}
          <span className="text-white font-medium">The system is broken.</span>{" "}
          Let's fix it.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
