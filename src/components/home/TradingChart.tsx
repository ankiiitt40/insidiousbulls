import { motion } from "framer-motion";

export default function TradingChart() {
  return (
    <div className="w-full h-32 flex items-center justify-center opacity-40">
      <svg width="100%" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0 80 L50 60 L100 70 L150 40 L200 50 L250 20 L300 30 L350 10 L400 20"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* Glow point */}
        <motion.circle
          r="4"
          fill="#10b981"
          animate={{ 
            x: [0, 50, 100, 150, 200, 250, 300, 350, 400],
            y: [80, 60, 70, 40, 50, 20, 30, 10, 20],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
