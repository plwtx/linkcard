import {
  motion,
  type Transition,
  type TargetAndTransition,
} from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type MorphMaskProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  animate?: TargetAndTransition;
  transition?: Transition;
};

export const morphKeyframes: TargetAndTransition = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 180, 180, 0],
  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
};

export const morphTiming: Transition = {
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 1,
};

export default function MorphMask({
  children,
  className,
  style,
  animate = morphKeyframes,
  transition = morphTiming,
}: MorphMaskProps) {
  return (
    <motion.div
      animate={animate}
      transition={transition}
      style={style}
      className={`overflow-hidden ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
