import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  { 
    q: "Is this course for complete beginners?", 
    a: "Yes! We start from the absolute basics, assuming you know nothing about charts, and take you step-by-step to advanced execution." 
  },
  { 
    q: "In which languages are the sessions recorded?", 
    a: "All our sessions are explained in simple Hindi & Urdu, with technical terms in English for better market understanding." 
  },
  { 
    q: "Do I get lifetime access to the community?", 
    a: "Yes, once you join the mastery program, you become a lifetime member of our elite trading circle for ongoing support and chart discussions." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
        Frequently Asked <span className="text-emerald-400">Questions</span>
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-lg md:text-xl font-medium text-white/90">{item.q}</span>
              {openIndex === i ? <Minus className="text-emerald-400" /> : <Plus className="text-emerald-400" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-white/60 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
