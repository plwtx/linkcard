import { motion, useReducedMotion } from "motion/react";

interface BlurBlobProps {
  className?: string;
  color?: string;
  duration?: number;
}

const BASE = "pointer-events-none absolute z-30 mix-blend-multiply blur-3xl";

const SHAPES = [
  "42% 58% 70% 30% / 45% 45% 55% 55%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "34% 66% 50% 50% / 60% 56% 44% 40%",
  "70% 30% 46% 54% / 30% 58% 42% 70%",
  "42% 58% 70% 30% / 45% 45% 55% 55%",
];

export default function BlurBlob({
  className = "-top-50 -right-50 h-100 w-100",
  color,
  duration = 6,
}: BlurBlobProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        aria-hidden
        className={`${BASE} rounded-full ${className}`}
        style={{ backgroundColor: color }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className={`${BASE} ${className}`}
      style={{ willChange: "transform", backgroundColor: color }}
      initial={{ borderRadius: SHAPES[0] }}
      animate={{
        borderRadius: SHAPES,
        scale: [1, 1.12, 0.96, 1.08, 1],
        rotate: [0, 18, -12, 8, 0],
        opacity: [0.8, 1, 0.85, 0.95, 0.8],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
