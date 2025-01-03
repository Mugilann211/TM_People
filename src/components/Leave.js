import React from "react";
import { FaRegCalendarAlt, FaClipboardCheck, FaBriefcaseMedical, FaExclamationCircle, FaBaby } from "react-icons/fa";

const Leave = () => {
  const leaveTypes = [
    { 
      name: "Compensatory Off", 
      available: "0 day", 
      booked: "0 day", 
      icon: <FaClipboardCheck className="text-blue-500 text-2xl" /> 
    },
    { 
      name: "Earned Leave", 
      available: "4 days", 
      booked: "0 day", 
      icon: <FaRegCalendarAlt className="text-green-500 text-2xl" /> 
    },
    { 
      name: "Sick Leave", 
      available: "0 day", 
      booked: "0 day", 
      icon: <FaBriefcaseMedical className="text-red-500 text-2xl" /> 
    },
    { 
      name: "Leave Without Pay", 
      available: "N/A", 
      booked: "0 day", 
      icon: <FaExclamationCircle className="text-yellow-500 text-2xl" /> 
    },
    { 
      name: "Paternity Leave", 
      available: "0 day", 
      booked: "0 day", 
      icon: <FaBaby className="text-purple-500 text-2xl" /> 
    },
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold mb-4">Leave</h2>

      {/* Leave List */}
      <div className="space-y-4">
        {leaveTypes.map((leave, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
          >
            {/* Icon and Leave Name */}
            <div className="flex items-center w-1/3">
              {leave.icon}
              <div className="ml-4">
                <h3 className="font-semibold text-gray-700">{leave.name}</h3>
              </div>
            </div>

            {/* Leave Details */}
            <div className="flex items-center justify-between w-1/3">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Available</p>
                <p className="font-semibold text-gray-800">{leave.available}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Booked</p>
                <p className="font-semibold text-gray-800">{leave.booked}</p>
              </div>
            </div>

            {/* Apply Leave Button */}
            <div className="w-1/3 text-right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Apply Leave
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leave;
