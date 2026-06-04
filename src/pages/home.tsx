import Card from "@/features/Card";

export default function Home() {
  return (
    <>
      {/* Link page where the card will be  */}
      <div className="flex h-dvh w-full flex-col items-center justify-center bg-zinc-400/45">
        <Card />
      </div>
    </>
  );
}
