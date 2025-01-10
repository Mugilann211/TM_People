import React from 'react';
import { FaHome, FaFileAlt, FaRegClock, FaCalendar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Leave Tracker', icon: <FaFileAlt />, path: '/leave-Summary' },
    { name: 'Time Tracker', icon: <FaRegClock />, path: '/time-tracker' },
    { name: 'Attendance', icon: <FaCalendar />, path: '/attendance' },
  ];


  return (
    <div className="bg-gray-800 text-white h-screen w-[5rem] flex flex-col items-center py-4">
      <ul className="space-y-16">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="flex flex-col items-center justify-center hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
              activeClassName="bg-gray-700"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-xs text-center">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;
