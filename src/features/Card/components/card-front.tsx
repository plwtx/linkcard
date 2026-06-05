import { QrCode } from "lucide-react";
import LINKS from "@/assets/json/testlinks.json";
export type link = {
  id: number;
  name: string;
  url: string;
};

const links = LINKS as link[];

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
                <div className="bg-blax corner-squircle size-16 cursor-pointer rounded-full shadow-sm shadow-black transition-all duration-300 ease-in-out hover:scale-110" />
                <h3 className="font-inter text-center text-xs">{link.name}</h3>
              </a>
            ))}
          </section>
        </section>
      </div>
    </>
  );
}
