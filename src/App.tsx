import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Routes, Route } from "react-router-dom";

import LightRays from "./components/background/Background";
import Navbar from "./Pages/NavbarPage";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="pt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;