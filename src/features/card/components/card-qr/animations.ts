import type { Variants } from "motion/react";

/**
 * Shared timeline for the QR face reveal: the decoration circle drops in
 * first, then the pings, QR panel, hint, and ripple rings follow.
 */
export const DECO_DURATION = 1.5;
export const DECO_CENTER_Y = 100;
export const DECO_REST_Y = -8;
export const PING_DELAY = DECO_DURATION - 0.7;
export const QR_DELAY = PING_DELAY + 0.15;
export const QR_DURATION = 0.5;

const RINGS_DELAY = QR_DELAY;
const RING_STAGGER = 0.1;

export const revealSpring = {
  delay: QR_DELAY,
  duration: QR_DURATION,
  ease: "easeOut",
  type: "spring",
  stiffness: 115,
  damping: 16,
} as const;

export const ringsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: RINGS_DELAY,
      staggerChildren: RING_STAGGER,
      staggerDirection: -1,
    },
  },
};

export const ringItem: Variants = {
  hidden: { x: "-50%", y: 80, scale: 0, opacity: 0 },
  show: {
    x: "-50%",
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};
