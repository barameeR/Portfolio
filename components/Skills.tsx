import React from "react";
import {
  InfiniteMovingCardItem,
  InfiniteMovingCards,
} from "./ui/InfiniteMovingCards";

const Skills = () => {
  return (
    <div className="flex justify-center relative z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-2xl font-semibold text-center text-blue-100 max-w-80">
          Skills
        </h2>
        <br />
        <InfiniteMovingCards
          items={[
            {
              quote:
                "As software engineer, I thrive on the intricate balance between logic and creativity. Engaged in transformative projects, I specialize in .NET and Vue.js, where I blend technology with innovation to create scalable and impactful applications. With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating complex concepts into efficient code, creating seamless user experiences, and continually pushing the boundaries of what's possible in the tech",
              name: "Baramee Rujipatanapong",
              title: "title",
            } as InfiniteMovingCardItem,
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
