import { useRef, useState } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { haptics } from "@/lib/haptics";

const QR_SPIN_SPRING = { stiffness: 55, damping: 16 };

/**
 * Owns the QR face state: a toggle spins the card a full turn and the
 * requested state is applied mid-spin, while the front face is hidden.
 */
export function useQrFace() {
  const [showQr, setShowQr] = useState(false);
  const pendingQr = useRef<boolean | null>(null);

  const spin = useMotionValue(0);
  const springSpin = useSpring(spin, QR_SPIN_SPRING);

  const toggle = () => {
    haptics.quick();
    pendingQr.current = !showQr;
    spin.set(spin.get() + 360);
  };

  const applyPendingWhileHidden = () => {
    if (pendingQr.current === null) return;
    setShowQr(pendingQr.current);
    pendingQr.current = null;
  };

  return { showQr, springSpin, toggle, applyPendingWhileHidden };
}
