import { QRCode } from "react-qr-code";
import BackBG from "@/assets/private/front2.png";

const QR_VALUE = "http://0w0.lt/";

export default function CardQr({ isActive }: { isActive: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${BackBG})`,
      }}
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center overflow-clip rounded-4xl border border-white bg-zinc-100 bg-cover bg-center shadow-lg shadow-black backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      {/* Decoration */}
      <div className="relative flex size-16 -translate-y-2 items-center justify-center overflow-clip rounded-full border border-white">
        <div className="z-0 size-9 rounded-full bg-white" />

        <div className="bg-blax absolute top-1/2 left-1/2 z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />

        {/* Pings */}
        <div className="absolute top-1/2 left-1/2 z-30 size-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/45" />
        <div className="absolute top-1/2 left-1/2 z-30 size-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/45 blur-3xl" />
      </div>
      {/* QR Section */}
      <div
        data-no-flip
        className="bg-blax z-30 flex size-50 rotate-45 items-center justify-center rounded-br-3xl border border-white p-2"
      >
        <QRCode
          value={QR_VALUE}
          size={256}
          viewBox="0 0 256 256"
          level="M"
          bgColor="transparent"
          fgColor="#ffffff"
          className="h-auto w-full max-w-full"
        />
      </div>
      <p className="font-IBM-mono absolute top-3 z-30 font-light tracking-wide text-violet-100">
        @bygretya
      </p>
      {/* Gradient */}
      <div className="bg-blax absolute -bottom-64 left-1/2 z-0 h-100 w-100 -translate-x-1/2 rounded-full mix-blend-multiply blur-3xl" />
      {/* Circles */}
      <div className="absolute -bottom-64 left-1/2 z-10 size-100 -translate-x-1/2 rounded-full border border-white" />
      <div className="absolute -bottom-32 left-1/2 z-10 size-50 -translate-x-1/2 rounded-full border border-white" />
      <div className="absolute -bottom-16 left-1/2 z-10 size-25 -translate-x-1/2 rounded-full border border-white" />
      <div className="absolute -bottom-8 left-1/2 z-10 size-13 -translate-x-1/2 rounded-full border border-white" />
      <div className="absolute -bottom-4 left-1/2 z-10 size-6 -translate-x-1/2 rounded-full bg-white" />
    </div>
  );
}
