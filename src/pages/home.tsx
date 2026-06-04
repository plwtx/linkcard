import Card from "@/features/Card";

export default function Home() {
  return (
    <>
      {/* Link page where the card will be  */}
      <div className="w-full bg-zinc-900 h-dvh flex justify-center items-center flex-col">
        <Card />
      </div>
    </>
  );
}
