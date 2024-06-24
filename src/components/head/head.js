import React from "react";
import Image from "next/image";

import programmerImg from "../../../public/programmer.png";

import { Button } from "@headlessui/react";

export default function Head() {
  return (
    <div
      id="head"
      className="h-screen flex justify-center items-center p-10 md:p-24 bg-inherit"
    >
      <div className="hidden lg:block lg:w-1/2">
        <Image src={programmerImg} height={500} />
      </div>

      <div className="lg:w-2/3">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">
          Hi, <br /> I am <span className="text-red-500">Lokesh Kanna</span>
        </h1>
        <p className="text-xl text-slate-600 mb-4">[FullStack Developer]</p>
        <p className="text-lg text-slate-600">
          Welcome to my developer portfolio adventure! I'm the coder who turns
          coffee into code and dreams into digital reality. I love untangling
          complex puzzles and turning them into sleek, user-friendly
          applications. From crafting backend magic to polishing frontend charm,
          I bring a blend of creativity and technical wizardry to every project.
          Dive into my portfolio and let's embark on a journey where innovation
          meets impeccable execution!
        </p>

        <section className="flex gap-5">
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
        </section>
      </div>
    </div>
  );
}
