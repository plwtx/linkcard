import rawConfig from "@/assets/json/config.json";
import type { SiteConfig } from "@/assets/types/config";

const parsed = rawConfig as Partial<SiteConfig>;

export const config: SiteConfig = {
  username: parsed.username ?? "",
  description: parsed.description,
  accentColor: parsed.accentColor ?? "#4c1d95",
  linkStyle: parsed.linkStyle ?? "default",
  website: parsed.website,
  links: parsed.links ?? [],
};
