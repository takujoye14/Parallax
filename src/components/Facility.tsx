import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gym1 from "../assets/gym1.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import gym4 from "../assets/gym4.jpg";
import gym5 from "../assets/gym5.jpg";

const images = [
  { src: gym1, alt: "Facility 1", description: "Spacious area for functional training" },
  { src: gym2, alt: "Facility 2", description: "High-end cardio machines" },
  { src: gym3, alt: "Facility 3", description: "Strength training zone with free weights" },
  { src: gym4, alt: "Facility 4", description: "Dedicated stretching and mobility space" },
  { src: gym5, alt: "Facility 5", description: "Recovery area with foam rollers and mats" },
];

export const Facility = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);
  const smoothIndex = useSpring(rawIndex, { stiffness: 100, damping: 20 });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: `${images.length * 100}vh`,
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background images layer with a seamless cross-fade */}
        {images.map((img, index) => {
          const bgOpacity = useTransform(smoothIndex, [index - 0.7, index, index + 0.7], [0, 1, 0]);
          return (
            <motion.img
              key={`bg-${index}`}
              src={img.src}
              alt={`${img.alt} blurred background`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(36px) brightness(0.42)",
                opacity: bgOpacity,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
          );
        })}

        {/* Foreground images and captions layer with a "wipe" effect */}
        {images.map((img, index) => {
          const clipPathY = useTransform(smoothIndex, [index, index + 1], ["0%", "100%"]);
          const textOpacity = useTransform(smoothIndex, [index, index + 0.3], [1, 0]);
          const textY = useTransform(smoothIndex, [index, index + 0.3], ["0%", "-20px"]);

          const containerOpacity = useTransform(smoothIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]);
          const containerDisplay = useTransform(containerOpacity, (value) => value > 0.01 ? "flex" : "none");

          return (
            <motion.div
              key={`content-container-${index}`}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                opacity: containerOpacity,
                display: containerDisplay, // Fixed the conflicting property
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "45%",
                  height: "auto",
                  borderRadius: "14px",
                  boxShadow: "0 0 64px rgba(0,0,0,0.6)",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    clipPath: useTransform(clipPathY, (y) => `inset(${y} 0 0)`),
                  }}
                />
              </div>

              {/* Caption */}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "12%",
                  zIndex: 3,
                  color: "#fff",
                  fontSize: "1.25rem",
                  backgroundColor: "rgba(0,0,0,0.56)",
                  padding: "0.9rem 1.25rem",
                  borderRadius: "10px",
                  opacity: textOpacity,
                  y: textY,
                  maxWidth: "420px",
                  textAlign: "center",
                  backdropFilter: "blur(6px)",
                }}
              >
                {img.description}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};