import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftDoorX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const rightDoorX = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      style={{
        height: "200vh",
        position: "relative",
        background: "#000",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: 700, letterSpacing: "2px" }}>
            AWAKEN THE ATHLETE
          </h1>
          <p style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
            Train Hard. Build Strength. Push Limits.
          </p>
        </div>

        {/* Left Door */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#11111190",
            borderRight: "2px solid #5d5b5bff",
            x: leftDoorX,
            zIndex: 3,
            backdropFilter: "blur(8px)",
          }}
        />

        {/* Right Door */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#11111190",
            borderLeft: "2px solid #5d5b5bff",
            x: rightDoorX,
            zIndex: 3,
            backdropFilter: "blur(8px)",
          }}
        />
      </div>
    </div>
  );
};
