import { useEffect, useRef, useState } from "react";
import type { ResolvedLink } from "@/types/config";
import { haptics } from "@/lib/haptics";

export const LAUNCH_DURATION_MS = 600;

export type LaunchState = {
  link: ResolvedLink;
  rect: DOMRect;
};

export function useLinkLaunch() {
  const [launch, setLaunch] = useState<LaunchState | null>(null);
  const timer = useRef<number | null>(null);

  const startLaunch = (link: ResolvedLink, rect: DOMRect) => {
    if (timer.current !== null) return;
    haptics.long();
    setLaunch({ link, rect });
    timer.current = window.setTimeout(() => {
      window.location.href = link.url;
    }, LAUNCH_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (timer.current !== null) clearTimeout(timer.current);
    };
  }, []);

  return { launch, startLaunch };
}
