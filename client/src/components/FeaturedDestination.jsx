import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Hotels"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"
      />
      <div className="flex mt-20 justify-center items-center gap-6 flex-wrap">
        {roomsDummyData.slice(0, 4).map((room, index) => {
          return <HotelCard key={room._id} room={room} index={index} />;
        })}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="mt-16 px-4 py-2 text-sm font-medium border border-gray-300 bg-white rounded hover:bg-gray-50 transition-all cursor-pointer"
      >
        Vivew All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
