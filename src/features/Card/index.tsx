import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import CardFront from "./components/card-front";
import CardBack from "./components/card-back";
import CardQr from "./components/card-qr";
import { useCardIntro } from "./useCardIntro";

const TILT_MAX = 9;
const FLIP_THRESHOLD = 90;

const FACE_HIDDEN_ANGLE = 90;
const FLIP_SPRING = { stiffness: 90, damping: 18 };
const QR_SPIN_SPRING = { stiffness: 55, damping: 16 };

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  const [frontFacing, setFrontFacing] = useState(true);
  const [showQr, setShowQr] = useState(false);
  const pointerStartX = useRef(0);
  const pendingQr = useRef<boolean | null>(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 300, damping: 30 });
  const springTiltY = useSpring(tiltY, { stiffness: 300, damping: 30 });

  const flipBase = useMotionValue(0);
  const qrSpin = useMotionValue(0);
  const springFlip = useSpring(flipBase, FLIP_SPRING);
  const springQrSpin = useSpring(qrSpin, QR_SPIN_SPRING);

  const { introFlip, entrance } = useCardIntro();

  const flipAngle = useTransform(
    () => springFlip.get() + springQrSpin.get() + introFlip.get(),
  );
  const rotateY = useTransform(() => flipAngle.get() + springTiltY.get());

  useMotionValueEvent(flipAngle, "change", (angle) => {
    const norm = ((angle % 360) + 360) % 360;
    setFrontFacing(norm < FACE_HIDDEN_ANGLE || norm > 360 - FACE_HIDDEN_ANGLE);
  });

  useEffect(() => {
    if (!frontFacing && pendingQr.current !== null) {
      setShowQr(pendingQr.current);
      pendingQr.current = null;
    }
  }, [frontFacing]);

  const handleQrFlip = () => {
    pendingQr.current = !showQr;
    qrSpin.set(qrSpin.get() + 360);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    tiltY.set(dx * TILT_MAX);
    tiltX.set(-dy * TILT_MAX);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("[data-no-flip]")) return;

    const delta = Math.abs(e.clientX - pointerStartX.current);
    if (delta >= 10 && delta < FLIP_THRESHOLD) return;

    if (showQr) {
      handleQrFlip();
      return;
    }

    const next = !flipped;
    setFlipped(next);
    flipBase.set(next ? 180 : 0);
  };

  return (
    <motion.div className="xs:w-auto z-90 w-full" {...entrance}>
      <div className="2xl:scale-115" style={{ perspective: "1200px" }}>
        <motion.div
          className="xs:w-93 shadow-blax/45 relative h-130 w-full rounded-4xl shadow-xl transform-3d"
          style={{ rotateX: springTiltX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <CardFront
            isActive={frontFacing && !showQr}
            onQrPress={handleQrFlip}
          />
          <CardBack />
          {showQr && <CardQr isActive={frontFacing} />}
        </motion.div>
      </div>
    </motion.div>
  );
}
