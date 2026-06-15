import Card from "@/features/Card";
import Art from "@/features/Art";
import Footer from "@/features/General/Footer";
import AppLinks from "@/features/General/AppLinks";
import BackgroundTiles from "@/features/Background";
import tile from "@/assets/images/bg_tile.webp";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${tile})` }}
        className="2xs:px-6 selection:bg-accent relative flex h-dvh w-full flex-col items-center justify-center overflow-clip bg-repeat px-3 selection:text-white"
      >
        <BackgroundTiles />
        <Card />
        <Footer />
        <AppLinks />
        <div className="absolute top-1/2 z-20 w-full -translate-y-1/2">
          <Art />
        </div>
      </div>
    </>
  );
}
