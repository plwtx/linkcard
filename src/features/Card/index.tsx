import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import CardFront from "./components/card-front";
import CardBack from "./components/card-back";

const TILT_MAX = 9;
const FLIP_THRESHOLD = 90;

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  const [frontActive, setFrontActive] = useState(true);
  const pointerStartX = useRef(0);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 300, damping: 30 });
  const springTiltY = useSpring(tiltY, { stiffness: 300, damping: 30 });

  const flipBase = useMotionValue(0);
  const springFlip = useSpring(flipBase, { stiffness: 200, damping: 25 });

  const rotateY = useTransform(() => springFlip.get() + springTiltY.get());

  useMotionValueEvent(springFlip, "change", (angle) => {
    setFrontActive(Math.abs(angle) < 1);
  });

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
    if ((e.target as HTMLElement).closest("a")) return;

    const delta = Math.abs(e.clientX - pointerStartX.current);
    if (delta < 10 || delta >= FLIP_THRESHOLD) {
      const next = !flipped;
      setFlipped(next);
      flipBase.set(next ? 180 : 0);
    }
  };

  return (
    <div
      className="xs:w-auto z-30 w-full 2xl:scale-115"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="xs:w-93 shadow-blax/45 relative h-130 w-full rounded-4xl shadow-xl transform-3d"
        style={{ rotateX: springTiltX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <CardFront isActive={frontActive} />
        <CardBack />
      </motion.div>
    </div>
  );
}
