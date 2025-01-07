import React from 'react';
import { FaHome, FaFileAlt, FaRegClock, FaCalendar } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: <FaHome />, },
    { name: 'Leave Tracker', icon: <FaFileAlt /> },
    { name: 'Time Tracker', icon: <FaRegClock /> },
    { name: 'Attendance', icon: <FaCalendar /> },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen w-[5rem] flex flex-col items-center py-4">
      <ul className="space-y-16">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
          >
            <span className="text-2xl mb-2">{item.icon}</span>
            <span className="text-xs text-center">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
