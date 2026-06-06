import LeftDrawing from "./components/left.tsx";
import RightDrawing from "./components/right.tsx";

export default function Arts() {
  return (
    <div className="relative z-0 flex h-dvh w-full items-center justify-between p-6">
      {/* Left  */}
      <LeftDrawing />
      {/* Right */}
      <section>
        <RightDrawing />
      </section>
    </div>
  );
}
