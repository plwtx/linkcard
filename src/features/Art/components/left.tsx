import Drawing from "@/assets/private/ART1.png";
import Art from "./art";

interface Props {
  seed: number;
}

export default function LeftArt({ seed }: Props) {
  return (
    <Art
      src={Drawing}
      alt="Left decorative drawing."
      seed={seed}
      from="top"
      containerClassName="z-0 flex h-dvh -translate-y-12 items-center justify-center"
      imgClassName="pointer-events-none h-auto w-auto touch-none select-none"
    />
  );
}
