import { motion } from "motion/react";
import ART from "@/assets/private/ART2.png";
import { useHangingAnimation } from "@/features/Animations/useHangingAnim";

interface Props {
  seed: number;
}

export default function LeftArt({ seed }: Props) {
  const { animate, transition, style } = useHangingAnimation(seed);

  return (
    <div className="z-0 flex h-dvh translate-y-12 items-center justify-center md:-translate-y-9">
      <motion.img
        animate={animate}
        transition={transition}
        style={style}
        className="pointer-events-none h-auto w-auto touch-none self-end select-none md:scale-125"
        src={ART}
        alt="Left decorative drawing."
      />
    </div>
  );
}
