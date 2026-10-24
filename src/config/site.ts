// Relative imports only: this module is also consumed by the build-time
// plugins in vite/, where the "@" alias is not available.
import rawConfig from "../assets/json/config.json";
import type { SiteConfig } from "../types/config";

export const SITE_NAME = ";linkcard";
export const DEFAULT_ACCENT = "#4c1d95";

const parsed = rawConfig as Partial<SiteConfig>;

export const config: SiteConfig = {
  username: parsed.username ?? "",
  description: parsed.description,
  accentColor: parsed.accentColor ?? DEFAULT_ACCENT,
  linkStyle: parsed.linkStyle ?? "default",
  website: parsed.website,
  links: parsed.links ?? [],
};
