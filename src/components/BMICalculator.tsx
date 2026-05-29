import { motion } from "motion/react";
import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const calculatedBmi = w / (h * h);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
    }
  };

  const getStatus = () => {
    if (!bmi) return { label: "", color: "" };
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (bmi >= 18.5 && bmi < 25)
      return { label: "Optimal", color: "text-green-400" };
    if (bmi >= 25 && bmi < 30)
      return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-prime-neon" };
  };

  const status = getStatus();

  return (
    <section className="py-24 bg-prime-dark relative border-b border-white/5 overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 pointer-events-none opacity-5">
        <h2 className="text-[15rem] font-bebas leading-none whitespace-nowrap text-stroke">
          DATA DRIVEN
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-bebas mb-6 leading-none">
              KNOW YOUR <span className="text-prime-neon">NUMBERS.</span>
            </h2>
            <p className="text-gray-400 mb-8 font-light text-lg">
              Body Mass Index is just the starting point. Calculate your
              baseline to understand where you stand before we build your custom
              physical protocol.
            </p>
            <form
              onSubmit={calculateBMI}
              className="flex flex-col gap-6 max-w-md"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 180"
                    required
                    className="bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 80"
                    required
                    className="bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-prime-neon hover:bg-white hover:text-prime-neon text-white font-bebas tracking-widest text-lg transition-colors duration-300 rounded-none shadow-[0_0_20px_rgba(229,158,0,0.4)] uppercase"
              >
                CALCULATE BMI
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-gradient-to-tr from-prime-charcoal to-prime-dark shadow-2xl">
              <div className="absolute inset-4 rounded-full border border-white/5 border-dashed" />

              <div className="flex flex-col items-center justify-center z-10 text-center p-8">
                {bmi ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                      Your Index
                    </span>
                    <span className="text-7xl font-bebas text-white">
                      {bmi}
                    </span>
                    <span
                      className={`text-xl font-bebas tracking-widest mt-2 ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <span className="text-7xl font-bebas text-white">00.0</span>
                    <span className="text-sm font-mono text-gray-400 tracking-widest uppercase mt-2">
                      Awaiting Data
                    </span>
                  </div>
                )}
              </div>

              {/* Decorative radial pulse if calculated */}
              {bmi && (
                <div className="absolute inset-0 rounded-full border-2 border-prime-neon animate-pulse opacity-20 pointer-events-none" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
