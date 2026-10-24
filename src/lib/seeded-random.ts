/** Deterministic pseudo-random number [0, 1) from a seed + offset */
export function seededRandom(seed: number, offset = 0): number {
  const x = Math.sin(seed + offset) * 10000;
  return x - Math.floor(x);
}
