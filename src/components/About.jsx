import React from "react";
import portfolioImage from '../assets/work/d2.jpg';

const About = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row  px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <p className=" text-3xl font-bold text-black dark:text-white">About Me</p>
      <img src={portfolioImage} alt="Portfolio" className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] square-full border border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0" />
      <p className=" text-lg text-black dark:text-gray-400 leading-10 justify-center">
        Full-Stack Web & App Developer with ability to learn and collaborate in
        rapidly changing environments and compositions. Worked through hours of
        bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs, Mobile
        App Development with Java and TypeScript. Eager to tackle web and App
        development/design challenges to achieve lasting impacts on user
        experience.
      </p>
      
    </div>
  );
};

export default About;
