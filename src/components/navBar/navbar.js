import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center fixed md:mt-5">
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
        <h2 className="text-8xl font-serif z-40">LK</h2>
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
