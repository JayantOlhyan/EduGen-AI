import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, Zap, GraduationCap } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Study
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">
              Smarter, Not Harder?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 500,000+ students who are already saving hours every week with EduGen.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <Button
                className="relative bg-white text-violet-700 hover:bg-white/95 rounded-full px-10 py-7 text-xl font-bold shadow-2xl h-auto"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Learning for Free
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm">Your data is private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Works offline</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm">Trusted by 500K+ students</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
