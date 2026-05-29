import { motion } from "motion/react";
import {
  ClipboardList,
  Dumbbell,
  Apple,
  LineChart,
  Target,
  Heart,
} from "lucide-react";

export default function HowWeHelp() {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Personalized Fitness Consultation",
      desc: "We start by understanding your body composition, lifestyle, medical history, fitness level, and long-term goals to create the perfect starting point.",
    },
    {
      num: "02",
      icon: Dumbbell,
      title: "Custom Workout Planning",
      desc: "Whether your goal is fat loss, muscle gain, endurance, athletic performance, or overall fitness, we design training programs tailored specifically for you.",
    },
    {
      num: "03",
      icon: Apple,
      title: "Smart Nutrition Guidance",
      desc: "Your results depend heavily on recovery and nutrition. Our experts provide practical diet guidance and sustainable meal strategies that match your workouts and lifestyle.",
    },
    {
      num: "04",
      icon: LineChart,
      title: "Consistent Progress Tracking",
      desc: "We regularly monitor your performance, body measurements, strength improvements, and fitness milestones to ensure continuous progress.",
    },
    {
      num: "05",
      icon: Target,
      title: "Expert Coaching & Motivation",
      desc: "Our certified trainers stay with you throughout your journey, correcting form, tracking progress, and pushing you beyond limits with constant motivation and support.",
    },
    {
      num: "06",
      icon: Heart,
      title: "Complete Mind & Body Balance",
      desc: "True fitness is holistic. We focus not only on strength and aesthetics, but also on flexibility, recovery, mobility, posture, and mental wellness for long-term health.",
    },
  ];

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bebas mb-6 leading-none uppercase"
          >
            How We Help You{" "}
            <span className="text-prime-neon">Achieve Your Goals</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bebas text-white tracking-widest mb-4 uppercase">
              A Structured Path Toward Your Strongest Self
            </h3>
            <p className="text-gray-400 font-medium">
              At Prime Zone Fitness, transformation is not random. Our
              step-by-step fitness system is designed to help you build
              strength, improve health, and stay consistent with confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(229,158,0,0.15)",
              }}
              className="relative group p-8 bg-prime-charcoal border border-white/10 hover:border-prime-neon transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <span className="text-8xl font-bebas text-prime-neon">
                  {step.num}
                </span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-prime-neon/10 border border-prime-neon/30 flex items-center justify-center mb-6 text-prime-neon group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7" />
                </div>

                <h4 className="text-2xl font-bebas tracking-wide text-white mb-4 uppercase">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
