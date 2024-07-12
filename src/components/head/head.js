"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import programmerImg from "../../../public/programmer.png";
import headShot from "../../../public/headShot.jpeg";

import { Button } from "@headlessui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 2 },
  },
};

const titleVariant = {
  hidden: {
    opacity: 0,
    x: "20%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 2.5 },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
    x: "20%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 3 },
  },
};

const buttonVariant = {
  hidden: {
    opacity: 0,
    x: "20%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 3.5 },
  },
};

export default function Head() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="head"
      ref={ref}
      className="h-screen flex flex-col justify-center items-center mt-14 p-10 md:p-24 lg:flex-row"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        className="lg:block lg:w-1/2"
      >
        <Image
          src={headShot}
          height={500}
          alt="Image of Lokesh Kanna"
          className="w-32 h-32 rounded-full object-cover md:w-36 md:h-36 lg:w-full lg:h-full lg:rounded-none"
        />
      </motion.div>

      <div className="lg:w-5/6 lg:ml-14">
        <motion.h1
          variants={titleVariant}
          initial="hidden"
          animate={controls}
          className="text-3xl lg:text-5xl text-gray-800 font-bold mb-2"
        >
          Hi, <br /> I am <span className="text-red-500">Lokesh Kanna</span>
        </motion.h1>
        <motion.p
          variants={titleVariant}
          initial="hidden"
          animate={controls}
          className="text-xl text-slate-600 mb-4"
        >
          [FullStack Developer]
        </motion.p>
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={controls}
          className="text-lg text-slate-600"
        >
          Welcome to my developer portfolio adventure! I'm the coder who turns
          coffee into code and dreams into digital reality. I love untangling
          complex puzzles and turning them into sleek, user-friendly
          applications. From crafting backend magic to polishing frontend charm,
          I bring a blend of creativity and technical wizardry to every project.
          Dive into my portfolio and let's embark on a journey where innovation
          meets impeccable execution!
        </motion.p>

        <motion.section
          variants={buttonVariant}
          initial="hidden"
          animate={controls}
          className="flex gap-5"
        >
          <a href="#contact">
            <Button className=" mt-5 bg-red-400 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-500 font-semibold rounded-md shadow-lg">
              Contact Me
            </Button>
          </a>
          <a
            href="../../../LokeshKanna_FullStackDeveloper.pdf"
            download="LokeshKanna_FullStackDeveloper.pdf"
          >
            <Button className=" mt-5 bg-red-400 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-500 font-semibold rounded-md shadow-lg">
              Download Resume
            </Button>
          </a>
        </motion.section>
      </div>
    </div>
  );
}
