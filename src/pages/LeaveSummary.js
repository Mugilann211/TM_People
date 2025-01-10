import React, { useState } from "react";
import {
  FaRegCalendarAlt,
  FaClipboardCheck,
  FaBriefcaseMedical,
  FaExclamationCircle,
  FaBaby,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LeaveSummary = () => {
  const [selectedUpcomingOption, setSelectedUpcomingOption] =
    useState("upcomingHolidays");
  const [selectedPastOption, setSelectedPastOption] = useState("pastHolidays");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvailClick = () => {
    navigate('/apply-leave'); 
  }
  const handleUpcomingChange = (event) => {
    setSelectedUpcomingOption(event.target.value);
  };

  const handlePastChange = (event) => {
    setSelectedPastOption(event.target.value);
  };

  const handleCardClick = () => {
    navigate("/apply-leave"); // Navigate to ApplyLeavePage
  };

  const handleApplyLeaveClick = () => {
    navigate("/apply-leave"); // Navigate to ApplyLeavePage
  };

  const holidays2025 = [
    { date: "01-Jan-2025", name: "New Year's Day" },
    { date: "14-Jan-2025", name: "Pongal" },
    { date: "15-Jan-2025", name: "Thiruvalluvar Day" },
    { date: "16-Jan-2025", name: "Uzhavar Thirunal (Restricted holiday)" },
    { date: "31-Mar-2025", name: "Ramzan (Restricted holiday)" },
  ];

  const pastHolidays2025 = [
    { date: "01-Jan-2025", name: "New Year's Day" },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-widest flex justify-between items-center">
        <div className="flex items-center justify-center w-full">
          <FaChevronLeft className="h-6 w-6 text-gray-600 cursor-pointer mr-4" />
          <FaRegCalendarAlt className="h-8 w-8 text-gray-800" />
          <FaChevronRight className="h-6 w-6 text-gray-600 cursor-pointer ml-4" />
        </div>

        <div className="flex items-center gap-4">
          <FaRegCalendarAlt className="h-12 w-12 text-gray-800 border-2 border-gray-400 rounded-md p-2 hover:bg-gray-100 transition-all" />
          <button
            onClick={handleApplyLeaveClick}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-md flex items-center gap-1 transition duration-300 ease-in-out"
          >
            Apply Leave
          </button>
        </div>
      </h1>

      <div className="bg-white p-6 mt-6 rounded-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">Leave Summary</h2>
        </div>

        {/* Leave Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {["Compensatory Off", "Sick Leave", "Annual Leave"].map(
            (type, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center cursor-pointer"
                onClick={handleCardClick}
              >
                <div className="mb-4">
                  {index === 0 && (
                    <FaClipboardCheck className="text-blue-500 text-2xl" />
                  )}
                  {index === 1 && (
                    <FaBriefcaseMedical className="text-red-500 text-2xl" />
                  )}
                  {index === 2 && (
                    <FaRegCalendarAlt className="text-green-500 text-2xl" />
                  )}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-xl">{type}</h3>
                <p className="text-gray-600 text-lg">
                  Available Days: {5 - index}
                </p>
                <p className="text-gray-600">Booked: {index + 1}</p>
              </div>
            )
          )}

          {/* Additional Leave Types */}
          <div
            className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center cursor-pointer"
            onClick={handleCardClick}
          >
            <FaExclamationCircle className="text-yellow-500 text-2xl mb-4" />
            <h3 className="font-bold text-gray-800">Earned Leave</h3>
            <p className="text-gray-600">Available Days: 10</p>
            <p className="text-gray-600">Booked: 4</p>
          </div>

          <div
            className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center cursor-pointer"
            onClick={handleCardClick}
          >
            <FaExclamationCircle className="text-red-500 text-2xl mb-4" />
            <h3 className="font-bold text-gray-800">Leave Without Pay</h3>
            <p className="text-gray-600">Available Days: 0</p>
            <p className="text-gray-600">Booked: 3</p>
          </div>

          <div
            className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center cursor-pointer"
            onClick={handleCardClick}
          >
            <FaBaby className="text-green-500 text-2xl mb-4" />
            <h3 className="font-bold text-gray-800">Paternity Leave</h3>
            <p className="text-gray-600">Available Days: 5</p>
            <p className="text-gray-600">Booked: 0</p>
          </div>
        </div>

        {/* Upcoming Leaves Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <select
              value={selectedUpcomingOption}
              onChange={handleUpcomingChange}
              className="p-3 bg-gray-100 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition transform duration-300"
            >
              <option value="upcomingHolidays">
                Upcoming Leaves and Holidays
              </option>
              <option value="upcomingLeaves">Upcoming Leaves</option>
              <option value="upcomingOnlyHolidays">Upcoming Holidays</option>
            </select>
          </div>
          <table className="min-w-full bg-gray-50 border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-gray-800 border-b">
                  Date
                </th>
                <th className="py-4 px-6 text-left font-semibold text-gray-800 border-b">
                  Holiday
                </th>
                <th className="py-4 px-6 text-center font-semibold text-gray-800 border-b">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {holidays2025.map((holiday, index) => (
                <tr
                  key={index}
                  className="group hover:bg-blue-100 cursor-pointer transition-all duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-700">
                    {holiday.date}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {holiday.name}
                  </td>
                  <td className="px-6 py-4 border-b text-center">
                    <button  onClick={handleAvailClick}
                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                      Avail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Past Holidays Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <select
              value={selectedPastOption}
              onChange={handlePastChange}
              className="p-3 bg-gray-100 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition transform duration-300"
            >
              <option value="pastHolidays">Past Leaves and Holidays</option>
              <option value="pastLeaves">Past Leaves</option>
              <option value="pastOnlyHolidays">Past Holidays</option>
            </select>
          </div>
          <table className="min-w-full bg-gray-50 border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-gray-800 border-b">
                  Date
                </th>
                <th className="py-4 px-6 text-left font-semibold text-gray-800 border-b">
                  Holiday
                </th>
                <th className="py-4 px-6 text-center font-semibold text-gray-800 border-b">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pastHolidays2025.map((holiday, index) => (
                <tr
                  key={index}
                  className="group hover:bg-blue-100 cursor-pointer transition-all duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-700">
                    {holiday.date}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700 flex items-center gap-2">
                    {holiday.name}
                    <FaRegCalendarAlt className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100" />
                  </td>
                  <td className="px-6 py-4 border-b text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummary;
