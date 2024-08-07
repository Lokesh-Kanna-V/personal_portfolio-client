"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

import programmerImg from "../../../public/programmer.png";

import { useForm } from "react-hook-form";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";

const subHeadingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
};

const formVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 1 } },
};

export default function Contact() {
  let [err, setErr] = useState();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleSubmitErr = () => {
    setErr(true);
  };
  return (
    <div
      id="contact"
      className="h-screen flex justify-center items-center p-10 md:p-24 bg-slate-200"
    >
      <div className="md:w-2/3">
        <motion.h1
          ref={ref}
          variants={subHeadingVariants}
          initial="hidden"
          animate={controls}
          className="text-3xl lg:text-5xl text-gray-800 font-bold mb-4"
        >
          Get in touch with <span className="text-red-500">me.</span>
        </motion.h1>
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate={controls}
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 p-6 rounded-3xl border-slate-500/75"
        >
          <Fieldset className="w-100">
            <Legend className="text-lg font-bold">
              Please Provide Your Contact Details
            </Legend>
            <Field className="my-5">
              <Label className="block">Full Name</Label>
              <Input
                id="fullName"
                className="w-full h-10 p-2 mt-1 block border-2 border-slate-500/50 rounded-lg bg-gray-100 lg:w-2/4"
                name="address"
                {...register("FullName", {
                  required: "Name is required",
                })}
              />
              {errors.FullName && (
                <p className="text-red-500">{errors.FullName?.message}</p>
              )}
            </Field>
            <Field className="my-5">
              <Label className="block">Email Address</Label>
              <Input
                id="email"
                className="w-full h-10 p-2 mt-1 block border-2 border-slate-500/50 rounded-lg bg-gray-100 lg:w-2/4"
                name="email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(?!.*\.{2})(?!\.)[a-z0-9_.'-]*[a-z0-9_'-]@(?!_)(?:[a-z0-9_'-]+\.)+[a-z0-9_'-]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
              />
              {errors.Email && (
                <p className="text-red-500">{errors.Email?.message}</p>
              )}
            </Field>
            <Field className="my-5">
              <Label className="block">Phone Number</Label>
              <Input
                id="phone"
                className="w-full h-10 p-2 mt-1 block border-2 border-slate-500/50 rounded-lg bg-gray-100 lg:w-2/4"
                name="phone"
                {...register("Phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              {errors.Phone && (
                <p className="text-red-500">{errors.Phone?.message}</p>
              )}
            </Field>
            <Field className="my-5">
              <Label className="block">Additional Details</Label>
              <Textarea
                id="details"
                className="w-full h-30 p-2 mt-1 block border-2 border-slate-500/50 rounded-lg bg-gray-100 lg:w-3/4"
                name="details"
                {...register("Additional Details")}
              />
            </Field>
          </Fieldset>
          <Button
            type="submit"
            className=" mt-5 bg-red-400 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-500 font-semibold rounded-md shadow-lg"
          >
            Submit
          </Button>
        </motion.form>
      </div>

      {/* <div className="hidden lg:block lg:w-1/2">
        <Image src={programmerImg} height={500} />
      </div> */}
    </div>
  );
}
