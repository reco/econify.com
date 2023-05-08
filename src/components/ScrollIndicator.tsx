"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 origin-top-left w-full h-px bg-black"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
