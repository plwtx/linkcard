import Card from "@/features/card";
import Art from "@/features/art";
import BackgroundTiles from "@/features/card/background";
import BlurBlob from "@/components/blur-blob";
import Footer from "./components/footer";
import GithubLink from "./components/github-link";
import { assets } from "@/config/assets";
import { config } from "@/config/site";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${assets.background.tile})` }}
      className="2xs:px-6 selection:bg-accent relative flex h-dvh w-full flex-col items-center justify-center overflow-clip bg-repeat px-3 selection:text-white"
    >
      <BackgroundTiles />
      <Card />
      <Footer />
      <GithubLink />
      <BlurBlob color={config.accentColor} />
      <div className="absolute top-1/2 z-20 w-full -translate-y-1/2">
        <Art />
      </div>
    </div>
  );
}
