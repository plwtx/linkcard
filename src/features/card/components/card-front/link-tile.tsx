import { useRef } from "react";
import { Link as LinkIcon } from "lucide-react";
import type { ResolvedLink } from "@/types/config";

export function LinkTile({
  link,
  onLaunch,
  disabled,
}: {
  link: ResolvedLink;
  onLaunch: (link: ResolvedLink, rect: DOMRect) => void;
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
      className="3xs:p-3 group z-99 flex flex-col items-center justify-center space-y-1 p-1"
    >
      <div
        ref={iconRef}
        className="bg-blax 3xs:size-16 flex cursor-pointer items-center justify-center overflow-clip rounded-[18px] shadow-md shadow-black transition-all duration-300 ease-in-out group-hover:scale-105 group-active:scale-95"
      >
        {link.iconSrc ? (
          <img
            className="pointer-events-none h-full w-full scale-103 touch-none select-none"
            src={link.iconSrc}
            alt={link.label}
          />
        ) : (
          <LinkIcon className="size-7 text-white" aria-hidden />
        )}
      </div>
      <h3 className="font-inter text-center text-xs font-medium">
        {link.label}
      </h3>
    </a>
  );
}
