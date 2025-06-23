import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sideBarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full flex flex-col text-base border-gray-300 pt-4 transition-all duration-300">
      {
        // sideBarLinks.map((link) => (
        //     <a
        //         key={link.name}
        //         href={link.path}
        //         className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-all duration-300'
        //     >
        //         <img src={link.icon} alt={`${link.name}-icon`} className='h-6 w-6' />
        //         <span className='hidden md:inline-block'>{link.name}</span>
        //     </a>
        // ))

        sideBarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            end="/owner"
            className={({ isActive }) =>
              `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive} ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 text-blue-600' : 'hover:bg-gray-100/90 border-white text-gray-600'}`
            }
          >
            <img src={item.icon} alt={item.name} className="min-h-6 min-w-6" />
            <p className="md:block hidden text-center">{item.name}</p>
          </NavLink>
        ))
      }
    </div>
  );
};

export default Sidebar;
