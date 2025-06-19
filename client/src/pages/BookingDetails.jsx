import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const BookingDetails = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  // const formatDate = (isoDate) => {
  //   return new Date(isoDate).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title={"My Bookings"}
        subTitle={
          "Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        }
        align={"left"}
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt=""
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="pl-5 ">
                <h1 className="playfair-font text-2xl pb-1">
                  {booking.hotel.name}{" "}
                  <span className="text-xs font-inter">
                    ({booking.room.roomType})
                  </span>{" "}
                </h1>
                <p className="flex items-center gap-2 text-gray-500 text-sm pb-1">
                  <img src={assets.locationIcon} alt="location" />{" "}
                  {booking.hotel.address}{" "}
                </p>
                <p className="flex items-center gap-2 text-gray-500 text-sm pb-1">
                  <img src={assets.guestsIcon} alt="Guest:" /> Guests:{" "}
                  {booking.guests}
                </p>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>
            {/* Date & Timing */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            {/* Payment */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`${
                    booking.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="mt-1 px-5 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-50 transition-all">
                  Pay now
                </button>
              )}
              {/* 
              {
  !booking.isPaid && 
  <button
    onClick={() => {
      const updatedBookings = bookings.map(b =>
        b._id === booking._id ? { ...b, isPaid: true } : b
      );
      setBookings(updatedBookings);
    }}
    className='mt-1 px-5 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-50 transition-all'
  >
    Pay now
  </button>
} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;
