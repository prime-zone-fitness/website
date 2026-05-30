import { motion } from "motion/react";
import HeroScene from "./HeroScene";

export default function Hero() {
  const stats = [
    { value: "4.8", label: "100+ Reviews" },
    { value: "100+", label: "Active Clients" },
    { value: "3+", label: "Expert Trainers" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex border-b border-white/10 overflow-hidden items-center pt-24 pb-12"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-prime-dark via-prime-dark/80 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full z-10 relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          {/* <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-prime-neon"></div>
            <span className="text-prime-neon text-xs font-bold tracking-[0.4em] uppercase">
              BEYOND LIMITS
            </span>
          </div> */}

          <h1 className="text-7xl lg:text-[140px] font-bebas leading-[0.9] text-white select-none whitespace-nowrap mt-4">
            <span
              className="font-bold text-transparent bg-clip-text tracking-[0.01em]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #f5bf00 40%, #e59800 60%)",
              }}
            >
              PRIME ZONE
            </span>
            <br />
            <span className="">FITNESS</span>
          </h1>

          <p className="text-sm text-gray-400 max-w-md font-normal leading-relaxed opacity-80 tracking-wide">
            Welcome to Primezone Fitness! A clean, premium unisex gym with
            modern equipment, certified trainers, and a friendly workout
            environment. Join us today and start your fitness journey!
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#pricing"
              className="px-8 py-4 bg-prime-neon text-white font-bebas tracking-wider text-xl hover:scale-105 transition-transform duration-300"
            >
              START TRANSFORMATION
            </a>
            <a
              href="tel:7386562313"
              className="px-8 py-4 glass-card border border-white/10 text-white font-bebas tracking-wider text-xl hover:bg-white/10 transition-colors duration-300"
            >
              CALL NOW
            </a>
          </div>

          {/* Animated Stats moved near the bottom or adjusted for mobile, since we kept it under the text */}
          <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/10 w-full max-w-xl">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                className="flex flex-col gap-1 pr-8 border-r border-white/5 last:border-0"
              >
                <span className="text-4xl sm:text-6xl font-bebas leading-none text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-50"
      >
        <span className="text-xs tracking-widest uppercase font-bebas">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
