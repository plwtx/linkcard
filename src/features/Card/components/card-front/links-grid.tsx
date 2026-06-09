import type { Link } from "@/assets/types/links";
import { LinkTile } from "./link-tile";
import { LinkLaunchOverlay } from "./link-launch-overlay";
import { useLinkLaunch } from "./useLinkLaunch";

export function LinksGrid({ links }: { links: Link[] }) {
  const { launch, startLaunch } = useLinkLaunch();

  return (
    <section className="z-20 flex h-fit w-full items-center justify-center pt-3">
      <section className="3xs:gap-4 2xs:grid-cols-4 grid grid-flow-row grid-cols-3 gap-3">
        {links.map((link) => (
          <LinkTile
            key={link.id}
            link={link}
            onLaunch={startLaunch}
            disabled={launch !== null}
          />
        ))}
      </section>
      {launch && <LinkLaunchOverlay launch={launch} />}
    </section>
  );
}
