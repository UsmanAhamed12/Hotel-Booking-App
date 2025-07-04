import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  

  return (
    <div className="">
      <Title
        align={"left"}
        font={"Outfit"}
        title={"Dashboard"}
        subTitle={
          "Monitor Your room listings. track bookings and analyze revanue-all in on place. stay updated with real time insights to ensure smooth perations."
        }
      />

      <div className="flex gap-4 my-8">
        {/* Total Bookings */}
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="total bookings"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt="total bookings"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* recent booking */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 text-sm">
              <th className="p-3 text-gray-800">User Name</th>
              <th className="p-3  text-gray-800 max-sm:hidden">Room Name</th>
              <th className="p-3  text-gray-800 text-center">Total Amount</th>
              <th className="p-3  text-gray-800 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {
              dashboardData.bookings.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-200">
                    {item.user.username}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-200 max-sm:hidden">
                    {item.room.roomType}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-200 text-center">
                    $ {item.totalPrice}
                  </td>
                   <td className={`py-3 px-4 border-t border-gray-300 flex `}>
                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'} `}>
                      {item.isPaid ? "Completed": "Pending"}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
