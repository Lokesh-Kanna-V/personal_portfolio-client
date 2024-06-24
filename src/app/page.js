import React from "react";

import Head from "@/components/head/head";
import Contact from "@/components/contact/contact";
import Skills from "@/components/skills/skills";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Head />
        <Skills />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
