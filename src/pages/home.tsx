import Card from "@/features/Card";
import Art from "@/features/Art";
import Description from "@/features/General/Description";
import tileX from "@/assets/private/front4.png";

export default function Home() {
  return (
    <>
      {/* Link page where the card will be  */}
      <div
        style={{ backgroundImage: `url(${tileX})` }}
        className="2xs:px-6 relative flex h-dvh w-full flex-col items-center justify-center overflow-clip bg-repeat px-3"
      >
        <Card />
        <Description />
        <div className="absolute top-1/2 z-20 w-full -translate-y-1/2">
          <Art />
        </div>
      </div>
    </>
  );
}
