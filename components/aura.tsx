"use client";

import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";

const Aura: React.FC = () => {
  const { scrollY } = useScroll();

  const color = useMotionValue("rgba(45, 212, 191, 0.1)");

  useEffect(() => {
    const controls = animate(
      color,
      [
        "rgba(45, 212, 191, 0.05)", // Subtle Green
        "rgba(59, 130, 246, 0.05)", // Subtle Blue
        "rgba(168, 85, 247, 0.05)", // Subtle Purple
        "rgba(45, 212, 191, 0.05)", // Back to Green
      ],
      {
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }
    );
    return () => controls.stop();
  }, [color]);

  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Adjusted the gradient to be more gradual for smoother edges
  const backgroundImage = useTransform(
    color,
    (c) => `linear-gradient(to bottom, ${c} 0%, transparent 100%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-full h-screen z-[-1]"
      style={{
        opacity,
        willChange: "opacity",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-[400px]"
        style={{
          backgroundImage,
          willChange: "transform",
        }}
      />
      {/* Increased blur for an even softer effect */}
      <div className="absolute inset-0 backdrop-filter backdrop-blur-[9999px]" />
    </motion.div>
  );
};

export default Aura;
