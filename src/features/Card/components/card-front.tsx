import { QrCode } from "lucide-react";
import LINKS from "@/assets/json/testlinks.json";
import { LINK_IMAGES } from "@/assets/types/linkImages";
import type { Link } from "@/assets/types/links";
import FrontBG from "@/assets/private/front3.png";
import pfp from "@/assets/private/pfp.png";

const links = LINKS as Link[];

export default function CardFront() {
  return (
    <>
      {/* Profile card: */}
      <div
        style={{ backgroundImage: `url(${FrontBG})` }}
        className="absolute inset-0 flex flex-col items-center justify-between rounded-4xl bg-zinc-100 bg-cover bg-center py-6 text-white shadow-md shadow-zinc-900 backface-hidden"
      >
        {/* Button for QR code */}
        <QrCode size={32} className="outline-blax z-20" />
        {/* Profile picture & Username*/}
        <section className="z-20 flex w-full flex-col items-center justify-center gap-1">
          {/* Profile picture */}
          <div
            style={{ backgroundImage: `url(${pfp})` }}
            className="bg-blax h-35 w-35 rounded-full bg-cover bg-center shadow-md shadow-black"
          />
          {/* Username */}
          <h1 className="font-inter font-medium">
            <span className="pr-1 font-light italic">@</span>bygretya
          </h1>
        </section>
        {/* Grid */}
        <section className="z-20 flex h-fit w-full items-center justify-center pt-3">
          {/* Links */}
          <section className="grid grid-flow-row grid-cols-4 gap-4">
            {/* Instagram */}
            {links.map((link) => (
              <a href={link.url} key={link.id} className="space-y-1">
                <div className="bg-blax corner-squircle size-16 cursor-pointer overflow-clip rounded-full shadow-sm shadow-black transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <img
                    className="h-full w-full scale-103"
                    src={LINK_IMAGES[link.icon]}
                    alt={link.name}
                  />
                </div>
                <h3 className="font-inter text-center text-xs font-medium">
                  {link.name}
                </h3>
              </a>
            ))}
          </section>
        </section>
        {/* BG image */}
        {/* <img className="absolute z-0 h-full w-full" src={FrontBG} alt="" /> */}
      </div>
    </>
  );
}
