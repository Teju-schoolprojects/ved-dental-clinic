"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer circle
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover/has mouse
    const checkDevice = () => {
      const match = window.matchMedia("(pointer: fine)");
      setIsMobile(!match.matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Track hovered elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.classList.contains("clickable-3d");

      setHovered(isClickable);
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Outer Follow Circle */}
      <motion.div
        className="custom-cursor"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: hovered ? 2.0 : 1.0,
          backgroundColor: hovered ? "rgba(10, 29, 55, 0.1)" : "rgba(10, 29, 55, 0)",
          borderColor: hovered ? "rgba(10, 29, 55, 0.8)" : "rgba(10, 29, 55, 0.35)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1.0,
          backgroundColor: hovered ? "#1e40af" : "#0a1d37",
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </>
  );
}
