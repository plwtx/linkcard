import Home from "@/pages/home";
import { config } from "@/config";

export default function App() {
  return (
    <>
      <div style={{ "--accent": config.accentColor } as React.CSSProperties}>
        <Home />
      </div>
    </>
  );
}
