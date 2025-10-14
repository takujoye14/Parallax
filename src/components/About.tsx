import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gymguy from "../assets/gymguy.jpg";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-50%", "25%"]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], ["40px", "0px"]);

  const boxOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const boxY = useTransform(scrollYProgress, [0.25, 0.55], ["40px", "0px"]);

  const boxes = [
    {
      title: "Strength",
      description: "Functional power for everyday performance.",
      top: "18%",
    },
    {
      title: "Endurance",
      description: "Push your limits with stamina-based training.",
      top: "28%",
    },

  ];
  const boxes1 = [
        {
      title: "Performance",
      description: "Unlock your peak potential with advanced programming.",
      top: "38%",
    },
    {
      title: "Recovery",
      description: "Balance effort and rest to maximize results.",
      top: "48%",
      left: "40%",
    },

  ]

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "180vh", 
        overflow: "hidden",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Sticky container keeps the image fixed as user scrolls */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left:"55%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "70vh",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "30vh",
            borderRadius: "20px",
            border: "1px solid #ff6600",
            boxShadow: "0 0 30px rgba(255, 102, 0, 0.8)",
            overflow: "hidden",
          }}
        >
          <motion.img
            src={gymguy}
            alt="gym"
            style={{
              width: "100%",
              height: "150%",
              // objectFit: "cover",
              y: imgY,
              scale: 1.05,
            }}
          />
        </div>
      </div>

      {/* Text content */}
      <motion.div
        style={{
          position: "absolute",
          left: "6%",
          top: "25%",
          textAlign: "left",
          maxWidth: "420px",
          opacity: textOpacity,
          y: textY,
        }}
      >
        <h2 style={{ fontSize: "3rem", margin: 0 }}>About Our Gym</h2>
        <div
          style={{
            width: 100,
            height: 4,
            backgroundColor: "#ff6600",
            boxShadow: "0 0 15px #ff6600, 0 0 30px #ff3300",
            margin: "1rem 0 2rem",
          }}
        />
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          We focus on functional strength, endurance, and personalized training.
          Our team of certified trainers will guide you to reach your fitness
          goals efficiently and safely.
        </p>
      </motion.div>

      {/* Floating glowing info boxes */}
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: box.top,
            left: "40%",
            backgroundColor: "rgba(255, 102, 0, 0.12)",
            border: "1px solid #ff6600",
            borderRadius: "12px",
            padding: "1rem 1.5rem",
            maxWidth: "220px",
            boxShadow: "0 0 20px rgba(255, 102, 0, 0.8)",
            opacity: boxOpacity,
            y: boxY,
            backdropFilter: "blur(6px)",
            zIndex: 3,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#ffb347",
              textShadow: "0 0 10px #ff6600, 0 0 20px #ff3300",
            }}
          >
            {box.title}
          </h3>
          <p
            style={{
              margin: "0.5rem 0 0",
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "#fff",
            }}
          >
            {box.description}
          </p>

          
        </motion.div>
        
      ))}
      {boxes1.map((box, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: box.top,
            left: "60%",
            backgroundColor: "rgba(255, 102, 0, 0.12)",
            border: "1px solid #ff6600",
            borderRadius: "12px",
            padding: "1rem 1.5rem",
            maxWidth: "220px",
            boxShadow: "0 0 20px rgba(255, 102, 0, 0.8)",
            opacity: boxOpacity,
            y: boxY,
            backdropFilter: "blur(6px)",
            zIndex: 3,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#ffb347",
              textShadow: "0 0 10px #ff6600, 0 0 20px #ff3300",
            }}
          >
            {box.title}
          </h3>
          <p
            style={{
              margin: "0.5rem 0 0",
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "#fff",
            }}
          >
            {box.description}
          </p>

          
        </motion.div>
        
      ))}
    </section>
  );
};
