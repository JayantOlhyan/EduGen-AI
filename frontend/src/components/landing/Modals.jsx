import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Mail, ArrowRight } from "lucide-react";

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-gray-950 border-gray-800">
        <div className="aspect-video bg-gray-900 flex items-center justify-center">
          {/* Placeholder for video */}
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-violet-500/20 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-0 h-0 border-l-[30px] border-l-white border-y-[18px] border-y-transparent ml-2"
              />
            </div>
            <p className="text-gray-400">Demo video placeholder</p>
            <p className="text-sm text-gray-500 mt-2">
              Video would play here in production
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ExitIntentPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-center text-2xl">
            Wait! Get Your First Study Set FREE
          </DialogTitle>
          <DialogDescription className="text-center">
            Before you go, grab a free personalized study guide for any subject!
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-4"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-6 rounded-xl"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-xl text-lg font-semibold h-auto"
              >
                Send Me Free Notes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-xs text-center text-gray-500">
                No spam, ever. Unsubscribe anytime.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </div>
              <p className="text-lg font-semibold text-gray-900">Check your inbox!</p>
              <p className="text-gray-500">Your free study guide is on the way.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export { VideoModal, ExitIntentPopup };
