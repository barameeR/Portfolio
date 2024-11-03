import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SectionWrapper } from "@/data";

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Welcome to my portfolio
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Baramee Rujipatanapong"
        />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg text-white-200">
          Crafting efficient applications with passion and precision in software
          development.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
