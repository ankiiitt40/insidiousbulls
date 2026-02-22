import React, { useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

interface JourneyButtonProps {
  onClick?: () => void;
  className?: string;
}

const JourneyButton: React.FC<JourneyButtonProps> = ({
  onClick,
  className = ""
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (!btnRef.current || !arrowRef.current) return;

    // Strong bounce click effect
    gsap.timeline()
      .to(btnRef.current, {
        scale: 0.85,
        duration: 0.08,
        ease: "power2.out"
      })
      .to(btnRef.current, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(4)" // strong bounce
      });

    // Arrow micro movement
    gsap.fromTo(
      arrowRef.current,
      { x: 0 },
      {
        x: 10,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      }
    );

    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`
        relative inline-flex items-center gap-3
        px-8 py-3
        border border-white
        text-white
        bg-transparent
        rounded-md
        hover:bg-white hover:text-black
        hover:shadow-xl hover:shadow-white/20
        focus:outline-none
        ${className}
      `}
    >
      <span className="font-semibold tracking-wide">
        Start Journey
      </span>

      <div ref={arrowRef}>
        <ArrowRight size={18} />
      </div>
    </button>
  );
};

export default JourneyButton;
