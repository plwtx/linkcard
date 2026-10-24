import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { TileGrid } from "./tile-grid";
import { useTileGrid } from "./use-tile-grid";
import { STEP_S, FLIP_DURATION_S, TAIL_BUFFER_S } from "./config";

export default function BackgroundTiles() {
  const reduceMotion = useReducedMotion();
  const { cols, rows } = useTileGrid();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const maxDelay = (cols - 1 + (rows - 1)) * STEP_S;
    const totalMs = (maxDelay + FLIP_DURATION_S + TAIL_BUFFER_S) * 1000;
    const id = window.setTimeout(() => setDone(true), totalMs);
    return () => window.clearTimeout(id);
  }, [cols, rows, reduceMotion]);

  if (reduceMotion || done) return null;

  return <TileGrid cols={cols} rows={rows} />;
}
