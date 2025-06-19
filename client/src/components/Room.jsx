import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import CheckInOut from "./CheckInOut";
import CmnRoomSpec from "./CmnRoomSpec";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl playfair-font">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        {/* Ratings */}
        <div className="flex items-center mt-1">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room-Image"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-2 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl playfair-font">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap gap-4 items-center mt-3 mb-6">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 "
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
          </div>

          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight} /night</p>
        </div>
        <CheckInOut/>
        <CmnRoomSpec/>
        {/* Hosted by */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img src={room.hotel.owner.image} alt="Host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
            <div>
              <p className="text-lg md:text-xl">Hosted By {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating/>
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
            
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer">Contact Me</button>
        </div>

      </div>
    )
  );
};

export default RoomDetails;
