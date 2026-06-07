import { seededRandom } from "./seededRandom";
import type { Transition } from "motion/react";

interface HangingConfig {
  animate: { y: number[]; rotate: number[] };
  transition: { y: Transition; rotate: Transition };
  style: { transformOrigin: string };
}

export function createHangingConfig(seed: number): HangingConfig {
  const duration = 1.5 + seededRandom(seed, 0) * 1.5;
  const initialY = seededRandom(seed, 1) * 10;
  const maxRotation = seededRandom(seed, 2) * 30;
  const rotPhase = 0.7 + seededRandom(seed, 3) * 0.7;
  const direction = seededRandom(seed, 4) > 0.5 ? 1 : -1;

  return {
    animate: {
      y: [initialY, initialY + 14],
      rotate: [-maxRotation * direction, maxRotation * direction],
    },
    transition: {
      y: {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      rotate: {
        duration: duration * rotPhase,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    style: { transformOrigin: "top center" },
  };
}
