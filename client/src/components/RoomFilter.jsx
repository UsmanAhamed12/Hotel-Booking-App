import React, { useState } from "react";

const RoomFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div>
      <div>
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilter && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className="text-xs cursor-pointer"
          >
            <span className="lg:hidden">{openFilter ? "HIDE" : "SHOW"}</span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;
