import type { Plugin } from "vite";
import type { AssetsConfig } from "../src/types/assets";
import rawAssets from "../src/assets/json/assets_config.json";
import { config, SITE_NAME } from "../src/config/site";

const { favicon } = rawAssets as AssetsConfig;

const BACKGROUND_COLOR = "#252525"; // blax

const MANIFEST_FILE = "site.webmanifest";
const MANIFEST_PATH = `/${MANIFEST_FILE}`;

function buildManifest(): string {
  return JSON.stringify(
    {
      name: SITE_NAME,
      short_name: SITE_NAME,
      icons: favicon.manifestIcons,
      theme_color: config.accentColor,
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
