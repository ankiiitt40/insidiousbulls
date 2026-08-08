import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LightRays from "./components/background/Background";
import Navbar from "./Pages/NavbarPage";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlogPage from "./Pages/BlogPage";
import BlogPostPage from "./Pages/BlogPostPage";
import CustomCursor from "./components/ui/CustomCursor";
import MobileCTA from "./components/ui/MobileCTA";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Global reference to Lenis for route synchronization
let lenisInstance: Lenis | null = null;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Instant window scroll to top
    window.scrollTo(0, 0);

    // 2. Lenis immediate scroll & resize
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      lenisInstance.resize();
    }

    // 3. Re-calculate height after Framer Motion route transition completes (450ms)
    const timer = setTimeout(() => {
      if (lenisInstance) {
        lenisInstance.resize();
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    let animationFrameId: number;

    const initLenis = () => {
      const isTouch = window.innerWidth < 1024;
      if (isTouch) {
        if (lenisInstance) {
          lenisInstance.destroy();
          lenisInstance = null;
          cancelAnimationFrame(animationFrameId);
        }
        return;
      }

      if (!lenisInstance) {
        lenisInstance = new Lenis({
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
        });

        const raf = (time: number) => {
          lenisInstance?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };
        animationFrameId = requestAnimationFrame(raf);
      }
    };

    window.addEventListener('resize', initLenis);
    initLenis();

    return () => {
      window.removeEventListener('resize', initLenis);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#050505]">
      <ScrollToTop />
      {/* Global UI Add-ons */}
      <CustomCursor />
      <MobileCTA />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="pt-[80px] md:pt-[90px]">
          <ErrorBoundary>
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
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;