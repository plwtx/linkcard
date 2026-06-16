import { motion, useReducedMotion } from "motion/react";
import { useHangingAnimation } from "@/features/Animations/useHangingAnim";

interface Props {
  src: string;
  alt: string;
  seed: number;
  from: "top" | "bottom";
  containerClassName: string;
  imgClassName: string;
}

const ENTER_DISTANCE = 160;
const ENTER_TRANSITION = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ArtPiece({
  src,
  alt,
  seed,
  from,
  containerClassName,
  imgClassName,
}: Props) {
  const { animate, transition, style } = useHangingAnimation(seed);
  const reduceMotion = useReducedMotion();

  const offset = from === "top" ? -ENTER_DISTANCE : ENTER_DISTANCE;
  const align = from === "top" ? "self-start" : "self-end";

  return (
    <div className={containerClassName}>
      <motion.div
        className={align}
        initial={reduceMotion ? false : { y: offset, opacity: 0 }}
        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={ENTER_TRANSITION}
      >
        <motion.img
          src={src}
          alt={alt}
          style={style}
          className={imgClassName}
          animate={reduceMotion ? undefined : animate}
          transition={reduceMotion ? undefined : transition}
        />
      </motion.div>
    </div>
  );
}
