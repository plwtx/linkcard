import { motion } from "motion/react";
import ART from "@/assets/private/ART1.png";
import { useHangingAnimation } from "@/features/Animations/useHangingAnim";

interface Props {
  seed: number;
}

export default function LeftArt({ seed }: Props) {
  const { animate, transition, style } = useHangingAnimation(seed);

  return (
    <div className="z-0 flex h-dvh -translate-y-12 items-center justify-center">
      <motion.img
        animate={animate}
        transition={transition}
        style={style}
        className="pointer-events-none h-auto w-auto touch-none self-start select-none"
        src={ART}
        alt="Left decorative drawing."
      />
    </div>
  );
}
