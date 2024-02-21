import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full rounded-t-2xl py-[6vw] bg-[#004d43] text-[#e7e7e7]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-foundersgrotesk uppercase -mb-[5vw] pt-5"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-foundersgrotesk uppercase -mb-[5vw] pt-5"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-foundersgrotesk uppercase -mb-[5vw] pt-5"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
