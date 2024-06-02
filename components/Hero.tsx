import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  const whatsappNumber = 27727077541; // Your phone number in international format without the '+' sign
  const defaultMessage = "Hello, I would like to get in touch with you."; // Customize your default message

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

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a href="/cautious-cv.pdf" download>
            <button className="button flex items-center">
              Get My Cv <BiDownload size={24} className="ml-2" />
            </button>
          </a>

          <a
            href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
              defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button1">
              <span> Contact Me </span>
            </button>
          </a>
        </div>
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
