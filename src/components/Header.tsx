"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, Variants } from "framer-motion";
import clsx from "clsx";
import clamp from "utils/clamp";
import Link from "next/link";

import NavLink from "./NavLink";
import Bird from "./Bird";

const NavLinks = [
  { id: "1", label: "Work", href: "/work" },
  { id: "2", label: "Services", href: "/services" },
  { id: "3", label: "Lab", href: "/lab" },
  { id: "4", label: "Contact", href: "/contact" },
];

const navVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.0625,
      delay: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0625,
      staggerDirection: -1,
    },
  },
};

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [showHeader, setShowHeader] = useState(true);

  const Nav = () => {
    return (
      <motion.nav
        className="flex space-x-6 uppercase"
        variants={navVariants}
        initial={showHeader ? "hidden" : "show"}
        animate={showHeader ? "show" : "hidden"}
      >
        {NavLinks.map(({ id, label, href }, i) => (
          <motion.div key={id} variants={linkVariants}>
            <NavLink href={href}>{label}</NavLink>
          </motion.div>
        ))}
      </motion.nav>
    );
  };

  useEffect(() => {
    console.log("useEffect");
    return scrollYProgress.on("change", (value) => {
      // clamp values cuase of safari spring effect
      const scrollY = clamp(value, 0, 1);
      const prevScrollY = clamp(scrollYProgress.getPrevious(), 0, 1);
      const scrollDirection = scrollY >= prevScrollY ? "down" : "up";

      const scrollHeight = document.body.clientHeight - window.innerHeight;
      const scrollPosition = scrollY * scrollHeight;
      setShowHeader(scrollPosition <= 40 || scrollDirection === "up");
    });
  }, [scrollYProgress]);

  return (
    <header className="h-[100px]">
      <div
        className={`h-[100px] fixed inset-x-0 z-50 
      flex items-center justify-between px-10
      tracking-wide`}
      >
        <div className="flex items-center">
          <Bird
            className={clsx(
              "absolute transition ease-in-out duration-500 transparent",
              showHeader
                ? "opacity-0 -translate-x-16"
                : "opacity-100 translate-x-0"
            )}
            width={40}
          />
          <h1
            className={clsx(
              "absolute transition ease-in-out duration-500 uppercase",
              showHeader
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            )}
          >
            <Link href="/">Econify</Link>
          </h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}
