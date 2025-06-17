import React from "react";
import RoomsCard from "../components/RoomsCard";
import RoomFilter from "../components/RoomFilter";

const AllRooms = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Layout: RoomFilter + RoomsCard side by side */}
      <div>
        <div className="flex flex-col items-start text-left ">
          <h1 className="playfair-font text-4xl md:text-[40px] ">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        <RoomsCard />
      </div>
      {/* filter */}
      <div className="bg-white w-80 border border-gray-400 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <RoomFilter />
      </div>
    </div>
  );
};

export default AllRooms;
