interface BlurBlobProps {
  color: string;
  className?: string;
  duration?: number;
}

export default function BlurBlob({
  color,
  className = "-top-50 -right-50 h-100 w-100",
  duration = 6,
}: BlurBlobProps) {
  return (
    <div
      aria-hidden
      className={`blur-blob pointer-events-none absolute z-30 mix-blend-multiply ${className}`}
      style={
        {
          "--blob-duration": `${duration}s`,
          background: `radial-gradient(55% 45% at 50% 50%, ${color} 0%, color-mix(in srgb, ${color} 55%, transparent) 38%, transparent 72%)`,
        } as React.CSSProperties
      }
    />
  );
}
