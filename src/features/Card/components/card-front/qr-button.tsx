import { QrCode } from "lucide-react";

export function QrButton() {
  return (
    <QrCode
      size={32}
      className="outline-blax z-20 scale-90 rotate-45 cursor-pointer rounded-md border border-zinc-300 transition-all duration-300 ease-in hover:scale-125 hover:rotate-0"
    />
  );
}
