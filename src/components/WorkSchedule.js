import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const workSchedule = [
    { day: "Mon 30", type: "WFH", hours: "10:12 Hrs" },
    { day: "Tue 31", type: "NEW YEAR - Previous(Holiday)", hours: "" },
    { day: "Wed 01", type: "New Year Day(Holiday)", hours: "" },
    { day: "Thu 02", type: "", hours: "" },
    { day: "Fri 03", type: "", hours: "" },
    { day: "Sat 04", type: "Weekend", hours: "" },
    { day: "Sun 05", type: "Weekend", hours: "" },
  ];

  const holidays = [
    { name: "New Year Day", date: "1 - Jan, Wednesday" },
    { name: "Pongal", date: "14 - Jan, Tuesday" },
    { name: "Republic Day", date: "26 - Jan, Sunday" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Scrollable Container */}
      <div className="overflow-y-auto max-h-[500px]">
        {/* Work Schedule Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-6"> {/* Added margin bottom here */}
          <h2 className="text-xl font-semibold mb-4">Work Schedule</h2>
          <p className="text-gray-600 mb-2">30-Dec-2024 - 05-Jan-2025</p>
          <div className="w-full relative h-20 mb-6">
            <div className="flex justify-between h-full px-2">
              {workSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center text-xs font-semibold ${getDayColor(
                    item.type
                  )}`}
                  style={{
                    width: `${100 / workSchedule.length}%`, // Each block will take up equal width
                  }}
                >
                  <div className="text-center">{item.day}</div>
                  <div className="text-center text-sm">{item.type}</div>
                  <div className="text-center text-xs">{item.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Holidays Section */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <FaCalendarAlt className="mr-2 text-blue-500" size={24} />
            <span>Upcoming Holidays</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            {holidays.map((holiday, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-300 rounded-lg w-32 text-center shadow-md"
              >
                <span className="font-medium text-gray-700">{holiday.name}</span>
                <span className="block text-sm text-gray-500 mt-2">
                  {holiday.date}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View all
          </button>
        </div>
      </div>
    </div>
  );

  function getDayColor(type) {
    switch (type) {
      case "WFH":
        return "bg-blue-500 text-white";
      case "Weekend":
        return "bg-yellow-500 text-white";
      case "NEW YEAR - Previous(Holiday)":
      case "New Year Day(Holiday)":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  }
};

export default Dashboard;
