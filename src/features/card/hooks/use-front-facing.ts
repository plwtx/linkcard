import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

const FACE_HIDDEN_ANGLE = 90;

/** Tracks whether the card's front face points toward the viewer. */
export function useFrontFacing(
  angle: MotionValue<number>,
  onFrontHidden?: () => void,
) {
  const [frontFacing, setFrontFacing] = useState(true);

  const onFrontHiddenRef = useRef(onFrontHidden);
  useEffect(() => {
    onFrontHiddenRef.current = onFrontHidden;
  });

  useMotionValueEvent(angle, "change", (value) => {
    const norm = ((value % 360) + 360) % 360;
    setFrontFacing(norm < FACE_HIDDEN_ANGLE || norm > 360 - FACE_HIDDEN_ANGLE);
  });

  useEffect(() => {
    if (!frontFacing) onFrontHiddenRef.current?.();
  }, [frontFacing]);

  return frontFacing;
}
