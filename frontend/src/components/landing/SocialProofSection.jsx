import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";
import { testimonials, stats } from "@/data/mock";

const AnimatedCounter = ({ target, suffix = "", isDecimal = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const displayValue = isDecimal
    ? count.toFixed(1)
    : target >= 1000000
    ? `${(count / 1000000).toFixed(1)}M`
    : target >= 1000
    ? `${Math.floor(count / 1000)}K`
    : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling Content */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 whitespace-nowrap"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <p className="text-gray-700 font-medium">
              "{testimonial.text}"
            </p>
            <span className="text-gray-400">- {testimonial.author}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Students Are Already{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Winning
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Marquee */}
        <div className="mb-16">
          <TestimonialMarquee />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
