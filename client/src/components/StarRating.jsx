import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon"
            className="h-3.5 w-3.5"
          />
        ))}
    </>
  );
};

export default StarRating;
