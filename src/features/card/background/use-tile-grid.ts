import { useState } from "react";
import { TILE_PX } from "./config";

export function useTileGrid(tilePx: number = TILE_PX) {
  const [grid] = useState(() => ({
    cols: Math.ceil(window.innerWidth / tilePx) + 1,
    rows: Math.ceil(window.innerHeight / tilePx) + 1,
  }));

  return grid;
}
