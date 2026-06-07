import { LINK_IMAGES } from "@/assets/types/linkImages";
import type { Link } from "@/assets/types/links";

export function LinkTile({ link }: { link: Link }) {
  return (
    <a
      href={link.url}
      className="flex flex-col items-center justify-center space-y-1"
    >
      <div className="bg-blax corner-squircle 3xs:size-16 cursor-pointer overflow-clip rounded-full shadow-md shadow-black transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
        <img
          className="pointer-events-none h-full w-full scale-103 touch-none select-none"
          src={LINK_IMAGES[link.icon]}
          alt={link.name}
        />
      </div>
      <h3 className="font-inter text-center text-xs font-medium">{link.name}</h3>
    </a>
  );
}
