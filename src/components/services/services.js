"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import webDev from "../../../public/webDev.jpg";
import mobileDev from "../../../public/mobileDev.jpg";
import apiDev from "../../../public/api.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const subHeadingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
};

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Adjust this value to control the delay between items
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: "50%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const services = [
  {
    title: "Web Application",
    image: webDev,
    description:
      "Embark on a journey of digital transformation with our bespoke web development services. From crafting responsive and visually stunning websites to optimizing user experiences with cutting-edge technologies, we are committed to bringing your ideas to life.",
  },
  {
    title: "Mobile Application",
    image: mobileDev,
    description:
      "We specialize in crafting intuitive and scalable mobile applications that resonate with users. From concept to deployment, our team harnesses the latest technologies to deliver sleek designs and seamless user experiences. ",
  },
  {
    title: "API Integration",
    image: apiDev,
    description:
      "Unlock the power of seamless connectivity with our API development and integration services. Whether you're looking to integrate third-party services, automate processes, or build a custom API from scratch, our team ensures secure and scalable solutions tailored to your business needs.",
  },
];

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="services"
      className="w-screen bg-gray-100 flex gap-5 flex-col justify-around items-center p-10 bg-inherit md:py-24 flex-wrap "
    >
      <hgroup>
        <h1
          ref={ref}
          variants={subHeadingVariants}
          initial="hidden"
          animate={controls}
        >
          Services
        </h1>
      </hgroup>
      <motion.section
        variants={parentVariant}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {services.map((service, index) => (
          <motion.div
            variants={cardVariant}
            // initial="hidden"
            // animate={controls}
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-cyan-800/50"
          >
            <Image className="w-full" src={service.image} alt="Card" />
            <div className="px-6 py-4">
              <div className="text-slate-100 font-bold text-xl mb-2 truncate">
                {service.title}
              </div>
              <p className="text-slate-100 text-base line-clamp-10">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
}
