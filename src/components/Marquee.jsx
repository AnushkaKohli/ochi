import React from "react";

const Marquee = () => {
  return (
    <div className="w-full rounded-t-2xl py-20 bg-[#004d43] text-[#e7e7e7]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1 className="text-[20vw] leading-none font-foundersgrotesk uppercase -mb-20 pt-5">
          we are ochi
        </h1>
        <h1 className="text-[20vw] leading-none font-foundersgrotesk uppercase -mb-20 pt-5">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
