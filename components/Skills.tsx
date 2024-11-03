import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { skillItems } from "@/data";

const Skills = () => {
  return (
    <div className="flex justify-center relative z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-2xl font-semibold text-center text-blue-100 max-w-80">
          Skills
        </h2>
        <br />
        <InfiniteMovingCards items={skillItems} />
      </div>
    </div>
  );
};

export default Skills;
