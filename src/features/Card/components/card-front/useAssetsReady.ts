import { useEffect, useState } from "react";

const MIN_SKELETON_MS = 250;
const MAX_WAIT_MS = 4000;

export function useAssetsReady(ready: Promise<unknown>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    Promise.race([
      Promise.all([ready, wait(MIN_SKELETON_MS)]),
      wait(MAX_WAIT_MS),
    ]).then(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [ready]);

  return loading;
}
