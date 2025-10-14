import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftDoorX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const rightDoorX = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  const awakenY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const athleteY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-40%"]);

  const awakenYSpring = useSpring(awakenY, { stiffness: 100, damping: 20 });
  const athleteYSpring = useSpring(athleteY, { stiffness: 100, damping: 20 });

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
          {/* Split heading into layers */}
          <motion.h1
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "1rem",
              y: awakenYSpring,
            }}
          >
            AWAKEN
          </motion.h1>

          <motion.h1
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "1rem",
              y: athleteYSpring,
            }}
          >
            THE ATHLETE
          </motion.h1>

          {/* Scroll-triggered keywords */}
          <motion.p
            style={{ fontSize: "1.5rem", margin: "1rem 0", opacity: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Train Hard. <motion.span style={{ color: "#cc3712" }}>Strength</motion.span>,{" "}
            <motion.span style={{ color: "#cc3712" }}>Endurance</motion.span>, Push Limits.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            style={{
              background: "#cc3712",
              boxShadow: "0 4px 15px rgba(204, 55, 18, 0.6)",
              color: "#fff",
              padding: "1rem 2rem",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "6px",
              marginTop: "1rem",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(204, 55, 18, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
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
