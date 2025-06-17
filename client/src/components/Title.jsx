import React from "react";

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={` flex text-center items-center justify-center flex-col ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <h1 className={`text-4xl md:text-[40px] ${font || "playfair-font"} `}>
        {title}
      </h1>
      <p className="text-sm md:text-base mt-2 max-w-174 text-gray-500/90 ">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
