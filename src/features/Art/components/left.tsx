import ART from "@/assets/private/3.png";

export default function LeftArt() {
  return (
    <div className="z-0 flex h-dvh items-center justify-center self-start">
      <img
        className="pointer-events-none h-full w-auto touch-none select-none"
        src={ART}
        alt="Left decorative drawing."
      />
    </div>
  );
}
