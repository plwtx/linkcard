import { motion } from "motion/react";
import { QRCode } from "react-qr-code";
import { revealSpring } from "./animations";

// QR: linkcard page itself. (SELF SHARE)
const QR_VALUE = typeof window !== "undefined" ? window.location.href : "";

export function QrPanel({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      data-no-flip
      initial={{ y: 360, rotate: 15, scale: 1, opacity: 0 }}
      animate={
        isActive
          ? { y: 0, rotate: 45, scale: 1, filter: "blur(0px)", opacity: 1 }
          : {
              y: 360,
              rotate: 45,
              scale: 0,
              filter: "blur(10px)",
              opacity: 0,
            }
      }
      transition={revealSpring}
      className="z-30 flex size-50 items-center justify-center rounded-br-3xl bg-black p-2"
    >
      <QRCode
        value={QR_VALUE}
        size={256}
        viewBox="0 0 256 256"
        level="M"
        bgColor="transparent"
        fgColor="#ffffff"
        className="h-auto w-full max-w-full"
      />
    </motion.div>
  );
}
