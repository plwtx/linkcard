import rawAssets from "@/assets/json/assets_config.json";
import type { AssetsConfig } from "@/assets/types/assets";

const assetsConfig = rawAssets as AssetsConfig;

const IMAGE_MODULES = import.meta.glob<string>("@/assets/images/*.webp", {
  eager: true,
  import: "default",
});

const byFilename: Record<string, string> = Object.fromEntries(
  Object.entries(IMAGE_MODULES).map(([path, url]) => [
    path.split("/").pop() as string,
    url,
  ]),
);

function resolve(filename: string): string {
  const url = byFilename[filename];
  if (!url) {
    throw new Error(
      `[assets] "${filename}" is declared in assets_config.json but missing from src/assets/images/`,
    );
  }
  return url;
}

export const assets = {
  card: {
    front: resolve(assetsConfig.card.front),
    back: resolve(assetsConfig.card.back),
    qr: resolve(assetsConfig.card.qr),
  },
  profilePicture: resolve(assetsConfig.profilePicture),
  art: {
    left: resolve(assetsConfig.art.left),
    right: resolve(assetsConfig.art.right),
  },
  background: {
    tile: resolve(assetsConfig.background.tile),
  },
} as const;
