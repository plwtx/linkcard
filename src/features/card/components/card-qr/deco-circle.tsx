import { motion } from "motion/react";
import {
  DECO_CENTER_Y,
  DECO_DURATION,
  DECO_REST_Y,
  PING_DELAY,
} from "./animations";

export function DecoCircle({ isActive }: { isActive: boolean }) {
  return (
    <motion.section
      initial={{ scale: 0, y: DECO_CENTER_Y }}
      animate={
        isActive
          ? {
              scale: [0, 1, 1],
              y: [DECO_CENTER_Y, DECO_CENTER_Y, DECO_REST_Y],
            }
          : { scale: 0, y: DECO_CENTER_Y }
      }
      transition={{
        duration: DECO_DURATION,
        times: [0, 0.5, 1],
        ease: ["backOut", "easeOut"],
      }}
      className="relative flex size-16 items-center justify-center overflow-clip rounded-full border border-white"
    >
      <div className="z-0 size-9 rounded-full bg-white" />

      <div className="bg-blax absolute top-1/2 left-1/2 z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* Pings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: PING_DELAY, duration: 0.4 }}
      >
        <div className="absolute top-1/2 left-1/2 z-30 size-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/45" />
        <div className="absolute top-1/2 left-1/2 z-30 size-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/45 blur-3xl" />
      </motion.div>
    </motion.section>
  );
}
