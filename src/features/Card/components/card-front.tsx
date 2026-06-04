import { QrCode } from "lucide-react";

export default function CardFront() {
  return (
    <>
      {/* Profile card: */}
      <div className="relative flex h-123.75 w-87.5 flex-col items-center justify-center rounded-xl bg-zinc-100 shadow-sm shadow-zinc-900">
        {/* Button for QR code */}
        <div className="bg-blax absolute top-5 flex size-12 items-center justify-center rounded-full text-white">
          <QrCode />
        </div>
        {/* Profile picture & Username*/}
        <section className="flex w-full flex-col items-center justify-center gap-3">
          {/* Profile picture */}
          <div className="bg-blax h-35 w-35 rounded-full" />
          {/* Username */}
          <h1 className="font-inter">@bygretya</h1>
        </section>
        {/* Grid */}
        <section className="flex h-fit w-full items-center justify-center py-3">
          {/* Links */}
          <section className="grid grid-flow-row grid-cols-4 gap-3">
            {/* Instagram */}
            <div className="space-y-1">
              <div className="bg-blax corner-squircle size-16 rounded-full shadow-sm shadow-black" />
              <h3 className="font-inter text-center text-xs">Instagram</h3>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
