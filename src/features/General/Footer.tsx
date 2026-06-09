import { ChevronDown } from "lucide-react";
import BlurBlob from "./BlurBlob";

export default function Description() {
  return (
    <>
      <section className="font-IBM-mono xs:bottom-3 absolute bottom-0 flex flex-col items-center justify-center font-light text-white">
        <p className="z-40 w-100 rounded-2xl px-9 py-3 text-center text-xs">
          For more details you can visit my portfolio website on{" "}
          <a href="http://0w0.lt/" className="font-medium underline">
            0w0.lt
          </a>{" "}
          !
        </p>
        <ChevronDown className="xs:visible xs:relative invisible absolute z-40 size-3 animate-bounce" />
        <BlurBlob className="mt-16 h-100 w-120 bg-violet-900" />
      </section>
    </>
  );
}
