import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { X, Clock } from "lucide-react";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0"
        >
          <div className="max-w-4xl mx-auto md:mb-4">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-4 shadow-2xl shadow-violet-500/30">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Exams coming up?</p>
                    <p className="text-sm text-white/80 hidden sm:block">
                      Try EduGen FREE now and ace your tests!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    className="bg-white text-violet-600 hover:bg-white/90 rounded-full font-semibold shadow-lg"
                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                  <button
                    onClick={handleDismiss}
                    className="p-2 text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UrgencyBanner;
