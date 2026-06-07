import LeftArt from "./components/left.tsx";
import RightArt from "./components/right.tsx";
export default function Arts() {
  return (
    <div className="relative z-10 flex h-dvh w-full justify-between p-1 md:px-16 md:py-12">
      {/* Left  */}
      <LeftArt seed={99} />
      {/* Right */}
      <section>
        <RightArt seed={91} />
      </section>
    </div>
  );
}
