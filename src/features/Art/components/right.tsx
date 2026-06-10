import Drawing from "@/assets/images/right-art.webp";
import Art from "./art";

interface Props {
  seed: number;
}

export default function RightArt({ seed }: Props) {
  return (
    <Art
      src={Drawing}
      alt="Right decorative drawing."
      seed={seed}
      from="bottom"
      containerClassName="z-0 flex h-dvh translate-y-12 items-center justify-center md:-translate-y-9"
      imgClassName="pointer-events-none h-auto w-auto touch-none select-none"
    />
  );
}
