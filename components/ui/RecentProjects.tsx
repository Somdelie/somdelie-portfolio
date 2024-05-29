"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-10">
      <h1 className="text-xl font-semibold">
        A small selection of{" "}
        <span className="text-orange-500">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {projects.map((item) => (
          <div key={item.id} className="h-full p-4 bg-white shadow">
            <Image width={500} height={500} alt="img" src={item.img} />
            <div>
              <h1 className="font-bold text-base line-clamp-1">{item.title}</h1>

              <p className="text-gray-500 text-sm ">{item.des}</p>
            </div>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image fill src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <FaLocationArrow className="" color="#CBACF9" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
