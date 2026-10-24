import { QrCode } from "lucide-react";

export function QrButton({ onPress }: { onPress: () => void }) {
  return (
    <button
      type="button"
      data-no-flip
      onClick={onPress}
      aria-label="Show QR code"
      className="z-20 cursor-pointer"
    >
      <QrCode
        size={32}
        className="outline-blax scale-90 rotate-45 rounded-md border border-zinc-300 transition-all duration-300 ease-in hover:scale-125 hover:rotate-0"
      />
    </button>
  );
}
