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
  const smoothIndex = useSpring(rawIndex, { stiffness: 90, damping: 28 });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: `${images.length * 100}vh`,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {images.map((img, index) => {
        // drives both center image and its bg
        const opacity = useTransform(
          smoothIndex,
          [index - 0.5, index, index + 0.5],
          [0, 1, 0]
        );

        const scale = useTransform(
          smoothIndex,
          [index - 0.5, index, index + 0.5],
          [0.98, 1, 0.98]
        );

        const y = useTransform(
          smoothIndex,
          [index - 0.5, index, index + 0.5],
          [60, 0, -60]
        );

        const textOpacity = useTransform(
          smoothIndex,
          [index - 0.3, index, index + 0.3],
          [0, 1, 0]
        );
        const textY = useTransform(
          smoothIndex,
          [index - 0.3, index, index + 0.3],
          [24, 0, -24]
        );

        return (
          <motion.div
            key={index}
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
            {/* blurred background for THIS image (static while active) */}
            <motion.img
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
                transformOrigin: "center",
                opacity: opacity,           // visible only when this image is active
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* center image that transitions (fades and moves) */}
            <motion.img
              src={img.src}
              alt={img.alt}
              style={{
                width: "45%",
                height: "auto",
                borderRadius: "14px",
                boxShadow: "0 0 64px rgba(0,0,0,0.6)",
                opacity: opacity,
                scale: scale,
                y: y,
                zIndex: 2,
                objectFit: "cover",
              }}
            />

            {/* caption */}
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
    </section>
  );
};
