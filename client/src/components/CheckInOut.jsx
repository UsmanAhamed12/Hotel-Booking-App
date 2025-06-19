import React from "react";
import CmnRoomSpec from "./CmnRoomSpec";

const CheckInOut = () => {
  return (
    <div className="">
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-2xl p-6 rounded-xl mt-16">
        <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="">
              Check-In
            </label>
            <input
              type="date"
              id="checkInDate"
              placeholder="Check-In"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              placeholder="Check-In"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="Guests" className="">
              Guests
            </label>
            <input
              type="number"
              id="Guests"
              placeholder="0"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 px-10 py-3 rounded-md cursor-pointer active:scale-90 transition-all max-md:w-ful max-md:mt-6 md:px-25 md:py-4 text-base "
        >
          Check Availability
        </button>
      </form>
      
    </div>
  );
};

export default CheckInOut;
