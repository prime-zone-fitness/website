import { motion } from "motion/react";
import {
  ArrowRight,
  Flame,
  Dumbbell as DumbbellIcon,
  HeartPulse,
} from "lucide-react";

const classes = [
  {
    title: "STRENGTH & CONDITIONING",
    icon: <DumbbellIcon className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    burn: "500-700 kcal",
    time: "60 Min",
    trainer: "Marcus Thorne",
  },
  {
    title: "HIGH INTENSITY INTERVAL",
    icon: <Flame className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    burn: "600-900 kcal",
    time: "45 Min",
    trainer: "Elena Rostova",
  },
  {
    title: "FUNCTIONAL METABOLIC",
    icon: <HeartPulse className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1669322779651-5ca89652492e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    burn: "450-600 kcal",
    time: "50 Min",
    trainer: "David Chen",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-prime-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-bebas leading-none mb-2">
              ELITE <span className="text-stroke">PROGRAMS.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md">
              Specialized training protocols designed to break plateaus and
              maximize physical output.
            </p>
          </motion.div>
          <motion.a
            href="#pricing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-prime-neon font-bebas tracking-widest hover:text-white transition-colors"
          >
            VIEW ALL SCHEDULES <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[500px] overflow-hidden glass-card cursor-pointer border border-white/5 hover:border-prime-neon/50 transition-colors rounded-none"
            >
              <img
                src={cls.image}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 ease-in-out"
                alt={cls.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex flex-row items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-prime-neon text-white flex items-center justify-center shadow-[0_0_15px_rgba(229,158,0,0.4)]">
                      {cls.icon}
                    </div>

                    <h3 className="text-2xl font-bebas tracking-wide leading-none uppercase">
                      {cls.title}
                    </h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex flex-col gap-2 mb-6">
                    <div className="flex justify-between text-xs font-bold tracking-widest border-b border-white/10 pb-2 uppercase">
                      <span className="text-gray-400">Burn</span>
                      <span className="text-prime-neon">{cls.burn}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold tracking-widest border-b border-white/10 pb-2 uppercase">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">{cls.time}</span>
                    </div> 
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/7386562313?text=${encodeURIComponent(
                          `Hi Primezone Fitness, I'm interested in the ${cls.title} plan at ${cls.burn}/${cls.time}.`
                        )}`,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full py-4 glass-card border border-white/10 hover:bg-prime-neon hover:border-prime-neon rounded-none font-bebas tracking-widest text-lg transition-colors duration-300 uppercase mb-4"
                  >
                    BOOK SESSION
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
