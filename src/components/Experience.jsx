import React from "react";
import { experience} from "../data";

const Works = () => {
  return (
    <div className=" w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className=" text-3xl font-bold text-black dark:text-white mt-10">
        Experience
      </h4>
      <div className=" flex flex-wrap gap-10 lg:gap-20 justify-center">
        {experience.map((p, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={index}
            className=" w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md"
          >
            
            <div className=" w-full h-[100px] bg-white dark:bg-[#04133e] ">
              <h4 className=" text-2xl text-black dark:text-white font-semibold py-2 px-1">
                {p.title}
              </h4>
              <p className="text-sm text-white px-1 uppercase">{p.cat}</p>
              
              <p className="text-sm dark:text-white  font-semibold px-1 uppercase">{p.cat1}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat2}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat3}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat4}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat5}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat6}</p>
              <p className="text-sm text-white px-1 uppercase">{p.cat7}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
