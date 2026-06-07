import BackBG from "@/assets/private/front2.png";

export default function CardQr({ isActive }: { isActive: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${BackBG})`,
      }}
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center overflow-clip rounded-4xl border border-zinc-600 bg-zinc-100 bg-cover bg-center shadow-lg shadow-zinc-900 backface-hidden ${isActive ? "" : "pointer-events-none"}`}
    >
      <div
        data-no-flip
        className="z-30 size-56 rounded-xl border border-pink-200 bg-zinc-300 shadow-md shadow-black"
      />
      <p className="font-IBM-mono absolute bottom-2 z-30 font-light tracking-wide text-zinc-100">
        @bygretya
      </p>
      {/* Gradient */}
      <div className="absolute -bottom-64 left-1/2 z-0 h-100 w-100 -translate-x-1/2 rounded-full bg-zinc-700 mix-blend-multiply blur-3xl" />
    </div>
  );
}
