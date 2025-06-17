import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import OfferCard from "./OfferCard";

const ExclusiveOffers = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <Title
            title={"Exclusive Offers"}
            subTitle={
              "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
            }
            align="left"
          />
          <button className="flex gap-3 items-center cursor-pointer group font-medium max-md:mt-12">
            View All Offers{" "}
            <img
              src={assets.arrowIcon}
              alt=""
              className="group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>
        <div>
          <OfferCard />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
