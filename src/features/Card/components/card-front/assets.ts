import { config } from "@/config";
import { resolveLinkIcon } from "@/assets/types/linkImages";
import type { ResolvedLink } from "@/assets/types/config";
import { preloadImages } from "@/lib/preloadImage";
import { assets } from "@/assets/assets";

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
