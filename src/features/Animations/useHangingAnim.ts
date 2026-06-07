import { useMemo } from "react";
import { createHangingConfig } from "./hangingAnimationConfig";

export function useHangingAnimation(seed: number) {
  return useMemo(() => createHangingConfig(seed), [seed]);
}
