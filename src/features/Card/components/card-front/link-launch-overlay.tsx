import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { Link as LinkIcon } from "lucide-react";
import { LAUNCH_DURATION_MS, type LaunchState } from "./useLinkLaunch";

const DURATION = LAUNCH_DURATION_MS / 600;

export function LinkLaunchOverlay({ launch }: { launch: LaunchState }) {
  const { link, rect } = launch;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-100">
      <motion.div
        className="absolute inset-0 z-200 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeIn" }}
      />

      <motion.div
        className="bg-blax corner-squircle absolute z-75 overflow-clip"
        style={{
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        }}
        initial={{ scale: 1, x: 0, y: 0, borderRadius: "9999px" }}
        animate={{
          scale: [1, 1.3, 5],
          x: [0, 0, vw / 2 - centerX],
          y: [0, 0, vh / 2 - centerY],
          borderRadius: ["9999px", "9999px", "9999px"],
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          times: [0, 0.2, 1],
        }}
      >
        {link.iconSrc ? (
          <img
            className="h-full w-full scale-103 select-none"
            src={link.iconSrc}
            alt={link.label}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center">
            <LinkIcon className="h-1/2 w-1/2 text-white" aria-hidden />
          </span>
        )}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{
            duration: DURATION,
            ease: "easeIn",
            times: [0, 0.4, 0.85, 1],
          }}
        />
      </motion.div>
    </div>,
    document.body,
  );
}
