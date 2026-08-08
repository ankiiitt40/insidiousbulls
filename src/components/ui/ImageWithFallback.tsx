import { useState } from "react";
import { TrendingUp, BarChart3, ShieldCheck, Globe, Zap } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
}

export default function ImageWithFallback({ src, alt, className = "", category = "Trading" }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-emerald-950/80 via-black to-emerald-900/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden ${className}`}>
        {/* Background glow circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
        
        {/* Icon based on category */}
        {category.toLowerCase().includes("crypto") ? (
          <Zap size={36} className="text-emerald-400 mb-2" />
        ) : category.toLowerCase().includes("risk") ? (
          <ShieldCheck size={36} className="text-emerald-400 mb-2" />
        ) : category.toLowerCase().includes("forex") ? (
          <Globe size={36} className="text-emerald-400 mb-2" />
        ) : (
          <TrendingUp size={36} className="text-emerald-400 mb-2" />
        )}
        
        <span className="text-white/90 font-bold text-xs uppercase tracking-widest">
          {category}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  );
}
