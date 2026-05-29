import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function JoinCTA() {
  return (
    <section id="join" className="py-24 relative bg-prime-neon overflow-hidden">
      {/* Dynamic background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl sm:text-7xl lg:text-9xl font-bebas text-white leading-[0.9] mb-6">
            YOUR STRONGEST
            <br />
            <span className="text-black">SELF STARTS HERE.</span>
          </h2>

          <p className="text-xl text-black/80 font-medium max-w-xl mb-10">
            Stop waiting for tomorrow. Lock in your membership today and get
            immediate access to our world-class facilities and data-driven
            training regimens.
          </p>

          <div className="flex flex-col gap-4 text-black font-bebas text-2xl tracking-widest">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
              EXPERT TRAINERS
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
              PREMIUM EQUIPMENT
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
              COMMUNITY SUPPORT
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-prime-charcoal p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 w-full"
        >
          <h3 className="text-3xl font-bebas tracking-wide text-white uppercase mb-8">
            Become a Member
          </h3>
          <form className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 0000000000"
                  className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                  Fitness Goal
                </label>
                <select
                  defaultValue=""
                  className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a goal
                  </option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength & Conditioning</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                  Preferred Location
                </label>
                <select
                  defaultValue=""
                  className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a location
                  </option>
                  <option value="madhapur">Madhapur Branch</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                Preferred Time of Consultation
              </label>
              <select
                defaultValue=""
                className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors appearance-none"
              >
                <option value="" disabled>
                  Select a time
                </option>
                <option value="morning">Morning (6AM - 11AM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (5PM - 9PM)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                Additional Notes
              </label>
              <textarea
                placeholder="Any medical conditions or specific requests?"
                rows={3}
                className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-12 py-4 bg-prime-neon text-black font-bebas tracking-widest text-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(229,158,0,0.4)] hover:shadow-none hover:scale-[1.02] border border-transparent uppercase w-full"
            >
              SECURE YOUR SPOT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
