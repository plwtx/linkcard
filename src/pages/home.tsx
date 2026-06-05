import Card from "@/features/Card";
// import tile from "@/assets/webp/tile.webp";
import tileX from "@/assets/private/front4.png";

export default function Home() {
  return (
    <>
      {/* Link page where the card will be  */}
      <div
        style={{ backgroundImage: `url(${tileX})` }}
        className="flex h-dvh w-full flex-col items-center justify-center bg-repeat"
      >
        <Card />
      </div>
    </>
  );
}
