import { motion, type Variants } from "motion/react";
import { QRCode } from "react-qr-code";
import BackBG from "@/assets/images/card-qr.webp";

// QR: linkcard page itself. (SELF SHARE)
const QR_VALUE = typeof window !== "undefined" ? window.location.href : "";

// Animation configs:
const DECO_DURATION = 1.5;
const DECO_CENTER_Y = 100;
const DECO_REST_Y = -8;
const PING_DELAY = DECO_DURATION - 0.7;
const QR_DELAY = PING_DELAY + 0.15;
const QR_DURATION = 0.5;
const CIRCLES_DELAY = QR_DELAY;
const CIRCLE_STAGGER = 0.1;

const circlesContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: CIRCLES_DELAY,
      staggerChildren: CIRCLE_STAGGER,
      staggerDirection: -1,
    },
  },
};

const circleItem: Variants = {
  hidden: { x: "-50%", y: 80, scale: 0, opacity: 0 },
  show: {
    x: "-50%",
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function CardQr({ isActive }: { isActive: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${BackBG})`,
      }}
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center overflow-clip rounded-4xl border border-white bg-zinc-100 bg-cover bg-center shadow-lg shadow-black backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      {/* Decoration circle */}
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

      {/* QR Section */}
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
        transition={{
          delay: QR_DELAY,
          duration: QR_DURATION,
          ease: "easeOut",
          type: "spring",
          stiffness: 115,
          damping: 16,
        }}
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
      {/* Name tag */}
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
        transition={{
          delay: QR_DELAY,
          duration: QR_DURATION,
          ease: "easeOut",
          type: "spring",
          stiffness: 115,
          damping: 16,
        }}
        className="absolute top-3 z-30 font-sans text-sm tracking-wide text-white"
      >
        Scan the QR code to share !
      </motion.p>
      {/* Gradient */}
      <div className="bg-blax absolute -bottom-64 left-1/2 z-0 h-100 w-100 -translate-x-1/2 rounded-full mix-blend-multiply blur-3xl" />
      {/* Circles */}
      <motion.div
        variants={circlesContainer}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
        className="pointer-events-none absolute inset-0 z-10"
      >
        <motion.div
          variants={circleItem}
          className="absolute -bottom-64 left-1/2 size-100 rounded-full border border-white"
        />
        <motion.div
          variants={circleItem}
          className="absolute -bottom-32 left-1/2 size-50 rounded-full border border-white"
        />
        <motion.div
          variants={circleItem}
          className="absolute -bottom-16 left-1/2 size-25 rounded-full border border-white"
        />
        <motion.div
          variants={circleItem}
          className="absolute -bottom-8 left-1/2 size-13 rounded-full border border-white"
        />
        <motion.div
          variants={circleItem}
          className="absolute -bottom-4 left-1/2 size-6 rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
}
