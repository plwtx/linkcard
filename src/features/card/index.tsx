import { motion, useTransform } from "motion/react";
import CardFront from "./components/card-front";
import CardBack from "./components/card-back";
import CardQr from "./components/card-qr";
import { useBackAssetsWarmup } from "./hooks/use-back-assets-warmup";
import { useCardFlip } from "./hooks/use-card-flip";
import { useCardIntro } from "./hooks/use-card-intro";
import { useCardTilt } from "./hooks/use-card-tilt";
import { useFrontFacing } from "./hooks/use-front-facing";
import { useQrFace } from "./hooks/use-qr-face";

const TILT_MAX = 9;

export default function Card() {
  const backBgSrc = useBackAssetsWarmup();
  const qr = useQrFace();

  const flip = useCardFlip(() => {
    if (!qr.showQr) return false;
    qr.toggle();
    return true;
  });

  const tilt = useCardTilt({
    maxTilt: TILT_MAX,
    isEnabled: () => !flip.isDragging(),
  });

  const { introFlip, entrance } = useCardIntro();

  const flipAngle = useTransform(
    () => flip.rotation.get() + qr.springSpin.get() + introFlip.get(),
  );
  const rotateY = useTransform(() => flipAngle.get() + tilt.rotateY.get());

  const frontFacing = useFrontFacing(flipAngle, qr.applyPendingWhileHidden);

  return (
    <motion.div className="xs:w-auto z-90 w-full" {...entrance}>
      <div className="2xl:scale-115" style={{ perspective: "1200px" }}>
        <motion.div
          className="xs:w-93 shadow-blax/45 relative h-130 w-full touch-pan-y rounded-4xl shadow-xl select-none transform-3d"
          style={{ rotateX: tilt.rotateX, rotateY }}
          {...tilt.handlers}
          {...flip.handlers}
        >
          <CardFront
            isActive={frontFacing && !qr.showQr}
            onQrPress={qr.toggle}
          />
          <CardBack bgSrc={backBgSrc} />
          {qr.showQr && <CardQr isActive={frontFacing} />}
        </motion.div>
      </div>
    </motion.div>
  );
}
