import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeHelp from "./components/HowWeHelp";
import Classes from "./components/Classes";
import Trainers from "./components/Trainers";
import ExpertTips from "./components/ExpertTips";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import BMICalculator from "./components/BMICalculator";
import JoinCTA from "./components/JoinCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-prime-dark min-h-screen text-white font-inter selection:bg-prime-neon selection:text-white">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyChooseUs />
        <HowWeHelp />
        <Classes />
        <Trainers />
        <ExpertTips />
        <Pricing />
        <Reviews />
        <BMICalculator />
        <JoinCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
