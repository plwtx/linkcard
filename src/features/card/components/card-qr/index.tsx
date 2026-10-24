import { assets } from "@/config/assets";
import { DecoCircle } from "./deco-circle";
import { QrPanel } from "./qr-panel";
import { ScanHint } from "./scan-hint";
import { RippleRings } from "./ripple-rings";

export default function CardQr({ isActive }: { isActive: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${assets.card.qr})`,
      }}
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center overflow-clip rounded-4xl border border-white bg-zinc-100 bg-cover bg-center shadow-lg shadow-black backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      <DecoCircle isActive={isActive} />
      <QrPanel isActive={isActive} />
      <ScanHint isActive={isActive} />
      {/* Gradient */}
      <div className="bg-blax absolute -bottom-64 left-1/2 z-0 h-100 w-100 -translate-x-1/2 rounded-full mix-blend-multiply blur-3xl" />
      <RippleRings isActive={isActive} />
    </div>
  );
}
