import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useProgress } from "@react-three/drei";
import LogoImg from "../../assets/images/logo.png";

export default function LoadingScreen() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  useEffect(() => {
    // Smooth progress interpolation
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= progress) return progress;
        const step = Math.max(1, (progress - prev) * 0.1);
        return Math.min(progress, prev + step);
      });
    }, 16);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (displayProgress >= 99.9) {
      // Using 99.9 to account for float inaccuracy
      const timeout = setTimeout(() => {
        setIsLoaded(true); 
      }, 1200); // 1.2s minimum holding time at 100% for the cinematic flourish
      return () => clearTimeout(timeout);
    }
  }, [displayProgress]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black pointer-events-auto"
        >
          {/* Logo Animation */}
          <div className="relative mb-12 flex flex-col items-center">
            {/* Custom Logo Text */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col justify-center items-center"
            >
              <img src={LogoImg} alt="logo" className="object-contain w-3/4 h-3/4" />    
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-gray-500 tracking-[0.5em] text-xs md:text-sm uppercase font-bold text-center"
            >PRIMEZONE <br />
              PREMIUM FITNESS
            </motion.p> 
          </div>

          {/* Asset Tracker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center w-full max-w-sm px-6"
          >
            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-prime-neon shadow-[0_0_15px_rgba(229,158,0,0.8)]"
                style={{ width: `${displayProgress}%` }}
              />
            </div>

            {/* Readout */}
            <div className="flex justify-between w-full text-xs font-mono font-bold tracking-widest uppercase">
              <span className="text-gray-500">
                {displayProgress < 100
                  ? "Loading Assets..."
                  : "Assets Ready"}
              </span>
              <motion.span className="text-prime-neon">
                {Math.round(displayProgress)}%
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
