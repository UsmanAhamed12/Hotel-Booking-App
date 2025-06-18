import React, { useState } from "react";

const CheckBox = ({
  label,
  selected = false,
  onChange = () => {},
  onClick,
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        onClick={onClick}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input type="radio" checked={selected} onChange={() => onChange(label)} />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RoomFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const roomTypes = ["Single Bed", "Family Suite", "Double Bed", "Luxury Room"];

  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];
  // nnsjedisdusvadhbsjjhdj
  const [selectedRanges, setSelectedRanges] = useState(
    priceRanges.reduce((acc, range) => {
      acc[range] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (isChecked, label) => {
    setSelectedRanges((prev) => ({
      ...prev,
      [label]: isChecked,
    }));
  };

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

        <div
          className={`${
            openFilter ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRanges[room]} // true or false
                onChange={handleCheckboxChange} // updates state
              />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={range}
                selected={selectedRanges[range]} // true or false
                onChange={handleCheckboxChange} // updates state
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOptions.map((room, index) => (
              <RadioButton key={index} label={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;
