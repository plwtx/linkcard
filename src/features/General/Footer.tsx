import { ChevronDown, Link } from "lucide-react";
import { config } from "@/config";
import BlurBlob from "./BlurBlob";

export default function Footer() {
  const { website, accentColor } = config;

  return (
    <section className="font-IBM-mono xs:bottom-3 absolute bottom-0 flex flex-col items-center justify-center text-zinc-100">
      {website && (
        <>
          <p className="z-40 flex max-w-60 flex-col items-center justify-center py-3 text-center text-xs">
            You can check more at:
            <a
              href={website.url}
              className="flex items-center gap-1 pt-1 text-center font-semibold tracking-widest underline"
            >
              <Link className="size-4 stroke-white" aria-hidden />
              {website.label}
            </a>
          </p>
        </>
      )}
      <ChevronDown className="xs:visible xs:relative invisible absolute z-40 size-4 animate-bounce xl:size-6" />
      <BlurBlob className="mt-16 h-100 w-120" color={accentColor} />
    </section>
  );
}
