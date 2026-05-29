import { motion } from "motion/react";
import { Lightbulb, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

const tips = [
  {
    author: "Akash",
    role: "Strength Coach",
    category: "Training",
    tip: "Progressive Overload is Key: Don't change your routine every week. Stick to core movements and focus on increasing weight or reps over time.",
  },
  {
    author: "Bunny",
    role: "Bodybuilding Expert",
    category: "Nutrition",
    tip: "Hydration over Supplements: Before buying expensive pre-workouts, ensure you're drinking enough water. A 2% drop in hydration can cost you 10% in performance.",
  },
  {
    author: "Team Prime Zone",
    role: "Wellness",
    category: "Recovery",
    tip: "Sleep for Growth: Muscles are torn in the gym but built in bed. Aim for 7-9 hours of quality sleep to maximize recovery and results.",
  },
  {
    author: "Akash",
    role: "Strength Coach",
    category: "Nutrition",
    tip: "Protein Pacing: Instead of consuming all your protein in one meal, space it out into 3-5 meals throughout the day for optimal muscle protein synthesis.",
  },
  {
    author: "Bunny",
    role: "Bodybuilding Expert",
    category: "Training",
    tip: "Mind-Muscle Connection: Don't just move the weight from A to B. Actively focus on squeezing the target muscle to maximize recruitment and growth.",
  },
];

export default function ExpertTips() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-prime-charcoal relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bebas mb-4 leading-none uppercase"
          >
            Expert <span className="text-prime-neon">Fitness Tips</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium max-w-xl"
          >
            Actionable advice from our certified trainers to accelerate your
            progress inside and outside the gym.
          </motion.p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-prime-neon transition-colors"
            aria-label="Previous tips"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-prime-neon transition-colors"
            aria-label="Next tips"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 pb-8 pt-4 hide-scrollbar"
        >
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(229,158,0,0.15)",
                borderColor: "rgba(229,158,0,0.5)",
              }}
              className="min-w-[300px] md:min-w-[400px] snap-center glass-card p-8 border border-white/10 hover:border-prime-neon/30 transition-all flex flex-col justify-between"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 text-gray-300">
                    {tip.category}
                  </span>
                  <Lightbulb className="w-5 h-5 text-prime-neon" />
                </div>
                <p className="text-lg text-white font-medium italic leading-relaxed">
                  "{tip.tip}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="w-10 h-10 bg-prime-neon/20 flex items-center justify-center font-bold text-prime-neon tracking-widest uppercase text-xs border border-prime-neon/40 shadow-[0_0_10px_rgba(229,158,0,0.2)]">
                  {tip.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bebas tracking-wide text-lg uppercase leading-none mb-1">
                    {tip.author}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {tip.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
