import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  FileText,
  Brain,
  Sparkles,
  Palette,
  Copy,
  Download,
  Check,
  RefreshCw,
  Save,
  BarChart3,
} from "lucide-react";
import { sampleDemo } from "@/data/mock";

const InteractiveDemo = () => {
  const [demoState, setDemoState] = useState("idle"); // idle, loading, results
  const [loadingStep, setLoadingStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [copied, setCopied] = useState(false);

  const loadingSteps = [
    { icon: Brain, text: "AI Reading your notes..." },
    { icon: Sparkles, text: "Generating smart summaries..." },
    { icon: Palette, text: "Creating visual diagrams..." },
  ];

  const startDemo = useCallback(() => {
    setDemoState("loading");
    setLoadingStep(0);
    setSelectedAnswer(null);
    setShowCorrect(false);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= 2) {
          clearInterval(stepInterval);
          setTimeout(() => setDemoState("results"), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  }, []);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const checkAnswer = () => {
    setShowCorrect(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleDemo.summary.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDemo = () => {
    setDemoState("idle");
    setSelectedAnswer(null);
    setShowCorrect(false);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See The Magic Happen
          </h2>
          <p className="text-xl text-gray-600">
            No Download Required
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Idle State - Upload Zone */}
          {demoState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white rounded-3xl border-2 border-dashed border-violet-200 hover:border-violet-400 transition-colors p-12 text-center cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-100 flex items-center justify-center"
                  >
                    <Upload className="w-10 h-10 text-violet-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drop a photo of your notes here
                  </h3>
                  <p className="text-gray-500 mb-6">
                    OR try our sample textbook page
                  </p>
                  <Button
                    onClick={startDemo}
                    className="bg-violet-600 hover:bg-violet-700 rounded-full px-8 py-6 text-lg font-semibold h-auto"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Try Sample: Newton's Laws
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Loading State */}
          {demoState === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="space-y-6">
                {loadingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === loadingStep;
                  const isComplete = index < loadingStep;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isComplete || isActive ? 1 : 0.3,
                        x: 0,
                      }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-violet-100 scale-105"
                          : isComplete
                          ? "bg-green-50"
                          : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isComplete
                            ? "bg-green-500"
                            : isActive
                            ? "bg-violet-500"
                            : "bg-gray-300"
                        }`}
                      >
                        {isComplete ? (
                          <Check className="w-6 h-6 text-white" />
                        ) : (
                          <Icon className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <span
                        className={`text-lg font-medium ${
                          isActive ? "text-violet-700" : "text-gray-700"
                        }`}
                      >
                        {step.text}
                      </span>
                      {isActive && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="ml-auto"
                        >
                          <RefreshCw className="w-5 h-5 text-violet-500" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Results State */}
          {demoState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Summary Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="h-full border-violet-100 shadow-xl shadow-violet-100/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className="w-5 h-5 text-violet-600" />
                        Key Concepts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {sampleDemo.summary.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex gap-2 mt-6">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopy}
                          className="flex-1"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 mr-1" />
                          ) : (
                            <Copy className="w-4 h-4 mr-1" />
                          )}
                          {copied ? "Copied!" : "Copy"}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quiz Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="h-full border-fuchsia-100 shadow-xl shadow-fuchsia-100/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Brain className="w-5 h-5 text-fuchsia-600" />
                        Quick Quiz
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 font-medium">
                        {sampleDemo.quiz.question}
                      </p>
                      <div className="space-y-2">
                        {sampleDemo.quiz.options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full p-3 rounded-xl text-left transition-all border-2 ${
                              showCorrect && index === sampleDemo.quiz.correctAnswer
                                ? "border-green-500 bg-green-50 text-green-700"
                                : showCorrect &&
                                  selectedAnswer === index &&
                                  index !== sampleDemo.quiz.correctAnswer
                                ? "border-red-500 bg-red-50 text-red-700"
                                : selectedAnswer === index
                                ? "border-fuchsia-500 bg-fuchsia-50"
                                : "border-gray-200 hover:border-fuchsia-300"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  selectedAnswer === index
                                    ? "border-fuchsia-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedAnswer === index && (
                                  <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500" />
                                )}
                              </span>
                              {option}
                              {showCorrect && index === sampleDemo.quiz.correctAnswer && (
                                <Check className="w-5 h-5 ml-auto text-green-500" />
                              )}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                      <Button
                        onClick={checkAnswer}
                        disabled={selectedAnswer === null || showCorrect}
                        className="w-full mt-4 bg-fuchsia-600 hover:bg-fuchsia-700"
                      >
                        Check Answer
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Visual Diagram Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="h-full border-blue-100 shadow-xl shadow-blue-100/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        Visual Explanation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl flex items-center justify-center mb-4 p-4">
                        <div className="text-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.5 }}
                            className="w-24 h-24 mx-auto mb-3 bg-white rounded-xl shadow-lg flex items-center justify-center"
                          >
                            <span className="text-3xl font-bold text-violet-600">F=ma</span>
                          </motion.div>
                          <p className="text-sm text-gray-600">Force-Mass-Acceleration</p>
                          <p className="text-xs text-gray-400 mt-1">Relationship Diagram</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <RefreshCw className="w-4 h-4 mr-1" />
                          Regenerate
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Save className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center space-y-4"
              >
                <p className="text-lg text-gray-600">
                  This took <span className="font-bold text-violet-600">8 seconds</span>.
                  How long would YOU have taken?
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-gray-700">243,891</span> notes transformed today
                </div>
                <Button
                  variant="outline"
                  onClick={resetDemo}
                  className="mt-4"
                >
                  Try Another Sample
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveDemo;
