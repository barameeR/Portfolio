import React from "react";
import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <div id="about">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-2xl font-semibold text-center text-blue-100 max-w-80">
            About me
          </h2>
          <br />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg text-white-200">
            As software engineer, I thrive on the intricate balance between
            logic and creativity. Engaged in transformative projects, I
            specialize in .NET and Vue.js, where I blend technology with
            innovation to create scalable and impactful applications.
            <br />
            <br />
            With a fervor for crafting elegant solutions, I navigate the
            ever-evolving landscape of software development. My journey involves
            translating complex concepts into efficient code, creating seamless
            user experiences, and continually pushing the boundaries of what's
            possible in the tech world.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
