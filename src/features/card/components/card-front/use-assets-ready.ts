import { useEffect, useState } from "react";
import { delay } from "@/lib/delay";

const MIN_SKELETON_MS = 250;
const MAX_WAIT_MS = 4000;

export function useAssetsReady(ready: Promise<unknown>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    Promise.race([
      Promise.all([ready, delay(MIN_SKELETON_MS)]),
      delay(MAX_WAIT_MS),
    ]).then(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [ready]);

  return loading;
}
