const BLOCK = "animate-pulse bg-zinc-200/30";

export function CardFrontSkeleton({ tileCount }: { tileCount: number }) {
  return (
    <>
      {/* PLACEHODLER: QR button  */}
      <div className={`z-20 size-8 rounded-md ${BLOCK}`} />

      {/* PLACEHODLER: Profile  */}
      <section className="z-20 flex w-full flex-col items-center justify-center gap-2">
        <div className={`h-35 w-35 rounded-full ${BLOCK}`} />
        <div className={`h-4 w-24 rounded-full ${BLOCK}`} />
      </section>

      {/* PLACEHODLER: Links grid  */}
      <section className="z-20 flex h-fit w-full items-center justify-center pt-3">
        <section className="3xs:gap-4 2xs:grid-cols-4 grid grid-flow-row grid-cols-3 gap-3">
          {Array.from({ length: tileCount }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`corner-squircle 3xs:size-16 rounded-full ${BLOCK}`}
              />
              <div className={`h-2.5 w-10 rounded-full ${BLOCK}`} />
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
