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
import { useCardFlip } from "./useCardFlip";
import { useDeviceTilt } from "./useDeviceTilt";
import { haptics } from "@/lib/haptics";
import { preloadImage } from "@/lib/preloadImage";
import { frontAssetsReady } from "./components/card-front/assets";
import BackBG from "@/assets/images/card-back.webp";
import QrBG from "@/assets/images/card-qr.webp";

const TILT_MAX = 9;
const FACE_HIDDEN_ANGLE = 90;
const QR_SPIN_SPRING = { stiffness: 55, damping: 16 };
const WARM_FALLBACK_MS = 4000;

export default function Card() {
  const [frontFacing, setFrontFacing] = useState(true);
  const [showQr, setShowQr] = useState(false);
  const [backBgSrc, setBackBgSrc] = useState<string>();
  const pendingQr = useRef<boolean | null>(null);

  useEffect(() => {
    let active = true;
    const fallback = new Promise((r) => setTimeout(r, WARM_FALLBACK_MS));
    Promise.race([frontAssetsReady, fallback])
      .then(() => preloadImage(BackBG))
      .then(() => {
        if (active) setBackBgSrc(BackBG);
        return preloadImage(QrBG);
      });
    return () => {
      active = false;
    };
  }, []);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 300, damping: 30 });
  const springTiltY = useSpring(tiltY, { stiffness: 300, damping: 30 });

  const qrSpin = useMotionValue(0);
  const springQrSpin = useSpring(qrSpin, QR_SPIN_SPRING);

  const handleQrFlip = () => {
    haptics.quick();
    pendingQr.current = !showQr;
    qrSpin.set(qrSpin.get() + 360);
  };

  const flip = useCardFlip(() => {
    if (showQr) {
      handleQrFlip();
      return true;
    }
    return false;
  });

  useDeviceTilt({
    tiltX,
    tiltY,
    maxTilt: TILT_MAX,
    isEnabled: () => !flip.isDragging(),
  });

  const { introFlip, entrance } = useCardIntro();

  const flipAngle = useTransform(
    () => flip.rotation.get() + springQrSpin.get() + introFlip.get(),
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (flip.isDragging()) return;
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

  return (
    <motion.div className="xs:w-auto z-90 w-full" {...entrance}>
      <div className="2xl:scale-115" style={{ perspective: "1200px" }}>
        <motion.div
          className="xs:w-93 shadow-blax/45 relative h-130 w-full touch-pan-y rounded-4xl shadow-xl select-none transform-3d"
          style={{ rotateX: springTiltX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...flip.handlers}
        >
          <CardFront
            isActive={frontFacing && !showQr}
            onQrPress={handleQrFlip}
          />
          <CardBack bgSrc={backBgSrc} />
          {showQr && <CardQr isActive={frontFacing} />}
        </motion.div>
      </div>
    </motion.div>
  );
}
