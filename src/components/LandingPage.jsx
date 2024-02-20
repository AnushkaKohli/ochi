import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#e7e7e7] dark:bg-zinc-900 pt-2">
      <div className="textstructure mt-48 px-20">
        {["We create", "Eye-opening", "Presentations"].map((text, index) => {
          return (
            <div className="masker" key={index}>
              <h1 className="uppercase text-[6.6vw] font-foundersgrotesk leading-[6vw] tracking-[-0.3vw] font-semibold">
                {text}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] dark:border-[#d9d9d9] border-zinc-800 mt-24"></div>
    </div>
  );
};

export default LandingPage;
