import { useEffect, useState } from "react";
import { assets } from "@/config/assets";
import { delay } from "@/lib/delay";
import { preloadImage } from "@/lib/preload-image";
import { frontAssetsReady } from "../components/card-front/assets";

const WARM_FALLBACK_MS = 4000;

/**
 * Preloads the back-face backgrounds once the front is ready (or after a
 * fallback timeout), so flipping does not load an unloaded image.
 */
export function useBackAssetsWarmup(): string | undefined {
  const [backBgSrc, setBackBgSrc] = useState<string>();

  useEffect(() => {
    let active = true;
    Promise.race([frontAssetsReady, delay(WARM_FALLBACK_MS)])
      .then(() => preloadImage(assets.card.back))
      .then(() => {
        if (active) setBackBgSrc(assets.card.back);
        return preloadImage(assets.card.qr);
      });
    return () => {
      active = false;
    };
  }, []);

  return backBgSrc;
}
