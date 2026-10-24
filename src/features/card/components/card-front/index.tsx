import { AnimatePresence, motion } from "motion/react";
import { config } from "@/config/site";
import { FrontBG, frontAssetsReady, links } from "./assets";
import { QrButton } from "./qr-button";
import { Profile } from "./profile";
import { LinksGrid } from "./links-grid";
import { CardFrontSkeleton } from "./skeleton";
import { useAssetsReady } from "./use-assets-ready";

const LAYER =
  "absolute inset-0 flex flex-col items-center justify-between px-3 py-6";
const FADE = { duration: 0.5, ease: "easeInOut" as const };

export default function CardFront({
  isActive,
  onQrPress,
}: {
  isActive: boolean;
  onQrPress: () => void;
}) {
  const loading = useAssetsReady(frontAssetsReady);

  return (
    <div
      style={{ backgroundImage: `url(${FrontBG})` }}
      className={`absolute inset-0 rounded-4xl border border-zinc-400 bg-zinc-100 bg-cover bg-center text-white shadow-md shadow-zinc-900 backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      <AnimatePresence initial={false}>
        {loading ? (
          <motion.div
            key="skeleton"
            className={LAYER}
            exit={{ opacity: 0 }}
            transition={FADE}
          >
            <CardFrontSkeleton tileCount={links.length} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className={LAYER}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={FADE}
          >
            <QrButton onPress={onQrPress} />
            <Profile
              username={config.username}
              description={config.description}
            />
            <LinksGrid links={links} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
