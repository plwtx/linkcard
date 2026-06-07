import LINKS from "@/assets/json/testlinks.json";
import type { Link } from "@/assets/types/links";
import FrontBG from "@/assets/private/front3.png";
import { QrButton } from "./qr-button";
import { Profile } from "./profile";
import { LinksGrid } from "./links-grid";
import { CardFrontSkeleton } from "./skeleton";
import { useMinLoading } from "./useMinLoading";

const links = LINKS as Link[];

export default function CardFront({
  isActive,
  onQrPress,
}: {
  isActive: boolean;
  onQrPress: () => void;
}) {
  const loading = useMinLoading(1000);

  return (
    <div
      style={{ backgroundImage: `url(${FrontBG})` }}
      className={`absolute inset-0 flex flex-col items-center justify-between rounded-4xl border border-zinc-400 bg-zinc-100 bg-cover bg-center px-3 py-6 text-white shadow-md shadow-zinc-900 backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      {loading ? (
        <CardFrontSkeleton tileCount={links.length} />
      ) : (
        <>
          <QrButton onPress={onQrPress} />
          <Profile username="bygretya" />
          <LinksGrid links={links} />
        </>
      )}
    </div>
  );
}
