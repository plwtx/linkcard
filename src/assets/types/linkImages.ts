import instagram from "@/assets/icons/default/instagram.jpg";
import bluesky from "@/assets/icons/default/bluesky.jpg";
import kofi from "@/assets/icons/default/ko-fi.jpg";
import tiktok from "@/assets/icons/default/tiktok.jpg";
import vgen from "@/assets/icons/default/vgen.jpg";
import youtube from "@/assets/icons/default/youtube.jpg";

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
