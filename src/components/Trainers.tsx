import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Instagram, Twitter } from "lucide-react";
import InstructorLogo from "../../assets/images/instructir.jpg";

const trainers = [
  {
    name: "USMAN",
    role: "HEAD OF STRENGTH",
    image: InstructorLogo,
    bio: "",
    link:"https://www.instagram.com/usman_fitness_5268/"
  },
  // {
  //   name: "ELENA ROSTOVA",
  //   role: "HIIT & ENDURANCE",
  //   image:
  //     "https://images.unsplash.com/photo-1611506109964-b04043b3554e?q=80&w=2070&auto=format&fit=crop",
  //   bio: "CrossFit games veteran specializing in high-output metabolic conditioning.",
  // },
  // {
  //   name: "DAVID CHEN",
  //   role: "RECOVERY SPECIALIST",
  //   image:
  //     "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop",
  //   bio: "Doctor of physical therapy ensuring you build muscle without destroying joints.",
  // },
];

function TiltCard({ trainer, idx }: { trainer: any; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative cursor-pointer w-full h-full"
      >
        <div className="aspect-[3/4] overflow-hidden rounded-none bg-prime-dark relative border border-white/5 shadow-2xl">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prime-dark via-prime-dark/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

          <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-prime-neon text-[10px] font-bold uppercase tracking-widest mb-2 block">
              {trainer.role}
            </span>
            <h3 className="text-4xl font-bebas tracking-wide mb-4 text-white leading-none uppercase">
              {trainer.name}
            </h3>
            <p className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 h-0 group-hover:h-auto">
              {trainer.bio}
            </p>

            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity flex-row duration-500 delay-200">
              <a
                href={trainer.link}
                className="w-10 h-10 border border-white/20 bg-black/50 flex items-center justify-center hover:bg-prime-neon hover:border-prime-neon transition-colors backdrop-blur-sm text-gray-300 hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-prime-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bebas mb-4 leading-none"
          >
            THE <span className="text-prime-neon">ARCHITECTS.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto font-light"
          >
            Your transformation is guided by industry veterans who have forged
            champions. No rookies, just results.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <TiltCard key={idx} trainer={trainer} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
