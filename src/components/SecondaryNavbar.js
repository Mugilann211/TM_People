import React from 'react';

const SecondaryNavbar = ({ items }) => {
  return (
    <div className="bg-gray-800 text-white flex justify-start items-center p-2">
      <nav className="flex space-x-6 ml-10">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="cursor-pointer hover:text-gray-300"
          >
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SecondaryNavbar;
