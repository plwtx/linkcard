import { config } from "@/config/site";
import { assets } from "@/config/assets";
import { resolveLinkIcon } from "@/config/link-icons";
import { preloadImages } from "@/lib/preload-image";
import type { ResolvedLink } from "@/types/config";

export const FrontBG = assets.card.front;

export const links: ResolvedLink[] = config.links.map((link) => ({
  label: link.label,
  url: link.url,
  iconSrc: resolveLinkIcon(link.label, config.linkStyle),
}));

export const frontAssetsReady = preloadImages([
  FrontBG,
  assets.profilePicture,
  ...links.map((link) => link.iconSrc),
]);
