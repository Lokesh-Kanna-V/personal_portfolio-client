"use client";
import React, { useEffect } from "react";

import Head from "@/components/head/head";
import Contact from "@/components/contact/contact";
import Skills from "@/components/skills/skills";
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Head />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
