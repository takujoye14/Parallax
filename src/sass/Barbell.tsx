import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Barbell = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftWeightX = useTransform(scrollYProgress, [0, 0.5], ["-450%", "150%"]);
  const rightWeightX = useTransform(scrollYProgress, [0, 0.5], ["450%", "-150%"]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #1a1a1a 0%, #383838ff 100%)",
      }}
    >
      {/* Bar */}
      <div
        style={{
          width: "70%",
          height: "20px",
          backgroundColor: "#888",
          borderRadius: "10px",
          position: "relative",
          boxShadow: "inset 0 0 10px #000",
        }}
      />

      <div
        style={{ 
          position: "absolute",
          left: "21%",
          width: "30px",
          height: "40px",
          backgroundColor: "#888",
          borderRadius: "5px",
          boxShadow: "inset 0 0 10px #000",
        }}
      />
      <div
        style={{ 
          position: "absolute",
          right: "21%",
          width: "30px",
          height: "40px",
          backgroundColor: "#888",
          borderRadius: "5px",
          boxShadow: "inset 0 0 10px #000",
        }}
      />
      {/* Left weights */}
      <motion.div
        style={{
          position: "absolute",
          left: "17%",
          width: "30px",
          height: "180px",
          backgroundColor: "#fa0707ff",
          borderRadius: "5px",
          boxShadow: "inset 0 0 10px #000",
          x: leftWeightX,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          left: "16.5%",
          width: "20px",
          height: "160px",
          backgroundColor: "#4851f8ff",
          boxShadow: "inset 0 0 10px #000",
          borderRadius: "5px",
          x: leftWeightX,
        }}
      />

      {/* Right weights */}
      <motion.div
        style={{
          position: "absolute",
          right: "17%",
          width: "30px",
          height: "180px",
          backgroundColor: "#fa0707ff",
          borderRadius: "5px",
          boxShadow: "inset 0 0 10px #000",
          x: rightWeightX,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          right: "16.5%",
          width: "20px",
          height: "160px",
          backgroundColor: "#4851f8ff",
          boxShadow: "inset 0 0 10px #000",
          borderRadius: "5px",
          x: rightWeightX,
        }}
      />

      {/* Optional glowing text */}
      <motion.h2
        style={{
          position: "absolute",
          bottom: "10%",
          color: "#ff4500",
          fontSize: "2rem",
          textShadow: "0 0 15px #ff4500",
          opacity: scrollYProgress,
        }}
      >
        Strength in Progress
      </motion.h2>
    </div>
  );
};
