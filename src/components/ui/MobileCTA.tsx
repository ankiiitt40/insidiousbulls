import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 300px scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-[60] md:hidden"
        >
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-emerald-500 text-black font-bold px-6 py-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-90 transition-transform"
          >
            JOIN NOW
            <ArrowRight size={20} />
          </button>
          
          {/* Subtle Pulse Effect */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-emerald-400 rounded-full -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
