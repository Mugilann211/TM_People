import React, { useState } from "react";
import Overview from "../components/Overview";
import DepartmentWall from "../components/DepartmentWall";
import DepartmentMembers from "../components/DepartmentMembers";
import WorkSchedule from "../components/WorkSchedule";
import Profile from "../components/Profile";
import Leave from "../components/Leave";
import Attendance from "../components/Attendance";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("Activities");

  const links = ["Activities", "Profile", "Leave", "Attendance"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="p-4">
      {/* Two-column layout */}
      <div className="grid grid-cols-[350px_1fr] gap-4">
        {/* Left Column with fixed width */}
        <div className="space-y-4">
          {/* Parent scrollable container */}
          <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-2">
              {/* Overview */}
              <div className="w-full">
                <Overview />
              </div>

              {/* Department Wall */}
              <div className="w-full">
                <DepartmentWall />
              </div>

              {/* Department Members */}
              <div className="w-full">
                <DepartmentMembers />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Navigation Section */}
          <div className="flex space-x-4 overflow-x-auto">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleLinkClick(link)}
                className={`flex-1 text-center py-2 px-4 rounded-lg text-gray-700 hover:text-white hover:bg-blue-500 transition-all duration-300 ease-in-out ${
                  activeLink === link ? "bg-blue-500 text-white" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Conditional Rendering of Components */}
          {activeLink === "Activities" && <WorkSchedule />}
          {activeLink === "Profile" && <Profile />}
          {activeLink === "Leave" && <Leave />}
          {activeLink === "Attendance" && <Attendance />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
