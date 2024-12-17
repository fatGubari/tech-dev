import React from "react";
import { BackgroundLines } from "../ui/BackgroundLines";
import Image from "next/image";
// import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <section id="/">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <Image
          src="/techDev.jpg"
          alt="Description of the image"
          width={200}  // default width
          height={300} // default height
          className="rounded-lg max-w-full h-auto pb-4"  // ensures image scales properly
        />

        {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Tech Dev
        </h2> */}
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center font-bold">
          Innovation Developed, Future Ready.
          <br />
          Your partner in building digital success.
        </p>
      </BackgroundLines>
    </section>
  );
}
