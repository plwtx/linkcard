import type { Plugin } from "vite";
import type { SiteConfig } from "../src/assets/types/config";
import rawConfig from "../src/assets/json/config.json";

const parsed = rawConfig as Partial<SiteConfig>;

const SITE_NAME = ";linkcard";
const BACKGROUND_COLOR = "#252525"; // blax
const DEFAULT_ACCENT = "#4c1d95";

const MANIFEST_FILE = "site.webmanifest";
const MANIFEST_PATH = `/${MANIFEST_FILE}`;

function buildManifest(): string {
  const accentColor = parsed.accentColor ?? DEFAULT_ACCENT;

  return JSON.stringify(
    {
      name: SITE_NAME,
      short_name: SITE_NAME,
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: accentColor,
      background_color: BACKGROUND_COLOR,
      display: "standalone",
    },
    null,
    2,
  );
}

export function webmanifestPlugin(): Plugin {
  return {
    name: "linkcard:webmanifest",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split("?")[0] === MANIFEST_PATH) {
          res.setHeader("Content-Type", "application/manifest+json");
          res.end(buildManifest());
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: MANIFEST_FILE,
        source: buildManifest(),
      });
    },
  };
}
