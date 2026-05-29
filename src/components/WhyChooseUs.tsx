import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Proven Excellence & Championship Legacy",
      desc: "Built on passion, discipline, and real-world experience, Prime Zone Fitness is guided by fitness professionals who understand what true transformation demands. Our foundation is rooted in results, consistency, and elite-level training standards.",
    },
    {
      title: "Personalized Fitness Programs",
      desc: "No generic routines. No copy-paste workouts. Every member receives customized training plans tailored to their body type, goals, fitness level, lifestyle, and recovery capacity.",
    },
    {
      title: "Expert Coaching & Guidance",
      desc: "Train under certified fitness coaches and nutrition experts who combine science-backed methods with real motivation, helping you push limits safely and effectively.",
    },
    {
      title: "Real Results That Speak Loud",
      desc: "From weight loss transformations to muscle-building success stories, our members achieve visible, sustainable results that redefine confidence and health.",
    },
    {
      title: "Premium Training Environment",
      desc: "Experience a clean, high-energy gym atmosphere equipped with modern machines, functional training zones, advanced equipment, and a motivating fitness culture.",
    },
    {
      title: "Complete Health & Wellness Approach",
      desc: "Fitness is more than lifting weights. We help improve endurance, mobility, recovery, posture, strength, and overall wellness through a balanced, holistic approach.",
    },
  ];

  return (
    <section className="py-24 bg-prime-charcoal relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bebas mb-6 leading-none"
          >
            WHY CHOOSE <span className="text-prime-neon">PRIME ZONE</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bebas text-white tracking-widest mb-4 uppercase">
              More Than a Gym, This Is Your Transformation Zone
            </h3>
            <p className="text-gray-400 font-medium">
              At Prime Zone Fitness, we don’t just train bodies, we build
              stronger lifestyles, sharper mindsets, and unstoppable confidence.
              Every workout, every rep, every drop of sweat moves you closer to
              the strongest version of yourself.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(229,158,0,0.15)",
                borderColor: "rgba(229,158,0,0.5)",
              }}
              className={`glass-card p-8 border border-white/10 hover:border-prime-neon/50 transition-colors ${idx === 6 ? "lg:col-start-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-prime-neon shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bebas tracking-wide text-white mb-2 uppercase">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
