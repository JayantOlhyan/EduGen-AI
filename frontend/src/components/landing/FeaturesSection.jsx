import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Target,
  BarChart3,
  Flame,
  Save,
  GraduationCap,
} from "lucide-react";
import { features } from "@/data/mock";

const iconMap = {
  Camera,
  Target,
  BarChart3,
  Flame,
  Save,
  GraduationCap,
};

const FeatureCard = ({ feature, index }) => {
  const IconComponent = iconMap[feature.icon];
  const gradients = [
    "from-violet-500 to-purple-600",
    "from-fuchsia-500 to-pink-600",
    "from-blue-500 to-cyan-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-rose-500 to-red-600",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="group h-full border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardContent className="p-6">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-lg`}
          >
            <IconComponent className="w-7 h-7 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
        {/* Hover accent */}
        <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300" />
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Actually Learn
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools designed for students who want results, not busywork.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
