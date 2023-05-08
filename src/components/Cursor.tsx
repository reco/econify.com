"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference"
      animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20 }}
      transition={{ type: "spring", damping: 12, stiffness: 70 }}
      style={{
        zIndex: 1000,
        transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)`,
      }}
    />
  );
}
