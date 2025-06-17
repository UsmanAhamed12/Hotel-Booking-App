import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const RoomsCard = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {roomsDummyData.map((room) => (
        <div
          key={room._id}
          className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
        >
          <img
            onClick={() => {
              navigate(`/rooms/${room._id}`), scrollTo(0, 0);
            }}
            src={room.images[0]}
            alt="hotel-img"
            title="View Room Details"
            className="max-h-65 xs:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
          />
          <div className="flex md:w-1/2 flex-col gap-2">
            <p className="text-gray-500">{room.hotel.city}</p>
            <p
              onClick={() => {
                navigate(`/rooms/${room._id}`), scrollTo(0, 0);
              }}
              className="text-gray-800 text-3xl playfair-font cursor-pointer"
            >
              {room.hotel.name}
            </p>
            <div className="flex items-center">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
              <img src={assets.locationIcon} alt="location-icon" />
              <span>{room.hotel.address}</span>
            </div>
            {/* Room Aminities */}
            <div className="flex flex-wrap gap-4 items-center mt-3 mb-6">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70 "
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-6 h-6"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
            {/* Room priceperNight */}
            <p className="text-xl font-medium text-gray-700 ">
              ${room.pricePerNight} /night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsCard;
