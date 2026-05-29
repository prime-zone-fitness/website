import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "7386562313"; // Using the phone number from the Contact section
  const message = encodeURIComponent(
    "Hi Primezone Fitness, I'm interested in joining!",
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[90] flex items-center justify-center w-14 h-14 bg-prime-neon text-white rounded-full shadow-[0_0_20px_rgba(229,158,0,0.5)] hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />

      {/* Ripple effect */}
      <div
        className="absolute inset-0 rounded-full border-2 border-prime-neon animate-ping opacity-75"
        style={{ animationDuration: "2s" }}
      ></div>
    </motion.a>
  );
}
