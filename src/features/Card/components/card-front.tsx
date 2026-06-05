import { QrCode } from "lucide-react";
import LINKS from "@/assets/json/testlinks.json";
import { LINK_IMAGES } from "@/assets/types/linkImages";
import type { Link } from "@/assets/types/links";

const links = LINKS as Link[];

export default function CardFront() {
  return (
    <>
      {/* Profile card: */}
      <div className="relative flex h-123.75 w-87.5 flex-col items-center justify-between rounded-4xl bg-zinc-100 py-6 shadow-md shadow-zinc-900">
        {/* Button for QR code */}
        <QrCode size={32} className="outline-blax" />
        {/* Profile picture & Username*/}
        <section className="flex w-full flex-col items-center justify-center gap-1">
          {/* Profile picture */}
          <div className="bg-blax h-35 w-35 rounded-full" />
          {/* Username */}
          <h1 className="font-inter font-medium">
            <span className="pr-1 font-light italic">@</span>bygretya
          </h1>
        </section>
        {/* Grid */}
        <section className="flex h-fit w-full items-center justify-center pt-3">
          {/* Links */}
          <section className="grid grid-flow-row grid-cols-4 gap-4">
            {/* Instagram */}
            {links.map((link) => (
              <a href={link.url} key={link.id} className="space-y-1">
                <div className="bg-blax corner-squircle size-16 cursor-pointer overflow-clip rounded-full shadow-sm shadow-black transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <img
                    className="scale-103"
                    src={LINK_IMAGES[link.icon]}
                    alt={link.name}
                  />
                </div>
                <h3 className="font-inter text-center text-xs">{link.name}</h3>
              </a>
            ))}
          </section>
        </section>
      </div>
    </>
  );
}
