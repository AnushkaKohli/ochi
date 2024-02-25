import React from "react";

const FeaturedCard = (props) => {
  const { title, image, link, buttons, direction } = props;
  return (
    <div className="featuredCard">
      <div className="uppercase flex items-center text-sm mb-4">
        <span className="w-3 h-3 flex-shrink-0 rounded-full bg-black dark:bg-zinc-100 mr-6"></span>
        <span className="font-medium tracking-tight text-lg">{title}</span>
      </div>
      <a className="cardContainer mb-6 relative block" href={link}>
        <h1
          className={`headline ${
            direction === "left" ? "left-full" : "left-0"
          } absolute z-[9] leading-none tracking-tight text-8xl top-1/2 -translate-x-1/2 -translate-y-1/2 z-2 text-[#cdea68] uppercase font-semibold font-foundersgrotesk whitespace-nowrap`}
        >
          {title.split("").map((alphabet, index) => {
            return (
              <span key={index} className="">
                {alphabet}
              </span>
            );
          })}
        </h1>
        <div className="cardImage rounded-xl w-full h-full overflow-hidden">
          <img className="w-full h-full bg-cover" src={image} alt={title} />
        </div>
      </a>
      <div className="buttonContainer flex flex-wrap -mb-10 items-start">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4 mb-10">
              <a
                className="button text-zinc-900 border-[1px] font-medium border-zinc-900 px-4 py-2 rounded-full text-sm uppercase"
                href=""
              >
                {button}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCard;
