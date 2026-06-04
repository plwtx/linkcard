import { QrCode } from "lucide-react";

export default function CardFront() {
  return (
    <>
      {/* Profile card: */}
      <div className="w-87.5 h-123.75 bg-zinc-300 relative rounded-xl flex flex-col justify-center items-center shadow-sm shadow-zinc-800">
        {/* Button for QR code */}
        <div className="size-12 top-5 absolute bg-blax rounded-full flex justify-center items-center text-white">
          <QrCode />
        </div>
        {/* Profile picture & Username*/}
        <section className="flex w-full items-center gap-3 justify-center flex-col">
          {/* Profile picture */}
          <div className="w-35 h-35 rounded-full bg-blax" />
          {/* Username */}
          <h1 className="font-inter ">@bygretya</h1>
        </section>
        {/* Grid */}
        <section className="flex justify-center items-center w-full h-fit py-3">
          {/* Links */}
          <section className="grid grid-flow-row grid-cols-4 gap-3">
            {/* Instagram */}
            <div className="space-y-1">
              <div className="size-16 rounded-2xl bg-blax " />
              <h3 className="font-inter text-xs text-center">Instagram</h3>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
