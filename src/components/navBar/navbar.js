"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logoVariant = {
  hidden: { scale: 3, y: "50vh" },
  visible: { scale: 1, y: 0, transition: { duration: 1 } },
};

export default function NavBar() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="z-50 w-full flex justify-center fixed md:mt-5">
      <div className="w-full px-4 h-20 flex justify-center items-center backdrop-blur-sm bg-gray-500/50 sm:justify-between md:h-10  md:m-2 md:rounded-3xl lg:w-4/5">
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="#head"
        >
          Home
        </Link>
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="#services"
        >
          Services
        </Link>
        <motion.h2
          ref={ref}
          variants={logoVariant}
          initial="hidden"
          animate={controls}
          className="text-8xl font-cursive relative z-40"
        >
          LK
        </motion.h2>
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="../../../LokeshKanna_FullStackDeveloper.pdf"
          target="_blank"
        >
          Resume
        </Link>
        <Link
          className="hidden first-letter:h-8 px-4 items-center hover:bg-red-400 hover:text-neutral-800 rounded-3xl sm:block"
          href="#contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
