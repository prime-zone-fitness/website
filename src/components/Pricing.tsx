import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "DAILY PASS",
    price: "₹500",
    duration: "Day",
    features: [
      "Full gym access",
      "Restroom & shower",
      "Free Wi-Fi",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "QUARTERLY",
    price: "₹6,000",
    duration: "Quarter",
    features: [
      "Full gym access",
      "Sauna access",
      "1 PT Session/month",
      "Free Wi-Fi & parking",
    ],
    popular: true,
  },
  {
    name: "YEARLY",
    price: "₹18,000",
    duration: "Year",
    features: [
      "Everything in Quarterly",
      "Unlimited group classes",
      "Custom workout plan",
      "Priority booking",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-prime-charcoal relative border-y border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-prime-neon/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bebas mb-4"
          >
            CHOOSE YOUR <span className="text-prime-neon">PLAN.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            No hidden fees. No basic layouts. Just pure performance tiers
            designed to fit your commitment level.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: plan.popular ? 1.08 : 1.02,
                transition: { duration: 0.3 },
              }}
              className={`p-[1px] relative ${plan.popular ? "bg-gradient-to-b from-prime-neon to-prime-dark scale-105 shadow-[0_0_40px_rgba(229,158,0,0.3)]" : "bg-transparent border border-white/10"}`}
            >
              <div className="bg-prime-dark p-8 h-full flex flex-col relative glass-card">
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-prime-neon px-3 py-1 font-bebas tracking-widest text-sm text-white">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bebas tracking-wide text-gray-300 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-bebas text-white leading-none">
                    {plan.price}
                  </span>
                  <span className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest font-bold">
                    /{plan.duration}
                  </span>
                </div>

                <div className="flex-grow flex flex-col gap-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-prime-neon/20 flex items-center justify-center shrink-0 border border-prime-neon/50">
                        <Check className="w-3 h-3 text-prime-neon" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/7386562313?text=${encodeURIComponent(`Hi Primezone Fitness, I'm interested in the ${plan.name} plan at ${plan.price}/${plan.duration}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 font-bebas tracking-widest transition-all duration-300 uppercase text-lg ${plan.popular ? "bg-prime-neon hover:bg-white hover:text-prime-neon text-white" : "glass-card text-white hover:bg-white/10 border border-white/20"}`}
                >
                  SELECT PLAN
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
