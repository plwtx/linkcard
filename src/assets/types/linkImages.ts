import instagram from "@/assets/icons/default/instagram.webp";
import bluesky from "@/assets/icons/default/bluesky.webp";
import kofi from "@/assets/icons/default/ko-fi.webp";
import tiktok from "@/assets/icons/default/tiktok.webp";
import vgen from "@/assets/icons/default/vgen.webp";
import youtube from "@/assets/icons/default/youtube.webp";

export const LINK_IMAGES: Record<string, string> = {
  "instagram:default": instagram,
  "bluesky:default": bluesky,
  "ko-fi:default": kofi,
  "tiktok:default": tiktok,
  "vgen:default": vgen,
  "youtube:default": youtube,
};

export function resolveLinkIcon(
  label: string | undefined,
  style: string,
): string | undefined {
  if (!label) return undefined;
  return LINK_IMAGES[`${label.toLowerCase()}:${style}`];
}
