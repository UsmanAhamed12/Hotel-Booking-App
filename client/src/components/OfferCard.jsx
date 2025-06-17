import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";

const OfferCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-12 ">
      {exclusiveOffers.map((item) => (
        <div
          key={item._id}
          className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-center bg-cover  "
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
            {item.priceOff}% OFF
          </p>
          <div>
            <p className="text-2xl font-medium playfair-font">{item.title}</p>
            <p>{item.description}</p>
            <p className="text-xs text-white/70 mt-3 ">{item.expiryDate}</p>
          </div>
          <button className="flex gap-2 items-center cursor-pointer group font-medium max-md:mt-12 mt-4 mb-5">
            View Offers
            <img
              src={assets.arrowIcon}
              alt=""
              className="invert group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default OfferCard;
