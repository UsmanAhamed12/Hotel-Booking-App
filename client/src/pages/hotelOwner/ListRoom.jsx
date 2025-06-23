import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [room, setRoom] = useState(roomsDummyData);

  return (
    <div>
      <Title
        align={"left"}
        font={"Outfit"}
        title={"Room Listings"}
        subTitle={
          "View, Edit, or Manage All Listed Rooms. Keep the information up-to-date to provide the best experience for users."
        }
      />

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-8">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 text-sm">
              <th className="p-3 text-gray-800">Name</th>
              <th className="p-3  text-gray-800 max-sm:hidden">Facility</th>
              <th className="p-3  text-gray-800 text-center">Price / night</th>
              <th className="p-3  text-gray-800 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {room.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-200">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-200 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-200">
                  ${item.pricePerNight}
                </td>
                <td className="py-3 px-4 text-red-500 border-t border-gray-200">
                  <label>
                    <input type="checkbox" className="sr-only peer" checked={item.isAvailable}/>
                    <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-500  transition-colors duration-300 relative">

                    </div>
                    <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer peer-checked:translate-x-5 ease-in-out"></span>

  
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
