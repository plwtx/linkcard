import { config } from "@/config";
import { resolveLinkIcon } from "@/assets/types/linkImages";
import type { ResolvedLink } from "@/assets/types/config";
import { preloadImages } from "@/lib/preloadImage";
import FrontBG from "@/assets/images/card-front.webp";
import pfp from "@/assets/images/profile-picture.webp";

export { FrontBG };

export const links: ResolvedLink[] = config.links.map((link) => ({
  label: link.label,
  url: link.url,
  iconSrc: resolveLinkIcon(link.label, config.linkStyle),
}));

export const frontAssetsReady = preloadImages([
  FrontBG,
  pfp,
  ...links.map((link) => link.iconSrc),
]);
