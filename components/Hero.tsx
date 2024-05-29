import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center py-6">
      <div className="flex-1">
        <p className="uppercase tracking-widest text-xs text-sky-400 max-w-80">
          Dynamic Web Magic with Next.js
        </p>
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Cautious, a Web and Mobile Apps Developer based in South
          Africa.
        </p>

        <a href="#about">
          <button className="button flex items-center">
            Show my work <FaLocationArrow />
          </button>
        </a>
        {/* <Button /> */}
      </div>
      <div className="mt-6">
        <div className="md:w-[300px] w-[100px] p-4 relative rounded-t-full bg-orange-600 h-[100px] md:h-[305px]">
          <Image src="/cautie1.png" width={300} height={300} alt="CN" />
          <div className="absolute w-32 h-32 bg-orange-400/30 -top-8 -left-6 rounded-full"></div>
          <div className="absolute w-32 h-32 bg-orange-400/30 -bottom-8 -right-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
