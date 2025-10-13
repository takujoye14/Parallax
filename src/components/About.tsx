import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gymGuy from "../assets/gymGuy.jpg";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-70%", "0%"]);
  // Text reveal
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], ["20px", "0px"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0d0d0d",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background layer */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
          zIndex: 0,
        }}
      />

      {/* Mask / window */}
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "72vh",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          zIndex: 2,
        }}
      >
        {/* Main image that moves more */}
        <motion.img
          src={gymGuy}
          alt="gym"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "auto",
            objectFit: "cover",
            y: imgY,
            zIndex: 1,
          }}
        />
      </div>

      {/* Overlay text container */}
      <motion.div
        style={{
          position: "absolute",
          zIndex: 3,
          textAlign: "left",
          maxWidth: "480px",
          padding: "0 2rem",
          opacity: textOpacity,
          y: textY,
        }}
      >
        <h2 style={{ fontSize: "3rem", margin: 0 }}>About Our Gym</h2>
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#cc3712",
            margin: "1rem 0 2rem",
          }}
        />
        <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
          We focus on functional strength, endurance, and personalized training. Our team of certified trainers will guide you to reach your fitness goals efficiently and safely.
        </p>
      </motion.div>
    </section>
  );
};
