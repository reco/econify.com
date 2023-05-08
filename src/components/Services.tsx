"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const headingStyle = "font-sansCompressed uppercase text-7xl font-bold";
const subHeadingStyle = "font-sansCompressed uppercase text-5xl font-bold";

const topHeadings = [
  "Ecommerce",
  "Interactive Broadcast",
  "Web Performance",
  "Cloud Engineering",
];

const subHeadings = [
  "Content management Systems",
  "Graphql",
  "Mobile & ott Platforms",
];

const delay = 0.125;

const variants = {
  off: {
    x: -100,
    opacity: 0,
  },
  in: {
    opacity: 1,
    x: 0,
  },
};

const Headings = ({
  headings = [],
  headingStyle = "",
}: {
  headings: string[];
  headingStyle: string;
}) => {
  return (
    <div className="flex flex-wrap justify-between">
      {headings.map((heading, i) => (
        <motion.div
          key={heading}
          className="relative"
          initial={variants.off}
          viewport={{ once: true, amount: 0.8 }}
          whileInView={{
            ...variants.in,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 0.75,
              delay: i * delay,
            },
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link href="" className={headingStyle}>
            {heading}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default function Services() {
  return (
    <motion.section className="section bg-canary">
      <div className="border-current border-y-2">
        <Headings headings={topHeadings} headingStyle={headingStyle} />
        <div className="h-5"></div>
        <Headings headings={subHeadings} headingStyle={subHeadingStyle} />
      </div>
    </motion.section>
  );
}
