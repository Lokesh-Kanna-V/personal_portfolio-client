import React from "react";
import Image from "next/image";

import js from "../../../public/js.webp";
import react from "../../../public/react.webp";
import expo from "../../../public/reactExpo.svg";
import nextjs from "../../../public/nextjs.png";
import nodejs from "../../../public/nodejs.png";
import expressjs from "../../../public/express.png";
import python from "../../../public/python.png";
import mongoDb from "../../../public/mongo.png";
import sql from "../../../public/sql.png";
import firebase from "../../../public/firebase.png";

const services = [
  {
    title: "FullStack Web Application",
    image: "",
    description: "",
  },
  {
    title: "Mobile Application",
    image: "",
    description: "",
  },
  {
    title: "API Integration",
    image: "",
    description: "",
  },
];

const techStacks = [
  {
    title: "JavaScript",
    image: js,
    description: "",
  },
  {
    title: "ReactJs",
    image: react,
    description: "",
  },
  {
    title: "React Native",
    image: expo,
    description: "",
  },
  {
    title: "NextJS",
    image: nextjs,
    description: "",
  },
  {
    title: "NodeJS",
    image: nodejs,
    description: "",
  },
  {
    title: "ExpressJS",
    image: expressjs,
    description: "",
  },
  {
    title: "Python",
    image: python,
    description: "",
  },
  {
    title: "MongoDB",
    image: mongoDb,
    description: "",
  },
  {
    title: "Firebase",
    image: firebase,
    description: "",
  },
  {
    title: "MySQL",
    image: sql,
    description: "",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex gap-5 justify-center items-center p-10 md:px-24 flex-wrap"
    >
      <hgroup className="flex flex-col justify-center items-center">
        <h1 className="mt-20">Skills</h1>
        <p className="">
          Dive into my skill set for web wizardry, blending front-end finesse
          with back-end magic for seamless digital experiences!
        </p>
      </hgroup>
      <section className="flex gap-2 justify-center items-center p-10 md:p-24 flex-wrap md:gap-5">
        {techStacks.map((techStack) => {
          return (
            <div className="w-max border-2 border-red-200 rounded-xl sm:w-fit">
              <div className="px-2 py-2 md:px-6 md:py-4">
                <div className="flex flex-col items-center sm:flex-row">
                  <Image src={techStack.image} height={40} />
                  <div className="hidden ml-2 text-sm font-semibold text-gray-800 md:text-lg md:block">
                    {techStack.title}
                  </div>
                </div>
                <div className="flex items-center"></div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
