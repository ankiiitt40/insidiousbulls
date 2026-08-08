import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useInView
} from "framer-motion";

interface ScrollVelocityProps {
  children: React.ReactNode;
  velocity?: number; // positive = right, negative = left
  numCopies?: number;
  className?: string;
  scrollerClassName?: string;
  style?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  children,
  velocity = 60,
  numCopies = 4,
  className = "",
  scrollerClassName = "",
  style
}) => {
  const baseX = useMotionValue(0);
  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, value: number): number {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const direction = velocity < 0 ? -1 : 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  useAnimationFrame((_, delta) => {
    if (!isInView) return; // Pause animation when out of view to prevent lag
    const moveBy = direction * Math.abs(velocity) * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const copies = [];
  for (let i = 0; i < numCopies; i++) {
    copies.push(
      <div
        key={i}
        ref={i === 0 ? copyRef : null}
        className={`flex-shrink-0 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <section ref={containerRef} className="overflow-hidden">
      <motion.div
        className={`flex whitespace-nowrap ${scrollerClassName}`}
        style={{ x, ...style }}
      >
        {copies}
      </motion.div>
    </section>
  );
};

export default ScrollVelocity;
