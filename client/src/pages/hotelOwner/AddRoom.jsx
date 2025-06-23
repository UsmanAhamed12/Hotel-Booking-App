import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free BreakFast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form>
      <Title
        align={"left"}
        font={"Oytfit"}
        title={"Add Room"}
        subTitle={
          "Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user booking experience."
        }
      />

      {/* Upload area for images */}
      <div className="grid grid-cols-2 gap-4 sm:flex my-4 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomimage${key}`} key={key}>
            <img
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
              className="max-h-13 cursor-pointer opacity-80"
            />
            <input
              id={`roomimage${key}`}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            className="border opacity-70 border-gray-300 mt-1 rounded p-4 w-full"
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suit">Family Suit</option>
          </select>
        </div>
      </div>

      <div>
        <p className="text-gray-800 mt-4">
          Price <span className="text-sm">/night</span>
        </p>
        <input
          type="number"
          className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-24 mt-1"
          value={inputs.pricePerNight}
          onChange={(e) =>
            setInputs({ ...inputs, pricePerNight: e.target.value })
          }
        />
      </div>

      <div>
        <p className="text-shadow-gray-800 mt-4">Aminities</p>
        {
          Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index}>
              <input className="mr-2" type="checkbox" id= {`aminities${index + 1}`} checked = {inputs.amenities[amenity]} onChange={() => setInputs({...inputs, amenities: {...inputs.amenities, [amenity] : !inputs.amenities[amenity]}})}/>
              <label htmlFor={`aminities${index + 1}`}>{amenity}</label>
            </div>
          ))
        }
      </div>
      <button className="bg-blue-600 text-white px-8 py-2 rounded mt-8 cursor-pointer">Add Room</button>
    </form>
  );
};

export default AddRoom;
