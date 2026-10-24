import { motion } from "motion/react";
import { revealSpring } from "./animations";

export function ScanHint({ isActive }: { isActive: boolean }) {
  return (
    <motion.p
      initial={{ y: -120, scale: 1, opacity: 0 }}
      animate={
        isActive
          ? { y: 0, scale: 1, opacity: 1 }
          : {
              y: 360,
              scale: 0,
              opacity: 0,
            }
      }
      transition={revealSpring}
      className="absolute top-3 z-30 font-sans text-sm tracking-wide text-white"
    >
      Scan the QR code to share !
    </motion.p>
  );
}
