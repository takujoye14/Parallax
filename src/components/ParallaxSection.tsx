import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  image?: string; 
  children: ReactNode;
  height?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ image, children, height = "100vh" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} style={{ position: "relative", height, overflow: "hidden" }}>
      {image && (
        <motion.div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "120%",
            y,
            zIndex: -1,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
