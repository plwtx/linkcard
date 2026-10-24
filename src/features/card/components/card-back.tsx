export default function CardBack({ bgSrc }: { bgSrc?: string }) {
  return (
    <div
      style={{
        backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
        transform: "rotateY(180deg)",
      }}
      className="bg-blax pointer-events-none absolute inset-0 z-40 rounded-4xl border border-zinc-400 bg-cover bg-center shadow-md shadow-zinc-900 backface-hidden"
    />
  );
}
