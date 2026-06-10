// Default ver.
import instagram from "@/assets/icons/default/instagram.webp";
import bluesky from "@/assets/icons/default/bluesky.webp";
import kofi from "@/assets/icons/default/ko-fi.webp";
import tiktok from "@/assets/icons/default/tiktok.webp";
import vgen from "@/assets/icons/default/vgen.webp";
import youtube from "@/assets/icons/default/youtube.webp";

// 1 bit ver.
import instagram_1bit from "@/assets/icons/1bit/instagram.webp";
import bluesky_1bit from "@/assets/icons/1bit/bluesky.webp";
import kofi_1bit from "@/assets/icons/1bit/ko-fi.webp";
import tiktok_1bit from "@/assets/icons/1bit/tiktok.webp";
import vgen_1bit from "@/assets/icons/1bit/vgen.webp";
import youtube_1bit from "@/assets/icons/1bit/youtube.webp";

export const LINK_IMAGES: Record<string, string> = {
  // Default ver,
  "instagram:default": instagram,
  "bluesky:default": bluesky,
  "ko-fi:default": kofi,
  "tiktok:default": tiktok,
  "vgen:default": vgen,
  "youtube:default": youtube,
  // 1 bit ver,
  "instagram:1bit": instagram_1bit,
  "bluesky:1bit": bluesky_1bit,
  "ko-fi:1bit": kofi_1bit,
  "tiktok:1bit": tiktok_1bit,
  "vgen:1bit": vgen_1bit,
  "youtube:1bit": youtube_1bit,
};

export function resolveLinkIcon(
  label: string | undefined,
  style: string,
): string | undefined {
  if (!label) return undefined;
  return LINK_IMAGES[`${label.toLowerCase()}:${style}`];
}
