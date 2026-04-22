import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LightRays from "./components/background/Background";
import Navbar from "./Pages/NavbarPage";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CustomCursor from "./components/ui/CustomCursor";
import MobileCTA from "./components/ui/MobileCTA";

function App() {
  const location = useLocation();

  useEffect(() => {
    let lenis: Lenis | null = null;
    let animationFrameId: number;

    const initLenis = () => {
      const isTouch = window.innerWidth < 1024;
      if (isTouch) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
          cancelAnimationFrame(animationFrameId);
        }
        return;
      }

      if (!lenis) {
        lenis = new Lenis({
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };
        animationFrameId = requestAnimationFrame(raf);
      }
    };

    window.addEventListener('resize', initLenis);
    initLenis();

    return () => {
      window.removeEventListener('resize', initLenis);
      if (lenis) lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#050505]">
      {/* Global UI Add-ons */}
      <CustomCursor />
      <MobileCTA />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="pt-[80px] md:pt-[90px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;