// Mock data for EduGen landing page

export const testimonials = [
  { id: 1, text: "Got an A+ thanks to EduGen!", author: "Priya", rating: 5 },
  { id: 2, text: "Physics finally makes sense!", author: "Rahul", rating: 5 },
  { id: 3, text: "Saved 10 hours before exams", author: "Sarah", rating: 5 },
  { id: 4, text: "My grades improved by 40%!", author: "Alex", rating: 5 },
  { id: 5, text: "Best study tool ever created", author: "Maya", rating: 5 },
  { id: 6, text: "Chemistry is actually fun now!", author: "David", rating: 5 },
  { id: 7, text: "Wish I had this in high school", author: "Emma", rating: 5 },
  { id: 8, text: "Game changer for med school prep", author: "James", rating: 5 },
];

export const stats = [
  { label: "Students", value: 500000, suffix: "+" },
  { label: "Notes Made", value: 5000000, suffix: "+" },
  { label: "Rating", value: 4.9, suffix: "★", isDecimal: true },
];

export const features = [
  {
    id: 1,
    icon: "Camera",
    title: "Vision AI",
    description: "Snap photos of any page and let AI read it instantly",
  },
  {
    id: 2,
    icon: "Target",
    title: "Smart Quizzes",
    description: "Test your knowledge with AI-generated questions",
  },
  {
    id: 3,
    icon: "BarChart3",
    title: "Visual Diagrams",
    description: "Understand concepts with beautiful visualizations",
  },
  {
    id: 4,
    icon: "Flame",
    title: "Progress Tracking",
    description: "See weak topics and track your improvement",
  },
  {
    id: 5,
    icon: "Save",
    title: "Save Everything",
    description: "Build your personal study library",
  },
  {
    id: 6,
    icon: "GraduationCap",
    title: "All Subjects",
    description: "Physics, Chemistry, Math & more",
  },
];

export const problems = [
  {
    front: { icon: "Clock", text: "Spending 3 hours making notes" },
    back: "What if AI did it in 10 seconds?",
  },
  {
    front: { icon: "BookOpen", text: "Textbooks are boring walls of text" },
    back: "What if every concept had a visual diagram?",
  },
  {
    front: { icon: "HelpCircle", text: "Not sure what you don't know" },
    back: "What if AI tracked your weak spots?",
  },
];

export const howItWorks = [
  { step: 1, icon: "Camera", title: "Upload", description: "Snap or upload your notes" },
  { step: 2, icon: "Sparkles", title: "AI Magic", description: "AI reads & summarizes in seconds" },
  { step: 3, icon: "Brain", title: "Learn", description: "Study with quizzes & visual aids" },
];

export const pricingPlans = [
  {
    name: "Free Forever",
    price: "$0",
    period: "/month",
    features: [
      "10 uploads/day",
      "All subjects",
      "Basic quizzes",
      "Save notes",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "Unlimited uploads",
      "Priority AI processing",
      "Advanced visualizations",
      "Progress tracking",
      "Exam prep mode",
    ],
    cta: "Try Pro Free",
    popular: true,
  },
];

export const sampleDemo = {
  topic: "Newton's Laws of Motion",
  summary: [
    "Force = Mass × Acceleration (F = ma)",
    "Every action has an equal and opposite reaction",
    "Objects at rest stay at rest unless acted upon by force",
  ],
  quiz: {
    question: "If mass = 5kg and acceleration = 2m/s², what is the force?",
    options: ["3 N", "7 N", "10 N"],
    correctAnswer: 2,
  },
};
