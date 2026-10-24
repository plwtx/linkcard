import { assets } from "@/config/assets";
import ArtPiece from "./art-piece";

const IMG_CLASS = "pointer-events-none h-auto w-auto touch-none select-none";

export default function Art() {
  return (
    <div className="relative z-10 flex h-dvh w-full justify-between p-1 md:px-16 md:py-12">
      <ArtPiece
        src={assets.art.left}
        alt="Left decorative drawing."
        seed={99}
        from="top"
        containerClassName="z-0 flex h-dvh -translate-y-12 items-center justify-center"
        imgClassName={IMG_CLASS}
      />
      <section>
        <ArtPiece
          src={assets.art.right}
          alt="Right decorative drawing."
          seed={91}
          from="bottom"
          containerClassName="z-0 flex h-dvh translate-y-12 items-center justify-center md:-translate-y-9"
          imgClassName={IMG_CLASS}
        />
      </section>
    </div>
  );
}
