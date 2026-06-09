import { useRef } from "react";
import { LINK_IMAGES } from "@/assets/types/linkImages";
import type { Link } from "@/assets/types/links";

export function LinkTile({
  link,
  onLaunch,
  disabled,
}: {
  link: Link;
  onLaunch: (link: Link, rect: DOMRect) => void;
  disabled: boolean;
}) {
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    e.preventDefault();
    if (disabled || !iconRef.current) return;
    onLaunch(link, iconRef.current.getBoundingClientRect());
  };

  return (
    <a
      href={link.url}
      onClick={handleClick}
      className="flex flex-col items-center justify-center space-y-1"
    >
      <div
        ref={iconRef}
        className="bg-blax 3xs:size-16 cursor-pointer overflow-clip rounded-[18px] shadow-md shadow-black transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        <img
          className="pointer-events-none h-full w-full scale-103 touch-none select-none"
          src={LINK_IMAGES[link.icon]}
          alt={link.name}
        />
      </div>
      <h3 className="font-inter text-center text-xs font-medium">
        {link.name}
      </h3>
    </a>
  );
}
