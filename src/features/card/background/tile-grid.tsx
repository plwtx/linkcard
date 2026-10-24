import { assets } from "@/config/assets";
import { TILE_PX, STEP_S, FLIP_DURATION_S } from "./config";

export function TileGrid({ cols, rows }: { cols: number; rows: number }) {
  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push(
        <div
          key={`${row}-${col}`}
          className="bg-tile-cell"
          style={{ animationDelay: `${(row + col) * STEP_S}s` }}
        />,
      );
    }
  }

  return (
    <div
      aria-hidden
      className="bg-brown-900 pointer-events-none absolute inset-0 z-0 grid overflow-hidden"
      style={
        {
          gridTemplateColumns: `repeat(${cols}, ${TILE_PX}px)`,
          gridAutoRows: `${TILE_PX}px`,
          perspective: "700px",
          "--tile-src": `url(${assets.background.tile})`,
          "--tile-px": `${TILE_PX}px`,
          "--tile-dur": `${FLIP_DURATION_S}s`,
        } as React.CSSProperties
      }
    >
      {cells}
    </div>
  );
}
