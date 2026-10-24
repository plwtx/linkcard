import { useMotionValue, useSpring } from "motion/react";
import { useDeviceTilt } from "./use-device-tilt";

const TILT_SPRING = { stiffness: 300, damping: 30 };

/** Tilts the card toward the pointer or with the device orientation on mobile. */
export function useCardTilt({
  maxTilt,
  isEnabled,
}: {
  maxTilt: number;
  isEnabled: () => boolean;
}) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, TILT_SPRING);
  const springTiltY = useSpring(tiltY, TILT_SPRING);

  useDeviceTilt({ tiltX, tiltY, maxTilt, isEnabled });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isEnabled()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    tiltY.set(dx * maxTilt);
    tiltX.set(-dy * maxTilt);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return {
    rotateX: springTiltX,
    rotateY: springTiltY,
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
  };
}
