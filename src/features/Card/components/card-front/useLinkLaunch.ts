import { useEffect, useRef, useState } from "react";
import type { Link } from "@/assets/types/links";

export const LAUNCH_DURATION_MS = 600;

export type LaunchState = {
  link: Link;
  rect: DOMRect;
};

export function useLinkLaunch() {
  const [launch, setLaunch] = useState<LaunchState | null>(null);
  const timer = useRef<number | null>(null);

  const startLaunch = (link: Link, rect: DOMRect) => {
    if (timer.current !== null) return;
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
