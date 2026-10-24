import { motion } from "motion/react";
import { ringItem, ringsContainer } from "./animations";

const RING_CLASSES = [
  "absolute -bottom-64 left-1/2 size-100 rounded-full border border-white",
  "absolute -bottom-32 left-1/2 size-50 rounded-full border border-white",
  "absolute -bottom-16 left-1/2 size-25 rounded-full border border-white",
  "absolute -bottom-8 left-1/2 size-13 rounded-full border border-white",
  "absolute -bottom-4 left-1/2 size-6 rounded-full bg-white",
];

export function RippleRings({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      variants={ringsContainer}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="pointer-events-none absolute inset-0 z-10"
    >
      {RING_CLASSES.map((className) => (
        <motion.div key={className} variants={ringItem} className={className} />
      ))}
    </motion.div>
  );
}
