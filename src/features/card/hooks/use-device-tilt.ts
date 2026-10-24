import { useEffect, useRef } from "react";
import type { MotionValue } from "motion/react";

const RANGE_DEG = 20;
const BASELINE_DRIFT = 0.01;

type IOSDeviceOrientationEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<string>;
};

function toScreenAxes(beta: number, gamma: number): { x: number; y: number } {
  const angle = window.screen.orientation?.angle ?? 0;
  switch (angle) {
    case 90:
      return { x: gamma, y: -beta };
    case 180:
      return { x: -beta, y: -gamma };
    case 270:
      return { x: -gamma, y: beta };
    default:
      return { x: beta, y: gamma };
  }
}

export function useDeviceTilt({
  tiltX,
  tiltY,
  maxTilt,
  isEnabled,
}: {
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  maxTilt: number;
  isEnabled: () => boolean;
}) {
  const isEnabledRef = useRef(isEnabled);
  useEffect(() => {
    isEnabledRef.current = isEnabled;
  });

  useEffect(() => {
    if (!("DeviceOrientationEvent" in window)) return;
    const orientationEvent =
      DeviceOrientationEvent as IOSDeviceOrientationEvent;
    if (typeof orientationEvent.requestPermission === "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let baseX: number | null = null;
    let baseY = 0;

    const toTilt = (offset: number) =>
      Math.max(-1, Math.min(1, offset / RANGE_DEG)) * maxTilt;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      const { x, y } = toScreenAxes(e.beta, e.gamma);

      if (baseX === null) {
        baseX = x;
        baseY = y;
        return;
      }
      baseX += (x - baseX) * BASELINE_DRIFT;
      baseY += (y - baseY) * BASELINE_DRIFT;

      if (!isEnabledRef.current()) return;
      tiltX.set(toTilt(x - baseX));
      tiltY.set(toTilt(y - baseY));
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [tiltX, tiltY, maxTilt]);
}
