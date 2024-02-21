import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ochi from "/assets/images/ochiLandingPage.jpg";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#e7e7e7] dark:bg-zinc-900 pt-2">
      <div className="textstructure mt-44 px-20">
        {["We create", "Eye-opening", "Presentations"].map((text, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-baseline">
                {index === 1 && (
                  <div className="mr-[1vw] rounded-md -my-2 w-[8vw] h-[4.8vw] relative">
                    <img
                      src={ochi}
                      alt="ochi"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                )}
                <h1 className="uppercase text-[7.5vw] font-foundersgrotesk leading-[6vw]">
                  {text}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] dark:border-[#e7e7e7] border-zinc-800 mt-24 flex flex-col lg:flex-row items-start justify-between lg:items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-normal tracking-tight leading-none lg:my-0 my-3"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-1 border-[1px] border-zinc-900 dark:border-[#e7e7e7] rounded-full mt-[1.5vw] lg:mt-0 font-normal text-md uppercase">
            Start the project
          </div>
          <div className="hidden lg:flex lg:items-center md:justify-center">
            <GoArrowUpRight className="rounded-full border-[1px] border-zinc-900 dark:border-[#e7e7e7] w-9 h-9 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
