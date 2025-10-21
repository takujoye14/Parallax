import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import gymGuy from "../assets/gymguy.jpg";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-50%", "25%"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const formOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const formY = useTransform(scrollYProgress, [0.3, 0.6], ["40px", "0px"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(180deg, #383838ff 0%, #1a1a1a 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image for parallax effect */}
      <motion.div
        style={{
          backgroundImage: `url(${gymGuy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          y: imgY,
          opacity: imgOpacity,
          zIndex: -1,
          filter: "blur(4px) brightness(0.4)",
        }}
      />

      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Contact Us</h2>

      <motion.form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          width: "100%",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          opacity: formOpacity,
          y: formY,
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <textarea placeholder="Message" rows={5} style={inputStyle} />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            ...buttonStyle,
            backgroundColor: "#cc3712",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "0.8rem",
  borderRadius: "5px",
  border: "1px solid #5d5b5bff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
};

const buttonStyle: React.CSSProperties = {
  padding: "1rem",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "1rem",
  marginTop: "1rem",
};

export default Contact;