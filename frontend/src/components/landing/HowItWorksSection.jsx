import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Camera, Sparkles, Brain, ArrowDown } from "lucide-react";
import { howItWorks } from "@/data/mock";

const iconMap = {
  Camera,
  Sparkles,
  Brain,
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            3 Steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Smarter Studying
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-purple-200 rounded-full" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorks.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="relative z-10 w-32 h-32 mx-auto mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl rotate-6 opacity-20" />
                    <div className="relative w-full h-full bg-white rounded-3xl shadow-xl flex items-center justify-center border border-gray-100">
                      <IconComponent className="w-12 h-12 text-violet-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Arrow - Mobile */}
                  {index < 2 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowDown className="w-6 h-6 text-violet-300" />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Button
                    variant="ghost"
                    className="text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Try This Step
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
