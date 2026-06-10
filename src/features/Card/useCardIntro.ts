import { useEffect } from "react";
import { animate, useMotionValue, useReducedMotion } from "motion/react";

const ENTRANCE_Y = -340;
const ENTRANCE_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};
const FLIP_SPRING = { type: "spring" as const, stiffness: 90, damping: 18 };

export function useCardIntro() {
  const reduceMotion = useReducedMotion();
  const introFlip = useMotionValue(reduceMotion ? 0 : 180);

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(introFlip, 0, { ...FLIP_SPRING, delay: 0.15 });
    return () => controls.stop();
  }, [introFlip, reduceMotion]);

  const entrance = reduceMotion
    ? {}
    : {
        initial: { y: ENTRANCE_Y, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: ENTRANCE_TRANSITION,
      };

  return { introFlip, entrance };
}
