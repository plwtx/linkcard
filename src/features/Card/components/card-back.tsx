import BackBG from "@/assets/private/back2.png";

export default function CardBack() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackBG})`,
        transform: "rotateY(180deg)",
      }}
      className="absolute inset-0 z-40 rounded-4xl bg-cover bg-center shadow-md shadow-zinc-900 backface-hidden"
    />
  );
}
