import { useRef } from "react";
import {
  animate,
  useMotionValue,
  type AnimationPlaybackControls,
} from "motion/react";
import { haptics } from "@/lib/haptics";

const FLIP_SPRING = { type: "spring" as const, stiffness: 90, damping: 18 };
const HALF_TURN = 180;
const TAP_MAX_DRIFT = 16;
const FLING_PROJECTION = 0.18;

export type FlipSide = -1 | 1;

type Gesture = {
  pointerId: number;
  startX: number;
  startAngle: number;
  width: number;
  dragging: boolean;
};

export function useCardFlip(interceptTap?: (side: FlipSide) => boolean) {
  const rotation = useMotionValue(0);
  const restAngle = useRef(0);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const suppressClick = useRef(false);

  const settleTo = (angle: number, velocity = 0) => {
    if (angle !== restAngle.current) haptics.quick();
    restAngle.current = angle;
    animation.current?.stop();
    animation.current = animate(rotation, angle, { ...FLIP_SPRING, velocity });
  };

  const flip = (side: FlipSide) =>
    settleTo(restAngle.current + side * HALF_TURN);

  const snapToNearestFace = () => {
    const velocity = rotation.getVelocity();
    const projected = rotation.get() + velocity * FLING_PROJECTION;
    settleTo(Math.round(projected / HALF_TURN) * HALF_TURN, velocity);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary) return;
    animation.current?.stop();
    suppressClick.current = false;
    gesture.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startAngle: rotation.get(),
      width: e.currentTarget.offsetWidth,
      dragging: false,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || e.pointerId !== g.pointerId) return;
    const dx = e.clientX - g.startX;
    if (!g.dragging) {
      if (Math.abs(dx) < TAP_MAX_DRIFT) return;
      g.dragging = true;
      suppressClick.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    rotation.set(g.startAngle + (dx / g.width) * HALF_TURN);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || e.pointerId !== g.pointerId) return;
    gesture.current = null;

    if (g.dragging) {
      snapToNearestFace();
      return;
    }

    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("[data-no-flip]")) {
      settleTo(restAngle.current);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const side: FlipSide = e.clientX < rect.left + rect.width / 2 ? -1 : 1;
    if (interceptTap?.(side)) {
      settleTo(restAngle.current);
      return;
    }
    flip(side);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || e.pointerId !== g.pointerId) return;
    gesture.current = null;
    if (g.dragging) snapToNearestFace();
    else settleTo(restAngle.current);
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  const isDragging = () => gesture.current?.dragging ?? false;

  return {
    rotation,
    isDragging,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      onClickCapture: handleClickCapture,
    },
  };
}
