import { motion } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";
import LogoImg from "../../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-prime-dark/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto px-6 sm:px-12 flex justify-between items-center">
        <a
          href="#home"
          className="flex flex-col items-start gap-2 text-2xl font-bebas text-white"
        >
          <img
            src={LogoImg}
            alt="Gym Environment"
            className="object-cover w-1/8 h-1/8"
          />
          {/* <Dumbbell className="text-prime-neon" size={28} /> */}
          {/* PRIME <span className="text-prime-neon">ZONE</span> */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.3em] font-bold text-gray-400 hover:text-white transition-colors relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-prime-neon transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#join"
            className="px-6 py-2 border border-white/20 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-none bg-transparent"
          >
            Become Member
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, h: 0 }}
          animate={{ opacity: 1, h: "auto" }}
          className="md:hidden absolute top-full left-0 w-full bg-prime-charcoal border-b border-white/10 py-6 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bebas tracking-wider text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
