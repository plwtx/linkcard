import BackBG from "@/assets/private/back2.png";

export default function CardBack() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackBG})`,
        transform: "rotateY(180deg)",
      }}
      className="pointer-events-none absolute inset-0 z-40 rounded-4xl border border-zinc-400 bg-cover bg-center shadow-md shadow-zinc-900 backface-hidden"
    />
  );
}
