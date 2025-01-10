import React from 'react';

const holidays = [
  { name: "New Year Day", date: "01-Jan-2025", day: "Wed", location: "All Locations", shift: "All Shifts" },
  { name: "Pongal", date: "14-Jan-2025", day: "Tue", location: "All Locations", shift: "All Shifts" },
  { name: "Thiruvalluvar Day", date: "15-Jan-2025", day: "Wed", location: "All Locations", shift: "All Shifts" },
  { name: "Uzhavar Thirunal", date: "16-Jan-2025", day: "Thu", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Ramzan", date: "31-Mar-2025", day: "Mon", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Tamil New Year", date: "14-Apr-2025", day: "Mon", location: "All Locations", shift: "All Shifts" },
  { name: "Good Friday", date: "18-Apr-2025", day: "Fri", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "May Day", date: "01-May-2025", day: "Thu", location: "All Locations", shift: "All Shifts" },
  { name: "Independence Day", date: "15-Aug-2025", day: "Fri", location: "All Locations", shift: "All Shifts" },
  { name: "Ganesh Chaturthi", date: "27-Aug-2025", day: "Wed", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Miladi Nabi", date: "05-Sep-2025", day: "Fri", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Masha Navami / Ayudha Pooja", date: "01-Oct-2025", day: "Wed", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Vijaya Dashami", date: "02-Oct-2025", day: "Thu", location: "All Locations", shift: "All Shifts" },
  { name: "Diwali Extended", date: "20-Oct-2025", day: "Mon", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "Diwali", date: "21-Oct-2025", day: "Tue", location: "All Locations", shift: "All Shifts" },
  { name: "Christmas Day", date: "25-Dec-2025", day: "Thu", location: "All Locations", shift: "All Shifts" },
  { name: "Christmas Extended", date: "26-Dec-2025", day: "Fri", location: "All Locations", shift: "All Shifts", restricted: true },
  { name: "New Year Extended", date: "31-Dec-2025", day: "Wed", location: "All Locations", shift: "All Shifts", restricted: true },
];

const HolidayDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Holiday List for 2025</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Holiday Name</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Day</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Shift</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index} className={holiday.restricted ? "bg-yellow-100" : ""}>
              <td className="py-2 px-4 border-b">{holiday.name}{holiday.restricted && " (Restricted Holiday)"}</td>
              <td className="py-2 px-4 border-b">{holiday.date}</td>
              <td className="py-2 px-4 border-b">{holiday.day}</td>
              <td className="py-2 px-4 border-b">{holiday.location}</td>
              <td className="py-2 px-4 border-b">{holiday.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayDashboard;
