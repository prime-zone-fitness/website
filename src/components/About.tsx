import { motion } from "motion/react";
import { Shield, Target, Zap, Activity } from "lucide-react";
import InstructorLogo from "../../assets/images/instructir.jpg";

export default function About() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-prime-neon" />,
      title: "Safety & Security",
      desc: "Your well-being is our priority, with secure facilities and a safe workout environment.",
    },
    {
      icon: <Target className="w-8 h-8 text-prime-neon" />,
      title: "Premium Offerings",
      desc: "Recover in our sauna and shower facilities, ensuring you bounce back faster after workouts.",
    },
    {
      icon: <Activity className="w-8 h-8 text-prime-neon" />,
      title: "Atmosphere & Amenities",
      desc: "Enjoy free Wi-Fi, gender-neutral toilets, and clean restrooms in a perfect workout environment.",
    },
    {
      icon: <Zap className="w-8 h-8 text-prime-neon" />,
      title: "Convenience",
      desc: "Free on-site parking lot. We accept credit/debit cards, Google Pay, and NFC mobile payments.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative bg-prime-charcoal border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-7xl font-bebas mb-6 leading-none">
              REDEFINING <span className="text-prime-neon">PHYSICAL</span>
              <br />
              EXCELLENCE.
            </h2>
            <p className="text-gray-400 mb-8 font-light text-lg">
              Primezone Fitness isn't just a gym. It's a high-performance lab
              designed for real athletes. Top-quality machines. Perfect
              environment. Better results. Experience the premium workout vibe
              only at Primezone Fitness.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-row gap-3 items-center"
                >
                  <div className="p-3 bg-white/5 rounded-none w-fit border border-white/10 shadow-[0_0_15px_rgba(229,158,0,0.1)]">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bebas tracking-wide uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden relative border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-prime-dark to-transparent z-10 opacity-60"></div>
              {/* Fallback image if 3D/real image is missing, we use a beautiful dark abstract aesthetic from unsplash */}
              <img
                src={InstructorLogo}
                alt="Gym Environment"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-8 left-8 z-20 glass-card p-6 rounded-none max-w-[200px] border border-white/10">
                <span className="block text-4xl font-bebas text-prime-neon mb-1 leading-none">
                  5+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Years of sculpting champions
                </span>
              </div>
            </div>

            {/* Design accent */}
            <div className="absolute -inset-4 border border-prime-neon/20 -z-10 rounded-none shadow-[0_0_20px_rgba(229,158,0,0.1)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
