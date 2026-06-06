import ART from "@/assets/private/4.png";

export default function RightArt() {
  return (
    <div className="z-10 flex h-dvh items-center justify-center self-end py-6">
      <img
        className="pointer-events-none h-full w-auto touch-none select-none"
        src={ART}
        alt="Right decorative drawing."
      />
    </div>
  );
}
