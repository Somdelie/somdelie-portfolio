import React from "react";
import { BentoGridDemo } from "./BentoGrid";

const ShowCase = () => {
  return (
    <section id="showcase" className="w-full py-24">
      <h1 className="font-semibold text-lg">
        Show <span className="text-orange-500">Case</span>
      </h1>
      <BentoGridDemo />
    </section>
  );
};

export default ShowCase;
