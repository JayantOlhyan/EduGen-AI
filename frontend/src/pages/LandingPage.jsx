import React, { useState, useEffect } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InteractiveDemo from "@/components/landing/InteractiveDemo";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import { VideoModal, ExitIntentPopup } from "@/components/landing/Modals";

const LandingPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShownExitPopup) {
        setIsExitPopupOpen(true);
        setHasShownExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitPopup]);

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          triggerConfetti();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerConfetti = () => {
    // Simple confetti effect
    const colors = ["#8B5CF6", "#EC4899", "#3B82F6", "#F59E0B", "#10B981"];
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
        z-index: 9999;
        pointer-events: none;
        animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection onOpenDemo={() => setIsVideoModalOpen(true)} />
      <ProblemSection />
      <InteractiveDemo />
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
      <UrgencyBanner />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <ExitIntentPopup
        isOpen={isExitPopupOpen}
        onClose={() => setIsExitPopupOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
