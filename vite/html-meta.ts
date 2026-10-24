import type { HtmlTagDescriptor, Plugin } from "vite";
import type { AssetsConfig, FaviconLink } from "../src/types/assets";
import rawAssets from "../src/assets/json/assets_config.json";
import { config, SITE_NAME } from "../src/config/site";

const { favicon } = rawAssets as AssetsConfig;

const { username, accentColor } = config;
const description = config.description ?? "";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function meta(attrs: Record<string, string>): HtmlTagDescriptor {
  return { tag: "meta", attrs, injectTo: "head" };
}

function link(attrs: FaviconLink): HtmlTagDescriptor {
  return { tag: "link", attrs: { ...attrs }, injectTo: "head" };
}

export function htmlMetaPlugin(): Plugin {
  const title = username ? `${SITE_NAME} - @${username}` : SITE_NAME;

  const faviconTags: HtmlTagDescriptor[] = favicon.links.map(link);

  const metaTags: HtmlTagDescriptor[] = [
    // General discovery:
    meta({ name: "description", content: description }),
    meta({ name: "application-name", content: SITE_NAME }),
    meta({ name: "author", content: username }),
    // Accent color:
    meta({ name: "theme-color", content: accentColor }),
    // Mobile / iOS add-to-home-screen:
    meta({ name: "mobile-web-app-capable", content: "yes" }),
    meta({ name: "apple-mobile-web-app-capable", content: "yes" }),
    meta({ name: "apple-mobile-web-app-title", content: `@${username}` }),
    meta({ name: "apple-mobile-web-app-status-bar-style", content: "default" }),
    // Open Graph (link previews: iMessage, WhatsApp, Discord, Facebook, ...)
    meta({ property: "og:type", content: "profile" }),
    meta({ property: "og:site_name", content: SITE_NAME }),
    meta({ property: "og:title", content: title }),
    meta({ property: "og:description", content: description }),
    // Twitter cards:
    meta({ name: "twitter:card", content: "summary" }),
    meta({ name: "twitter:title", content: title }),
    meta({ name: "twitter:description", content: description }),
  ].filter((tag) => tag.attrs?.content);

  const tags = [...faviconTags, ...metaTags];

  return {
    name: "linkcard:html-meta",
    transformIndexHtml(html) {
      return {
        html: html.replace(
          /<title>[\s\S]*?<\/title>/,
          `<title>${escapeHtml(title)}</title>`,
        ),
        tags,
      };
    },
  };
}
